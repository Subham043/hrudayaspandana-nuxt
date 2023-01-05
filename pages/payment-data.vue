<template>
    <div>
        <HeroComponent title="Payment" />

        <section class="gallery-page">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">Payment</p>
                    <h4 class="lower-heading">Donation</h4>
                </div>

                <div style="margin-top:30px">
                    <el-table :data="tableData" style="width: 100%" max-height="100%">
                        <el-table-column fixed prop="id" label="ID" width="100">
                        </el-table-column>
                        <el-table-column prop="first_name" label="First Name" width="150">
                        </el-table-column>
                        <el-table-column prop="last_name" label="Last Name" width="150">
                        </el-table-column>
                        <el-table-column prop="email" label="Email" width="250">
                        </el-table-column>
                        <el-table-column prop="phone" label="Phone" width="100">
                        </el-table-column>
                        <el-table-column prop="amount" label="Amount" width="150">
                        </el-table-column>
                        <el-table-column label="Status" width="150">
                            <template slot-scope="scope">
                                <el-tag v-if="scope.row.status===0" size="medium" type="danger">{{ scope.row.status_name }}</el-tag>
                                <el-tag v-else size="medium" type="success">{{ scope.row.status_name }}</el-tag>
                            </template>
                        </el-table-column>
                        <el-table-column prop="pan" label="Pan No." width="150">
                        </el-table-column>
                        <el-table-column prop="city" label="City" width="150">
                        </el-table-column>
                        <el-table-column prop="state" label="State" width="150">
                        </el-table-column>
                        <el-table-column prop="trust_name" label="Trust" width="180">
                        </el-table-column>
                        <el-table-column label="CreatedAt" width="250">
                            <template slot-scope="scope">
                                {{$dateFns.format(new Date(scope.row.created_at), 'dd-MMM-yyyy hh:mm aa')}}
                            </template>
                        </el-table-column>
                        <el-table-column fixed="right" label="Operations" width="120">
                            <template slot-scope="scope">
                                <el-popconfirm
                                confirm-button-text='OK'
                                cancel-button-text='No, Thanks'
                                icon="el-icon-info"
                                icon-color="red"
                                title="Do you want to make payment?"
                                @confirm="makePayment({
                                    order_id:scope.row.order_id, 
                                    first_name: scope.row.first_name, 
                                    last_name: scope.row.last_name, 
                                    email: scope.row.email,
                                    phone: scope.row.phone,
                                    amount: scope.row.amount,
                                })"
                                >
                                <el-button
                                v-if="scope.row.status===0"
                                slot="reference" 
                                type="primary" 
                                icon="el-icon-wallet"  
                                circle
                                ></el-button>
                                </el-popconfirm>
                                <el-button
                                v-if="scope.row.status===1"
                                slot="reference" 
                                type="success" 
                                icon="el-icon-download"  
                                circle
                                @click="downloadCertificate(scope.row.id)"
                                ></el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                </div>
                <div class="gallery-main-btn">
                    <pagination v-model="currentPage" :records="count" :per-page="10" @paginate="handlePaginationChnage"/>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "PaymentDataPage",
    layout: "MainPageLayout",
    middleware: ['auth'],
    data() {
        return {
            count:1,
            tableData: [],
            currentPage: 1,
        }
    },
    head: {
        script: [
        { src: 'https://checkout.razorpay.com/v1/checkout.js' },
        ],
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted(){
        // eslint-disable-next-line nuxt/no-env-in-hooks
      if(process.client){
          this.$scrollTo('#__nuxt', 0, {force: true})
      }
        this.handlePageChnage();
    },
    methods: {
        async getTableData(page=0) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/api/user/payment-data?page='+page); // eslint-disable-line
                this.tableData = response?.data?.data
                this.count = response?.data?.meta?.total ? response?.data?.meta?.total : 1
                this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally {
                loading.close()
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page}});
        },
        handlePageChnage(){
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? Number(this.$route.query.page) : 1);
            if(process.client){
                this.$scrollTo('#__nuxt', 0, {force: true})
            }
            // console.log(this.currentPage);
        },
        makePayment(data){
            this.loadRazorpay({
                order_id:data.order_id,
                amount:data.amount,
                name:data.first_name+' '+data.last_name,
                email:data.email,
                phone:data.phone,
            })
        },
        loadRazorpay(data){
            const options = {
                key: this.$config.RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: 'INR',
                description: "Payment description",
                order_id: data.order_id,
                image: '/images/logo.png',
                prefill: {
                    name: data.name,
                    email: data.email,
                    contact: data.phone
                },
                theme: {
                    color: "#ffaa49" // Set your website theme color
                },
                handler: async (response) => {
                        await this.verifyPayment(response)
                }
            };
            // eslint-disable-next-line no-undef
            const rzp = new Razorpay(options);
            rzp.open();
        },
        async verifyPayment(data){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const formData = new FormData;
                formData.append('razorpay_order_id', data.razorpay_order_id);
                formData.append('razorpay_payment_id', data.razorpay_payment_id);
                formData.append('razorpay_signature', data.razorpay_signature);
                const response = await this.$publicApi.post('/api/donation/verify-payment/', formData); // eslint-disable-line
                this.$toast.success('Donation Successful')
                this.handlePaginationChnage()
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                loading.close()
            }
        },
        async downloadCertificate(id){
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                // eslint-disable-next-line no-unused-vars
                const response = await this.$privateApi.get('/api/donation/certificate/'+id);
                window.open(response.data.data, '_blank');
            } catch (err) {
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally {
                loading.close()
            }
        }
    }
}
</script>

<style scoped>
.gallery-main-btn {
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
</style>
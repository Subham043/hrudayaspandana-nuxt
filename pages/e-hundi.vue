<template>
    <div>
        <LazyHeroComponent title="E-Hundi" />

        <section class="hundi donation-page">
            <div class="wrapper">
                <div class="hundi-row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <!-- <div class="heading">
                            <h4 class="lower-heading text-unset">e-Hundi</h4>
                        </div> -->
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form id="hundiForm" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="first name">
                                            <input
                                                id="fname"
                                                v-model="first_name"
                                                type="text"
                                                name="fname"
                                                class="form-control form-hundi-input"
                                                placeholder="First Name" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="last name">
                                            <input
                                                id="lname"
                                                v-model="last_name"
                                                type="text"
                                                name="lname"
                                                class="form-control form-hundi-input"
                                                placeholder="Last Name" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                            <input
                                                id="phone"
                                                v-model="phone"
                                                type="text"
                                                name="phone"
                                                class="form-control form-hundi-input"
                                                placeholder="Phone Number" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                            <input
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                name="email"
                                                class="form-control form-hundi-input" placeholder="Email" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="city">
                                            <input
                                                id="city"
                                                v-model="city"
                                                type="text"
                                                name="city"
                                                class="form-control form-hundi-input"
                                                placeholder="City*" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="state">
                                            <input
                                                id="state"
                                                v-model="state"
                                                type="text"
                                                name="state"
                                                class="form-control form-hundi-input"
                                                placeholder="State*" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="trust">
                                <select id="trust" v-model="trust" name="trust" class="form-control form-hundi-input">
                                    <option value="">Select a
                                        Trust*</option>
                                    <option value="1">Sai Mayee Trust
                                    </option>
                                    <option value="2">Sri Sai
                                        Meru Mathi Trust</option>
                                </select>
                                <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div
                            id="certification"
                            class="mb-3"
                            style="display: none;">
                                <p>
                                    <strong><span>Note:</span></strong>
                                    <span
                                    id="certification_text"
                                    style="color: #3c3489;"></span>
                                </p>
                            </div>
                            <div v-if="trust==='1'" id="pan_div" class="mb-3">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="pan">
                                    <input
                                        id="pan"
                                        v-model="pan"
                                        type="text"
                                        name="pan"
                                        class="form-control form-hundi-input"
                                        placeholder="PAN No.*" value="">
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3">
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required" name="amount">
                                        <input
                                            id="amount"
                                            v-model="amount"
                                            type="text"
                                            name="amount"
                                            class="form-control form-hundi-input"
                                            placeholder="Amount*" value="">
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                            </div>
                            <div class="mb-3 form-check">
                                <ValidationProvider v-slot="{ classes, errors }" :rules="{ required: { allowFalse: false } }" name="terms and condition">
                                    <input
                                        id="check"
                                        v-model="accept"
                                        type="checkbox"
                                        class="form-check-input  form-hundi-checkbox"
                                        name="check">
                                    <label class="form-check-label" for="check">I accept the <NuxtLink
                                            to="/terms-condition" target="_blank">terms and
                                            conditions</NuxtLink>.</label>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" class="btn btn-primary  form-hundi-submit">Make Payment</button>
                            </div>
                        </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </section>
        <el-dialog :show-close="true" :lock-scroll="true" :visible.sync="dialogFormVisible">
            <section class="payment">
                <div class="main-div-payment">
                    <div class="img-div">
                        <img src="/images/logo.webp" alt="" class="logo-img">
                    </div>

                    <div id="note_div" class="text-div" style="margin-top:10px;text-align:center;">
                        <p><strong>Note:</strong> Please scan the qr code given below to make the payment.</p>
                    </div>

                    <div id="success_div" class="success-div" style="">
                        <img src="/images/qr.jpg" alt=""><br>
                    </div>

                </div>

            </section>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "EHundiPage",
    layout: "MainPageLayout",
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            amount: '',
            city: '',
            state: '',
            pan: '',
            trust: '',
            accept: false,
            dialogFormVisible: false,
        }
    },
    methods: {
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const formData = new FormData;
                formData.append('first_name', this.first_name);
                formData.append('last_name', this.last_name);
                formData.append('email', this.email);
                formData.append('phone', this.phone);
                formData.append('amount', this.amount);
                formData.append('city', this.city);
                formData.append('state', this.state);
                formData.append('trust', this.trust);
                formData.append('pan', this.pan);
                const response = await this.$publicApi.post('/api/e-hundi/create', formData); // eslint-disable-line
                this.$toast.success('Data saved successfully')
                this.first_name=''
                this.last_name=''
                this.email=''
                this.phone=''
                this.amount=''
                this.city=''
                this.state=''
                this.trust=''
                this.pan=''
                this.accept=false
                this.$refs.form.reset();
                this.dialogFormVisible = true
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    first_name: err?.response?.data?.errors?.first_name,
                    last_name: err?.response?.data?.errors?.last_name,
                    email: err?.response?.data?.errors?.email,
                    phone: err?.response?.data?.errors?.phone,
                    amount: err?.response?.data?.errors?.amount,
                    city: err?.response?.data?.errors?.city,
                    state: err?.response?.data?.errors?.state,
                    trust: err?.response?.data?.errors?.trust,
                    pan: err?.response?.data?.errors?.pan,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
            loading.close()
            }
        },
    }
}
</script>

<style scoped>
.payment .main-div-payment .success-div img {
    width: 60%;
}
.payment{
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>

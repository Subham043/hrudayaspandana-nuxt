<template>
    <div>
        <HeroComponent title="Donation" />

        <section class="donation donation-page">
            <div class="wrapper">
                <div class="donation-row">
                    <div class="col-2-donation">
                        <div class="heading">
                            <p class="upper-heading">donations</p>
                            <h4 class="lower-heading">We Together Can Make A Difference...</h4>
                        </div>
                        <div class="paragraph">
                            <p>We are sure our spiritual, noble, lofty and socially motivated mission must be resonating
                                with your heart, and as an enlightened individual you would like to contribute in some
                                way or the other to this noble cause. We need many of you to come and join us in this
                                endeavor. </p>
                        </div>
                    </div>
                    <div class="col-2-donation">
                        <h4>Personal Information</h4>
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form id="donationForm" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="first name">
                                            <input 
                                                id="fname" 
                                                v-model="first_name" 
                                                type="text" 
                                                name="fname" 
                                                class="form-control form-donation-input"
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
                                                class="form-control form-donation-input"
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
                                                class="form-control form-donation-input"
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
                                                class="form-control form-donation-input" placeholder="Email" value="">
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
                                                class="form-control form-donation-input"
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
                                                class="form-control form-donation-input"
                                                placeholder="State*" value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <ValidationProvider v-slot="{ classes, errors }" rules="required" name="trust">
                                <select id="trust" v-model="trust" name="trust" class="form-control form-donation-input">
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
                                        class="form-control form-donation-input"
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
                                        class="form-control form-donation-input"
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
                                        class="form-check-input  form-donation-checkbox" 
                                        name="check">
                                    <label class="form-check-label" for="check">I accept the <NuxtLink
                                            to="/terms-condition" target="_blank">terms and
                                            conditions</NuxtLink>.</label>
                                    <div :class="classes">{{ errors[0] }}</div>
                                </ValidationProvider>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" class="btn btn-primary  form-donation-submit">Donate Now</button>
                            </div>
                        </form>
                        </ValidationObserver>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "DonationPage",
    layout: "MainPageLayout",
    data() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            amount: '',
            pan: '',
            city: '',
            state: '',
            trust: '',
            accept: false,
        }
    },
    head: {
        script: [
        { src: 'https://checkout.razorpay.com/v1/checkout.js' },
        ],
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
                const response = await this.$publicApi.post('/api/donation/create', formData); // eslint-disable-line
                this.loadRazorpay({
                    order_id:response.data.data.order_id,
                    amount:response.data.data.amount,
                    name:response.data.data.first_name+' '+response.data.data.last_name,
                    email:response.data.data.email,
                    phone:response.data.data.phone,
                })
                this.$toast.success('Data saved successfully')
                this.first_name=''
                this.last_name=''
                this.email=''
                this.phone=''
                this.amount=''
                this.pan=''
                this.city=''
                this.state=''
                this.trust=''
                this.accept=false
                this.$refs.form.reset();
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    first_name: err?.response?.data?.errors?.first_name,
                    last_name: err?.response?.data?.errors?.last_name,
                    email: err?.response?.data?.errors?.email,
                    phone: err?.response?.data?.errors?.phone,
                    amount: err?.response?.data?.errors?.amount,
                    pan: err?.response?.data?.errors?.pan,
                    city: err?.response?.data?.errors?.city,
                    state: err?.response?.data?.errors?.state,
                    trust: err?.response?.data?.errors?.trust,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                
            }finally{
            loading.close()
            }
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
                // this.verifySignature(response);
                // eslint-disable-next-line no-console
                // console.log(response);
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
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            } finally{
                loading.close()
            }
        }
    }
}
</script>

<style scoped>
.viewMoreBtn {
    background: transparent !important;
    border: none !important;
    outline: none !important;
    color: #ffaa49;
    font-weight: 700;
}

.viewMoreBtn:hover {
    text-decoration: underline;
}

#certification p {
    margin-left: 15px;
}
</style>
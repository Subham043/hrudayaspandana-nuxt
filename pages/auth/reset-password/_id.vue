<template>
    <div>
        <LazyHeroComponent title="Reset Password" />

        <section class="hundi donation-page login-page">
            <div class="wrapper">
                <div class="hundi-row login-main-row">
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="heading">
                            <h4 class="lower-heading">Reset Password</h4>
                        </div>
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form
                            id="forgot_password_form"
                            method="post"
                            @submit.prevent="handleSubmit(formHandler)">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="otp">
                                            <input
                                                id="otp"
                                                v-model="otp"
                                                type="text"
                                                name="otp"
                                                autocomplete="off"
                                                class="form-control form-hundi-input"
                                                placeholder="OTP*"
                                                value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" vid="password" name="password">
                                            <input
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                name="password"
                                                class="form-control form-hundi-input"
                                                placeholder="Password*">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|confirmed:password" name="confirm password">
                                            <input
                                                id="cpassword"
                                                v-model="cpassword"
                                                type="password"
                                                name="cpassword"
                                                class="form-control form-hundi-input"
                                                placeholder="Confirm Password*">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 login-row" style="justify-content:flex-end;">
                                <button type="button" class="forgot-password-link" style="background:transparent;border:none;" @click="resendOTP">Resend OTP</button>
                            </div>
                            <div class="mb-3 text-center">
                                <button
                                    type="submit"
                                    class="btn btn-primary form-hundi-submit form-hundi-login">Submit</button>
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
    name: "VerifyUserPage",
    layout: "MainPageLayout",
    middleware: ['Unauthenticated'],
    data() {
        return {
            otp: '',
            password: '',
            cpassword: '',
        }
    },
    beforeMount(){
        this.checkId()
    },
    mounted(){
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
        }
    },
    methods: {
    async formHandler(){
        const loading = this.$loading({
          lock: true,
          fullscreen: true,
        });
        try {
            const response = await this.$publicApi.post('/api/auth/reset-password/'+this.$route.params.id, {otp:this.otp, password:this.password}); // eslint-disable-line
            this.$toast.success('Password reset successful.');
            this.$router.push('/auth/login');
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            this.$refs.form.setErrors({
              otp: err?.response?.data?.errors?.otp,
              password: err?.response?.data?.errors?.password,
            });
            if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

        }finally{
          loading.close()
        }
    },
    checkId(){
        const loading = this.$loading({
        lock: true,
        fullscreen: true,
        });
        if(!this.$route.params.id){
            this.$toast.error('Invalid ID')
            this.$router.push('/auth/login');
        }
        loading.close()
    },
    async resendOTP(){
        const loading = this.$loading({
          lock: true,
          fullscreen: true,
        });
        try {
            const response = await this.$publicApi.get('/api/auth/resend-otp/'+this.$route.params.id, {otp:this.otp}); // eslint-disable-line
            this.$toast.success('OTP sent successfully.');
        } catch (err) {
            if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

        }finally{
          loading.close()
        }
    }
  },
}
</script>

<style scoped>

</style>

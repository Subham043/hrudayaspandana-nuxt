<template>
    <div>
        <LazyHeroComponent title="Forgot Password" />

        <section class="hundi donation-page login-page">
            <div class="wrapper">
                <div class="hundi-row login-main-row">
                    <div class="col-lg-5 col-md-6 col-sm-12">
                        <div class="heading">
                            <h4 class="lower-heading">Forgot Password</h4>
                        </div>
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form
                            id="forgot_password_form"
                            method="post"
                            @submit.prevent="handleSubmit(formHandler)">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                            <input
                                                id="email"
                                                v-model="email"
                                                type="email"
                                                name="email"
                                                autocomplete="off"
                                                class="form-control form-hundi-input"
                                                placeholder="Email*"
                                                value="">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
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
    name: "ForgotPasswordPage",
    layout: "MainPageLayout",
    middleware: ['Unauthenticated'],
    data() {
        return {
            email: '',
        }
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
            const response = await this.$publicApi.post('/api/auth/forgot-password', {email:this.email}); // eslint-disable-line
            this.$toast.info('We have shared you an otp via email. kindly enter that in order to reset your password.')
            this.$router.push('/auth/reset-password/'+response.data.user.id);
        } catch (err) {
            // console.log(err.response);// eslint-disable-line
            this.$refs.form.setErrors({
              email: err?.response?.data?.errors?.email,
            });
            if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
            if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
            if(err?.response?.data?.error_code && err?.response?.data?.error_code==="AUTH_ERROR_0"){
                this.$toast.info('We have shared you an otp via email. kindly enter that in order to verify your email.')
                this.$router.push('/auth/verify-user/'+err?.response?.data?.error_id);
            }

        }finally{
          loading.close()
        }
    }
  },
}
</script>

<style scoped>

</style>

<template>
    <div>
        <HeroComponent title="Login" />

        <section class="hundi donation-page login-page">
            <div class="wrapper">
                <div class="hundi-row login-main-row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="heading">
                            <h4 class="lower-heading">Login</h4>
                        </div>
                        <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                        <form id="loginForm" method="post" @submit.prevent="handleSubmit(formHandler)">
                            <input autocomplete="off" type="hidden" name="ci_csrf_token" value="">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                            <input 
                                                id="email" 
                                                v-model="email" 
                                                type="email" 
                                                autocomplete="off" 
                                                name="email" value=""
                                                class="form-control form-hundi-input" 
                                                placeholder="Email*">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <ValidationProvider v-slot="{ classes, errors }" rules="required" name="password">
                                            <input 
                                                id="password" 
                                                v-model="password" 
                                                type="password" 
                                                autocomplete="off" 
                                                name="password"
                                                class="form-control form-hundi-input" 
                                                placeholder="Password*">
                                            <div :class="classes">{{ errors[0] }}</div>
                                        </ValidationProvider>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3 login-row">
                                <NuxtLink 
                                    to="/auth/forgot-password"
                                    class="forgot-password-link">Forgot Password</NuxtLink>
                                <NuxtLink to="/auth/register" class="forgot-password-link">Register
                                </NuxtLink>
                            </div>
                            <div class="mb-3 text-center">
                                <button 
                                    type="submit"
                                    class="btn btn-primary form-hundi-submit form-hundi-login">Login</button>
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
    name: "LoginPage",
    layout: "MainPageLayout",
    middleware: ['Unauthenticated'],
    data() {
        return {
        email: '',
        password: '',
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
                const response = await this.$auth.loginWith('local', { data: {email:this.email, password:this.password} }); // eslint-disable-line
                this.$toast.success('Logged in successfully')
                // console.log(this.$store.state.auth);// eslint-disable-line
            } catch (err) {
                console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                email: err?.response?.data?.errors?.email,
                password: err?.response?.data?.errors?.password,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                if(err?.response?.data?.error_code && err?.response?.data?.error_code==="AUTH_ERROR_0"){
                    this.$toast.info('We have shared you an otp via email. kindly enter that in order to verify your email.')
                    this.$router.push('/auth/verify-user/'+err?.response?.data?.error_id);
                }
                
            } finally{
            loading.close()
            }
        }
    },
}
</script>

<style scoped>

</style>
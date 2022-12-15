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
                        <form id="loginForm" action="https://hrudayaspandana.org/login" method="post">
                            <input autocomplete="off" type="hidden" name="ci_csrf_token" value="">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <input type="email" autocomplete="off" id="email" name="email" value=""
                                            class="form-control form-hundi-input" placeholder="Email*">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <input type="password" autocomplete="off" id="password" name="password"
                                            class="form-control form-hundi-input" placeholder="Password*">
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">

                                <div class="BDC_CaptchaDiv" id="Captcha_CaptchaDiv" style="width:330px; height:60px;">
                                    <input type="hidden" name="BDC_VCID_Captcha" id="BDC_VCID_Captcha"
                                        value="39da8d2c63a63504e0b59c1666669ddb" />
                                    <input type="hidden" name="BDC_BackWorkaround_Captcha"
                                        id="BDC_BackWorkaround_Captcha" value="0" />
                                    <input type="hidden" name="BDC_Hs_Captcha" id="BDC_Hs_Captcha"
                                        value="c6b524391c81bcf931425887cf1dcf1acddcfd75" />
                                    <input type="hidden" name="BDC_SP_Captcha" id="BDC_SP_Captcha" value="1219676777" />
                                </div>
                                <div style="color:red;"></div>
                                <input id="captcha" type="text" name="captcha" value=""
                                    class="form-control form-hundi-input  mt-3" required
                                    placeholder="Enter the text from above image*" />
                            </div>
                            <div class="mb-3 login-row">
                                <NuxtLink to="/auth/forgot-password"
                                    class="forgot-password-link">Forgot Password</NuxtLink>
                                <NuxtLink to="/auth/register" class="forgot-password-link">Register
                                </NuxtLink>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit"
                                    class="btn btn-primary form-hundi-submit form-hundi-login">Login</button>
                            </div>

                        </form>
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
}
</script>

<style scoped>

</style>
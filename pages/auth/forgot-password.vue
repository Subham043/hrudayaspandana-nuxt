<template>
    <div>
        <HeroComponent title="Forgot Password" />

        <section class="hundi donation-page login-page">
            <div class="wrapper">
                <div class="hundi-row login-main-row">
                    <div class="col-lg-4 col-md-6 col-sm-12">
                        <form action="https://hrudayaspandana.org/forgot-password" id="forgot_password_form"
                            method="post">
                            <input autocomplete="off" type="hidden" name="ci_csrf_token" value="">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="mb-3">
                                        <div class="errorTxt"></div>
                                        <input type="email" name="email" id="email" autocomplete="off"
                                            class="form-control form-hundi-input" placeholder="Email*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">

                                <div class="BDC_CaptchaDiv" id="Captcha_CaptchaDiv" style="width:330px; height:60px;">
                                    <input type="hidden" name="BDC_VCID_Captcha" id="BDC_VCID_Captcha"
                                        value="510ba2e7b3651bd9c91b1e5a813b31ce" />
                                    <input type="hidden" name="BDC_BackWorkaround_Captcha"
                                        id="BDC_BackWorkaround_Captcha" value="0" />
                                    <input type="hidden" name="BDC_Hs_Captcha" id="BDC_Hs_Captcha"
                                        value="13ce365a24e2e541ddc74bd784424df3efcb42bb" />
                                    <input type="hidden" name="BDC_SP_Captcha" id="BDC_SP_Captcha" value="1819578995" />
                                </div>
                                <input id="captcha" type="text" name="captcha" value=""
                                    class="form-control form-hundi-input  mt-3" required
                                    placeholder="Enter the text from above image*" />
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit"
                                    class="btn btn-primary form-hundi-submit form-hundi-login">Submit</button>
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
    name: "ForgotPasswordPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>

</style>
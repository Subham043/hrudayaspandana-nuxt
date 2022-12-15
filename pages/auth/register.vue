<template>
    <div>
        <HeroComponent title="Register" />

        <section class="hundi donation-page">
            <div class="wrapper">
                <div class="hundi-row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <div class="heading">
                            <h4 class="lower-heading">Registration</h4>
                        </div>
                        <form id="registerForm" action="https://hrudayaspandana.org/register" method="post">
                            <input autocomplete="off" type="hidden" name="ci_csrf_token" value="">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="fname" name="fname" class="form-control form-hundi-input"
                                            placeholder="First Name*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="lname" name="lname" class="form-control form-hundi-input"
                                            placeholder="Last Name*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="email" id="email" name="email"
                                            class="form-control form-hundi-input" placeholder="Email*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="phone" name="phone" class="form-control form-hundi-input"
                                            placeholder="Phone Number*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="password" id="password" name="password"
                                            class="form-control form-hundi-input" placeholder="Password*">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="password" id="cpassword" name="cpassword"
                                            class="form-control form-hundi-input" placeholder="Confirm Password*">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">

                                <div class="BDC_CaptchaDiv" id="Captcha_CaptchaDiv" style="width:330px; height:60px;">
                                    <input type="hidden" name="BDC_VCID_Captcha" id="BDC_VCID_Captcha"
                                        value="604bb05b358054ada2b5999eddd1591d" />
                                    <input type="hidden" name="BDC_BackWorkaround_Captcha"
                                        id="BDC_BackWorkaround_Captcha" value="0" />
                                    <input type="hidden" name="BDC_Hs_Captcha" id="BDC_Hs_Captcha"
                                        value="82e5cda7933d6ff0d3acf3da390474dda1b935a4" />
                                    <input type="hidden" name="BDC_SP_Captcha" id="BDC_SP_Captcha" value="193740400" />
                                </div>
                                <input id="captcha" type="text" name="captcha" value=""
                                    class="form-control form-hundi-input  mt-3" required
                                    placeholder="Enter the text from above image*" />
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" id="check" name="check"
                                    class="form-check-input  form-hundi-checkbox">
                                <label class="form-check-label" for="check">I agree that my submitted data is being
                                    collected and stored.</label>
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" class="btn btn-primary  form-hundi-submit">Register</button>
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
    name: "RegisterPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>

</style>
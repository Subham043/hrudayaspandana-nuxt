<template>
    <div>
        <HeroComponent title="Contact Us" />

        <section class="hundi donation-page">
            <div class="wrapper">
                <div class="hundi-row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <div class="heading">
                            <p class="upper-heading">MAIL US</p>
                            <h4 class="lower-heading">Have a Question?<br>Drop Us a Message!</h4>
                        </div>
                        <form id="contactForm" action="https://hrudayaspandana.org/contact" method="post">
                            <input autocomplete="off" type="hidden" name="ci_csrf_token" value="">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="fname" name="fname" class="form-control form-hundi-input"
                                            placeholder="First Name" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="lname" name="lname" class="form-control form-hundi-input"
                                            placeholder="Last Name" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="phone" name="phone" class="form-control form-hundi-input"
                                            placeholder="Phone Number" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="email" id="email" name="email"
                                            class="form-control form-hundi-input" placeholder="Email" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <textarea name="message" id="message" rows="7" class="form-control form-hundi-input"
                                    placeholder="Message"></textarea>
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">

                                <div class="BDC_CaptchaDiv" id="Captcha_CaptchaDiv" style="width:330px; height:60px;">
                                    <input type="hidden" name="BDC_VCID_Captcha" id="BDC_VCID_Captcha"
                                        value="80a6ca1b134140de65604eb33a255a86" />
                                    <input type="hidden" name="BDC_BackWorkaround_Captcha"
                                        id="BDC_BackWorkaround_Captcha" value="0" />
                                    <input type="hidden" name="BDC_Hs_Captcha" id="BDC_Hs_Captcha"
                                        value="0c9e3f5483b909b6cd74e900c1e14be7c4743fee" />
                                    <input type="hidden" name="BDC_SP_Captcha" id="BDC_SP_Captcha" value="1702379657" />
                                </div>
                                <input id="captcha" type="text" name="captcha" value=""
                                    class="form-control form-hundi-input  mt-3" required
                                    placeholder="Enter the text from above image" />
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input  form-hundi-checkbox" id="check"
                                    name="check">
                                <label class="form-check-label" for="check">I accept the <NuxtLink
                                        to="/terms-condition" target="_blank">terms and
                                        conditions</NuxtLink>.</label>
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" class="btn btn-primary  form-hundi-submit">Submit</button>
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
    name: "ContactPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>

</style>
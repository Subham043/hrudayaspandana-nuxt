<template>
    <div>
        <HeroComponent title="Volunteer" />

        <section class="about volunteer-about">
            <div class="wrapper">
                <div class="about-page-row">
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col first-about-text-div">
                        <div class="heading">
                            <p class="upper-heading">Volunteer</p>
                            <h4 class="lower-heading">Volunteer</h4>
                        </div>
                        <div class="text">
                            <p>We at Hrudaya
                                Spandana are working towards bringing a positive &amp; long lasting changes in the lives
                                of less
                                privileged people.
                            </p>
                            <p>Our committed &amp; passionate Volunteers have always been at the core of all that we do.
                                A positive
                                difference can be brought through collective effort. More hands will not only make it
                                joyful, but also
                                a satisfying experience. We request one and all to come together and take this
                                initiative forward.</p>
                            <p>Currently we have 200+ professionals from diverse backgrounds as volunteers.</p>
                            <p>If you have a mind space for creating “Reverberations of Love” then do come and join us
                                to embark on
                                a satisfying journey with Hrudaya Spandana.</p>
                            <p><strong>You can be the reason behind their smile.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="hundi">
            <div class="wrapper">
                <div class="hundi-row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <div class="heading">
                            <h4 class="lower-heading">Be a Volunteer</h4>
                        </div>
                        <form id="volunteerForm" action="https://hrudayaspandana.org/volunteer" method="post">
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
                                        <input type="text" id="phone" name="phone" class="form-control form-hundi-input"
                                            placeholder="Phone Number*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="email" id="email" name="email"
                                            class="form-control form-hundi-input" placeholder="Email*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <input type="text" id="aadhaar" name="aadhaar" class="form-control form-hundi-input"
                                    placeholder="Aadhaar Number*" value="">
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">
                                <textarea type="text" id="address" name="address" class="form-control form-hundi-input"
                                    rows="7" placeholder="Address*"></textarea>
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">
                                <textarea type="text" id="interest" name="interest"
                                    class="form-control form-hundi-input" rows="7"
                                    placeholder="Describe your seva interest.*"></textarea>
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">

                                <div class="BDC_CaptchaDiv" id="Captcha_CaptchaDiv" style="width:330px; height:60px;">
                                    <input type="hidden" name="BDC_VCID_Captcha" id="BDC_VCID_Captcha"
                                        value="f0f0dec959e206ffdac486d11796f522" />
                                    <input type="hidden" name="BDC_BackWorkaround_Captcha"
                                        id="BDC_BackWorkaround_Captcha" value="0" />
                                    <input type="hidden" name="BDC_Hs_Captcha" id="BDC_Hs_Captcha"
                                        value="1e58eb3b41243a9a8dcdcab01985abc2b42734f3" />
                                    <input type="hidden" name="BDC_SP_Captcha" id="BDC_SP_Captcha" value="1658242515" />
                                </div>
                                <div style="color:red;"></div>
                                <input id="captcha" type="text" name="captcha" value=""
                                    class="form-control form-hundi-input  mt-3" required
                                    placeholder="Enter the text from above image*" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input  form-hundi-checkbox" id="check"
                                    name="check">
                                <label class="form-check-label" for="check">I accept the terms and conditions.</label>
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
    name: "VolunteerPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>

</style>
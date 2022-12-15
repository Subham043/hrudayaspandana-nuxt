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
                        <form id="donationForm" action="https://hrudayaspandana.org/donation" method="post">
                            <input autocomplete="off" type="hidden" name="ci_csrf_token" value="">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="fname" name="fname"
                                            class="form-control form-donation-input" placeholder="First Name*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="lname" name="lname"
                                            class="form-control form-donation-input" placeholder="Last Name*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="phone" name="phone"
                                            class="form-control form-donation-input" placeholder="Phone Number*"
                                            value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="email" id="email" name="email"
                                            class="form-control form-donation-input" placeholder="Email*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="city" name="city"
                                            class="form-control form-donation-input" placeholder="City*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="state" name="state"
                                            class="form-control form-donation-input" placeholder="State*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <select name="trust" id="trust" class="form-control form-donation-input">
                                    <option value="null">Select a
                                        Trust*</option>
                                    <option value="Sai Mayee Trust">Sai Mayee Trust
                                    </option>
                                    <option value="Sri Sai Meru Mathi Trust">Sri Sai
                                        Meru Mathi Trust</option>
                                </select>
                                <div style="color:red;"></div>
                            </div>
                            <div id="certification" class="mb-3" style="display: none;">
                                <p><strong><span>Note:</span></strong><span id="certification_text"
                                        style="color: #3c3489;"></span></p>
                            </div>
                            <div class="mb-3" id="pan_div" style="display: none;">
                                <input type="text" id="pan" name="pan" class="form-control form-donation-input"
                                    placeholder="PAN No.*" value="">
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">
                                <input type="text" id="amount" name="amount" class="form-control form-donation-input"
                                    placeholder="Amount*" value="">
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">

                                <div class="BDC_CaptchaDiv" id="Captcha_CaptchaDiv" style="width:330px; height:60px;">
                                    <input type="hidden" name="BDC_VCID_Captcha" id="BDC_VCID_Captcha"
                                        value="f564c2449ce762190ce52c8e321e6da3" />
                                    <input type="hidden" name="BDC_BackWorkaround_Captcha"
                                        id="BDC_BackWorkaround_Captcha" value="0" />
                                    <input type="hidden" name="BDC_Hs_Captcha" id="BDC_Hs_Captcha"
                                        value="73c69dfff114cb169e3d0e6605881b8f40544f22" />
                                    <input type="hidden" name="BDC_SP_Captcha" id="BDC_SP_Captcha" value="783218906" />
                                </div>
                                <div style="color:red;"></div>
                                <input id="captcha" type="text" name="captcha" value=""
                                    class="form-control form-donation-input  mt-3" required
                                    placeholder="Enter the text from above image*" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" id="check" name="check"
                                    class="form-check-input  form-donation-checkbox">
                                <label class="form-check-label" for="check">I accept the terms and conditions.</label>
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" class="btn btn-primary  form-donation-submit">Donate Now</button>
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
    name: "DonationPage",
    layout: "MainPageLayout",
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
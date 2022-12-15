<template>
    <div>
        <HeroComponent title="E-Hundi" />

        <section class="hundi donation-page">
            <div class="wrapper">
                <div class="hundi-row">
                    <div class="col-lg-7 col-md-8 col-sm-12">
                        <div class="heading">
                            <h4 class="lower-heading text-unset">e-Hundi</h4>
                        </div>
                        <form id="hundiForm" action="https://hrudayaspandana.org/e-hundi" method="post">
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
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="city" name="city" class="form-control form-hundi-input"
                                            placeholder="City*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="mb-3">
                                        <input type="text" id="state" name="state" class="form-control form-hundi-input"
                                            placeholder="State*" value="">
                                        <div style="color:red;"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <select name="trust" id="trust" class="form-control form-hundi-input">
                                    <!--<option value="null" >Select a-->
                                    <!--    Trust*</option>-->
                                    <!--<option value="Sai Mayee Trust"-->
                                    <!--    >Sai Mayee Trust-->
                                    <!--</option>-->
                                    <option selected="selected" value="Sri Sai Meru Mathi Trust">Sri Sai
                                        Meru Mathi Trust</option>
                                </select>
                                <div style="color:red;"></div>
                            </div>
                            <div id="certification" class="mb-3" style="display: none;">
                                <p><strong><span>Note:</span></strong><span id="certification_text"
                                        style="color: #3c3489;"></span></p>
                            </div>
                            <div class="mb-3" id="pan_div" style="display: none;">
                                <input type="text" id="pan" name="pan" class="form-control form-hundi-input"
                                    placeholder="PAN No.*" value="">
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">
                                <input type="text" id="amount" name="amount" class="form-control form-hundi-input"
                                    placeholder="Amount*" value="">
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3">

                                <div class="BDC_CaptchaDiv" id="Captcha_CaptchaDiv" style="width:330px; height:60px;">
                                    <input type="hidden" name="BDC_VCID_Captcha" id="BDC_VCID_Captcha"
                                        value="ccc103f1a91a1db210defcf7ce136239" />
                                    <input type="hidden" name="BDC_BackWorkaround_Captcha"
                                        id="BDC_BackWorkaround_Captcha" value="0" />
                                    <input type="hidden" name="BDC_Hs_Captcha" id="BDC_Hs_Captcha"
                                        value="6f29385858b5d3d62fc9a5f8ed508b689cda104f" />
                                    <input type="hidden" name="BDC_SP_Captcha" id="BDC_SP_Captcha" value="213909019" />
                                </div>
                                <div style="color:red;"></div>
                                <input id="captcha" type="text" name="captcha" value=""
                                    class="form-control form-hundi-input  mt-3" required
                                    placeholder="Enter the text from above image*" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" id="check" name="check"
                                    class="form-check-input  form-hundi-checkbox">
                                <label class="form-check-label" for="check">I accept the terms and conditions.</label>
                                <div style="color:red;"></div>
                            </div>
                            <div class="mb-3 text-center">
                                <button type="submit" class="btn btn-primary  form-hundi-submit">Make Payment</button>
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
    name: "EHundiPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>

</style>
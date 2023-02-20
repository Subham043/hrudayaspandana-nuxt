<template>
    <div>
        <LazyHeroComponent title="Donation Refund Policy" />

        <section class="about">
        <div class="wrapper">
            <div class="about-page-row">

                <div class="col-lg-12 col-md-12 col-sm-12 about-page-col first-about-text-div">
                    <div class="heading">
                        <h4 class="lower-heading">Donation Refund Policy</h4>
                    </div>
                    <div class="text">
                        <p>Our Trust takes the utmost care to process donations as per the instructions given by our donors, online and offline. However, in case of an unlikely event of an erroneous donation or if the donor would like to cancel his donation, the trust will respond to the donor within 30 working days of receiving a valid request for refund. The timely refund of the donation will depend upon the type of credit card/banking instrument used during the transaction. The donor will have to send the Trust a written request for a refund within one day of making the donation to the Trust official address or email <a href="mailto:info@hrudayaspandana.org" id="mail">info@hrudayaspandana.org</a> along with the payment receipt and personal details necessary for initiating the refund.</p>
                        <p>Please feel free to contact us for any type of queries.</p>

                    </div>

                </div>

            </div>
        </div>
    </section>

    </div>
</template>

<script>
export default {
    name: "RefundPolicyPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>
#mail{
            display: inline;
            place-items: center;
            width: auto;
            height: auto;
            border-radius: unset;
            color: #c53f93;
            background-color: transparent;
            margin-right: unset;
            text-decoration: none;
            font-size: 20px;
            transition: all 0.3s ease-in-out;
        }
        #mail:hover{
            box-shadow: none;
            transform: unset;
        }
</style>

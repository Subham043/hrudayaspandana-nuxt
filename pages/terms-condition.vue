<template>
    <div>
        <HeroComponent title="Terms & Condition" />

        <section class="about">
            <div class="wrapper">
                <div class="about-page-row">

                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col first-about-text-div">
                        <div class="heading">
                            <h4 class="lower-heading">Terms & Conditions</h4>
                        </div>
                        <div class="text">
                            <p>The use of this website is subject to the following terms of use:</p>
                            <p>The content in the pages of this website is for your general information and use only. It
                                is subject to change without any notice.</p>
                            <p>Neither we nor any other third party(s) provide any warranty or guarantee related to the
                                accuracy, timeliness, performance, completeness or suitability of the information and
                                materials found or offered on this website for any particular purpose. You acknowledge
                                that such information and materials may contain inaccuracies or errors and we expressly
                                exclude liability for any such inaccuracies or errors to the fullest extent permitted by
                                the law.</p>
                            <p>Your use of any information or materials on this website is entirely at your own
                                discretion & risk, for which we shall not be liable. It shall be your own responsibility
                                to ensure that any products, services or information available through this website meet
                                your specific requirements.</p>
                            <p>This website contains material which is owned by or licensed to us. This material
                                includes, but is not limited to, the design, layout, look, appearance and graphics.
                                Reproduction is prohibited other than in accordance with the copyright notice, which
                                forms a part of these terms and conditions.</p>
                            <p>All trademarks reproduced in this website which are not the property of, or licensed to,
                                the owners are acknowledged implicitly or explicitly on the website.</p>
                            <p>Unauthorised use of this website may give rise to a claim for damages and/or be a
                                criminal offence.</p>
                            <p>“We shall be under no liability whatsoever in respect of any loss or damage arising
                                directly or indirectly out of any Transaction done using this website”.</p>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "MediaPage",
    layout: "MainPageLayout",
}
</script>

<style scoped>
#gallery li {
    text-align: center;
}

.liquo-gallery {
    margin: 0;
    padding: 0;
}

.liquo-gallery li {
    list-style-type: none;
    display: inline-block;
}

.liquo-active {
    font-weight: bold;
}

.img-thumbnail {
    position: relative;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
}

.wrapper {
    position: relative;
}


@media screen and (max-width: 600px) {
    #gallery-search li {
        width: 95%;
    }

    #gallery-search li .img-thumbnail {
        width: 100%;
    }
}
</style>
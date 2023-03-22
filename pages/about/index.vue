<template>
    <div>
        <LazyHeroComponent title="About Us" />
        <section class="about">
            <div class="wrapper">
                <div class="about-page-row">
                    <div class="col-lg-6 col-md-12 col-sm-12 about-page-col mission-col vision-col">
                        <div class="heading">
                            <!-- <p class="upper-heading">About</p> -->
                            <!-- <h4 class="lower-heading">Hrudaya Spandana</h4> -->
                        </div>
                        <div class="text">
                            <h5 class="lower-heading">Vision</h5>
                            <p>Spread love and enhance human values through Selfless Service &amp; rejuvenate Sanatana
                                Dharma by
                                preserving our ancient Vedic Culture.</p>
                            <h5 class="lower-heading">Motto</h5>
                            <p>Serve to Live &amp; Live to Serve</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 about-page-col" style="display:grid;place-items:center;">
                        <img
                        onContextMenu="return false;"
                            src="/images/logo.webp" alt="">
                    </div>
                    <div
                    class="col-lg-12 col-md-12 col-sm-12 about-page-col first-about-text-div"
                        style="padding-top:0;">
                        <div class="text">
                            <p>Hrudaya Spandana stands for Reverbarations of Love. (word Hrudaya means “Love” and
                                Spandana
                                means “Reverberations”). The team of volunteers at Hrudaya Spandana operate from the
                                space
                                of
                                love. All the activities, they are embarking on, are for spreading pure divine love.
                                Goal of
                                this team is to share love and resources with our fellow human beings in a way that
                                fulfils
                                their basic needs and makes them feel cared for. This helps all of us to taste the bliss
                                of
                                societal
                                togetherness. This endeavour with the flame of philanthropy, kindled in our hearts,
                                inspires
                                us to
                                carry the torch of service forward for universal good.
                            </p>
                            <p class="icon-p">
                                <a href="https://www.facebook.com/Hrudaya-Spandana-112948621170832" target="_blank"><i
                                        class="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/hrudaya.spandana/" target="_blank"><i
                                        class="fab fa-instagram"></i></a>
                                <a href="https://www.linkedin.com/company/77675080/admin/" target="_blank"><i
                                        class="fab fa-linkedin-in"></i></a>
                                <a href="https://www.youtube.com/channel/UCVJc6AiIzMPooy-9JdirJOg" target="_blank"><i
                                        class="fab fa-youtube"></i></a>
                                <a href="https://twitter.com/HrudayaSpandan" target="_blank"><i
                                        class="fab fa-twitter"></i></a>
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 second-about-text-div about-page-col">
                        <div class="heading">
                            <!-- <p class="upper-heading">Trust</p> -->
                            <h4 class="lower-heading">Sai Mayee Trust</h4>
                        </div>
                        <div class="text">
                            <p>For society to pulsate with joy and growth, all classes and ages of people, irrespective
                                of
                                religion,
                                profession, gender or personal preferences, must have a bond of connectivity and
                                interdependence
                                that takes care of both material and emotional needs of everyone. In this light, we help
                                orphanages
                                so that children without parents can experience love and have their needs met and can
                                become
                                useful members of the society when they grow up. At the other end, we also provide
                                succour
                                to old
                                people who do not have anyone to take care of them. </p>
                        </div>
                        <div class="button">
                            <NuxtLink to="/about/sai-mayee-trust">View More</NuxtLink>
                        </div>
                    </div>
                    <div
                        class="col-lg-6 col-md-12 col-sm-12 first-about-img-div about-page-col"
                        style="display:grid;place-items:center;">
                        <img
                        onContextMenu="return false;"
                            src="/images/mayee.jpg" alt="">
                    </div>
                    <div
                    class="col-lg-6 col-md-12 col-sm-12 second-about-img-div about-page-col"
                        style="display:grid;place-items:center;">
                        <img
                        onContextMenu="return false;"
                            src="/images/meru-mathi.jpeg" alt="">
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 third-about-text-div about-page-col">
                        <div class="heading">
                            <!-- <p class="upper-heading">Trust</p> -->
                            <h4 class="lower-heading">Sri Sai Meru Mathi Trust</h4>
                        </div>
                        <div class="text">
                            <p>The body is the temple of God and the temple is the body of societal consciousness of
                                Divinity.
                                Temples in India were (and still are) not merely architectural marvels of breath-taking
                                beauty, but also specialized structures designed for very specific purposes like
                                creating
                                the
                                needed ambience to realize the principle of Oneness running through the variegated
                                creation, awakening and balancing chakras (Centre’s of consciousness) for living a

                                wholesome life, getting protection from physical harm and natural calamities, healing
                                diseases.</p>
                        </div>
                        <div class="button">
                            <NuxtLink to="/about/sai-meru-mathi-trust">View More</NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "AboutPage",
    layout: "MainPageLayout",
}
</script>

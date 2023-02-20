<template>
    <div>
        <LazyHeroComponent title="Privacy Policy" />

        <section class="about">
            <div class="wrapper">
                <div class="about-page-row">

                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col first-about-text-div">
                        <div class="heading">
                            <h4 class="lower-heading">Privacy Policy</h4>
                        </div>
                        <div class="text">
                            <p>Hrudaya Spandana (HS) assures and is committed to protecting the privacy of all users who
                                visit this website and participate in various project activities. This privacy policy
                                describes the collection, use, and security of information received when users visit our
                                mentioned web address. From time to time HS may revise, amend, and update this privacy
                                policy. It is the responsibility of the users to refer the online privacy policy all the
                                time.</p>
                            <p>The statistical and personally identifying information received by HS as a result of a
                                visitor’s use of the website will be gathered by us solely for internal purposes for
                                improving the user experience. None of the statistical, non–personally identifying
                                information collected by us will be used to identify a visitor or be linked to any
                                personally identifying information about the visitor. HS does not exchange, or sell to
                                third parties any of the information that visitors provide online. We will employ
                                reasonable and current Internet security methods and technologies to prevent
                                unauthorized access, to maintain data accuracy, and to ensure correct use of
                                information. All financial transactions are processed through an authorized bank with
                                good security measures. </p>

                        </div>
                        <div class="heading">
                            <h4 class="lower-heading">Disclaimer Policy</h4>
                        </div>
                        <div class="text">
                            <p>HS does not warranty that the site, its content, or the projects and services it offers
                                on the site meet your requirements completely to your satisfaction. We have no control
                                over the nature, content and availability of other parties (sites) which can be linked
                                from this website. The inclusion of any links does not necessarily imply a
                                recommendation or endorsing the views expressed within them. The information contained
                                in this website is for general purposes only. The information is provided by HS and
                                while we endeavour to keep the information up to date and correct, we make no
                                representations or warranties of any kind, explicitly or implicitly, about the
                                completeness, accuracy, reliability, suitability or availability with respect to the
                                website or the information, products, services, or related graphics contained on the
                                website for any purpose. Any reliance you place on such information is therefore
                                strictly at your own risk. Every effort is made to keep the website up and running
                                smoothly. However, we do not take any responsibility for, and will not be liable for the
                                website being temporarily unavailable due to commercial / technical issues beyond our
                                control.</p>

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

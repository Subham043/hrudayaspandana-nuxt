<template>
    <div>
        <HeroComponent title="Testimonial" />

        <section class="about">
            <div class="wrapper">
                <div class="about-page-row">
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col">
                        <div class="heading">
                            <p class="upper-heading">Testimonials</p>
                            <h4 class="lower-heading">Testimonials</h4>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col">
                        <div class="text">
                            <div class="owl-carousel">
                                <VueSlickCarousel v-bind="slickOptions" ref="slickWord">
                                    <div v-for="(item, i) in testimonialWords" :key="i">
                                        <div class="testimonial-main-div">
                                            <div class="testimonial-hover-div">
                                                <div class="testimonial-div-image">
                                                    <img onContextMenu="return false;"
                                                        src="/images/round-logo.webp"
                                                        alt="">
                                                </div>
                                                <div class="testimonial-div-quote">
                                                    <div class="scroll-div">
                                                        <p>{{item.description}}</p>
                                                    </div>
    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </VueSlickCarousel>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col">
                        <div class="heading">
                            <p class="upper-heading">Testimonials</p>
                            <h4 class="lower-heading">Video Testimonials</h4>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 about-page-col">
                        <div class="text">
                            <div class="owl-carousel">
                                <VueSlickCarousel v-bind="slickOptions" ref="slickVideo">
                                    <div v-for="(item, i) in testimonialVideos" :key="i">
                                        <div class="testimonial-video-main-div">
                                            <div class="testimonial-video-hover-div">
                                                <iframe id="iframeVdo" class="iframe-video" :src="item.video"
                                                    title="YouTube video player" frameborder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowfullscreen
                                                    style="width: 100%; height:100%;border-radius: 5px;border-top-right-radius: 30px;border-bottom-left-radius: 30px;"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </VueSlickCarousel>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    </div>
</template>

<script>
export default {
    name: "TestimonialPage",
    layout: "MainPageLayout",
    data(){
        return {
            testimonialWords: [
                {description:"The food was really authentic. Initially I was hesitant to fill up the form and take the service but now am overwhelmed with the service we have been given from your team."},
                {description:"Special thanks to all those people who delivered us food even in tough weather and working conditions to make sure we’re fed the food. The food delivered by them was a very appetizing one and every day they used to add a note &quot;Get Well Soon&quot; which always made our day. I would once again like to thank all the trustee members from the bottom of my heart for supporting us."},
                {description:"They provided assistance with not just food but with any other problem we were facing and that had made us all spellbound. We are really thankful for such wonderful gestures, you have provided to us during these difficult times. You are the live example of prevailing humanity and modesty in the present world."},
            ],
            testimonialVideos: [
                {video:"https://www.youtube.com/embed/aQYMhU1iu0g"},
                {video:"https://www.youtube.com/embed/FQLvlGRRSvo"},
                {video:"https://www.youtube.com/embed/cxT-8QB6uTU"},
                {video:"https://www.youtube.com/embed/ePNGBy6PQLc"},
                {video:"https://www.youtube.com/embed/KcmKXaX0UwA"},
                {video:"https://www.youtube.com/embed/qNRyrfMVfbU"},
            ],
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: true,
                            dots: false,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: false,
                        },
                    },
                ],
            },
        }
    },
}
</script>

<style scoped>
.about .about-page-row {
    justify-content: center;
}

.about .about-page-row .about-page-col {
    margin-bottom: 0px;
}

.about-page-col {
    overflow-y: hidden;
}

.scroll-div::-webkit-scrollbar {
    width: 11px;
}

.scroll-div {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

.scroll-div::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
}

.scroll-div::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
}

.testimonial-main-div {
    width: 100%;
    margin-top: 50px;
}

.testimonial-video-main-div {
    width: 100%;
}

.testimonial-video-hover-div {
    width: 95% !important;
    height: 300px;
    background: white;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #ffaa49;
    border-radius: 5px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
}

.testimonial-hover-div {
    width: 95% !important;
    background: white;
    margin-left: auto;
    margin-right: auto;
    border: 3px solid #ffaa49;
    border-radius: 5px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    position: relative;
    padding: 10px;
}

.testimonial-div-image {
    width: 100px;
    height: 100px;
    border: 3px solid #ffaa49;
    border-radius: 50%;
    margin-top: -60px;
    margin-left: auto;
    margin-right: auto;
}

.testimonial-div-image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
}

.testimonial-div-quote {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.testimonial-div-quote .scroll-div {
    overflow-y: auto;
    width: 100%;
    height: 100%;
}

.testimonial-div-quote h4 {
    text-align: center;
    margin-top: 15px;
    color: #c53f93;
}

.testimonial-div-quote p {
    text-align: center;
}

.owl-prev,
.owl-next {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff !important;
    background: #3c3489 !important;
    outline: none;
    border: none;
    box-shadow: 1px 1px 1px 1px #818181;
    transition: all 0.3s ease-in-out;
    opacity: 0.3;
}

.owl-prev:hover,
.owl-next:hover {
    opacity: 1;
}

.owl-nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.iframe-video {
    height: 100%;
    border: 0;
    width: 100%;
    border-radius: 5px;
    border-top-right-radius: 27px;
    border-bottom-left-radius: 27px;
}
</style>
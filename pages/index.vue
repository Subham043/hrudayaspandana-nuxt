<template>
    <div>

        <section class="banner">
            <div class="wrapper">
                <div class="slider-div-box">
                    <div class="regular slider">
                        <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                            <BannerSlideComponent 
                                v-for="(item, i) in banner" :key="i"
                                :image="item.image" 
                                :quote1="item.quote1" 
                                :quote2="item.quote2" />
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </section>

        <section class="about">
            <div class="wrapper">
                <div class="about-row about-row-bottom">
                    <div class="col-2-about">
                        <div class="heading">
                            <h4 class="lower-heading">Come heal your hearts</h4>
                        </div>
                    </div>
                    <div class="col-2-about">
                        <p class="paragraph-text">Hrudaya Spandana encompasses
                            reverberating rhythm of the heart of the volunteers to spread the universal unconditional
                            Love!
                            Following the ideals of Sri Sathya Sai Baba, the team Hrudaya Spandana has a vision to
                            enhance
                            human values such as Sathya, Dharma, Shanthi, Prema and Ahimsa in generations to come
                            through selfless service.</p>
                    </div>
                </div>
                <div class="about-row">
                    <AboutCardComponent v-for="(item, i) in about" :key="i" :image="item.image" :heading="item.heading" :link="item.link" :description="item.description" />
                </div>
            </div>
        </section>

        <section class="subscription">
            <div class="wrapper">
                <div class="heading">
                    <h4>Subscribe For More Updates</h4>
                    <p>Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love,
                        spread it!</p>
                    <form id="subscribeForm" method="post">
                        <div class="row mb-4">
                            <div class="col-lg-4">
                                <div>
                                    <input type="text" class="form-control form-donation-input" id="subscribeName"
                                        name="name" placeholder="Name*" value="">
                                    <div id="subscribeNameError" style="color:red;font-style:italic;"></div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <input type="text" class="form-control form-donation-input" id="subscribePhone"
                                        name="phone" placeholder="Mobile*" value="">
                                    <div id="subscribePhoneError" style="color:red;font-style:italic;"></div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <input type="text" class="form-control form-donation-input" id="subscribeEmail"
                                        name="email" placeholder="Email*" value="">
                                    <div id="subscribeEmailError" style="color:red;font-style:italic;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 text-center subscription-form-tick">
                            <input type="checkbox" class="form-check-input  form-donation-checkbox" value="ebook"
                                id="ebook" name="ebook">
                            <!--<label class="form-check-label" for="ebook">E-book</label>-->
                            <!--<input type="checkbox" class="form-check-input  form-donation-checkbox" value="event" id="event"-->
                            <!--    name="event">-->
                            <label class="form-check-label" for="event">Events</label>
                            <input type="checkbox" class="form-check-input  form-donation-checkbox" value="newsletter"
                                id="newsletter" name="newsletter">
                            <label class="form-check-label" for="newsletter">Newsletter</label>
                            <input type="checkbox" class="form-check-input  form-donation-checkbox" value="blog"
                                id="blog" name="blog">
                            <label class="form-check-label" for="blog">Blogs</label>
                            <!--<input type="checkbox" class="form-check-input  form-donation-checkbox" value="crossword"-->
                            <!--    id="crossword" name="crossword">-->
                            <!--<label class="form-check-label" for="crossword">Crossword</label>-->
                            <div id="subscribeSubscriptionError" style="color:red;font-style:italic;text-align:center;">
                            </div>
                        </div>
                        <div class="mb-3 text-center">
                            <button type="submit" id="subscribeSubmit"
                                class="btn btn-primary  form-donation-submit">Subscribe Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        <section class="blogs">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">Events</p>
                    <h4 class="lower-heading">Events</h4>
                </div>
                <div class="blogs-main">
                    <div class="blog-main-row">
                        <HomeEventCardComponent v-for="(item, i) in event" :key="i" :image="item.image" :title="item.title" :upcoming-link="item.upcomingLink" :past-link="item.pastLink" />
                    </div>
                </div>
            </div>
        </section>

        <section class="gallery">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">Gallery</p>
                    <h4 class="lower-heading">Latest From Gallery</h4>
                </div>
            </div>
            <div class="gallery-box">
                <a href="https://hrudayaspandana.org/assets/images/home/gallery/47522e73cb2837657d0adce73eb65125.jpg"
                    class="thumbnail img-thumbnail">
                    <img onContextMenu="return false;" alt=".." loading="lazy"
                        src="https://hrudayaspandana.org/assets/images/home/gallery/47522e73cb2837657d0adce73eb65125.jpg" />
                </a>
                <a href="https://hrudayaspandana.org/assets/images/home/gallery/d993fbf526e0ed6642e6653b10aa4e37.jpg"
                    class="thumbnail img-thumbnail">
                    <img onContextMenu="return false;" alt=".." loading="lazy"
                        src="https://hrudayaspandana.org/assets/images/home/gallery/d993fbf526e0ed6642e6653b10aa4e37.jpg" />
                </a>
                <a href="https://hrudayaspandana.org/assets/images/home/gallery/5d2b83e277886e7c555354162ad9b21d.jpg"
                    class="thumbnail img-thumbnail">
                    <img onContextMenu="return false;" alt=".." loading="lazy"
                        src="https://hrudayaspandana.org/assets/images/home/gallery/5d2b83e277886e7c555354162ad9b21d.jpg" />
                </a>
                <a href="https://hrudayaspandana.org/assets/images/home/gallery/6f68a36f7998d54fa7100a56a4125767.jpg"
                    class="thumbnail img-thumbnail">
                    <img onContextMenu="return false;" alt=".." loading="lazy"
                        src="https://hrudayaspandana.org/assets/images/home/gallery/6f68a36f7998d54fa7100a56a4125767.jpg" />
                </a>
                <a href="https://hrudayaspandana.org/assets/images/home/gallery/a6c54759108f98f935549b7d0645e38a.jpg"
                    class="thumbnail img-thumbnail">
                    <img onContextMenu="return false;" alt=".." loading="lazy"
                        src="https://hrudayaspandana.org/assets/images/home/gallery/a6c54759108f98f935549b7d0645e38a.jpg" />
                </a>
                <a href="https://hrudayaspandana.org/assets/images/home/gallery/7e75f3a3d76bab0216b2141301277518.jpg"
                    class="thumbnail img-thumbnail">
                    <img onContextMenu="return false;" alt=".." loading="lazy"
                        src="https://hrudayaspandana.org/assets/images/home/gallery/7e75f3a3d76bab0216b2141301277518.jpg" />
                </a>

            </div>
            <div class="gallery-main-btn">
                <NuxtLink to="/gallery/images">View More Images</NuxtLink>
            </div>

        </section>


        <section class="video-banner"
            style="background-image: url('https://hrudayaspandana.org/assets/images/home/video/c52859745c791c559cdd3ba0b6627f3b.jpg')">
            <div class="wrapper video-banner-wrapper">
                <div class="play-btn-div" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    video_url="9ERNXBcQBgU" id="modalBtn">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        </section>

        <section class="events">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">Blogs</p>
                    <h4 class="lower-heading">Latest From Blogs</h4>
                </div>

                <div class="events-main" id="blogApp">
                    <div class="events-row" v-if="loading">
                        <div class="text-center col-12">
                            <div class="spinner-border text-secondary" role="status">
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div v-for="(item, i) in blogs" :key="i" class="events-row">


                            <template v-if="i % 2 != 0">
                                <div class="event-row-image">
                                    <img loading="lazy" onContextMenu="return false;" style="margin-top:20px"
                                        :src="item.jetpack_featured_media_url" alt="">
                                </div>
                                <div class="event-row-line event-row-one">
                                    <div class="line"></div>
                                </div>
                                <div class="event-row-text event-row-two">
                                    <a href="#">
                                        <h4 style="text-transform: capitalize" v-html="item.title.rendered"></h4>
                                    </a>
                                    <p class="text-hidden-3" v-html="item.content.rendered"></p>
                                    <a class="pointer" target="_blank" :href="item.link">Read more</a>
                                </div>
                            </template>
                            <template v-else>
                                <div class="event-row-text event-row-four">
                                    <a href="#">
                                        <h4 style="text-transform: capitalize" v-html="item.title.rendered"></h4>
                                    </a>
                                    <p class="text-hidden-3" v-html="item.content.rendered"></p>
                                    <a class="pointer" target="_blank" :href="item.link">Read more</a>
                                </div>
                                <div class="event-row-line event-row-three">
                                    <div class="line"></div>
                                </div>
                                <div class="event-row-image">
                                    <img loading="lazy" onContextMenu="return false;" style="margin-top:20px"
                                        :src="item.jetpack_featured_media_url" alt="">
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="events-main-btn">
                    <a target="_blank" href="https://hrudayaspandana.org/blog/">More Blogs</a>
                </div>
            </div>
        </section>

        <!-- Modal Structure -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered video-modal-dialog">
                <div class="modal-content video-modal-content">
                    <div class="modal-header video-modal-header">
                        <!-- <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> -->
                        <button type="button" id="closeBtnModal" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body video-modal-body">
                        <iframe id="iframeVdo" src="https://www.youtube.com/embed/9ERNXBcQBgU"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen style="width: 100%; height:500px"></iframe>
                    </div>
                    <!-- <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div> -->
                </div>
            </div>
        </div>



    </div>

</template>

<script>


export default {
    name: "IndexPage",
    layout: "MainPageLayout",
    data() {
        return {
            banner: [
                {image:"https://hrudayaspandana.org/assets/images/home/banner/187b3dff165ecada308e20d80f9239cc.webp", quote1:"Where there is Love,", quote2:"there God is evident"},
                {image:"https://hrudayaspandana.org/assets/images/home/banner/725a6608088d8a1ff42d58e73931c2ad.webp", quote1:"Love all Serve all", quote2:""},
                {image:"https://hrudayaspandana.org/assets/images/home/banner/8bb75bf93fc51c03c5e2eccef7bf2376.webp", quote1:"Silence is the speech", quote2:"of the Spiritual seeker"},
                {image:"https://hrudayaspandana.org/assets/images/home/banner/fdc6cef89cefc4bc615aa3fcecd5fc7c.webp", quote1:"There is only one religion,", quote2:"the religion of Love"},
                {image:"https://hrudayaspandana.org/assets/images/home/banner/9a80a49a88409e7defff8c3bd25aa15c.webp", quote1:"Learn to give, not to take.", quote2:"Learn to serve, not to rule"},
            ],
            about: [
                {image:"/images/about/about4.jpg", link:"/about", heading:"Hrudaya Spandana", description:"Hrudaya Spandana unveils the spirit of vital enthusiasm with pure intention, motivation and selfless service."},
                {image:"/images/about/about6.webp", link:"/about/sai-mayee-trust", heading:"Sai Mayee Trust", description:"Depth of commitment towards extending selfless service with unflinching faith brings out the Divinity in each one of us."},
                {image:"/images/about/about5.jpg", link:"/about/sai-meru-mathi-trust", heading:"Sri Sai Meru Mathi Trust", description:"The body is the temple of God and the temple is the body of societal consciousness of Divinity."}
            ],
            event: [
                {image:"/images/swamy2.jpg", title:"Manava Seva", upcomingLink:"/manava-seva/upcoming-events", pastLink:"/manava-seva/past-events"},
                {image:"/images/swamy1.jpg", title:"Madhava Seva", upcomingLink:"/madhava-seva/upcoming-events", pastLink:"/madhava-seva/past-events"},
            ],
            blogs:[],
            loading: false,
            slickOptions: {
                arrows: false,
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                draggable: true,
                pauseOnHover: true,
                swipe: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
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
        };
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo('#__nuxt', 0, { force: true })
        }
        this.getBlogs();
    },
    methods: {
        nextNavClick() {
            this.$refs.slickBanner.next()
        },
        prevNavClick() {
            this.$refs.slickBanner.prev()
        },
        async getBlogs(){
            this.loading = true;
            try{
                const response = await this.$axios.get('https://hrudayaspandana.org/blog/wp-json/wp/v2/posts');
                this.blogs = response.data
                // console.log(this.blogs);
            }catch(e){
                
            }finally{
                this.loading = false;
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: red !important;
}

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

.tata {
    z-index: 99999999 !important;
}

#certification p {
    margin-left: 15px;
}

.moretext {
    display: none;
}

.blog2 {
    display: none;
}

.blog3 {
    display: none;
}

.pointer {
    cursor: pointer;
}

.about .about-row .col-3-about .about-card h4 a {
    color: inherit;
    text-decoration: none;
}

.text-hidden-3 {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    /* number of lines to show */
    line-clamp: 6;
    -webkit-box-orient: vertical;
}
</style>
<template>
    <div>

        <section class="banner">
            <div class="wrapper">
                <div class="slider-div-box">
                    <div class="regular slider">
                        <template v-if="banner.length>0">
                            <VueSlickCarousel v-bind="slickOptions" ref="slickBanner">
                                <BannerSlideComponent
                                    v-for="(item, i) in banner" :key="i"
                                    :image="item.image"
                                    :quote="item.quote" />
                            </VueSlickCarousel>
                        </template>
                        <div>
                            <button type="button" data-role="none" class="slick-prev slick-arrow" style="" @click="prevNavClick">
                                <i class="fas fa-long-arrow-alt-left"></i>
                            </button>
                            <button type="button" data-role="none" class="slick-next slick-arrow" style="" @click="nextNavClick">
                                <i class="fas fa-long-arrow-alt-right"></i>
                            </button>
                        </div>
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
                    <LazyAboutCardComponent v-for="(item, i) in about" :key="i" :image="item.image" :heading="item.heading" :link="item.link" :description="item.description" />
                </div>
            </div>
        </section>

        <section class="subscription">
            <div class="wrapper">
                <div class="heading">
                    <h4>Subscribe For More Updates</h4>
                    <p>Life is a challenge, meet it! Life is a dream, realize it! Life is a game, play it! Life is love,
                        spread it!</p>
                    <ValidationObserver ref="form" v-slot="{ handleSubmit }">
                    <form id="subscribeForm" method="post" @submit.prevent="handleSubmit(formHandler)">
                        <div class="row mb-4">
                            <div class="col-lg-4">
                                <div>
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|alpha_spaces" name="name">
                                        <input
                                            id="subscribeName"
                                            v-model="name"
                                            type="text"
                                            class="form-control form-donation-input"
                                            name="name" placeholder="Name*" value="">
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|phone" name="phone">
                                        <input
                                        id="subscribePhone"
                                        v-model="phone"
                                        type="text"
                                        class="form-control form-donation-input"
                                        name="phone" placeholder="Mobile*" value="">
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div>
                                    <ValidationProvider v-slot="{ classes, errors }" rules="required|email" name="email">
                                        <input
                                            id="subscribeEmail"
                                            v-model="email"
                                            type="text"
                                            class="form-control form-donation-input"
                                            name="email" placeholder="Email*" value="">
                                        <div :class="classes">{{ errors[0] }}</div>
                                    </ValidationProvider>
                                    <div id="subscribeEmailError" style="color:red;font-style:italic;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="mb-4 text-center subscription-form-tick">
                            <input
                                id="event"
                                v-model="event"
                                type="checkbox"
                                class="form-check-input  form-donation-checkbox"
                                name="event">
                            <label class="form-check-label" for="event">Events</label>
                            <input
                                 id="newsletter"
                                 v-model="newsletter"
                                 type="checkbox"
                                 class="form-check-input  form-donation-checkbox"
                                 name="newsletter">
                            <label class="form-check-label" for="newsletter">Newsletter</label>
                            <input
                                id="blog"
                                v-model="blog"
                                type="checkbox"
                                class="form-check-input  form-donation-checkbox"
                                name="blog">
                            <label class="form-check-label" for="blog">Blogs</label>
                        </div>
                        <div class="mb-3 text-center">
                            <button
                                id="subscribeSubmit"
                                type="submit"
                                class="btn btn-primary  form-donation-submit">Subscribe Now</button>
                        </div>
                    </form>
                    </ValidationObserver>
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
                        <LazyHomeEventCardComponent v-for="(item, i) in events" :key="i" :image="item.image" :title="item.title" :upcoming-link="item.upcomingLink" :past-link="item.pastLink" />
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
            <viewer class="gallery-box" :images="galleryImages">
                <a
                    v-for="(item, i) in galleryImages" :key="i"
                    href="javascript:void(0)"
                    class="thumbnail img-thumbnail">
                    <img
                        onContextMenu="return false;"
                        alt=".."

                        :src="item.image" />
                </a>

            </viewer>
            <div class="gallery-main-btn">
                <NuxtLink to="/gallery/images">View More Images</NuxtLink>
            </div>

        </section>


        <section
            class="video-banner"
            :style="`background-image: url('${videoBannerImage}')`">
            <div class="wrapper video-banner-wrapper">
                <div
                    id="modalBtn"
                    class="play-btn-div"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    :video_url="videoBannerVideo"
                    @click="dialogFormVisible=true"
                    >
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

                <div id="blogApp" class="events-main">
                    <div v-if="loading" class="events-row">
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
                                    <img

                                        onContextMenu="return false;"
                                        style="margin-top:20px"
                                        :src="item.jetpack_featured_media_url"
                                        alt="">
                                </div>
                                <div class="event-row-line event-row-one">
                                    <div class="line"></div>
                                </div>
                                <div class="event-row-text event-row-two">
                                    <a target="_blank" :href="item.link">
                                        <h4 style="text-transform: capitalize" v-html="item.title.rendered"></h4>
                                    </a>
                                    <p class="text-hidden-3" v-html="item.content.rendered"></p>
                                    <a class="pointer" target="_blank" :href="item.link">Read more</a>
                                </div>
                            </template>
                            <template v-else>
                                <div class="event-row-text event-row-four">
                                    <a target="_blank" :href="item.link">
                                        <h4 style="text-transform: capitalize" v-html="item.title.rendered"></h4>
                                    </a>
                                    <p class="text-hidden-3" v-html="item.content.rendered"></p>
                                    <a class="pointer" target="_blank" :href="item.link">Read more</a>
                                </div>
                                <div class="event-row-line event-row-three">
                                    <div class="line"></div>
                                </div>
                                <div class="event-row-image">
                                    <img

                                        onContextMenu="return false;"
                                        style="margin-top:20px"
                                        :src="item.jetpack_featured_media_url"
                                        alt="">
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

        <el-dialog :show-close="true" :lock-scroll="true" :visible.sync="dialogFormVisible">
            <div class="modal-body video-modal-body">
                <iframe
                    id="iframeVdo"
                    :src="videoBannerVideo"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    style="width: 100%; height:500px"></iframe>
            </div>
        </el-dialog>



    </div>

</template>

<script>


export default {
    name: "IndexPage",
    layout: "MainPageLayout",
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            ebook: false,
            event: false,
            newsletter: false,
            crossword: false,
            blog: false,
            banner: [],
            galleryImages: [],
            videoBannerImage:'',
            videoBannerVideo:'',
            dialogFormVisible: false,
            about: [
                {image:"/images/about/about4.webp", link:"/about", heading:"Hrudaya Spandana", description:"Hrudaya Spandana unveils the spirit of vital enthusiasm with pure intention, motivation and selfless service."},
                {image:"/images/about/about6.webp", link:"/about/sai-mayee-trust", heading:"Sai Mayee Trust", description:"Depth of commitment towards extending selfless service with unflinching faith brings out the Divinity in each one of us."},
                {image:"/images/about/about5.webp", link:"/about/sai-meru-mathi-trust", heading:"Sri Sai Meru Mathi Trust", description:"The body is the temple of God and the temple is the body of societal consciousness of Divinity."}
            ],
            events: [
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
        this.getBanners();
        this.getVideoBanner();
        this.getGalleryImages();
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
        },
        async formHandler() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const formData = {
                    'name': this.name,
                    'email': this.email,
                    'phone': this.phone,
                    'ebook': this.ebook,
                    'event': this.event,
                    'blog': this.blog,
                    'crossword': this.crossword,
                    'newsletter': this.newsletter,
                }
                const response = await this.$publicApi.post('/api/subscription/create', formData); // eslint-disable-line
                this.$toast.success('Subscribed successfully')
                this.name=''
                this.email=''
                this.phone=''
                this.ebook=false
                this.event=false
                this.blog=false
                this.crossword=false
                this.newsletter=false
                this.$refs.form.reset();
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                this.$refs.form.setErrors({
                    name: err?.response?.data?.errors?.name,
                    email: err?.response?.data?.errors?.email,
                    phone: err?.response?.data?.errors?.phone,
                    ebook: err?.response?.data?.errors?.ebook,
                    event: err?.response?.data?.errors?.event,
                    blog: err?.response?.data?.errors?.blog,
                    crossword: err?.response?.data?.errors?.crossword,
                    newsletter: err?.response?.data?.errors?.newsletter,
                });
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
                loading.close()
            }
        },
        async getBanners() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get('/api/banner/random'); // eslint-disable-line
                this.banner = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
                loading.close()
            }
        },
        async getGalleryImages() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get('/api/gallery-image/random'); // eslint-disable-line
                this.galleryImages = response.data.data
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
                loading.close()
            }
        },
        async getVideoBanner() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get('/api/banner-video/display'); // eslint-disable-line
                this.videoBannerImage = response.data.data.image
                this.videoBannerVideo = response.data.data.video
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            }finally{
                loading.close()
            }
        },
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

.slider-div-box{
    position: relative;
}
</style>

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

        <section v-if="counter.length > 0" class="blogs counter_section">
          <svg id="wave1" style="transform:rotate(0deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 170, 73, 1)" offset="0%"></stop><stop stop-color="rgba(255, 170, 73, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,10L60,13.3C120,17,240,23,360,23.3C480,23,600,17,720,26.7C840,37,960,63,1080,70C1200,77,1320,63,1440,60C1560,57,1680,63,1800,70C1920,77,2040,83,2160,76.7C2280,70,2400,50,2520,35C2640,20,2760,10,2880,20C3000,30,3120,60,3240,68.3C3360,77,3480,63,3600,53.3C3720,43,3840,37,3960,35C4080,33,4200,37,4320,40C4440,43,4560,47,4680,40C4800,33,4920,17,5040,21.7C5160,27,5280,53,5400,68.3C5520,83,5640,87,5760,80C5880,73,6000,57,6120,50C6240,43,6360,47,6480,50C6600,53,6720,57,6840,50C6960,43,7080,27,7200,23.3C7320,20,7440,30,7560,36.7C7680,43,7800,47,7920,41.7C8040,37,8160,23,8280,25C8400,27,8520,43,8580,51.7L8640,60L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 170, 73, 1)" offset="0%"></stop><stop stop-color="rgba(255, 170, 73, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,10L60,21.7C120,33,240,57,360,70C480,83,600,87,720,78.3C840,70,960,50,1080,50C1200,50,1320,70,1440,68.3C1560,67,1680,43,1800,33.3C1920,23,2040,27,2160,23.3C2280,20,2400,10,2520,20C2640,30,2760,60,2880,61.7C3000,63,3120,37,3240,36.7C3360,37,3480,63,3600,63.3C3720,63,3840,37,3960,33.3C4080,30,4200,50,4320,53.3C4440,57,4560,43,4680,36.7C4800,30,4920,30,5040,33.3C5160,37,5280,43,5400,53.3C5520,63,5640,77,5760,80C5880,83,6000,77,6120,71.7C6240,67,6360,63,6480,63.3C6600,63,6720,67,6840,65C6960,63,7080,57,7200,56.7C7320,57,7440,63,7560,68.3C7680,73,7800,77,7920,80C8040,83,8160,87,8280,73.3C8400,60,8520,30,8580,15L8640,0L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 170, 73, 1)" offset="0%"></stop><stop stop-color="rgba(255, 170, 73, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 100px); opacity:0.8" fill="url(#sw-gradient-2)" d="M0,0L60,0C120,0,240,0,360,0C480,0,600,0,720,8.3C840,17,960,33,1080,46.7C1200,60,1320,70,1440,66.7C1560,63,1680,47,1800,41.7C1920,37,2040,43,2160,48.3C2280,53,2400,57,2520,61.7C2640,67,2760,73,2880,63.3C3000,53,3120,27,3240,26.7C3360,27,3480,53,3600,53.3C3720,53,3840,27,3960,21.7C4080,17,4200,33,4320,36.7C4440,40,4560,30,4680,26.7C4800,23,4920,27,5040,38.3C5160,50,5280,70,5400,73.3C5520,77,5640,63,5760,58.3C5880,53,6000,57,6120,56.7C6240,57,6360,53,6480,46.7C6600,40,6720,30,6840,23.3C6960,17,7080,13,7200,20C7320,27,7440,43,7560,46.7C7680,50,7800,40,7920,33.3C8040,27,8160,23,8280,20C8400,17,8520,13,8580,11.7L8640,10L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path></svg>
          <div class="counter_section_wrapper">
            <div class="wrapper">
              <div class="row">
                <div v-for="(item, i) in counter" :key="i" class="col-lg-3 col-md-6 col-sm-12 text-center counter-col">
                    <h2>{{ item.counter }} +</h2>
                    <h4>{{ item.title }}</h4>
                </div>
              </div>
            </div>
          </div>
          <svg id="wave2" style="transform:rotate(180deg); transition: 0.3s" viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 170, 73, 1)" offset="0%"></stop><stop stop-color="rgba(255, 170, 73, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 0px); opacity:1" fill="url(#sw-gradient-0)" d="M0,10L60,13.3C120,17,240,23,360,23.3C480,23,600,17,720,26.7C840,37,960,63,1080,70C1200,77,1320,63,1440,60C1560,57,1680,63,1800,70C1920,77,2040,83,2160,76.7C2280,70,2400,50,2520,35C2640,20,2760,10,2880,20C3000,30,3120,60,3240,68.3C3360,77,3480,63,3600,53.3C3720,43,3840,37,3960,35C4080,33,4200,37,4320,40C4440,43,4560,47,4680,40C4800,33,4920,17,5040,21.7C5160,27,5280,53,5400,68.3C5520,83,5640,87,5760,80C5880,73,6000,57,6120,50C6240,43,6360,47,6480,50C6600,53,6720,57,6840,50C6960,43,7080,27,7200,23.3C7320,20,7440,30,7560,36.7C7680,43,7800,47,7920,41.7C8040,37,8160,23,8280,25C8400,27,8520,43,8580,51.7L8640,60L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path><defs><linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 170, 73, 1)" offset="0%"></stop><stop stop-color="rgba(255, 170, 73, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 50px); opacity:0.9" fill="url(#sw-gradient-1)" d="M0,10L60,21.7C120,33,240,57,360,70C480,83,600,87,720,78.3C840,70,960,50,1080,50C1200,50,1320,70,1440,68.3C1560,67,1680,43,1800,33.3C1920,23,2040,27,2160,23.3C2280,20,2400,10,2520,20C2640,30,2760,60,2880,61.7C3000,63,3120,37,3240,36.7C3360,37,3480,63,3600,63.3C3720,63,3840,37,3960,33.3C4080,30,4200,50,4320,53.3C4440,57,4560,43,4680,36.7C4800,30,4920,30,5040,33.3C5160,37,5280,43,5400,53.3C5520,63,5640,77,5760,80C5880,83,6000,77,6120,71.7C6240,67,6360,63,6480,63.3C6600,63,6720,67,6840,65C6960,63,7080,57,7200,56.7C7320,57,7440,63,7560,68.3C7680,73,7800,77,7920,80C8040,83,8160,87,8280,73.3C8400,60,8520,30,8580,15L8640,0L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path><defs><linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(255, 170, 73, 1)" offset="0%"></stop><stop stop-color="rgba(255, 170, 73, 1)" offset="100%"></stop></linearGradient></defs><path style="transform:translate(0, 100px); opacity:0.8" fill="url(#sw-gradient-2)" d="M0,0L60,0C120,0,240,0,360,0C480,0,600,0,720,8.3C840,17,960,33,1080,46.7C1200,60,1320,70,1440,66.7C1560,63,1680,47,1800,41.7C1920,37,2040,43,2160,48.3C2280,53,2400,57,2520,61.7C2640,67,2760,73,2880,63.3C3000,53,3120,27,3240,26.7C3360,27,3480,53,3600,53.3C3720,53,3840,27,3960,21.7C4080,17,4200,33,4320,36.7C4440,40,4560,30,4680,26.7C4800,23,4920,27,5040,38.3C5160,50,5280,70,5400,73.3C5520,77,5640,63,5760,58.3C5880,53,6000,57,6120,56.7C6240,57,6360,53,6480,46.7C6600,40,6720,30,6840,23.3C6960,17,7080,13,7200,20C7320,27,7440,43,7560,46.7C7680,50,7800,40,7920,33.3C8040,27,8160,23,8280,20C8400,17,8520,13,8580,11.7L8640,10L8640,100L8580,100C8520,100,8400,100,8280,100C8160,100,8040,100,7920,100C7800,100,7680,100,7560,100C7440,100,7320,100,7200,100C7080,100,6960,100,6840,100C6720,100,6600,100,6480,100C6360,100,6240,100,6120,100C6000,100,5880,100,5760,100C5640,100,5520,100,5400,100C5280,100,5160,100,5040,100C4920,100,4800,100,4680,100C4560,100,4440,100,4320,100C4200,100,4080,100,3960,100C3840,100,3720,100,3600,100C3480,100,3360,100,3240,100C3120,100,3000,100,2880,100C2760,100,2640,100,2520,100C2400,100,2280,100,2160,100C2040,100,1920,100,1800,100C1680,100,1560,100,1440,100C1320,100,1200,100,1080,100C960,100,840,100,720,100C600,100,480,100,360,100C240,100,120,100,60,100L0,100Z"></path></svg>
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
            counter: [],
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
    // async fetch() {
    //   await this.getBanners();
    // },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if (process.client) {
            this.$scrollTo('#__nuxt', 0, { force: true })
        }
        this.getBanners();
        this.getBlogs();
        this.getVideoBanner();
        this.getGalleryImages();
        this.getCounters();
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
        async getCounters() {
            const loading = this.$loading({
            lock: true,
            fullscreen: true,
            });
            try {
                const response = await this.$publicApi.get('/api/counter/random'); // eslint-disable-line
                this.counter = response.data.data
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

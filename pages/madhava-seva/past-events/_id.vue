<template>
    <div>
        <LazyHeroComponent title="Madhava Seva" />

        <section class="events-page">
            <div class="wrapper">

                <div class="inner-event-page-main">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12 head_div">
                            <div class="heading">
                                <h4 class="lower-heading">{{ name }}</h4>
                            </div>
                            <div class="text__div">
                                <!-- <p v-if="sdate"><span><strong>Start Date :
                                        </strong></span>{{$dateFns.format(new Date(sdate), 'dd MMM yyyy')}}</p>
                                <p v-if="edate"><span><strong>End Date :
                                        </strong></span>{{$dateFns.format(new Date(edate), 'dd MMM yyyy')}}</p> -->
                                <p v-if="sdate"><span><strong>Date :
                                        </strong></span>{{$dateFns.format(new Date(sdate), 'dd MMM yyyy')}}</p>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-5 col-sm-12 img_div">
                            <img

                                onContextMenu="return false;"
                                :src="imageLink" alt="">
                        </div>

                        <div v-if="description1" class="col-lg-12 col-md-12 col-sm-12 paragraph_div">
                            <p v-html-safe="description1"></p>
                        </div>
                        <div v-if="description2" class="col-lg-12 col-md-12 col-sm-12 paragraph_div">
                            <p v-if="description2!='null'" v-html-safe="description2"></p>
                        </div>
                        <div v-if="description3" class="col-lg-12 col-md-12 col-sm-12 paragraph_div">
                            <p v-if="description2!='null'" v-html-safe="description3"></p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section v-if="images.length>0" class="gallery service-gallery">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">Images</p>
                    <h4 class="lower-heading">Latest From {{ name }}</h4>
                </div>
            </div>
            <viewer class="gallery-box" :images="images">
                <a
                    v-for="(item, i) in images"
                    :key="i"
                    href="javascript:void(0)"
                    class="thumbnail img-thumbnail">
                    <img
                        onContextMenu="return false;"
                        alt=".."

                        :src="item.image" />
                </a>

            </viewer>
            <div class="gallery-main-btn">
                <NuxtLink to="/gallery/images">Go To Image Gallery</NuxtLink>
            </div>

        </section>

        <section v-if="videos.length>0" class="gallery service-gallery">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">Videos</p>
                    <h4 class="lower-heading">Latest From {{ name }}</h4>
                </div>
            </div>
            <div class="gallery-box">
                <ul id="gallery">

                    <li  v-for="(item, i) in videos" :key="i">
                            <a
                                href="#!"
                                class="thumbnail img-thumbnail"
                                style="width:100%;height:350px;">
                                <iframe
                                id="iframeVdo"

                                :src="item.video"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                                style="width: 100%; height:100%"></iframe>

                            </a>
                    </li>

                </ul>

            </div>
            <div class="gallery-main-btn">
                <NuxtLink to="/gallery/videos">Go To Video Gallery</NuxtLink>
            </div>

        </section>
    </div>
</template>

<script>
export default {
    name: "MadhavaPastEventDetailPage",
    layout: "MainPageLayout",
    data() {
        return {
            images: [],
            videos: [],
            name:'',
            sdate:'',
            edate:'',
            description1:null,
            description2:null,
            description3:null,
            type: 'madhava-seva',
            imageLink:'',
        }
    },
    async fetch() {
      await this.checkId();
    },
    mounted() {
        // eslint-disable-next-line nuxt/no-env-in-hooks
        if(process.client){
            this.$scrollTo('#__nuxt', 0, {force: true})
        }
    },
    methods: {
        async checkId(){
            let loading = null
            if (process.client) {
              // eslint-disable-next-line no-unused-vars
              loading = this.$loading({
                lock: true,
                fullscreen: true,
              });
            }
            if(!this.$route.params.id){
                this.$toast.error('Invalid ID')
                this.$router.push('/madhava-seva/past-events');
            }
            try {
                const response = await this.$privateApi.get('/api/event/display/'+this.$route.params.id); // eslint-disable-line
                this.type = response.data.data.category;
                this.imageLink = response.data.data.image;
                this.name = response.data.data.name;
                this.sdate = response.data.data.sdate;
                this.edate = response.data.data.edate;
                this.description1 = response.data.data.description1;
                this.description2 = response.data.data.description2;
                this.description3 = response.data.data.description3;
                this.images = response.data.data.event_gallery_images;
                this.videos = response.data.data.event_gallery_videos;
            } catch (err) {
                if(err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if(err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)
                this.$router.push('/madhava-seva/past-events');
            } finally{
              if (process.client && loading) {
                // eslint-disable-next-line no-undef
                loading.close()
              }
            }
        },
    }
}
</script>

<style scoped>
.img-thumbnail {
    background-color: white !important;
    border: 1px solid white !important;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.img-thumbnail:hover {
    background-color: #ffaa49 !important;
    border: 1px solid #ffaa49 !important;
    text-align: center;
}

.audio-thumbnail {
    border: 1px solid transparent !important;
    text-align: center;
    background-image: linear-gradient(rgba(255, 170, 73, 0.5), rgba(255, 170, 73, 1)), url("https://hrudayaspandana.org/assets/images/logo.webp");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

.audio-description {
    height: 150px;
    max-height: 150px;
    overflow-y: auto;
    margin-bottom: 5px;
}

.audio-description::-webkit-scrollbar {
    width: 11px;
}

.audio-description {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

.audio-description::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
}

.audio-description::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 6px;
    border: 3px solid var(--scrollbarBG);
}

.audio-description .description {
    text-align: left;
    color: #000;
    font-weight: bold;
    letter-spacing: 1.5px;
    font-size: 15px;
    line-height: 1.3;
}

.audio-title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

.audio-title .title {
    font-size: 20px;
    font-weight: bold;
    color: #c53f93;
    text-transform: uppercase;
}

.audio-title .time-stamp {
    font-size: 17px;
    font-weight: bold;
    color: #747070;
}

.img-thumbnail{
    position: relative;
    transition: all 0.3s ease-in-out;
}

.img-thumbnail:hover img {
    opacity: 0.1;
}

.img-thumbnail:hover .desc-cont {
    opacity: 1;
}

.desc-cont{
    width: 100%;
    padding:5px;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}
</style>

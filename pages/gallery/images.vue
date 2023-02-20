<template>
    <div>
        <LazyHeroComponent title="Images" />

        <section class="gallery-page">
        <div class="wrapper">
            <div class="heading">
                <p class="upper-heading">GALLERY</p>
                <h4 class="lower-heading">Latest From Gallery</h4>
            </div>

            <div class="heading searchCont">
                <p>
                    <input id="inputSearch" v-model="search" type="text" placeholder="Search" @input="handleSearchField">
                </p>
            </div>

            <div id="gallery-menu">
                <a
                href="javascript:void(0)"
                :class="filter==='all' ? 'liquo-active' : ''"
                @click="handleFilterField('all')"
                >All</a>
                <a
                href="javascript:void(0)"
                :class="filter==='Madhava Seva' ? 'liquo-active' : ''"
                @click="handleFilterField('Madhava Seva')"
                >Madhava Seva</a>
                <a
                href="javascript:void(0)"
                :class="filter==='Manava Seva' ? 'liquo-active' : ''"
                @click="handleFilterField('Manava Seva')"
                >Manava Seva</a>
            </div>

        </div>
        <div class="gallery-box">
            <viewer id="gallery" class="gallery-main" :images="tableData">
                <div v-for="(item, i) in tableData" :key="i" class="gallery-main-container">
                    <div
                        class="thumbnail img-thumbnail"
                        data-liquo="Manava Seva">
                        <img
                            onContextMenu="return false;"
                            alt=".."

                            :src="item.image" />
                        <!-- <div class="desc-cont">
                           <div class="audio-title">
                               <p class="title">{{ item.title }}</p>
                               <p class="time-stamp">21-
                                   Nov-
                                   2021</p>
                           </div>
                           <div class="audio-description">
                               <p class="description">{{ item.description }}</p>
                           </div>
                        </div> -->

                    </div>
                </div>

            </viewer>

        </div>
        <div class="gallery-main-btn">
            <pagination v-model="currentPage" :records="count" :per-page="9" :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePaginationChnage"/>
        </div>
    </section>

    </div>
</template>

<script>
export default {
    name: "GalleryImagePage",
    layout: "MainPageLayout",
    data() {
        return {
            count:1,
            tableData: [],
            currentPage: 1,
            search: this.$route.query.search ? this.$route.query.search : '',
            filter: this.$route.query.filter ? this.$route.query.filter : 'all'
        }
    },
    watch: {
        $route(to, from) {
            this.handlePageChnage();
        }
    },
    mounted(){
        // eslint-disable-next-line nuxt/no-env-in-hooks
      if(process.client){
          this.$scrollTo('#__nuxt', 0, {force: true})
      }
        this.handlePageChnage();
    },
    methods: {
        async getTableData(page=0,filter='all',search='') {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/api/gallery-image/paginate?page='+page+'&filter='+filter+'&search='+search); // eslint-disable-line
                this.tableData = response?.data?.data
                this.count = response?.data?.meta?.total ? response?.data?.meta?.total : 1
                this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            } catch (err) {
                // console.log(err.response);// eslint-disable-line
                if (err?.response?.data?.message) this.$toast.error(err?.response?.data?.message)
                if (err?.response?.data?.error) this.$toast.error(err?.response?.data?.error)

            } finally {
                loading.close()
            }
        },
        handlePaginationChnage(page){
            this.$router.push({query:{page,search:this.search,filter:this.filter}});
        },
        handlePageChnage(){
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? Number(this.$route.query.page) : 1, this.$route.query.filter ? this.$route.query.filter : 'all', this.$route.query.search ? this.$route.query.search : '');
            if(process.client){
                this.$scrollTo('#__nuxt', 0, {force: true})
            }
            // console.log(this.currentPage);
        },
        handleSearchField(){
            this.currentPage = 1;
            this.$router.push({query:{page:this.currentPage,search:this.search,filter:this.filter}});
        },
        handleFilterField(filter){
            this.filter = filter;
            this.currentPage = 1;
            this.$router.push({query:{page:1,search:this.search,filter}});
        }
    }
}
</script>

<style scoped>
.gallery-main {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
}
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
        color: #3c3489;
        text-transform: uppercase;
    }

    .audio-title .time-stamp {
        font-size: 17px;
        font-weight: bold;
        color: #747070;
    }

    .img-thumbnail {
        position: relative;
        transition: all 0.3s ease-in-out;
    }

    .img-thumbnail:hover img {
        opacity: 0.2;
    }

    .img-thumbnail:hover .desc-cont {
        opacity: 1;
    }

    .desc-cont {
        width: 100%;
        padding: 5px;
        opacity: 0;
        position: absolute;
        pointer-events: none;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
    }

    .wrapper {
        position: relative;
    }

    .searchCont {
        position: absolute;
        top: 0;
        right: 0;
        text-align: right !important;
    }

    .searchCont p {
        display: inline-block;
        margin: 0;
        text-align: right;
    }

    .searchCont p input {
        width: 160px;
        border-color: #ffaa49;
        border-radius: 5px;
        background: rgba(255, 170, 73, 0.5);
        color: black;
        margin-bottom: 10px;
        padding: 5px 10px;
        outline: none;
    }

    .searchCont p input::placeholder {
        color: black;
    }

    .searchCont p input:-ms-input-placeholder {
        color: black;
    }

    .searchCont p input::-ms-input-placeholder {
        color: black;
    }

    #gallery-search {
        display: none;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        width: 100%;
    }

    #gallery-search li {
        flex: 0 0 auto;
        width: 32%;
        margin-bottom: 20px;
        transition: all 0.3s ease-in-out;
        text-align: center;
    }

    #gallery-search li .img-thumbnail {
        display: inline-block;
        width: 90%;
        transition: all 0.3s ease-in-out;
    }

    #gallery-search li .img-thumbnail img {
        max-width: 100%;
        max-height: 300px;
        transition: all 0.3s ease-in-out;
    }

    #gallery-search li .img-thumbnail {
        background-color: white !important;
        border: 1px solid white !important;
        text-align: center;
        transition: all 0.3s ease-in-out;
    }

    #gallery-search li .img-thumbnail:hover {
        background-color: #ffaa49 !important;
        border: 1px solid #ffaa49 !important;
        text-align: center;
    }

    .gallery-page .gallery-main-btn {
        width: 100%;
        text-align: center;
        margin-top: 30px;
    }

    #loadImages {
        background-color: #c53f93;
        border-color: #fff;
        padding: 10px 20px;
        border-radius: 31px;
        transition: all 0.3s ease-in-out;
        color: #fff;
        text-decoration: none;
        text-transform: capitalize;
        font-size: 20px;
        display: inline-block;
    }

    #loadImages:hover {
        transform: scale(1.1);
    }

    @media screen and (max-width: 1200px) {
        .searchCont {
            position: static;
            text-align: center !important;
        }

        .searchCont p {
            text-align: center;
        }
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

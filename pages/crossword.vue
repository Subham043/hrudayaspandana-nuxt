<template>
    <div>
        <LazyHeroComponent title="Crossword" />

        <section class="gallery-page">
            <div class="wrapper">
                <!-- <div class="heading">
                    <p class="upper-heading">Crossword</p>
                    <h4 class="lower-heading">Latest From Crossword</h4>
                </div> -->

            </div>
            <viewer class="gallery-box" :images="tableData">
                <ul id="gallery">
                    <li  v-for="(item, i) in tableData" :key="i">
                        <a
                            href="javascript:void(0)"
                            class="thumbnail img-thumbnail">
                            <img
                                onContextMenu="return false;"
                                alt=".."

                                :src="item.image" />

                        </a>
                    </li>

                </ul>
            </viewer>
            <div v-if="tableData.length > 0" class="gallery-main-btn">
                <pagination v-model="currentPage" :records="count" :per-page="9" :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePaginationChnage"/>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "CrosswordPage",
    layout: "MainPageLayout",
    data() {
        return {
            count:1,
            tableData: [],
            currentPage: 1,
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
        async getTableData(page=0,filter='all') {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/api/crossword/paginate?page='+page); // eslint-disable-line
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
            this.$router.push({query:{page,filter:this.filter}});
        },
        handlePageChnage(){
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? Number(this.$route.query.page) : 1);
            if(process.client){
                this.$scrollTo('#__nuxt', 0, {force: true})
            }
            // console.log(this.currentPage);
        },
}
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

.gallery-main-btn {
    width: 100%;
    text-align: center;
    margin-top: 30px;
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

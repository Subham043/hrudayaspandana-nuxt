<template>
    <div>
        <HeroComponent title="Literature" />

        <section class="gallery-page">
            <div class="wrapper">
                <div class="heading">
                    <p class="upper-heading">Literature</p>
                    <h4 class="lower-heading">Latest From Literature</h4>
                </div>

                <viewer class="row literature-row" :images="tableData">

                    <div v-for="(item, i) in tableData" :key="i" class="col-lg-4 col-md-6 col-sm-12 col-literature">
                        <div class="literature-div">
                            <img oncontextmenu="return false;" class="thumbnail img-thumbnail"  :src="item.image" alt="">
                            <h4>test</h4>
                            <a target="_blank" :href="item.file">{{ item.is_pdf ? 'View PDF' : 'Buy Now' }}</a>
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
    name: "LiteraturePage",
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
                const response = await this.$privateApi.get('/api/literature/paginate?page='+page); // eslint-disable-line
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

.literature-row {
    justify-content: center;
}

.literature-row .col-literature {
    margin-bottom: 50px;
}

.literature-row .col-literature .literature-div {
    width: 70%;
    margin: auto;
    text-align: center;
    padding-bottom: 25px;
    transition: all .3s ease-in-out;
}

.literature-row .col-literature .literature-div img {
    max-width: 100%;
    width: 100%;
    margin-bottom: 15px;
}

.literature-row .col-literature .literature-div h4 {
    color: #3c3489;
    font-weight: 800;
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 25px;
    min-height: 55px;
}

.literature-row .col-literature .literature-div a {
    background-color: #c53f93;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 20px;
    transition: all .3s ease-in-out;
    text-decoration: none;
    border-radius: 30px;
}

.literature-row .col-literature .literature-div a:hover {
    box-shadow: 2px 2px 10px 1px #818181;
}

</style>

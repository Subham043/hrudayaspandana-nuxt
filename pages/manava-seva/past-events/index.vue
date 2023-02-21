<template>
    <div>
        <LazyHeroComponent title="Manava Seva" />

        <section class="events-page">
        <div class="wrapper">
            <div class="heading">
                <p class="upper-heading">Events</p>
                <h4 class="lower-heading">Past Events</h4>
            </div>
            <div class="events-page-main-div">
                <div class="events-page-inner-div">

                <div class="time-div">

                    <div class="line"></div>
                </div>

                <div class="row">
                    <div v-for="(item, i) in tableData" :key="i" class="col-lg-4 col-md-6 col-sm-12 event-col">
                        <div class="event-col-inner">
                            <img
                                onContextMenu="return false;"

                                class="img-thumb"
                                :src="item.image"
                                alt="">
                            <div class="event-text">
                                <h4 style="text-transform: uppercase">
                                    <!-- <img src="/images/om.png" /> -->
                                    <NuxtLink :to="`/manava-seva/past-events/${item.id}`">{{ item.name }}</NuxtLink>
                                </h4>
                                <h6><i class="el-icon-time"></i> {{$dateFns.format(new Date(item.sdate), 'dd MMM yyyy')}}  - {{$dateFns.format(new Date(item.edate), 'dd MMM yyyy')}} </h6>
                                <NuxtLink :to="`/manava-seva/past-events/${item.id}`" class="event-link">Learn More <i class="el-icon-right"></i></NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="gallery-main-btn">
                <pagination v-model="currentPage" :records="count" :per-page="9" :options="{chunk:9, chunksNavigation:'scroll'}" @paginate="handlePaginationChnage"/>
            </div>


            </div>
        </div>
    </section>

    </div>
</template>

<script>
export default {
    name: "ManavaPastEventsPage",
    layout: "MainPageLayout",
    data() {
        return {
            count:1,
            tableData: [],
            currentPage: 1,
            status: this.$route.query.status ? this.$route.query.status : 1,
            filter: this.$route.query.filter ? this.$route.query.filter : 'manava-seva'
        }
    },
    async fetch() {
      await this.handlePageChnage();
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
    },
    methods: {
        async getTableData(page=0,filter='manava-seva',status=1) {
            const loading = this.$loading({
                lock: true,
                fullscreen: true,
            });
            try {
                const response = await this.$privateApi.get('/api/event/paginate?page='+page+'&filter='+filter+'&status='+status); // eslint-disable-line
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
            this.$router.push({query:{page,status:this.status,filter:this.filter}});
        },
        handlePageChnage(){
            this.currentPage = this.$route.query.page ? Number(this.$route.query.page) : 1;
            this.getTableData(this.$route.query.page ? Number(this.$route.query.page) : 1, this.$route.query.filter ? this.$route.query.filter : 'manava-seva', this.$route.query.status ? this.$route.query.status : 1);
            if(process.client){
                this.$scrollTo('#__nuxt', 0, {force: true})
            }
            // console.log(this.currentPage);
        },
        handleSearchField(){
            this.$router.push({query:{page:this.currentPage,status:this.status,filter:this.filter}});
        },
        handleFilterField(filter){
            this.filter = filter;
            this.$router.push({query:{page:this.currentPage,status:this.status,filter:this.filter}});
        }
    }
}
</script>

<style scoped>
.gallery-main-btn {
    width: 100%;
    text-align: center;
    margin-top: 30px;
}
</style>

<template>
    <div class="col-lg-5 blog-main-single">
        <a href="javascript:void(0)" class="blog-link">
            <div class="col-blog-2 blog-img-bottom img-thumbnail">
                <img onContextMenu="return false;" loading="lazy"
                    :src="image" alt="">
                <div class="desc-cont">
                    <div class="audio-title">
                        <NuxtLink :to="pastLink"
                            class="event-btn-new">Past Events</NuxtLink>
                        <NuxtLink :to="upcomingLink"
                            class="event-btn-new">Upcoming Events</NuxtLink>
                    </div>
                </div>
            </div>
            <div class="blog-single-inner-row">
                <div class="col-blog-2 blog-text-top">
                    <h4 class="blog-heading">{{title}}</h4>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
	name: 'HomeEventCardComponent',
    props:{
        image:{
            type: String,
            default: ''
        },
        title:{
            type: String,
            default: ''
        },
        upcomingLink:{
            type: String,
            default: '/'
        },
        pastLink:{
            type: String,
            default: '/'
        },
    }
}
</script>

<style scoped>
/*image hover*/
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
}

.img-thumbnail {
    display: inline-block;
    width: 90%;
    transition: all 0.3s ease-in-out;
}

.img-thumbnail img {
    max-width: 100%;
    max-height: 300px;
    transition: all 0.3s ease-in-out;
}

.img-thumbnail {
    background-color: transparent !important;
    border: 1px solid transparent !important;
    text-align: center;
    transition: all 0.3s ease-in-out;
}

.img-thumbnail:hover {
    background-color: #ffaa49 !important;
    border: 1px solid #ffaa49 !important;
    text-align: center;
}

.img-thumbnail a.event-btn-new {
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
    margin: 5px;
}

.blogs .blogs-main .blog-main-row .blog-main-single .blog-text-top, .blog-link{
    text-decoration: none;
}
</style>

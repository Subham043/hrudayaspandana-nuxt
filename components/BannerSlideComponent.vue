<template>
    <div class="slider-hover-div">
        <div class="slider-div-image">
            <img onContextMenu="return false;" loading="lazy"
                :src="image"
                alt="">
            <div class="slider-image-overlay"></div>
        </div>
        <div class="slider-div-quote">
            <h5>{{quote1}}</h5>
            <h5>{{quote2}}</h5>
        </div>
    </div>
</template>

<script>
export default {
	name: 'BannerSlideComponent',
    props:{
        image:{
            type: String,
            default: ''
        },
        quote1:{
            type: String,
            default: ''
        },
        quote2:{
            type: String,
            default: ''
        },
    }
}
</script>
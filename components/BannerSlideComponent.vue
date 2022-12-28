<template>
    <div class="slider-hover-div">
        <div class="slider-div-image">
            <img 
                onContextMenu="return false;" 
                loading="lazy"
                :src="image"
                alt="">
            <div class="slider-image-overlay"></div>
        </div>
        <div class="slider-div-quote">
            <h5>{{quote}}</h5>
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
        quote:{
            type: String,
            default: ''
        },
    }
}
</script>
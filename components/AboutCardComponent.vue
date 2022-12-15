<template>
    <div class="col-3-about">
        <div class="about-card">
            <img onContextMenu="return false;"
                :src="image" loading="lazy" alt=""
                class="about-card-img">
            <h4><NuxtLink :to="link">{{heading}}</NuxtLink></h4>
            <p>{{description}}</p>
        </div>
    </div>
</template>

<script>
export default {
	name: 'AboutCardComponent',
    props:{
        image:{
            type: String,
            default: ''
        },
        heading:{
            type: String,
            default: ''
        },
        description:{
            type: String,
            default: ''
        },
        link:{
            type: String,
            default: '/'
        },
    }
}
</script>
<template>
    <div class="col-3-about">
        <div class="about-card">
            <img
                onContextMenu="return false;"
                :src="image"  alt=""
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

<style scoped>
.about .about-row .col-3-about .about-card h4 a {
    color: inherit;
    text-decoration: none;
}
</style>

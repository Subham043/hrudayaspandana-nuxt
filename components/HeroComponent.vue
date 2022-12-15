<template>
    <section class="hero"
        style='background-image: linear-gradient(rgba(255, 170, 73, 0.6), rgba(244, 229, 188, 0.6)), url("/images/page-banner.webp");'>
        <div class="wrapper">
            <div class="main-div-hero">
                <h2>{{title}}</h2>
                <p>Home / {{title}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
	name: 'HeroComponent',
    props:{
        title:{
            type: String,
            default: ''
        },
    }
}
</script>
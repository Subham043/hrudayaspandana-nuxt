<template>
    <section
        id="hero-div"
        class="hero"
        style='background-image: linear-gradient(rgba(255, 170, 73, 0.6), rgba(244, 229, 188, 0.6)), url("/images/page-banner.webp");'>
        <div class="container-fluid">
            <div class="row">
              <div class="col-lg-5 offset-lg-7 col-md-5 offset-md-7 col-sm-5 offset-sm-7">
                <div class="main-div-hero d-flex justify-content-center align-items-center">
                    <!-- <h2>{{title}}</h2> -->
                    <h2>&nbsp;</h2>
                    <p>
                     <NuxtLink class="link-home" to="/">Home</NuxtLink> / {{title}}</p>
                </div>
              </div>
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

<style scoped>
.link-home{
  text-decoration: none;
  color: inherit;
}
</style>

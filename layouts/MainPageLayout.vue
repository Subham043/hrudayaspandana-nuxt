<template>
  <div>
      <LazyHeaderComponent />
      <Nuxt />
      <LazyFooterComponent />
  </div>
</template>

<script>

export default {
  name: 'MainPageLayout',
  head(){
    return {
        link: [
            { rel: "stylesheet", href: "https://use.fontawesome.com/releases/v5.15.1/css/all.css", integrity:"sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp", crossorigin:"anonymous" },
        ],
    };
  },
  computed: {
		dark () {
		return this.$store.state.dark.class
		}
	},
  watch: {
    $route(to) {
      this.$store.commit('sidebar/toggle', {status: false})
      this.$store.commit('profilebar/toggle', {status: false})
    }
  },
  created() {
    this.$store.commit('sidebar/toggle', {status: false})
    this.$store.commit('profilebar/toggle', {status: false})
  },
}

if(process.client){
  document.addEventListener("DOMContentLoaded", function() {
      window.addEventListener('scroll', function() {
          if (window.scrollY > 150) {
              document.getElementById('navbar').classList.add('fixed-top');
              document.getElementById('scrollTopButton').style.display = 'block';
            } else {
              document.getElementById('navbar').classList.remove('fixed-top');
              document.getElementById('scrollTopButton').style.display = 'none';
          }
      });
  });
}
</script>

<style scoped>
.sidebar-height{
	min-height: 100vh;
}
</style>

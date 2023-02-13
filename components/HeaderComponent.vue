<template>
	<nav id="navbar">
		<div class="wrapper">
			<div class="row">
				<div class="nav-logo">
					<NuxtLink to="/" class="logo-link">
						<img onContextMenu="return false;" src="/images/logo.webp"
							alt="" class="logo-img">
					</NuxtLink>
				</div>
				<button id="nav_menu_btn" menu="close" @click="showNav = !showNav">
					<i :class="showNav ? 'fas fa-times' : 'fas fa-bars'"></i>
				</button>
				<div :class="showNav ? 'nav-menu nav-menu-ham' : 'nav-menu'" id="nav_menu">
					<ul class="menu-row" id="responsive-menu">
						<li class="menu-li parent"><a class="menu-links " href="#">About Us</a>
							<ul class="child">
								<li><NuxtLink to="/about">Introduction</NuxtLink></li>
								<li><NuxtLink to="/leadership-team">Leadership Team</NuxtLink></li>
								<li><NuxtLink to="/media">Media</NuxtLink></li>
								<li><NuxtLink to="/testimonial">Testimonial</NuxtLink></li>
							</ul>
						</li>
						<li class="menu-li parent"><a class="menu-links " href="#">Gallery</a>
							<ul class="child">
								<!--<li><NuxtLink to="/">Audios</NuxtLink></li>-->
								<li><NuxtLink to="/gallery/images">Images</NuxtLink></li>
								<li><NuxtLink to="/gallery/videos">Videos</NuxtLink></li>
							</ul>
						</li>
						<li class="menu-li parent"><a class="menu-links " href="#">Join Hands</a>
							<ul class="child">
								<li><NuxtLink to="/volunteer">Volunteer</NuxtLink></li>
								<li><NuxtLink to="/faq">FAQs</NuxtLink></li>
								<!--<li><NuxtLink to="/contact">Contact us</NuxtLink></li>-->
								<!--<li><NuxtLink to="/find-us">Find Us</NuxtLink></li>-->
							</ul>
						</li>
						<!--<li class="menu-li parent"><a class="menu-links " href="#">Donation</NuxtLink>-->
						<!--    <ul class="child">-->
						<!--<li><NuxtLink to="/">Donation</NuxtLink></li>-->
						<!--        <li><NuxtLink to="/">E-Hundi</NuxtLink></li>-->
						<!--    </ul>-->
						<!--</li>-->
						<li class="menu-li parent"><a class="menu-links " href="#">Madhava Seva</a>
							<ul class="child">
								<li><NuxtLink to="/madhava-seva/past-events">Past Events</NuxtLink>
								</li>
								<li><NuxtLink to="/madhava-seva/upcoming-events">Upcoming
										Events</NuxtLink></li>
							</ul>
						</li>
						<li class="menu-li parent"><a class="menu-links " href="#">Manava Seva</a>
							<ul class="child">
								<li><NuxtLink to="/manava-seva/past-events">Past Events</NuxtLink>
								</li>
								<li><NuxtLink to="/manava-seva/upcoming-events">Upcoming
										Events</NuxtLink></li>
							</ul>
						</li>

						<li class="menu-li parent"><a class="menu-links " href="#">Resources</a>
							<ul class="child">
								<!--<li><NuxtLink to="/">Literature</NuxtLink></li>-->
								<li><a href="https://hrudayaspandana.org/blog" target="_blank">Blogs</a></li>
								<!--<li><NuxtLink to="/">Crossword</NuxtLink></li>-->
							</ul>
						</li>


						<!--<li class="menu-li parent"><a class="menu-links " href="#">Services</NuxtLink>-->
						<!--    <ul class="child">-->

						<!--<li class="parent"><NuxtLink to="#">Manava Seva<span class="expand">»</span></NuxtLink>-->
						<!--    <ul class="child small-child">-->
						<!--    -->
						<!--        <li><NuxtLink to="/services/manava-seva/WmZVOg==" nowrap>Orphanage Seva</NuxtLink></li>-->
						<!--    -->
						<!--        <li><NuxtLink to="/services/manava-seva/WmYBYQ==" nowrap>Aahaara Seva</NuxtLink></li>-->
						<!--    -->
						<!--        <li><NuxtLink to="/services/manava-seva/CjYAYg==" nowrap>Covid Seva</NuxtLink></li>-->
						<!--    -->
						<!--    </ul>-->
						<!--</li>-->

						<!--<li class="parent"><NuxtLink to="#">Madhava Seva<span class="expand">»</span></NuxtLink>-->
						<!--    <ul class="child small-child">-->
						<!--    -->
						<!--        <li><NuxtLink to="/services/madhava-seva/WWUEag==" nowrap>Devata Homas</NuxtLink></li>-->
						<!--    -->
						<!--        <li><NuxtLink to="/services/madhava-seva/DTEHZg==" nowrap>Rudraabhisekam</NuxtLink></li>-->
						<!--    -->
						<!--    </ul>-->
						<!--</li>-->




						<!--    </ul>-->
						<!--</li>-->
						<!-- <li class="menu-li parent"><a class="menu-links " href="#">User</NuxtLink>
                        <ul class="child">
                                                            <li><NuxtLink to="/login">Login</NuxtLink></li>
                                <li><NuxtLink to="/register">Register</NuxtLink></li>
                                                    </ul>
                    </li> -->
						<!--<li class="menu-li">-->
						<!--    <NuxtLink to="/login" class="menu-call-to-action">Login</NuxtLink>-->
						<!--</li>-->
						<li class="menu-li">
							<NuxtLink to="/contact" class="menu-call-to-action">Contact Us</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'HeaderComponent',
  data() {
      return {
          showNav : false,
      }
  },
}
</script>

<style scoped>
nav .row .nav-menu-ham{
  width: 100% !important;
  height: auto !important;
  display: block !important;
}
</style>

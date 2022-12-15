<template>
	<div>
		<footer>
			<div class="footer-wrapper">
				<div class="footer-row">
					<div class="cols">
						<img src="/images/logo.webp" alt="" class="footer-logo">
					</div>
					<div class="cols cols-2">
						<ul class="footer-link-ul">
							<li class="footer-link-header">
								Our Contacts
							</li>
							<li class="footer-link">
								Hrudaya Spandana<br>
								<a href="https://goo.gl/maps/LfJa1x3MQGusDVB7A" class="footer-link-href"
									target="_blank"> E601, Aishwarya Lake View Residency,<br>
									6th Cross, Kaggadasapura,<br>
									C V Raman Nagar,<br> Bangalore - 560093
									India &nbsp;&nbsp;<i class="fas fa-map-marker-alt"></i></a>
							</li>
							<li class="footer-link">
								<a href="mailto:info@hrudayaspandana.org"
									class="footer-link-href">info@hrudayaspandana.org</a>
							</li>
							<li class="footer-link">
								<a href="tel:+919663718977" class="footer-link-href">Tel: +91 9663718977</a>
							</li>
						</ul>
					</div>
					<div class="cols cols-2">
						<ul class="footer-link-ul">
							<li class="footer-link-header">
								Explore
							</li>
							<li class="footer-link">
								<NuxtLink to="/about" class="footer-link-href">About</NuxtLink>
							</li>
							<li class="footer-link">
								<NuxtLink to="/volunteer" class="footer-link-href">Volunteer</NuxtLink>
							</li>
							<!--<li class="footer-link">-->
							<!--    <NuxtLink to="/" class="footer-link-href">Literature</a>-->
							<!--</li>-->
							<!--<li class="footer-link">-->
							<!--    <NuxtLink to="" class="footer-link-href">Crossword</a>-->
							<!--</li>-->
							<li class="footer-link">
								<NuxtLink to="/contact" class="footer-link-href">Contact</NuxtLink>
							</li>
						</ul>
					</div>
					<div class="cols cols-2">
						<ul class="footer-link-ul">
							<li class="footer-link-header">
								Legal
							</li>
							<li class="footer-link">
								<NuxtLink to="/terms-condition" class="footer-link-href">Terms &
									Conditions</NuxtLink>
							</li>
							<li class="footer-link">
								<NuxtLink to="/privacy-policy" class="footer-link-href">Privacy
									Policy</NuxtLink>
							</li>
							<!--<li class="footer-link">-->
							<!--    <NuxtLink to="" class="footer-link-href">Donation Refund Policy</a>-->
							<!--</li>-->
						</ul>
					</div>
				</div>
			</div>
			<div class="last-footer">
				<div class="wrapper">
					<ul class="footer-link-ul-social">
						<li class="footer-link-social">
							<a href="https://www.facebook.com/Hrudaya-Spandana-112948621170832" class="footer-link-href"
								target="_blank"><i class="fab fa-facebook-f"></i></a>
						</li>
						<li class="footer-link-social">
							<a href="https://www.instagram.com/hrudaya.spandana/" target="_blank"
								class="footer-link-href"><i class="fab fa-instagram"></i></a>
						</li>
						<li class="footer-link-social">
							<a href="https://www.linkedin.com/company/77675080/admin/" target="_blank"
								class="footer-link-href"><i class="fab fa-linkedin-in"></i></a>
						</li>
						<li class="footer-link-social">
							<a href="https://www.youtube.com/channel/UCVJc6AiIzMPooy-9JdirJOg" target="_blank"
								class="footer-link-href"><i class="fab fa-youtube"></i></a>
						</li>
						<li class="footer-link-social">
							<a href="https://twitter.com/Hrudaya_Spandan" class="footer-link-href" target="_blank"><i
									class="fab fa-twitter"></i></a>
						</li>







					</ul>
					<p>Copyright &copy; 2021 by Hrudayaspandana</p>
				</div>
			</div>
		</footer>
		<div style="position: relative;width:100%;">
			<button id="scrollTopBtn" onclick="topFunction()" style="display:none;"><i
					class="fas fa-chevron-up"></i></button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FooterComponent',
}
</script>
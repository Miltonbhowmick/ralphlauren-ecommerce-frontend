<template>
	<section class="discover-page">
		<ModernCustomSlider
			:headlineBlack="false"
			:backgroundImage="bgImage11"
			:isBackgroundImage="true"
			:smallBigTitle="{ small: 'discover', big: 'What’s New' }"
			:description="'The latest campaigns, collections and news from the World of Ralph Lauren'"
		/>
		<ModernCustomSlider
			:headlineBlack="false"
			:backgroundImage="bgImage11"
			:isBackgroundImage="true"
			:smallBigTitle="{ small: 'discover', big: 'Men’s Brands' }"
			:description="'From the iconic men’s Ralph Lauren Polo shirt to the artful craftsmanship of Purple Label, rugged luxury of Double RL and peak RLX performance, the World of Ralph Lauren men is rooted in timeless design'"
			:exploreLink="true"
		/>
		<ModernCustomSlider
			:headlineBlack="false"
			:backgroundImage="bgImage11"
			:isBackgroundImage="true"
			:smallBigTitle="{ small: 'discover', big: 'Women’s Brands' }"
			:description="'Ralph Lauren for women showcases classic design with modern style, from Polo Ralph Lauren women to Ralph Lauren Collection, Lauren Ralph Lauren, Double RL and RLX'"
			:exploreLink="true"
		/>
		<ModernCustomSlider
			:headlineBlack="false"
			:backgroundImage="bgImage11"
			:isBackgroundImage="true"
			:smallBigTitle="{ small: 'discover', big: 'Home Brands' }"
			:description="'With each Ralph Lauren Home collection, a dream is brought to life. The distinct lifestyles created by Ralph Lauren Home—along with the Lauren, Polo Ralph Lauren, Double RL and Ralph’s Coffee brands—reflect the timelessness of Ralph Lauren Home style'"
			:exploreLink="true"
		/>
		<ModernCustomSlider
			:headlineBlack="false"
			:backgroundImage="bgImage11"
			:isBackgroundImage="true"
			:smallBigTitle="{ small: 'discover', big: 'Our Story' }"
			:description="'“Style is very personal. It has nothing to do with fashion. Fashion is over quickly. Style is forever.” —Ralph Lauren'"
			:exploreLink="true"
		/>

		<FooterBottomFooter />
	</section>
</template>

<script setup>
import bgImage11 from "~/assets/images/bg-group11.jpg";

definePageMeta({
	layout: "transparent-navbar",
});
</script>

<style scoped lang="scss">
section.discover-page {
	margin-top: -62px;
}
</style>

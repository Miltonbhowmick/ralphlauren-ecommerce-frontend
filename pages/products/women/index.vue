<template>
	<section class="women-page">
		<RowCustomSlider
			:perSlider="1"
			:itemList="[
				{
					videoSrc: '/videos/women-page-hero-video.mp4',
					imageSrc: null,
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'active club',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						left: true,
					},
					zeroMargin: true,
				},
				{
					videoSrc: null,
					imageSrc: '/images/1128_wlp_c01a_img.jpg',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'winter alpine',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						middle: true,
					},
					zeroMargin: true,
				},
			]"
		/>
		<div class="slider-box">
			<h2 class="title">Women: Shop by Category</h2>
			<CustomSubCategorySlider
				:perPage="4"
				:slideList="[
					{
						link: '/products/men/jackets-coats',
						title: 'jackets & coats',
						imageSrc: '/images/1228_wlp_m_c02a_img.jpg',
					},
					{
						link: '/products/men/dresses',
						title: 'dresses',
						imageSrc: '/images/1228_wlp_m_c02b_img.jpg',
					},
					{
						link: '/products/men/jumpers-cardigans',
						title: 'jumpers & cardigans',
						imageSrc: '/images/1228_wlp_m_c02c_img.jpg',
					},
					{
						link: '/products/men/trousers',
						title: 'trousers',
						imageSrc: '/images/1228_wlp_m_c02d_img.jpg',
					},
					{
						link: '/products/men/handbags',
						title: 'handbags',
						imageSrc: '/images/1228_wlp_m_c02e_img.jpg',
					},
				]"
			></CustomSubCategorySlider>
		</div>
		<VideoBanner
			:videoSrc="'/videos/video-banner-walk.mp4'"
			:textImage="'/images/2023_polo_air_naiomi_glasses_logo_en.svg'"
			:subTitle="'Polo Ralph Lauren x Naiomi Glasses, the inaugural collaboration of the Ralph Lauren Artist in Residence programme, honours Navajo heritage and centuries-old weaving traditions '"
			:links="[{ title: 'explore now', src: '/' }]"
			:right="true"
			class="mt-60"
		/>
		<!-- <div class="mt-60">
			<CustomSlider
				:headlineBlack="false"
				:backgroundImage="'/images/slider-bg-blur.jpg'"
				:isBackgroundImage="true"
				:title="'Gifts for Him'"
				:subTitle="'Surprise him with presents he’ll cherish'"
			/>
		</div> -->

		<div class="mt-60">
			<HalfBackgroundCustomSlider
				:headerLogo="'/images/lauren_ralph_lauren_logo_white.svg'"
				:backgroundImage="'/images/1228_wlp_c07_bg.jpg'"
				:isBackgroundImage="true"
				:title="'Gifts for Him'"
				:subTitle="'Surprise him with presents he’ll cherish'"
				:slideList="[
					{
						imageSrc: '/images/1228_wlp_c06c_img.jpg',
						content: {
							boldMinititle: 'resort 2024',
							linkList: [
								{
									name: 'shop now',
									src: '',
								},
							],
						},
					},
					{
						videoSrc: '/videos/Lauren_Pre-Spring_912x456_DSK.mp4',
						content: {
							title: 'destination dreaming',
							linkList: [
								{
									name: 'shop now',
									src: '',
								},
							],
						},
					},
				]"
			/>
		</div>
		<div>
			<HalfBackgroundCustomSlider
				:headerLogo="'/images/lauren_ralph_lauren_logo_white.svg'"
				:backgroundImage="'/images/1228_wlp_c07_bg.jpg'"
				:isBackgroundImage="true"
				:title="'Gifts for Him'"
				:subTitle="'Surprise him with presents he’ll cherish'"
				:slideList="[
					{
						imageSrc: '/images/1228_wlp_c07a_img.jpg',
						content: {
							title: 'on vacation',
							linkList: [
								{
									name: 'shop now',
									src: '',
								},
								{
									name: 'explore lauren ralph lauren',
									src: '',
								},
							],
						},
					},
					{
						videoSrc: '/videos/Lauren_Pre-Spring_912x456_DSK.mp4',
						content: {
							title: 'destination dreaming',
							linkList: [
								{
									name: 'shop now',
									src: '',
								},
							],
						},
					},
				]"
			/>
		</div>
		<HeroBanner
			:linkList="[
				{ name: 'shop', src: '' },
				{ name: 'explore now', src: '' },
			]"
			:companyLogo="'/images/2022_ao_offical_outfitter_logo_white.svg'"
			:backgroundImage="'/images/0104_sporting_life_lp_c04_img.jpg'"
			:textColor="'#fff'"
			:description="'Honouring tradition and welcoming the youthful spirit of the next generation at the Australian Open'"
			:left="true"
			class="mt-60"
		/>
		<div class="mt-60">
			<CustomSlider
				:headlineBlack="true"
				:backgroundImage="'/images/bg-light.jpg'"
				:isBackgroundImage="true"
				:title="'More to Explore'"
				:subTitle="'Discover our curated edits and seasonal collections'"
				:slideList="[
					{
						imageSrc: '/images/1228_wlp_m_c08a_img.jpg',
						content: {
							title: 'dress shop',
						},
					},
					{
						imageSrc: '/images/1228_wlp_m_c08b_img.jpg',
						content: {
							title: 'outerwear',
						},
					},
					{
						imageSrc: '/images/1228_wlp_m_c08c_img (1).jpg',
						content: {
							title: 'sweater shop',
						},
					},
					{
						imageSrc: '/images/1128_wlp_m_c07e_img.jpg',
						content: {
							title: 'golf',
						},
					},
					{
						imageSrc: '/images/1102_wlp_m_c07e_img.jpg',
						content: {
							title: 'jeans',
						},
					},
				]"
			/>
		</div>
	</section>
</template>

<script setup>
definePageMeta({
	layout: "transparent-navbar",
});
</script>

<style scoped lang="scss">
section.women-page {
	margin-top: -58px;
	.slider-box {
		padding: 40px 30px;
		.title {
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-size: 28px;
			font-weight: 500;
			line-height: 1.429em;
			margin-left: 10px;
		}
	}
}
</style>

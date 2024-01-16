<template>
	<section class="men-page">
		<RowCustomSlider
			:perSlider="1"
			:itemList="[
				{
					videoSrc:
						'/videos/1228 Mens Polo_ Active Club_23_HP HUB_DSK_1440x720.mp4',
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
					imageSrc: '/images/1228_hp_c01b_img.jpg',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'winter alpine',
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
					imageSrc: '/images/1228_hp_c01c_img.jpg',
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
			<h2 class="title">Men: Shop by Category</h2>
			<CustomSubCategorySlider
				:perPage="4"
				:slideList="[
					{
						link: '/products/men/jackets-coats',
						title: 'jackets & coats',
						imageSrc: '/images/1228_mlp_m_c02a_img.jpg',
					},
					{
						link: '/products/men/hoodies-sweatshirts',
						title: 'hoodies & sweatshirts',
						imageSrc: '/images/1228_mlp_m_c02b_img.jpg',
					},
					{
						link: '/products/men/shoes',
						title: 'shoes',
						imageSrc: '/images/1228_mlp_m_c02c_img.jpg',
					},
					{
						link: '/products/men/polo-shirts',
						title: 'polo shirts',
						imageSrc: '/images/1228_mlp_m_c02d_img.jpg',
					},
					{
						link: '/products/men/trousers',
						title: 'trousers',
						imageSrc: '/images/1228_mlp_m_c02e_img.jpg',
					},
					{
						link: '/products/men/scarves-hats-gloves',
						title: 'scarves, hats & gloves',
						imageSrc: '/images/1228_mlp_m_c02f_img.jpg',
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
		<ClassicStyle class="mt-60" />
		<div class="mt-60">
			<CustomSlider
				:headlineBlack="true"
				:isBackgroundImage="false"
				:title="'More to Explore'"
				:subTitle="'Discover our curated edits and seasonal collections'"
				:slideList="[
					{
						imageSrc: '/images/1228_mlp_c06a_img.jpg',
						content: {
							title: 'polo bear shop',
						},
					},
					{
						imageSrc: '/images/1017_mlp_c08c_img.jpg',
						content: {
							title: 'new arrivals',
						},
					},
					{
						imageSrc: '/images/0808_mlp_c07f_img.jpg',
						content: {
							title: 'big & tall',
						},
					},
					{
						imageSrc: '/images/1102_mlp_c12_img.jpg',
						content: {
							title: 'golf',
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
section.men-page {
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

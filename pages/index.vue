<template>
	<section class="home">
		<HeroBanner
			:title="'WINTER SALE'"
			:linkList="[
				{ name: 'men', src: '' },
				{ name: 'women', src: '' },
				{ name: 'boys', src: '' },
				{ name: 'girls', src: '' },
			]"
			:backgroundImage="'/images/bg-group-winter.jpg'"
			:textColor="'#fff'"
			:normalTitle="'FURTHER REDUCTIONS'"
			:middle="true"
		/>
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
		<CustomSlider
			:headlineBlack="true"
			:backgroundImage="'/images/slider-bg.jpg'"
			:title="'asdasd'"
			:exploreLink="true"
			:slideList="[
				{
					imageSrc: '/images/1228_mlp_c06a_img.jpg',
					content: {
						title: 'polo bear shop',
						linkList: [
							{
								name: 'men',
								src: '/',
							},
						],
					},
				},
				{
					imageSrc: '/images/1017_mlp_c08c_img.jpg',
					content: {
						title: 'new arrivals',
						linkList: [
							{
								name: 'men',
								src: '/',
							},
						],
					},
				},
				{
					imageSrc: '/images/0808_mlp_c07f_img.jpg',
					content: {
						title: 'big & tall',
						linkList: [
							{
								name: 'men',
								src: '/',
							},
						],
					},
				},
				{
					imageSrc: '/images/1102_mlp_c12_img.jpg',
					content: {
						title: 'golf',
						linkList: [
							{
								name: 'men',
								src: '/',
							},
						],
					},
				},
			]"
		/>
		<VideoBanner
			:videoSrc="'/videos/video_banner.mp4'"
			:title="'Personalised Gifts'"
			:links="[
				{ title: 'men', src: '/' },
				{ title: 'women', src: '/' },
				{ title: 'boys', src: '/' },
			]"
			:bottom="true"
		/>
		<VideoBubbleImageSlider
			:sliderList="[
				{
					content: {
						downLeft: true,
						miniTitle: 'leather cafe racer jacket',
					},
					imageSrc: '/images/jacket-racer.jpg',
				},
				{
					content: {
						downLeft: true,
						miniTitle: 'leather cafe racer jacket',
					},
					imageSrc: '/images/colorfull-jacket-racer.jpg',
				},
				{
					content: {
						downLeft: true,
						miniTitle: 'leather cafe racer jacket',
					},
					imageSrc: '/images/green-jacket-racer.jpg',
				},
				{
					content: {
						downLeft: true,
						miniTitle: 'leather cafe racer jacket',
					},
					imageSrc: '/images/yellow-pant-racer.jpg',
				},
			]"
		/>
		<HolidayPack
			:backgroundImage="bgGroup"
			:left="true"
			:title="'POLO'"
			:subTitle="'Holiday Dressing'"
			:companyLogo="'/images/company-logo.png'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<HallFamePack />
		<VideoBannerPolo
			:title="'POLO'"
			:subTitle="'Holiday Dressing'"
			:videoSrc="'/videos/video-banner-group.mp4'"
			:companyLogo="'/images/company-logo.png'"
			:linkList="[{ name: 'men' }, { name: 'women' }, { name: 'baby' }]"
			:down="true"
		/>
		<SinglePack />
		<ExplorePack class="mt-60" />
	</section>
</template>

<script setup>
import bgGroup from "~/assets/images/bg-group.jpg";

definePageMeta({
	layout: "transparent-navbar",
});
</script>

<style scoped lang="scss">
// .mt-60 {
// 	margin-top: 60px;
// }

section.home {
	margin-top: -58px;
}
</style>

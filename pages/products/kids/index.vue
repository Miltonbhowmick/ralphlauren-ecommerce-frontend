<template>
	<section class="kids-page">
		<RowCustomSlider
			:perSlider="1"
			:itemList="[
				{
					imageSrc: '/images/1228_kids_hub_c01_img.jpg',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'active club',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						middle: true,
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
		<div class="kids-navbar">
			<ul>
				<li class="active"><a>Shop Kids</a></li>
				<li><a>Shop Baby</a></li>
			</ul>
		</div>
		<CustomSlider
			:headlineBlack="false"
			:backgroundImage="'/images/1228_kids_hub_c02_bg.jpg'"
			:isBackgroundImage="true"
			:title="'The Shops'"
			:subTitle="'Signature collections and seasonal edits'"
			:slideList="[
				{
					imageSrc: '/images/1228_kids_hub_m_c02a_img.jpg',
					content: {
						title: 'accessories shop',
						linkList: [
							{
								name: 'shop boys',
								src: '',
							},
							{
								name: 'shop girls',
								src: '',
							},
						],
					},
				},
				{
					imageSrc: '/images/1228_kids_hub_m_c02b_img.jpg',
					content: {
						title: 'polo bear shop',
						linkList: [
							{
								name: 'shop boys',
								src: '',
							},
							{
								name: 'shop girls',
								src: '',
							},
						],
					},
				},
				{
					imageSrc: '/images/1228_kids_hub_m_c02c_img.jpg',
					content: {
						title: 'teen shop',
						linkList: [
							{
								name: 'shop boys',
								src: '',
							},
							{
								name: 'shop girls',
								src: '',
							},
						],
					},
				},
				{
					imageSrc: '/images/1228_kids_hub_m_c02d_img.jpg',
					content: {
						title: 'outerwear',
						linkList: [
							{
								name: 'shop boys',
								src: '',
							},
							{
								name: 'shop girls',
								src: '',
							},
						],
					},
				},
			]"
		/>
		<div class="slider-bg">
			<div class="normal-banner">
				<img src="/images/normal-full-switer.jpg" alt="normal-full-switer" />
			</div>
			<div class="slider-box">
				<h2 class="title">Women: Shop by Category</h2>
				<CustomSubCategorySlider
					:perPage="4"
					:slideList="[
						{
							link: '/products/men/boys-jumper-cardigans',
							title: 'boys jumper & cardigans',
							imageSrc: '/images/1228_kids_hub_m_c03a_img.jpg',
						},
						{
							link: '/products/men/girls-jumpers-cardigans',
							title: 'girls jumpers & cardigans',
							imageSrc: '/images/1228_kids_hub_m_c03b_img.jpg',
						},
						{
							link: '/products/men/boys-shirts',
							title: 'boys shirts',
							imageSrc: '/images/1228_kids_hub_m_c03c_img.jpg',
						},
						{
							link: '/products/men/girls-dresses',
							title: 'girls dresses',
							imageSrc: '/images/1228_kids_hub_m_c03d_img.jpg',
						},
						{
							link: '/products/men/boys-accessories',
							title: 'boys accessories',
							imageSrc: '/images/1228_kids_hub_m_c03e_img.jpg',
						},
						{
							link: '/products/men/boys-shoes',
							title: 'boys shoes',
							imageSrc: '/images/1228_kids_hub_m_c03f_img.jpg',
						},
					]"
				></CustomSubCategorySlider>
			</div>
		</div>
		<div>
			<LeftImageRightContent />
		</div>

		<div class="mt-60">
			<ProductGellary @openProductSidebar="openSidebarDetail" />
		</div>
		<VideoBubbleImageSlider
			class="mt-60"
			:backgroundImage="'/images/1228_kids_hub_c05_bg.jpg'"
			:sideImage="{
				imageSrc: '/images/1228_kids_hub_c05_img.jpg',
				content: {
					title: 'boys jackets & coats',
				},
			}"
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
			:backgroundImage="holidayPackBgImage"
			:subTitle="'Polo Baby'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
			:left="true"
		/>

		<ImageBannerCustomSlider
			:headlineBlack="false"
			:backgroundImage="'/images/1228_kids_hub_c06_bg.jpg'"
			:isBackgroundImage="true"
			:heroBannerImage="'/images/1228_kids_hub_c06_img.jpg'"
			:title="'Seasonal Polo Bears'"
			:slideList="[
				{
					imageSrc: '/images/1228_kids_hub_c06a_img.jpg',
					content: {
						title: 'Striped Cotton Jersey Pocket T-Shirt',
						linkList: [
							{
								name: 'shop now',
								src: '',
							},
						],
					},
				},
				{
					imageSrc: '/images/1228_kids_hub_c06b_img.jpg',
					content: {
						title: 'Aran-Knit Flag Cotton Jumper',
						linkList: [
							{
								name: 'shop now',
								src: '',
							},
						],
					},
				},
				{
					imageSrc: '/images/1228_kids_hub_c06c_img.jpg',
					content: {
						title: 'Striped Cable-Knit Cotton Jumper',
						linkList: [
							{
								name: 'shop now',
								src: '',
							},
						],
					},
				},
			]"
			class="mt-60"
		/>
		<TwoImage
			:header="{
				title: 'Matching Sets',
			}"
			:backgroundImage="'/images/1228_kids_hub_c07_bg.jpg'"
			:itemList="[
				{
					imageSrc: '/images/1228_kids_hub_c07a_img.jpg',
					content: {
						linkList: [
							{
								name: 'Floral Smocked Cotton Top & Trouser Set',
							},
						],
					},
				},
				{
					imageSrc: '/images/1228_kids_hub_c07b_img.jpg',
					content: {
						linkList: [
							{
								name: 'Striped Terry Rugby Shirt & Short Set',
							},
						],
					},
				},
			]"
		/>

		<SidebarProductDetail
			v-if="showSidebarDetail"
			@hideModal="hideSidebarDetail"
		/>
	</section>
</template>

<script setup>
import holidayPackBgImage from "~/assets/images/bg-group1.jpg";

definePageMeta({
	layout: "transparent-navbar",
});

const showSidebarDetail = ref(false);

const openSidebarDetail = () => {
	showSidebarDetail.value = true;
};
const hideSidebarDetail = () => {
	showSidebarDetail.value = false;
};
</script>

<style scoped lang="scss">
section.kids-page {
	margin-top: -58px;
	.kids-navbar {
		position: sticky;
		top: 0;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #041e3a;
		ul {
			margin: 0;
			list-style: none;
			display: flex;
			gap: 30px;
			padding: 5px 0;
			li {
				padding: 15px 0;
				&.active {
					border-bottom: 0.3125em solid white;
				}
				a {
					font-family: "LeJeuneDeck-Regular", serif;
					color: white;
				}
			}
		}
	}
	.slider-bg {
		.slider-box {
			margin-top: -250px;
			padding-left: 121px;
			.title {
				color: #fff;
			}
		}
	}
}
</style>

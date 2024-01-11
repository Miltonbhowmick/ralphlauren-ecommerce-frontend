<template>
	<section class="gifts-page">
		<HeroBanner
			:title="'The Gift Guide'"
			:linkList="[
				{ name: 'men', src: '' },
				{ name: 'women', src: '' },
				{ name: 'boys', src: '' },
				{ name: 'girls', src: '' },
			]"
			:backgroundImage="'/images/0104_gifting_guide_lp_c01_img.jpg'"
			:textColor="'#fff'"
			:description="'A curated selection of gifts from the World of Ralph Lauren to celebrate every occasion'"
			:down="true"
		/>
		<div class="gift-navbar">
			<ul>
				<li class="active"><a>Our Favourites </a></li>
				<li><a>Polo Bear Shop </a></li>
			</ul>
		</div>
		<CustomSlider
			:headlineBlack="true"
			:backgroundImage="'/images/0104_gifting_guide_lp_c02_bg.jpg'"
			:isBackgroundImage="true"
			:title="'Our Favourites'"
			:subTitle="'Signature Ralph Lauren gifts for everyone on your list'"
			:slideList="[
				{
					imageSrc: '/images/0104_gifting_guide_lp_m_c02a_img.jpg',
					content: {
						title: 'for him',
					},
				},
				{
					imageSrc: '/images/0104_gifting_guide_lp_m_c02b_img.jpg',
					content: {
						title: 'for her',
					},
				},
				{
					imageSrc: '/images/0104_gifting_guide_lp_m_c02c_img.jpg',
					content: {
						title: 'for boys',
					},
				},
				{
					imageSrc: '/images/0104_gifting_guide_lp_m_c02d_img.jpg',
					content: {
						title: 'for girls',
					},
				},
				{
					imageSrc: '/images/0104_gifting_guide_lp_m_c02e_img.jpg',
					content: {
						title: 'for baby',
					},
				},
				{
					imageSrc: '/images/0104_gifting_guide_lp_m_c02f_img.jpg',
					content: {
						title: 'for the home',
					},
				},
			]"
		/>
		<RowMegaProduct
			:backgroundImage="'/images/0104_gifting_guide_lp_c03_bg.jpg'"
			:itemList="[
				{
					imageSrc: '/images/0104_gifting_guide_lp_c03a_img.jpg',
					content: {
						title: 'Gifts Under 150 €',
						linkList: [
							{
								name: 'MEN',
								src: '/',
							},
							{
								name: 'WOMEN',
								src: '/',
							},
							{
								name: 'HOME',
								src: '/',
							},
						],
						textColor: '#000',
					},
				},
				{
					imageSrc: '/images/0104_gifting_guide_lp_c03b_img.jpg',
					content: {
						title: 'Gifts Under 150 €',
						linkList: [
							{
								name: 'MEN',
								src: '/',
							},
							{
								name: 'WOMEN',
								src: '/',
							},
							{
								name: 'HOME',
								src: '/',
							},
						],
						textColor: '#000',
					},
				},
			]"
		/>
		<HolidayPack
			:backgroundImage="'/images/sweater-bg.jpg'"
			:right="true"
			:subTitle="'Polo Bear Shop'"
			:description="'Gifts featuring Ralph Lauren’s favourite style icon'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<RowCustomSlider
			:style="{ backgroundColor: '#000' }"
			:perSlider="4"
			:itemList="[
				{
					videoSrc: null,
					imageSrc: '/images/0104_gifting_guide_lp_m_c04f_img.jpg',
					content: {
						name: 'home',
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/0104_gifting_guide_lp_m_c04a_img.jpg',
					content: {
						name: 'men',
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/0104_gifting_guide_lp_m_c04b_img.jpg',
					content: {
						name: 'women',
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/0104_gifting_guide_lp_m_c04c_img.jpg',
					content: {
						name: 'boys',
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/0104_gifting_guide_lp_m_c04d_img.jpg',
					content: {
						name: 'girls',
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/0104_gifting_guide_lp_m_c04e_img.jpg',
					content: {
						name: 'baby',
					},
				},
			]"
		/>
		<HolidayPack
			:backgroundImage="bgImage5"
			:left="true"
			:subTitle="'For Vacation'"
			:description="'Travel classics for a holiday filled with unforgettable moments'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<HolidayPack
			:backgroundImage="bgImage6"
			:left="true"
			:subTitle="'Baby’s First Holiday'"
			:description="'Gifts to celebrate your new addition'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<SingleImageBannerCustomSlider
			:headlineBlack="false"
			:backgroundImage="'/images/bg-ring.jpg'"
			:isBackgroundImage="true"
			:title="'Seasonal Polo Bears'"
			:description="'Gifts of artful craftsmanship and refined glamour'"
			:exploreLinkList="[
				{
					name: 'men',
					src: '',
				},
				{
					name: 'women',
					src: '',
				},
				{
					name: 'home',
					src: '',
				},
			]"
			:slideList="[
				{
					imageSrc: '/images/cups.jpg',
					content: {
						title: 'Shop Dinnerware',
						linkList: [
							{
								name: 'shop now',
								src: '',
							},
						],
					},
				},
				{
					imageSrc: '/images/gold-bag.jpg',
					content: {
						title: 'Shop Handbags',
						linkList: [
							{
								name: 'shop now',
								src: '',
							},
						],
					},
				},
				{
					imageSrc: '/images/towels.jpg',
					content: {
						title: 'Shop Jumpers & Cardigans',
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
		<HolidayPack
			:backgroundImage="bgImage8"
			:middle="true"
			:companyLogo="'/images/lauren_ralph_lauren_logo_white.svg'"
			:description="'Gifts of style to bring her holiday joy'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<CustomSlider
			:headlineBlack="false"
			:backgroundImage="'/images/tree-blur.jpg'"
			:isBackgroundImage="true"
			:title="'Gifts That Give Back'"
			:subTitle="'Present a gift that supports a meaningful cause'"
		/>
		<HolidayPack
			:backgroundImage="bgImage9"
			:down="true"
			:companyLogo="'/images/rrl_logo_white.svg'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<ServicePack
			:backgroundImage="bgImage10"
			:down="true"
			:subTitle="'Gift Services'"
			:serviceList="[
				{
					name: 'Gift Boxing',
					description:
						'For a festive finishing touch, select our signature gift boxing at checkout',
				},
				{
					name: 'E-Gift Cards',
					description:
						'It’s a gift that always fits: buy now and schedule delivery for your preferred date',
				},
			]"
		/>
	</section>
</template>

<script setup>
import bgImage from "~/assets/images/bg-group4.jpg";
import bgImage5 from "~/assets/images/bg-group5.jpg";
import bgImage6 from "~/assets/images/bg-group6.jpg";
import bgImage8 from "~/assets/images/bg-group8.jpg";
import bgImage9 from "~/assets/images/bg-group9.jpg";
import bgImage10 from "~/assets/images/bg-group10.jpg";

definePageMeta({
	layout: "transparent-navbar",
});
</script>

<style scoped lang="scss">
section.gifts-page {
	margin-top: -58px;
	.gift-navbar {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		background: #000;
		ul {
			margin: 0;
			list-style: none;
			display: flex;
			gap: 30px;
			padding: 20px 0;
			li {
				&.active {
					border-bottom: 0.1125em solid white;
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

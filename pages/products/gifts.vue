<template>
	<div class="gift-navbar">
		<ul>
			<li class="active"><a>Shop Kids</a></li>
			<li><a>Shop Baby</a></li>
		</ul>
	</div>
	<CustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/slider-bg-blur.jpg'"
		:isBackgroundImage="true"
		:title="'Our Favourites'"
		:subTitle="'Signature Ralph Lauren gifts for everyone on your list'"
	/>
	<RowMegaProduct :backgroundImage="bgImage" :itemList="megaProductList" />
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
		:itemList="[
			{
				videoSrc: null,
				imageSrc: '/images/slider/slider1.jpg',
				content: {
					name: 'men',
				},
			},
			{
				videoSrc: null,
				imageSrc: '/images/slider/slider2.jpg',
				content: {
					name: 'women',
				},
			},
			{
				videoSrc: null,
				imageSrc: '/images/slider/slider3.jpg',
				content: {
					name: 'girls',
				},
			},
			{
				videoSrc: null,
				imageSrc: '/images/slider/slider4.jpg',
				content: {
					name: 'boys',
				},
			},
			{
				videoSrc: null,
				imageSrc: '/images/slider/slider5.jpg',
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
</template>

<script setup>
import bgImage from "~/assets/images/bg-group4.jpg";
import bgImage5 from "~/assets/images/bg-group5.jpg";
import bgImage6 from "~/assets/images/bg-group6.jpg";
import bgImage8 from "~/assets/images/bg-group8.jpg";
import bgImage9 from "~/assets/images/bg-group9.jpg";
import bgImage10 from "~/assets/images/bg-group10.jpg";
var megaProductList = [
	{
		title: "Gifts Under 150 €",
		imageSrc: "/images/bag-culture.jpg",
		linkList: [
			{
				name: "MEN",
				href: "/",
			},
			{
				name: "WOMEN",
				href: "/",
			},
			{
				name: "HOME",
				href: "/",
			},
		],
	},
	{
		title: "Gifts Under 75 €",
		imageSrc: "/images/polo-tshirt.jpg",
		linkList: [
			{
				name: "boys",
				href: "/",
			},
			{
				name: "girls",
				href: "/",
			},
			{
				name: "baby",
				href: "/",
			},
		],
	},
];
</script>

<style scoped lang="scss">
.gift-navbar {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background: #05281b;
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
</style>

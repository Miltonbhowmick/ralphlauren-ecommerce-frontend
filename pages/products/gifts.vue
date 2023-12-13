<template>
	<CustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/slider-bg-blur.jpg'"
		:isBackgroundImage="true"
		:title="'Our Favourites'"
		:subTitle="'Signature Ralph Lauren gifts for everyone on your list'"
	/>
	<RowMegaProduct :backgroundImage="bgImage" :itemList="megaProductList" />
</template>

<script setup>
import bgImage from "~/assets/images/bg-group4.jpg";

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
.kids-navbar {
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
</style>

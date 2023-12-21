<template>
	<CustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/slider-bg-blur.jpg'"
		:isBackgroundImage="true"
		:title="'Our Favourites'"
		:subTitle="'Signature Ralph Lauren gifts for everyone on your list'"
	/>
	<BundleCustomSlider
		:backgroundImage="'/images/bg-ring.jpg'"
		:left="true"
		:subTitle="'Set the Table'"
		:description="'Holiday heritage motifs and striking accents for seasonal celebrations'"
	/>
	<SingleImageBannerCustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/bg-ring.jpg'"
		:isBackgroundImage="true"
		:title="'Seasonal Polo Bears'"
		class="mt-60"
	/>
	<RowCustomSlider />
	<ModernCustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/bg-ring.jpg'"
		:isBackgroundImage="true"
		:smallBigTitle="{ small: 'discover', big: 'Men’s Brands' }"
		:description="'From the iconic men’s Ralph Lauren Polo shirt to the artful craftsmanship of Purple Label, rugged luxury of Double RL and peak RLX performance, the World of Ralph Lauren men is rooted in timeless design'"
		:exploreLink="true"
	/>
	<VideoBubbleImageSlider class="mt-60" />
	<SingleLookCustomSlider />
	<LadderLookCustomSlider :itemList="ladderSliderProducts" />
	<ImageBannerCustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/image-slider-bg.jpg'"
		:isBackgroundImage="true"
		:title="'Seasonal Polo Bears'"
		class="mt-60"
	/>
	<HalfBackgroundCustomSlider
		:headerLogo="'/images/lauren_ralph_lauren_logo_white.svg'"
		:backgroundImage="'/images/half-bg-1.jpg'"
		:isBackgroundImage="true"
		:title="'Gifts for Him'"
		:subTitle="'Surprise him with presents he’ll cherish'"
	/>
	<CustomSubCategorySlider :perPage="4"></CustomSubCategorySlider>
</template>

<script setup>
var ladderSliderProducts = [
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
];
</script>

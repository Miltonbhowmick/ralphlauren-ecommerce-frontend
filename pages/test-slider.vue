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
		:linkList="[
			{ name: 'men' },
			{ name: 'women' },
			{ name: 'boys' },
			{ name: 'girls' },
		]"
	/>
	<BundleCustomSliderTypo
		:backgroundImage="'/images/bg-ring.jpg'"
		:left="true"
		:subTitle="'Set the Table'"
		:description="'Holiday heritage motifs and striking accents for seasonal celebrations'"
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
	<TwoImage
		:backgroundImage="bgImage16"
		:itemList="[
			{
				imageSrc: '/images/sit-girls.jpg',
				content: {
					linkList: [
						{
							name: 'COLLECTION',
						},
					],
				},
			},
			{
				imageSrc: '/images/1102_holiday_seasonal_lp_c06b_img.jpg',
				content: {
					linkList: [
						{
							name: 'PURPLE LABEL',
						},
					],
				},
			},
		]"
	/>
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

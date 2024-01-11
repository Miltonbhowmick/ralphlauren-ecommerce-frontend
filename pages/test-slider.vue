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
	<h1>Single Image Banner Custom Slider</h1>
	<SingleImageBannerCustomSlider
		class="mt-60"
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
	/>
	<RowImageHolidayPack
		:mediumTitle="'The Fleece-Lined Denim Western Overshirt'"
		:down="true"
		:rowImageList="[
			{ imageSrc: '/images/stand-sit-eye-catching.jpg' },
			{ imageSrc: '/images/jeans-pocket.jpg' },
			{ imageSrc: '/images/jeans-jacket-boy.jpg' },
		]"
		:miniDescription="'A celebration of bold individuality, exquisite craftsmanship and exceptional personal style'"
		:linkList="[{ name: 'SHOP now', src: '' }]"
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
	<VideoBanner
		:videoSrc="'/videos/video_banner.mp4'"
		:title="'Personalised Gifts'"
		:links="[
			{ title: 'men', src: '/' },
			{ title: 'women', src: '/' },
			{ title: 'boys', src: '/' },
		]"
		:bottom="true"
		class="mt-60"
	/>
	<VideoBannerPolo
		:title="'POLO'"
		:subTitle="'Holiday Dressing'"
		:videoSrc="'/videos/video-banner-group.mp4'"
		:companyLogo="'/images/company-logo.png'"
		:linkList="[{ name: 'men' }, { name: 'women' }, { name: 'baby' }]"
		:down="true"
		class="mt-60"
	/>
	<VideoBubbleImageSlider class="mt-60" />
	<SingleLookCustomSlider />
	<LadderLookCustomSlider :itemList="ladderSliderProducts" />
	<ImageBannerCustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/image-slider-bg.jpg'"
		:isBackgroundImage="true"
		:heroBannerImage="'/images/1228_kids_hub_c06_img.jpg'"
		:title="'Seasonal Polo Bears'"
		class="mt-60"
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
	/>
	<HeroBanner
		:down="true"
		:backgroundImage="'/images/1120_m_polo_hub_c04_img.jpg'"
		:textColor="'#fff'"
		:title="'best of polo'"
		:description="'Discover a timely selection of jumpers, sleepwear, outerwear and more, all in time for the holidays'"
		:linkList="[
			{
				name: 'shop now',
				src: '',
			},
		]"
	/>
	<HalfBackgroundCustomSlider
		:headerLogo="'/images/rl_collection_white_logo.svg'"
		:backgroundImage="'/images/half-bg.jpg'"
		:isBackgroundImage="true"
		:title="'Gifts for Him'"
		:subTitle="'Surprise him with presents he’ll cherish'"
	/>
	<HalfFrameCustomSlider
		:headlineBlack="true"
		:backgroundImage="'/images/bg-group19.jpg'"
		:isBackgroundImage="true"
		:mediumTitle="'Layered for Warmth'"
		:linkList="[{ name: 'shop shirt jacket & layers', src: '' }]"
		:sliderList="[
			{
				imageSrc: '/images/huti-group.jpg',
			},
			{
				imageSrc: '/images/warm-shirts-full.jpg',
			},
			{
				imageSrc: '/images/warm-shirts-long.jpg',
			},
		]"
	/>
	<HalfBackgroundCustomSlider
		:headerLogo="'/images/lauren_ralph_lauren_logo_white.svg'"
		:backgroundImage="'/images/half-bg-1.jpg'"
		:isBackgroundImage="true"
		:title="'Gifts for Him'"
		:subTitle="'Surprise him with presents he’ll cherish'"
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
		class="mt-60"
	/>
	<SubCategoryBanner />
	<SinglePack class="mt-60" />
	<ExplorePack class="mt-60" />
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
	<NewsPaperStyleCustomSlider
		:perSlider="1"
		:itemList="[
			{
				imageSrc: '/images/news-paper-style-slide.jpg',
				content: {
					issueNo: '03',
					subTitle: 'Boss Tweed Ties? Yes, Ties! And more ...',
					description:
						'Somehow, it just wouldn’t feel like fall here at Polo without having a little <i>big</i> tweed in your wardrobe – crunchy wools in checks of cognac and camel or charcoal and grey that have been exploded this season in size to become statement pieces. In addition to a mix of notes on other matters of style, we’ve also put together a special package of stories on the meaning of the necktie. – The Editors',
					linkList: [{ name: 'shop now', src: '' }],
				},
				zeroMargin: true,
			},
			{
				imageSrc: '/images/news-paper-style-slide-2.jpg',
				content: {
					issueNo: '03',
					subTitle: 'Boss Tweed Ties? Yes, Ties! And more ...',
					description:
						'Somehow, it just wouldn’t feel like fall here at Polo without having a little <i>big</i> tweed in your wardrobe – crunchy wools in checks of cognac and camel or charcoal and grey that have been exploded this season in size to become statement pieces. In addition to a mix of notes on other matters of style, we’ve also put together a special package of stories on the meaning of the necktie. – The Editors',
					linkList: [{ name: 'shop now', src: '' }],
				},
				zeroMargin: true,
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

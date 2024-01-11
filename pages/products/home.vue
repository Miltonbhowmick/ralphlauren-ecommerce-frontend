<template>
	<section class="home-page">
		<RowCustomSlider
			:perSlider="1"
			:itemList="[
				{
					videoSrc: '/videos/1440X720-BeddingShop-DSK.mp4',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'active club',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						down: true,
					},
					zeroMargin: true,
				},
				{
					videoSrc: null,
					imageSrc: '/images/0104_home_hub_c01a_img.jpg',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'winter alpine',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						down: true,
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
			:backgroundImage="'/images/0104_home_hub_c02_bg.jpg'"
			:isBackgroundImage="true"
			:title="'The Shops'"
			:subTitle="'Signature collections and seasonal edits'"
			:slideList="[
				{
					imageSrc: '/images/0104_home_hub_m_c02a_img.jpg',
					content: {
						title: 'home comforts',
					},
				},
				{
					imageSrc: '/images/0104_home_hub_m_c02b_img.jpg',
					content: {
						title: 'bedding shop',
					},
				},
				{
					imageSrc: '/images/0104_home_hub_m_c02c_img.jpg',
					content: {
						title: 'towels & bath mats',
					},
				},
			]"
		/>
		<SubCategoryBanner />
		<VideoBanner :videoSrc="'/videos/home-video.mp4'" />
		<HolidayPack
			:backgroundImage="bgGroupImage"
			:up="true"
			:subTitle="'For the Holidays'"
			:description="'Iconic dining collections for elegant entertaining and perfect gifts to celebrate the season'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<BundleCustomSlider
			:backgroundImage="bgGroupImage2"
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
		<VideoBannerPolo
			:videoSrc="'/videos/MartiniGlass-DSK.mp4'"
			:subTitle="'The Langley Martini Glass'"
			:linkList="[{ name: 'men' }, { name: 'women' }, { name: 'baby' }]"
			:description="'Crystal delicately cut with coin-edge detailing inspired by a classic Ralph Lauren watch'"
			:right="true"
		/>
		<BundleCustomSlider
			:backgroundImage="bgGroupImage2"
			:left="true"
			:subTitle="'For the Host'"
			:description="'Elegant home gifts to make a thoughtful gesture'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
		/>
		<div class="mt-60">
			<CustomSlider
				:headlineBlack="true"
				:isBackgroundImage="false"
				:title="'More to Explore'"
				:subTitle="'Discover our curated edits and seasonal collections'"
				:slideList="[
					{
						imageSrc: '/images/0104_home_hub_m_c09b_img.jpg',
						content: {
							title: 'home court',
						},
					},
					{
						imageSrc: '/images/0104_home_hub_m_c10b_img.jpg',
						content: {
							title: 'new arrivals',
						},
					},
					{
						imageSrc: '/images/0104_home_hub_m_c10c_img.jpg',
						content: {
							title: 'the polo towel',
						},
					},
					{
						imageSrc: '/images/0104_home_hub_m_c10d_img.jpg',
						content: {
							title: 'polo bear shop',
						},
					},
				]"
			/>
		</div>
	</section>
</template>

<script setup>
import bgGroupImage from "~/assets/images/bg-group2.jpg";
import bgGroupImage2 from "~/assets/images/bg-group3.jpg";

const showSidebarDetail = ref(false);

const openSidebarDetail = () => {
	showSidebarDetail.value = true;
};
const hideSidebarDetail = () => {
	showSidebarDetail.value = false;
};
</script>

<style scoped lang="scss">
section.home-page {
	margin-top: -58px;
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
}
</style>

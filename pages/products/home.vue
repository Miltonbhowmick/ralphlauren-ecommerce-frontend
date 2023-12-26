<template>
	<CustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/slider-bg-1.jpg'"
		:isBackgroundImage="true"
		:title="'The Shops'"
		:subTitle="'Signature collections and seasonal edits'"
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
	/>
	<div class="mt-60">
		<CustomSlider
			:headlineBlack="true"
			:isBackgroundImage="false"
			:title="'More to Explore'"
			:subTitle="'Discover our curated edits and seasonal collections'"
		/>
	</div>
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

<template>
	<CustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/slider-bg-1.jpg'"
		:isBackgroundImage="true"
		:title="'The Shops'"
		:subTitle="'Signature collections and seasonal edits'"
	/>
	<SubCategoryBanner />
	<div class="mt-60">
		<ProductGellary @openProductSidebar="openSidebarDetail" />
	</div>
	<VideeBubbleImageSlider class="mt-60" />
	<HolidayPack :backgroundImage="holidayPackBgImage" class="mt-60" />

	<ImageBannerCustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/image-slider-bg.jpg'"
		:isBackgroundImage="true"
		:title="'Seasonal Polo Bears'"
		class="mt-60"
	/>
	<VideeBubbleImageSlider class="mt-60" />

	<SidebarProductDetail
		v-if="showSidebarDetail"
		@hideModal="hideSidebarDetail"
	/>
</template>

<script setup>
import holidayPackBgImage from "~/assets/images/bg-group1.jpg";

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

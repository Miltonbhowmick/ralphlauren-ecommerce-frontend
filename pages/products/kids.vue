<template>
	<div class="kids-navbar">
		<ul>
			<li class="active"><a>Shop Kids</a></li>
			<li><a>Shop Baby</a></li>
		</ul>
	</div>
	<CustomSlider
		:headlineBlack="false"
		:backgroundImage="'/images/leaf-bg.jpg'"
		:isBackgroundImage="true"
		:title="'The Shops'"
		:subTitle="'Signature collections and seasonal edits'"
	/>
	<div class="slider-bg">
		<div class="normal-banner">
			<img src="/images/normal-full-switer.jpg" alt="normal-full-switer" />
		</div>
		<div class="slider-box">
			<h2 class="title">Women: Shop by Category</h2>
			<CustomSubCategorySlider :perPage="4"></CustomSubCategorySlider>
		</div>
	</div>
	<div class="mt-60">
		<CustomSlider
			:headlineBlack="false"
			:backgroundImage="'/images/blur-leaf-bg.jpg'"
			:isBackgroundImage="true"
			:title="'Gifts for Kids'"
			:subTitle="'Let them unwrap the magic and joy of the season'"
		/>
	</div>
	<div class="mt-60">
		<ProductGellary @openProductSidebar="openSidebarDetail" />
	</div>

	<SidebarProductDetail
		v-if="showSidebarDetail"
		@hideModal="hideSidebarDetail"
	/>
</template>

<script setup>
const showSidebarDetail = ref(true);

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

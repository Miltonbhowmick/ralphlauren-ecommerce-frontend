<template>
	<div>
		<div class="slider-box">
			<h2 class="title">Women: Shop by Category</h2>
			<CustomSubCategorySlider :perPage="4"></CustomSubCategorySlider>
		</div>
		<VideoBanner
			:videoSrc="'/videos/video-banner-walk.mp4'"
			:textImage="'/images/2023_polo_air_naiomi_glasses_logo_en.svg'"
			:subTitle="'Polo Ralph Lauren x Naiomi Glasses, the inaugural collaboration of the Ralph Lauren Artist in Residence programme, honours Navajo heritage and centuries-old weaving traditions '"
			:links="[{ title: 'explore now', src: '/' }]"
			:right="true"
			class="mt-60"
		/>
		<div class="mt-60">
			<CustomSlider
				:headlineBlack="true"
				:backgroundImage="'/images/slider-bg-blur.jpg'"
				:isBackgroundImage="true"
				:title="'Gifts for Him'"
				:subTitle="'Surprise him with presents he’ll cherish'"
			/>
		</div>
		<div class="mt-60">
			<HalfBackgroundCustomSlider
				:headerLogo="'/images/rl_collection_white_logo.svg'"
				:backgroundImage="'/images/half-bg.jpg'"
				:isBackgroundImage="true"
				:title="'Gifts for Him'"
				:subTitle="'Surprise him with presents he’ll cherish'"
			/>
		</div>
		<div class="mt-60">
			<HalfBackgroundCustomSlider
				:headerLogo="'/images/lauren_ralph_lauren_logo_white.svg'"
				:backgroundImage="'/images/half-bg-1.jpg'"
				:isBackgroundImage="true"
				:title="'Gifts for Him'"
				:subTitle="'Surprise him with presents he’ll cherish'"
			/>
		</div>
		<div class="mt-60">
			<CustomSlider
				:headlineBlack="true"
				:backgroundImage="'/images/bg-light.jpg'"
				:isBackgroundImage="true"
				:title="'More to Explore'"
				:subTitle="'Discover our curated edits and seasonal collections'"
			/>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.slider-box {
	padding: 40px 30px;
	.title {
		font-family: "LeJeuneDeck-Regular", Times, serif;
		font-size: 28px;
		font-weight: 500;
		line-height: 1.429em;
		margin-left: 10px;
	}
}
</style>

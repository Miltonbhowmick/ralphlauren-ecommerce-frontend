<template>
	<div>
		<div class="slider-box">
			<h2 class="title">Men: Shop by Category</h2>
			<CustomSubCategorySlider :perPage="4"></CustomSubCategorySlider>
		</div>
		<div class="mt-60">
			<CustomSlider
				:isBackgroundImage="true"
				:title="'Gifts for Him'"
				:subTitle="'Surprise him with presents he’ll cherish'"
			/>
		</div>
		<VideoBanner
			:videoSrc="'/videos/video-banner-walk.mp4'"
			:textImage="'/images/2023_polo_air_naiomi_glasses_logo_en.svg'"
			:subTitle="'Polo Ralph Lauren x Naiomi Glasses, the inaugural collaboration of the Ralph Lauren Artist in Residence programme, honours Navajo heritage and centuries-old weaving traditions '"
			:links="[{ title: 'explore now', src: '/' }]"
			:right="true"
			class="mt-60"
		/>
		<ClassicStyle class="mt-60" />
		<div class="mt-60">
			<CustomSlider
				:isBackgroundImage="false"
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
		font-size: 25px;
		font-weight: 500;
		line-height: 1.429em;
		margin-left: 10px;
	}
}
</style>

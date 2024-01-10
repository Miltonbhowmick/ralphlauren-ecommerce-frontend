<template>
	<div>
		<RowCustomSlider
			:perSlider="1"
			:itemList="[
				{
					videoSrc:
						'/videos/1228 Mens Polo_ Active Club_23_HP HUB_DSK_1440x720.mp4',
					imageSrc: null,
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'active club',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						left: true,
					},
					zeroMargin: true,
				},
				{
					videoSrc: null,
					imageSrc: '/images/1228_hp_c01b_img.jpg',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'winter alpine',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						left: true,
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
				:headlineBlack="true"
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
		font-size: 28px;
		font-weight: 500;
		line-height: 1.429em;
		margin-left: 10px;
	}
}
</style>

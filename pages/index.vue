<template>
	<div>
		<HeroBanner />
		<CustomSlider
			:headlineBlack="true"
			:backgroundImage="'/images/slider-bg.jpg'"
			:title="'asdasd'"
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
		<VideeBubbleImageSlider class="mt-60" />
		<HolidayPack :backgroundImage="bgGroup" class="mt-60" />
		<HallFamePack class="mt-60" />
		<VideoBannerPolo class="mt-60" />
		<SinglePack class="mt-60" />
		<ExplorePack class="mt-60" />
	</div>
</template>

<script setup>
import bgGroup from "~/assets/images/bg-group.jpg";
</script>

<style scoped lang="scss">
.mt-60 {
	margin-top: 60px;
}
</style>

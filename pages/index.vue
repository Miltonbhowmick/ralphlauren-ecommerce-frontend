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
		<VideoBubbleImageSlider class="mt-60" />
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
		<HallFamePack class="mt-60" />
		<VideoBannerPolo
			:title="'POLO'"
			:subTitle="'Holiday Dressing'"
			:videoSrc="'/videos/video-banner-group.mp4'"
			:companyLogo="'/images/company-logo.png'"
			:linkList="[{ name: 'men' }, { name: 'women' }, { name: 'baby' }]"
			:down="true"
			class="mt-60"
		/>
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

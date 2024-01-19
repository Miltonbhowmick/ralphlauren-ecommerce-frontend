<template>
	<section
		class="video-grid-slider"
		:style="{ backgroundImage: `url(${props?.backgroundImage})` }"
	>
		<div class="photo-gellary">
			<div class="images-list">
				<div v-for="(item, idx) in photoList" :key="idx" class="image">
					<img v-if="item?.imageSrc" :src="item?.imageSrc" />
					<video
						v-else-if="item?.videoSrc"
						autoplay
						muted
						loop
						id="bg-video"
						:style="{ width: '100%', height: '100%' }"
					>
						<source :src="item?.videoSrc" type="video/mp4" />
					</video>
				</div>
			</div>
		</div>
		<div class="header">
			<h3 v-if="props?.header?.title" class="title">
				{{ props?.header?.title }}
			</h3>
			<ul class="category-list">
				<li v-for="(obj, idx) in props?.header?.linkList" :key="idx">
					<a>{{ obj.name }}</a>
				</li>
			</ul>
		</div>
		<div class="mt-60">
			<RowTransparentImageCustomSlider
				:perSlider="props?.perSlider"
				:itemList="props?.itemList"
			/>
		</div>
	</section>
</template>
<script setup>
const props = defineProps({
	isBackgroundImage: true,
	backgroundImage: null,
	photoList: null,
	header: null,
	perSlider: 3,
	itemList: null,
});
</script>

<style scoped lang="scss">
section.video-grid-slider {
	background-size: 100%;
	background-repeat: no-repeat;
	padding: 40px 0;
	.photo-gellary {
		padding: 0 4rem;
		.images-list {
			display: flex;
			justify-content: space-between;
			.image {
				display: flex;
				width: 100%;
			}
			.video {
				width: 100%;
			}
		}
	}
	.header {
		.title {
			font-family: "Founders Grotesk text Regular", "Times New Roman", Times,
				serif monospace;
			font-size: 1.5em;
			line-height: 1.5em;
			letter-spacing: 0.042em;
			text-align: center;
			text-transform: uppercase;
		}
		.category-list {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			justify-content: center;
			gap: 20px;
			li {
				a {
					color: #000;
					text-transform: uppercase;
					font-size: 10px;
					text-decoration: underline;
					text-underline-offset: 9px;
					text-decoration-color: #000;
				}
			}
		}
	}
}
</style>

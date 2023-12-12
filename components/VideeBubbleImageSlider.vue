<template>
	<div
		class="gift-pack-box"
		:style="{
			backgroundImage: `url(${bgImage})`,
		}"
	>
		<div class="content">
			<div class="video-box">
				<video autoplay muted loop id="product-video" class="video">
					<source src="/videos/product-video.mp4" type="video/mp4" />
				</video>
				<div class="video-pause-box" @click="toggleVideoPlay">
					<button v-if="videoPlaying" class="playing"></button>
					<button v-else class="pause"></button>
				</div>
			</div>
			<div class="slider-box">
				<div class="slide">
					<img src="/images/pack-slider/slider1.jpg" alt="slider-1" />
				</div>
			</div>
		</div>
	</div>
</template>
<script setup>
import bgImage from "~/assets/images/bg-1.jpg";

// bgImage = bgImage;
var videoPlaying = ref(true);

const toggleVideoPlay = () => {
	videoPlaying.value = !videoPlaying.value;
	if (videoPlaying.value === true) {
		document.getElementById("product-video").play();
	} else {
		document.getElementById("product-video").pause();
	}
};
</script>

<style scoped lang="scss">
.gift-pack-box {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	.content {
		padding: 100px 100px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.video-box {
			position: relative;
			.video {
				width: 80%;
			}
			.video-pause-box {
				position: absolute;
				left: 30px;
				bottom: 20px;
				width: 30px;
				height: 30px;
				border-radius: 100%;
				border: 2px solid #ffffff;
				.playing {
					padding: 0;
					position: absolute;
					top: 10px;
					left: 10px;
					width: 10px;
					height: 10px;
					background: none;
					border-right: 2px solid #ffffff;
					border-left: 2px solid #ffffff;
					border-top: 0;
					border-bottom: 0;
				}
				.pause {
					padding: 0;
					position: absolute;
					top: 10px;
					left: 12px;
					background: none;
					width: 0;
					height: 0;
					border-top: 6px solid transparent;
					border-bottom: 6px solid transparent;
					border-left: 11px solid #ffffff;
				}
			}
		}
		.slider-box {
			width: 45%;
			.slide {
				width: 80%;
			}
		}
	}
}
</style>

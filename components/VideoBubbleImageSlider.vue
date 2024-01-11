<template>
	<div
		class="gift-pack-box"
		:style="{
			backgroundImage: `url(${props?.backgroundImage})`,
		}"
	>
		<div class="content">
			<div v-if="props?.sideImage" class="images-box">
				<div class="image"><img :src="props?.sideImage?.imageSrc" /></div>
				<div v-if="props?.sideImage?.content" class="image-content">
					<h5 v-if="props?.sideImage?.content?.title" class="title">
						{{ props?.sideImage?.content?.title }}
					</h5>
				</div>
			</div>
			<div v-else class="video-box">
				<video autoplay muted loop id="product-video" class="video">
					<source src="/videos/product-video.mp4" type="video/mp4" />
				</video>
				<div class="video-pause-box" @click="toggleVideoPlay">
					<button v-if="videoPlaying" class="playing"></button>
					<button v-else class="pause"></button>
				</div>
			</div>
			<div v-if="props?.sliderList" class="slider-box">
				<carousel :per-page="1" :mouse-drag="true" :paginationEnabled="false">
					<slide
						v-for="(slideItem, slide_id) in props?.sliderList"
						:key="'slide_' + slide_id"
						class="cs-slider"
						><div class="slider-image">
							<img :src="slideItem?.imageSrc" />
						</div>
						<div
							v-if="slideItem?.content"
							class="slider-content"
							:class="{ 'down-left': slideItem?.content?.downLeft }"
						>
							<h5 class="mini-title">{{ slideItem?.content?.miniTitle }}</h5>
						</div>
						<div class="slide-count">
							{{ slide_id + 1 }}/{{ props?.sliderList.length }}
						</div>
					</slide>
				</carousel>
			</div>
		</div>
	</div>
</template>
<script setup>
import bgImage from "~/assets/images/bg-1.jpg";

const props = defineProps({
	sideImage: null,
	backgroundImage: null,
	sliderList: null,
});

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
	display: flex;
	.content {
		padding: 6.25rem 9rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		.images-box {
			position: relative;
			.image {
				width: 70%;
			}
			.image-content {
				position: absolute;
				bottom: 20px;
				left: 40px;
				.title {
					color: #ffffff;
					font-family: "Founders Grotesk mono Regular";
					font-size: 0.963em;
					color: #ffffff;
					letter-spacing: 0.4em;
					line-height: 2.333em;
					text-transform: uppercase;
				}
			}
		}
		.video-box {
			position: relative;
			.video {
				// width: 80%;
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
			.cs-slider {
				position: relative;
				.slider-content {
					position: absolute;
					&.left {
						left: 10px;
					}
					&.right {
						right: 10px;
					}
					&.down-left {
						left: 10px;
						bottom: 10px;
					}

					.mini-title {
						margin: 0;
						font-family: "Founders Grotesk text Regular";
						font-size: 0.763em;
						color: #ffffff;
						letter-spacing: 0.4em;
						line-height: 2.333em;
						text-transform: uppercase;
					}
				}
				.slide-count {
					color: #ffffff;
					position: absolute;
					right: 10px;
					bottom: 10px;
					font-family: "Founders Grotesk text Regular";
					font-size: 0.763em;
					color: #ffffff;
					letter-spacing: 0.4em;
					line-height: 2.333em;
					text-transform: uppercase;
				}
			}
		}
	}
}
</style>

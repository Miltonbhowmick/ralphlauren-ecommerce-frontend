<template>
	<div class="video-banner-box">
		<video autoplay muted loop id="bg-video" class="video">
			<source :src="props.videoSrc" type="video/mp4" />
		</video>
		<div
			class="content"
			:class="{
				'side-bottom': props.bottom,
				'side-right': props.right,
				'side-left': props.left,
			}"
		>
			<div v-if="props.textImage" class="text-image">
				<img :src="props.textImage" alt="text-image" />
			</div>
			<h2 v-if="props.title" class="title">{{ props.title }}</h2>
			<p v-if="props.subTitle" class="subtitle">{{ props.subTitle }}</p>
			<ul>
				<li v-for="(item, idx) in props.links" :key="idx">
					<nuxt-link :to="item.src">{{ item.title }}</nuxt-link>
				</li>
			</ul>
		</div>
		<div class="video-pause-box" @click="toggleVideoPlay">
			<button v-if="videoPlaying" class="playing"></button>
			<button v-else class="pause"></button>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	videoSrc: null,
	textImage: null,
	title: null,
	subTitle: null,
	links: null,
	bottom: false,
	left: false,
	right: false,
});

var videoPlaying = ref(true);

const toggleVideoPlay = () => {
	videoPlaying.value = !videoPlaying.value;
	if (videoPlaying.value === true) {
		document.getElementById("bg-video").play();
	} else {
		document.getElementById("bg-video").pause();
	}
};
</script>

<style scoped lang="scss">
.video-banner-box {
	position: relative;
	.video {
		width: 100%;
	}
	.content {
		position: absolute;
		z-index: 999;
		width: 40%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		&.side-bottom {
			bottom: 30px;
			left: 50%;
			transform: translateX(-50%);
		}
		&.side-right {
			top: 50%;
			right: 60px;
			transform: translateY(-50%);
		}
		&.side-left {
			top: 50%;
			left: 60px;
			transform: translateY(-50%);
		}
		.text-image {
			width: 40%;
		}
		.title {
			font-family: "Northwell Alt", cursive;
			margin: 0;
			font-size: 50px;
			color: #ffffff;
			text-align: center;
		}
		.subtitle {
			margin: 0;
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-size: 1.225rem;
			color: #ffffff;
			text-align: center;
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			justify-content: center;
			gap: 20px;
			li {
				a {
					color: #ffffff;
					font-size: 10px;
					text-transform: uppercase;
					text-decoration: underline;
					text-underline-offset: 15px;
					text-decoration-color: #ffffff;
					&:hover {
						text-underline-offset: 9px;
						transition: 400ms ease-in-out;
					}
				}
			}
		}
	}
	.video-pause-box {
		position: absolute;
		left: 40px;
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
</style>

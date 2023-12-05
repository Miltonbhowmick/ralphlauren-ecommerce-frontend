<template>
	<div class="video-banner-box">
		<video autoplay muted loop id="bg-video" class="video">
			<source src="/videos/video_banner.mp4" type="video/mp4" />
		</video>
		<div class="content">
			<h2 class="title">Personalized Gifts</h2>
			<ul>
				<li><a>men</a></li>
				<li><a>women</a></li>
				<li><a>boys</a></li>
				<li><a>girls</a></li>
				<li><a>baby</a></li>
				<li><a>home</a></li>
			</ul>
		</div>
		<div class="video-pause-box" @click="toggleVideoPlay">
			<button v-if="videoPlaying" class="playing"></button>
			<button v-else class="pause"></button>
		</div>
	</div>
</template>

<script setup>
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
	margin-top: 60px;
	position: relative;
	.video {
		width: 100%;
	}
	.content {
		position: absolute;
		bottom: 30px;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 30px;
		.title {
			font-family: "Northwell Alt", cursive;
			margin: 0;
			font-size: 50px;
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
					text-transform: uppercase;
					font-size: 10px;
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

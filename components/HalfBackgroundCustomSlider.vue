<template>
	<div
		class="slider-content"
		:class="{
			'h-min-60': props.isBackgroundImage,
			'h-min-20': !props.isBackgroundImage,
		}"
	>
		<div class="header">
			<div v-if="props.headerLogo" class="logo">
				<img :src="props.headerLogo" />
			</div>
		</div>
		<div v-if="props.isBackgroundImage" class="banner">
			<img :src="props.backgroundImage" alt="slider-bg" />
		</div>
		<carousel
			:per-page="1"
			:mouse-drag="true"
			:navigationEnabled="true"
			:paginationEnabled="false"
		>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/women-dress-1.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Polo Bear Shop</h2>
					<ul>
						<li><a>men</a></li>
						<li><a>women</a></li>
						<li><a>boys</a></li>
						<li><a>girls</a></li>
						<li><a>baby</a></li>
						<li><a>home</a></li>
					</ul>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/women-dress-2.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Our Favourites</h2>
					<ul>
						<li><a>men</a></li>
						<li><a>women</a></li>
						<li><a>boys</a></li>
						<li><a>girls</a></li>
						<li><a>baby</a></li>
						<li><a>home</a></li>
					</ul>
				</div></slide
			>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/women-dress-3.jpg" />
				</div>
				<div class="content">
					<h2 class="title">For the Host</h2>
					<ul>
						<li><a>shop</a></li>
						<li><a>now</a></li>
					</ul>
				</div>
			</slide>
			<slide class="cs-slider">
				<div class="slider-video">
					<video autoplay muted loop id="slider-bg-video">
						<source src="/videos/Lauren_Holiday.mp4" type="video/mp4" />
					</video>
					<div class="video-pause-box" @click="toggleVideoPlay">
						<button v-if="videoPlaying" class="playing"></button>
						<button v-else class="pause"></button>
					</div>
				</div>
				<div class="content">
					<h2 class="title">For the Host</h2>
					<ul>
						<li><a>shop</a></li>
						<li><a>now</a></li>
					</ul>
				</div>
			</slide>
		</carousel>
	</div>
</template>
<script setup>
const props = defineProps({
	headerLogo: null,
	isBackgroundImage: true,
	backgroundImage: null,
	title: null,
	subTitle: null,
	exploreLink: null,
});

var videoPlaying = ref(true);

const toggleVideoPlay = () => {
	videoPlaying.value = !videoPlaying.value;
	if (videoPlaying.value === true) {
		document.getElementById("slider-bg-video").play();
	} else {
		document.getElementById("slider-bg-video").pause();
	}
};
</script>

<style scoped lang="scss">
.slider-content {
	margin-top: -4px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	&.h-min-50 {
		min-height: 60em;
	}
	&.h-min-20 {
		min-height: 20em;
	}

	.header {
		width: 60em;
		padding: 10px 40px;
		z-index: 999;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		.logo {
			margin: 35px 0px;
			width: 20%;
		}
	}
	.banner {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
	}
	.cs-slider {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 15px;
		.slider-image {
			width: 50%;
			display: flex;
			justify-content: center;
		}
		.slider-video {
			position: relative;
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
		.content {
			display: flex;
			flex-direction: column;
			gap: 10px;
			.title {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 30px;
				color: #041e3a;
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
						color: #041e3a;
						text-transform: uppercase;
						font-size: 9px;
					}
				}
			}
		}
	}
}

:deep(.VueCarousel-slide) {
	margin: 10px;
}
</style>

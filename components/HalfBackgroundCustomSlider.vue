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
			v-if="props?.slideList"
			:per-page="1"
			:mouse-drag="true"
			:navigationEnabled="false"
			:paginationEnabled="false"
		>
			<slide
				v-for="(slideItem, slideId) in props?.slideList"
				:key="'slide_' + slideId"
				class="cs-slider"
				><div v-if="slideItem?.imageSrc" class="slider-image">
					<img :src="slideItem?.imageSrc" :alt="slideItem?.content?.title" />
				</div>
				<div v-else-if="slideItem?.videoSrc" class="slider-video">
					<video autoplay muted loop id="bg-video">
						<source :src="slideItem?.videoSrc" type="video/mp4" />
					</video>
				</div>
				<div v-if="slideItem?.content" class="content">
					<h2 v-if="slideItem?.content?.title" class="title">
						{{ slideItem?.content?.title }}
					</h2>
					<h3 v-if="slideItem?.content?.boldMinititle" class="bold-mini-title">
						{{ slideItem?.content?.boldMinititle }}
					</h3>
					<ul>
						<li
							v-for="(linkObj, linkId) in slideItem?.content?.linkList"
							:key="'link_' + linkId"
						>
							<a :href="linkObj.src">{{ linkObj.name }}</a>
						</li>
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
	slideList: null,
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
			width: 60%;
			display: flex;
			justify-content: center;
		}
		.slider-video {
			width: 60%;
			video {
			}
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
				text-transform: capitalize;
			}
			.bold-mini-title {
				margin: 0;
				font-family: "SackersGothicW01-Heavy", Arial, Helvetica, sans-serif;
				letter-spacing: 0.8em;
				text-transform: uppercase;
				font-size: 1.3375em;
				font-weight: 600;
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
						display: block;
						height: 2rem;
						color: #041e3a;
						text-transform: uppercase;
						font-size: 9px;
						text-decoration: underline;
						text-underline-offset: 15px;
						text-decoration-color: #041e3a;
						&:hover {
							cursor: pointer;
							text-underline-offset: 9px;
							transition: text-underline-offset 300ms ease-in-out;
						}
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

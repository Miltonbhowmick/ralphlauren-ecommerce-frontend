<template>
	<div class="video-banner-box">
		<video autoplay muted loop id="bg-group-video" class="video">
			<source :src="props.videoSrc" type="video/mp4" />
		</video>
		<div
			class="content"
			:class="{
				'side-left': props?.left,
				'side-right': props?.right,
				'side-up': props?.up,
				'side-down': props?.down,
				down: props?.down,
				up: props?.up,
				'items-start': props?.left,
				'items-end': props?.right,
			}"
		>
			<h2 v-if="props.title" class="title">{{ props.title }}</h2>
			<h2
				v-if="props.mediumTitle"
				class="title-md"
				:class="{ 'align-right': props?.right, 'align-left': props?.left }"
			>
				{{ props.mediumTitle }}
			</h2>
			<div v-if="props.companyLogo" class="company-logo">
				<img :src="props.companyLogo" alt="company-logo" />
			</div>
			<h5 v-if="props.spaceTitle" class="space-title">
				{{ props.spaceTitle }}
			</h5>
			<h3 v-if="props.subTitle" class="subtitle">{{ props.subTitle }}</h3>
			<p v-if="props.description" class="description">
				{{ props.description }}
			</p>
			<p
				v-if="props.miniDescription"
				class="description-mini"
				:class="{ 'align-right': props?.right, 'align-left': props?.left }"
			>
				{{ props.miniDescription }}
			</p>
			<ul v-if="props.linkList">
				<li v-for="(obj, idx) in props.linkList" :key="idx">
					<a>{{ obj.name }}</a>
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
	title: null,
	mediumTitle: null,
	subTitle: null,
	spaceTitle: null,
	description: null,
	miniDescription: null,
	linkList: null,
	videoSrc: null,
	companyLogo: null,
	left: true,
	right: false,
	down: false,
	up: false,
});

var videoPlaying = ref(true);

const toggleVideoPlay = () => {
	videoPlaying.value = !videoPlaying.value;
	if (videoPlaying.value === true) {
		document.getElementById("bg-group-video").play();
	} else {
		document.getElementById("bg-group-video").pause();
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
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		width: 30%;
		&.side-left {
			left: 40px;
		}
		&.side-right {
			right: 40px;
		}
		&.side-up {
			top: 40px;
		}
		&.side-down {
			bottom: 40px;
		}
		&.down {
			align-self: flex-end;
		}
		&.items-end {
			align-items: flex-end;
		}
		&.up {
			align-self: flex-start;
		}
		&.items-start {
			align-items: flex-start;
		}
		.title {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 100px;
			color: #ffffff;
			&-md {
				@extend .title;
				font-size: 30px;
				font-weight: 300;
			}
		}
		.space-title {
			margin: 0;
			font-family: "SackersGothicW01-Heavy", Arial, Helvetica, sans-serif;
			font-size: 1.125em;
			line-height: 1.944em;
			letter-spacing: 0.417em;
			text-transform: uppercase;
			color: #ffffff;
		}
		.subtitle {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 50px;
			font-weight: 300;
			color: #ffffff;
			text-align: center;
			width: 70%;
		}
		.description {
			width: 70%;
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 20px;
			font-weight: 300;
			color: #ffffff;
			&-mini {
				@extend .description;
				line-height: 20px;
				font-size: 12px;
			}
		}
		.company-logo {
			width: 200px;
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
					text-decoration: underline;
					text-underline-offset: 9px;
					text-decoration-color: #ffffff;
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

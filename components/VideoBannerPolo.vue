<template>
	<div class="video-banner-box">
		<video autoplay muted loop id="bg-group-video" class="video">
			<source :src="props.videoSrc" type="video/mp4" />
		</video>
		<div
			class="content"
			:class="{
				'side-left': props?.left,
				'side-left-down': props?.leftDown,
				'side-right': props?.right,
				'side-up': props?.up,
				'side-down': props?.down,
				'items-start': props?.itemsStart,
			}"
		>
			<h2 v-if="props.title" class="title">{{ props.title }}</h2>
			<h2 v-if="props.normalTitle" class="title-normal">
				{{ props.normalTitle }}
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
				:style="[
					props?.itemsStart === true
						? { 'text-align': 'left' }
						: { 'text-align': '' },
				]"
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
	normalTitle: null,
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
	leftDown: false,
	itemsStart: false,
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
	display: flex;
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
		width: 45%;
		&.side-left {
			top: 50%;
			transform: translateY(-50%);
			left: 20px;
		}
		&.side-left-down {
			left: 5rem;
			bottom: 6rem;
		}
		&.side-right {
			top: 50%;
			transform: translateY(-50%);
			right: 10px;
		}
		&.side-up {
			top: 10px;
			left: 50%;
			transform: translateX(-50%);
		}
		&.side-down {
			bottom: 30px;
			left: 50%;
			transform: translateX(-50%);
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
			text-align: center;
			&-normal {
				@extend .title;
				font-family: "Founders Grotesk text Regular", "Times New Roman", Times,
					serif monospace;
				font-size: 1.975em;
				font-weight: 300;
				letter-spacing: 0.033em;
				text-transform: uppercase;
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
			text-transform: capitalize;
			width: 70%;
		}
		.description {
			width: 70%;
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 20px;
			font-weight: 300;
			color: #ffffff;
			text-align: center;
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

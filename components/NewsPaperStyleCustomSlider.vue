<template>
	<div
		class="slider-content"
		:class="{
			'h-min-60': props.isBackgroundImage,
			'h-min-20': !props.isBackgroundImage,
		}"
	>
		<div v-if="props.isBackgroundImage" class="banner">
			<img :src="props.backgroundImage" alt="slider-bg" />
		</div>
		<carousel
			v-if="props?.itemList"
			:per-page="props?.perSlider"
			:mouse-drag="true"
			:navigationEnabled="false"
			:paginationEnabled="false"
			:autoplay="false"
			:loop="true"
		>
			<slide
				v-for="(item, idx) in props?.itemList"
				:key="idx"
				:class="{ 'm-0': item?.zeroMargin }"
				class="cs-slider"
				><div v-if="item?.imageSrc" class="slider-image">
					<img :src="item?.imageSrc" />
				</div>
				<div v-else-if="item?.videoSrc" class="slider-video">
					<video autoplay muted loop id="bg-video">
						<source :src="item?.videoSrc" type="video/mp4" />
					</video>
				</div>

				<div
					class="content"
					:class="{
						'side-left': item?.content?.left,
						'side-right': item?.content?.right,
						'side-up': props?.content?.up,
						'side-down': props?.content?.down,
						down: props?.content?.down,
						up: props?.content?.up,
						'items-start': props?.content?.left,
						'items-end': props?.content?.right,
					}"
				>
					<div v-if="item?.content?.issueNo" class="issue-box">
						<div class="bg-image">
							<img
								src="/images/issue_number_frame_only_icon_dsk.png"
								alt="issue_number_frame_only_icon_dsk"
							/>
							<span class="value">Issue No.{{ item?.content?.issueNo }}</span>
						</div>
					</div>
					<h2 v-if="item?.content?.title" class="title">
						{{ item?.content.title }}
					</h2>
					<h2
						v-if="item?.content?.mediumTitle"
						class="title-md"
						:class="{ 'align-right': props?.right, 'align-left': props?.left }"
					>
						{{ props?.content?.mediumTitle }}
					</h2>
					<h3 v-if="item?.content?.name" class="normal-name">
						{{ item?.content.name }}
					</h3>
					<div v-if="item?.content?.companyLogo" class="company-logo">
						<img :src="item?.content?.companyLogo" alt="company-logo" />
					</div>
					<h5 v-if="item?.content?.spaceTitle" class="space-title">
						{{ item?.content?.spaceTitle }}
					</h5>
					<h3 v-if="item?.content?.subTitle" class="subtitle">
						{{ item?.content?.subTitle }}
					</h3>
					<p v-html="item?.content?.description" class="description"></p>
					<p
						v-if="item?.content?.miniDescription"
						class="description-mini"
						:class="{ 'align-right': props?.right, 'align-left': props?.left }"
					>
						{{ item?.content?.miniDescription }}
					</p>
					<ul v-if="item?.content?.linkList">
						<li v-for="(obj, idx) in item?.content?.linkList" :key="idx">
							<a>{{ obj.name }}</a>
						</li>
					</ul>
				</div>
			</slide>
		</carousel>
	</div>
</template>
<script setup>
const props = defineProps({
	perSlider: 3,
	headlineBlack: true,
	isBackgroundImage: true,
	backgroundImage: null,
	title: null,
	subTitle: null,
	exploreLink: null,
	itemList: null,
});
</script>

<style scoped lang="scss">
.slider-content {
	padding: 40px 0px;
	margin-top: -4px;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	// background: black;
	&.h-min-60 {
		min-height: 60em;
	}
	&.h-min-20 {
		min-height: 20em;
	}

	.banner {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 45rem;
		width: 100%;
	}
	.cs-slider {
		position: relative;

		.slider-image {
			width: 100%;
		}
		.slider-video {
			video {
				width: 100%;
			}
		}
		.content {
			position: absolute;
			right: 50px;
			top: 50%;
			transform: translateY(-50%);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 10px;
			width: 50%;
			&.side-left {
				left: 40px;
				top: 50%;
				transform: translateY(-50%);
			}
			&.side-right {
				right: 40px;
				top: 50%;
				transform: translateY(-50%);
			}
			&.side-up {
				top: 40px;
				left: 50%;
				transform: translateX(-50%);
			}
			&.side-down {
				bottom: 40px;
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
			.issue-box {
				margin-bottom: 50px;
				position: relative;
				.bg-image {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 15vw;
				}
				.value {
					position: absolute;
					top: 48%;
					left: 50%;
					transform: translate(-50%, -52%);
				}
			}
			.normal-name {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 30px;
				color: #000;
				text-align: center;
			}
			.title {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 100px;
				color: #000;
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
				color: #000;
			}
			.subtitle {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 50px;
				font-weight: 300;
				color: #000;
				text-align: center;
				text-transform: capitalize;
				width: 70%;
			}
			.description {
				width: 70%;
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 1.4em;
				font-weight: 300;
				color: #000;
				text-align: justify;
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
						color: #000;
						text-transform: uppercase;
						font-size: 8px;
						text-decoration: underline;
						text-underline-offset: 9px;
						text-decoration-color: #000;
					}
				}
			}
		}
	}
}

:deep(.VueCarousel-slide) {
	margin: 10px;
}
.m-0 {
	margin: 0;
}
</style>

<template>
	<div
		class="slider-content"
		:class="{
			'h-min-60': props.isBackgroundImage,
			'h-min-20': !props.isBackgroundImage,
		}"
	>
		<div class="header">
			<h1
				v-if="props.title"
				class="title"
				:class="{
					'text-basic': props.headlineBlack,
					'text-white': !props.headlineBlack,
				}"
			>
				{{ props.title }}
			</h1>
			<p
				v-if="props.subTitle"
				class="subtitle"
				:class="{
					'text-basic': props.headlineBlack,
					'text-white': !props.headlineBlack,
				}"
			>
				{{ props.subTitle }}
			</p>
			<a v-if="props.exploreLink" class="explore-link">explore now</a>
		</div>
		<div v-if="props.isBackgroundImage" class="banner">
			<img :src="props.backgroundImage" alt="slider-bg" />
		</div>
		<div v-if="props?.heroBannerImage" class="mini-hero-banner">
			<div class="image"><img :src="props?.heroBannerImage" /></div>
		</div>

		<carousel
			v-if="props?.slideList"
			:per-page="3"
			:mouse-drag="true"
			:navigationEnabled="true"
			:paginationEnabled="false"
		>
			<slide
				v-for="(slideItem, slideId) in props?.slideList"
				:key="'slide_' + slideId"
				class="cs-slider"
				><div v-if="slideItem?.imageSrc" class="slider-image">
					<img :src="slideItem?.imageSrc" />
				</div>
				<div v-if="slideItem?.content" class="content">
					<h2 v-if="slideItem?.content?.title" class="title">
						{{ slideItem?.content?.title }}
					</h2>
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
	headlineBlack: true,
	isBackgroundImage: true,
	backgroundImage: null,
	heroBannerImage: null,
	title: null,
	subTitle: null,
	exploreLink: null,
	slideList: null,
});
</script>

<style scoped lang="scss">
.slider-content {
	margin-top: -4px;
	padding: 30px 0;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
	&.h-min-60 {
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
		gap: 10px;
		.title {
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-weight: 100;
			font-size: 4.75em;
			line-height: 1.052em;
			letter-spacing: 0;
			text-align: center;
			color: #ffffff;
		}
		.subtitle {
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-size: 1.425rem;
			color: #ffffff;
			text-align: center;
		}
		.explore-link {
			text-transform: uppercase;
			font-size: 9px;
			text-align: center;
			color: #ffffff;
			text-decoration: underline;
			text-underline-offset: 9px;
			text-decoration-color: #ffffff;
		}
		.text-white {
			color: #ffffff;
		}
		.text-basic {
			color: #041e3a;
		}
	}
	.banner {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 65rem;
		width: 100%;
	}
	.mini-hero-banner {
		z-index: 999;
		display: flex;
		justify-content: center;
		.image {
			width: 70%;
		}
	}
	.cs-slider {
		width: 300px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		.slider-image {
			margin: 5px;
		}
		.content {
			display: flex;
			flex-direction: column;
			gap: 10px;
			.title {
				font-family: "LeJeuneDeck-Regular";
				margin: 0;
				font-size: 23px;
				font-weight: 400;
				color: #041e3a;
				text-align: center;
			}
			ul {
				margin: 0;
				padding: 10px 0;
				list-style: none;
				display: flex;
				justify-content: center;
				gap: 20px;
				li {
					a {
						color: #041e3a;
						text-transform: uppercase;
						font-size: 9px;
						text-decoration: underline;
						text-underline-offset: 12px;
						text-decoration-color: #041e3a;
					}
				}
			}
		}
	}
}

:deep(.VueCarousel-slide) {
	// margin: 10px;
}
:deep(.VueCarousel) {
	width: 77%;
}
</style>

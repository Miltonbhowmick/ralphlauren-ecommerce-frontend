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
			<p v-if="props?.description" class="description">
				{{ props?.description }}
			</p>
			<ul v-if="props?.exploreLinkList">
				<li
					v-for="(linkObj, linkId) in props?.exploreLinkList"
					:key="'explore_link_' + linkId"
				>
					<a :href="linkObj.src">{{ linkObj.name }}</a>
				</li>
			</ul>
		</div>
		<div v-if="props.isBackgroundImage" class="banner">
			<img :src="props.backgroundImage" alt="slider-bg" />
		</div>

		<carousel
			v-if="props?.slideList"
			:per-page="3"
			:mouse-drag="true"
			:navigationEnabled="true"
			:paginationEnabled="false"
			class="slider-box"
		>
			<slide
				v-for="(slideItem, slideId) in props?.slideList"
				:key="'slide_' + slideId"
				class="cs-slider"
				><div class="slider-image">
					<img :src="slideItem?.imageSrc" />
				</div>
				<div v-if="slideItem?.content" class="content">
					<h2 v-if="slideItem?.content?.title" class="title">
						{{ slideItem?.content?.title }}
					</h2>
					<ul v-if="slideItem?.content?.linkList">
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
	title: null,
	subTitle: null,
	description: null,
	exploreLinkList: null,
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
		align-items: center;
		gap: 10px;
		.title {
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-weight: 100;
			font-size: 2.75em;
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
		.description {
			width: 70%;
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-weight: 100;
			font-size: 1.125em;
			letter-spacing: 0em;
			color: #fff;
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
					color: #fff;
					text-transform: uppercase;
					font-size: 9px;
					text-decoration: underline;
					text-underline-offset: 15px;
					text-decoration-color: #fff;
				}
			}
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
		height: 68rem;
		width: 100%;
	}
	.slider-box {
		margin-top: 20rem;
		padding: 10px 0;
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
					font-size: 15px;
					font-weight: 400;
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
							display: block;
							height: 2rem;
							color: #fff;
							text-transform: uppercase;
							font-size: 9px;
							text-decoration: underline;
							text-underline-offset: 15px;
							text-decoration-color: #fff;
						}
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
	width: 65%;
}
</style>

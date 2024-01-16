<template>
	<div
		class="slider-content"
		:class="{
			'h-min-60': props.isBackgroundImage,
			'h-min-20': !props.isBackgroundImage,
		}"
		:style="{ backgroundColor: `${props.backgroundColor}` }"
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
		<client-only>
			<carousel
				v-if="props?.slideList"
				:per-page="3"
				:mouse-drag="true"
				:navigationEnabled="true"
				:paginationEnabled="false"
			>
				<slide
					v-for="(slideItem, slide_id) in props?.slideList"
					:key="'slide_' + slide_id"
					class="cs-slider"
					><div class="slider-image">
						<img :src="slideItem?.imageSrc" />
					</div>
					<div v-if="slideItem?.content" class="content">
						<h2 v-if="slideItem?.content?.title" class="title">
							{{ slideItem?.content?.title }}
						</h2>
						<ul v-if="slideItem?.content?.linkList" class="link-list">
							<li
								v-for="(linkItem, linkId) in slideItem?.content?.linkList"
								:key="'link_' + linkId"
							>
								<a :href="linkItem.src">{{ linkItem.name }}</a>
							</li>
						</ul>
					</div>
				</slide>
			</carousel>
		</client-only>
	</div>
</template>
<script setup>
const props = defineProps({
	headlineBlack: true,
	isBackgroundImage: true,
	backgroundColor: null,
	backgroundImage: null,
	title: null,
	subTitle: null,
	exploreLink: null,
	slideList: null,
});
</script>

<style scoped lang="scss">
.slider-content {
	margin-top: -4px;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	&.h-min-60 {
		min-height: 60em;
	}
	&.h-min-20 {
		min-height: 20em;
		padding: 20px 0;
	}

	.header {
		width: 60em;
		padding: 10px 40px;
		z-index: 999;
		display: flex;
		flex-direction: column;
		gap: 10px;
		.title {
			font-family: "Northwell Alt", cursive;
			font-weight: 100;
			font-size: 6em;
			line-height: 1.1em;
			display: block;
			letter-spacing: 0em;
			text-transform: capitalize;
			margin: 0 auto;
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
		height: 45rem;
		width: 100%;
	}
	.cs-slider {
		position: relative;
		.content {
			position: absolute;
			bottom: 50px;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
			.title {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 30px;
				color: #ffffff;
				text-align: center;
				text-transform: capitalize;
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
						color: #ffffff;
						font-size: 9px;
						text-transform: uppercase;
						text-decoration: underline;
						text-underline-offset: 15px;
						text-decoration-color: #fff;
						&:hover {
							cursor: pointer;
							text-underline-offset: 9px;
							transition: 300ms ease-in-out;
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
:deep(.VueCarousel-navigation-next) {
	padding: 0 !important;
	margin-right: 45px;
	font-family: none;
}
:deep(.VueCarousel-navigation-prev) {
	padding: 0 !important;
	margin-left: 45px;
	font-family: none;
}
:deep(.VueCarousel-navigation-button) {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #ffffff;
}
</style>

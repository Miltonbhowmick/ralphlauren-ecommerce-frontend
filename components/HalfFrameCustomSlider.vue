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
			<h1
				v-if="props.mediumTitle"
				class="title-md"
				:class="{
					'text-basic': props.headlineBlack,
					'text-white': !props.headlineBlack,
				}"
			>
				{{ props.mediumTitle }}
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
			<ul>
				<li v-for="(obj, idx) in props.linkList" :key="idx">
					<a
						:class="{
							'text-basic underline-black': props.headlineBlack,
							'text-white underline-black': !props.headlineBlack,
						}"
						>{{ obj.name }}</a
					>
				</li>
			</ul>
		</div>
		<div v-if="props.isBackgroundImage" class="banner">
			<img :src="props.backgroundImage" alt="slider-bg" />
		</div>
		<carousel
			:per-page="1"
			:mouse-drag="true"
			:navigationEnabled="false"
			:paginationEnabled="false"
		>
			<slide v-for="(obj, idx) in props.sliderList" :key="idx" class="cs-slider"
				><div class="slider-image">
					<img :src="obj.imageSrc" />
				</div>
			</slide>
		</carousel>
	</div>
</template>
<script setup>
const props = defineProps({
	headlineBlack: true,
	isBackgroundImage: true,
	linkList: null,
	backgroundImage: null,
	title: null,
	mediumTitle: null,
	subTitle: null,
	exploreLink: null,
	sliderList: null,
});
</script>

<style scoped lang="scss">
.slider-content {
	margin-top: -4px;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	&.h-min-60 {
		min-height: 60em;
	}
	&.h-min-20 {
		min-height: 20em;
	}

	.header {
		margin-top: 30px;
		width: 60em;
		padding: 10px 40px;
		z-index: 999;
		display: flex;
		flex-direction: column;
		gap: 10px;
		.title {
			margin: 0;
			font-family: "Northwell Alt", cursive;
			font-weight: 100;
			font-size: 6em;
			line-height: 1.1em;
			display: block;
			letter-spacing: 0em;
			text-transform: none;
			margin: 0 auto;
			text-align: center;
			color: #ffffff;
			&-md {
				@extend .title;
				font-family: "LeJeuneDeck-Regular";
				font-size: 2.425em;
				font-weight: 500;
				line-height: 1.4117647059;
				letter-spacing: 0;
			}
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
					font-size: 8px;
					letter-spacing: 1.25px;
					text-decoration: underline;
					text-underline-offset: 9px;
					&.underline-black {
						text-decoration-color: #000;
					}
					&.underline-white {
						text-decoration-color: #fff;
					}
				}
			}
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
		margin-top: 60px;
		display: flex;
		justify-content: center;

		.slider-image {
			width: 50%;
		}
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
						font-size: 9px;
					}
				}
			}
		}
	}
}
</style>

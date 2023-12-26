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
			:per-page="perSlider"
			:mouse-drag="true"
			:navigationEnabled="false"
			:paginationEnabled="false"
			:autoplay="true"
			:loop="true"
		>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider1.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Men</h2>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider2.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Women</h2>
				</div></slide
			>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider3.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Girls</h2>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider3.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Boys</h2>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider3.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Baby</h2>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider3.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Home</h2>
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
	background: black;
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

:deep(.VueCarousel-slide) {
	margin: 10px;
}
</style>

<template>
	<div v-if="props?.slideList" class="slider-content">
		<carousel
			:per-page="props?.perPage"
			:mouse-drag="true"
			:paginationEnabled="false"
			:navigationEnabled="true"
		>
			<slide
				v-for="(slideItem, slide_id) in props?.slideList"
				:key="'slide_' + slide_id"
				class="cs-slider"
				><div class="slider-image">
					<img :src="slideItem?.imageSrc" :alt="slideItem?.title" />
				</div>
				<div class="content">
					<h2 class="title">{{ slideItem?.title }}</h2>
				</div></slide
			>
		</carousel>
	</div>
</template>
<script setup>
const props = defineProps({
	perPage: null,
	slideList: null,
});
</script>

<style scoped lang="scss">
.slider-content {
	margin-top: -4px;
	position: relative;
	display: flex;
	flex-direction: row;
	min-height: 30em;
	.header {
		width: 60em;
		padding: 10px 40px;
		z-index: 999;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
		.title {
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
		}
		.explore-link {
			text-transform: uppercase;
			font-size: 9px;
			text-align: center;
			color: #ffffff;
		}
	}
	.banner {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 45rem;
	}
	.cs-slider {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 10px;

		.content {
			// position: absolute;
			// bottom: 50px;
			padding: 20px 0;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
			.title {
				font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
					sans-serif;
				font-size: 0.728em;
				line-height: 0.909em;
				letter-spacing: 0.091em;
				text-transform: uppercase;
				color: #474747;
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
:deep(.VueCarousel-navigation-next) {
	padding: 0 !important;
	margin-right: 4rem;
	font-family: none;
}
:deep(.VueCarousel-navigation-prev) {
	padding: 0 !important;
	margin-left: 4rem;
	font-family: none;
}
:deep(.VueCarousel-navigation-button) {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #ffffff;
}
</style>

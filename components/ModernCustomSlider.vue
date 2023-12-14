<template>
	<div
		:style="{ backgroundImage: `url(${backgroundImage})` }"
		:class="{
			'h-min-60': props.isBackgroundImage,
			'h-min-20': !props.isBackgroundImage,
		}"
		class="slider-content"
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
			<div
				v-if="props.smallBigTitle"
				class="small-big-title"
				:class="{
					'text-basic': props.headlineBlack,
					'text-white': !props.headlineBlack,
				}"
			>
				<h3>{{ props.smallBigTitle.small }}</h3>
				<h2>{{ props.smallBigTitle.big }}</h2>
			</div>
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
			<p
				v-if="props.description"
				class="description"
				:class="{
					'text-basic': props.headlineBlack,
					'text-white': !props.headlineBlack,
				}"
			>
				{{ props.description }}
			</p>

			<a v-if="props.exploreLink" class="explore-link">explore now</a>
		</div>
		<carousel
			:per-page="3"
			:mouse-drag="true"
			:navigationEnabled="true"
			:paginationEnabled="false"
		>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/women-cool.jpg" />
				</div>
				<div class="content">
					<div class="company-logo">
						<img
							src="/images/polo_air_naiomi_glasses_logo_en.svg"
							alt="company-logo"
						/>
					</div>
					<h2 class="title">Polo Bear Shop</h2>
					<p class="slide-description">
						The inaugural collaboration of the Ralph Lauren Artist in Residence
						Program honours Navajo heritage and centuries-old weaving traditions
					</p>
					<!-- <ul class="link-list">
						<li><a>men</a></li>
						<li><a>women</a></li>
						<li><a>boys</a></li>
						<li><a>girls</a></li>
						<li><a>baby</a></li>
						<li><a>home</a></li>
					</ul> -->
					<div class="blur-background"></div>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/couple-suit.jpg" />
				</div>
				<div class="content">
					<div class="company-logo">
						<img
							src="/images/polo_air_naiomi_glasses_logo_en.svg"
							alt="company-logo"
						/>
					</div>
					<h2 class="title">Polo Bear Shop</h2>
					<p class="slide-description">
						The inaugural collaboration of the Ralph Lauren Artist in Residence
						Program honours Navajo heritage and centuries-old weaving traditions
					</p>
					<!-- <ul class="link-list">
						<li><a>men</a></li>
						<li><a>women</a></li>
						<li><a>boys</a></li>
						<li><a>girls</a></li>
						<li><a>baby</a></li>
						<li><a>home</a></li>
					</ul> -->
					<div class="blur-background"></div>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/warm-sweater.jpg" />
				</div>
				<div class="content">
					<div class="company-logo">
						<img
							src="/images/polo_air_naiomi_glasses_logo_en.svg"
							alt="company-logo"
						/>
					</div>
					<h2 class="title">Polo Bear Shop</h2>
					<p class="slide-description">
						The inaugural collaboration of the Ralph Lauren Artist in Residence
						Program honours Navajo heritage and centuries-old weaving traditions
					</p>
					<!-- <ul class="link-list">
						<li><a>men</a></li>
						<li><a>women</a></li>
						<li><a>boys</a></li>
						<li><a>girls</a></li>
						<li><a>baby</a></li>
						<li><a>home</a></li>
					</ul> -->
					<div class="blur-background"></div>
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
	smallBigTitle: null,
	description: null,
	exploreLink: null,
});
</script>

<style scoped lang="scss">
.slider-content {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
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
		.small-big-title {
			h3 {
				margin: 0;
				font-family: "LeJeuneDeck-Regular";
				font-size: 1.895em;
				font-weight: 400;
				line-height: 1.25em;
				text-transform: capitalize;
			}
			h2 {
				margin: 0;
				font-family: "LeJeuneDeck-Regular";
				font-size: 3em;
				font-weight: 400;
				line-height: 1.25em;
				margin: 0.25em auto 0.3em;
				text-transform: capitalize;
			}
		}
		.subtitle {
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-size: 1.425rem;
			color: #ffffff;
			text-align: center;
		}
		.description {
			margin: 0;
			font-size: 0.85em;
			font-family: "Founders Grotesk Text Regular", Arial, Helvetica, sans-serif;
			letter-spacing: 0.094em;
			line-height: 1.556em;
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
	.cs-slider {
		position: relative;
		.slider-image {
			height: 100%;
		}
		.content {
			position: absolute;
			bottom: 0;
			width: 100%;
			padding: 15px 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 10px;
			&:hover {
				.slide-description {
					display: block;
				}
				.blur-background {
					z-index: 1;
					opacity: 1;
				}
			}
			.title {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 30px;
				color: #ffffff;
				text-align: center;
				z-index: 99;
			}
			.company-logo {
				width: 50%;
			}
			.slide-description {
				display: none;
				margin: 0;
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				font-size: 0.75em;
				color: #ffffff;
				text-align: center;
				z-index: 99;
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
			.blur-background {
				width: 100%;
				height: 100%;
				position: absolute;
				top: 0;
				left: 0;
				background: linear-gradient(
					180deg,
					rgba(0, 0, 0, 0) 0%,
					rgba(0, 0, 0, 1) 100%
				);
				opacity: 0;
				z-index: -1;
				transition: all 0.5s ease-in-out 0.15s;
			}
		}
	}
}

:deep(.VueCarousel-slide) {
	margin: 10px;
}
</style>

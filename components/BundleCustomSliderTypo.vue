<template>
	<div
		class="bundle-slider-box"
		:style="{
			backgroundImage: `url(${props?.backgroundImage})`,
		}"
		:class="{ 'flex-row': props.left, 'flex-row-reverse': props.right }"
	>
		<div
			class="header"
			:class="{
				down: props?.down,
				up: props?.up,
				'items-start': props?.left,
				'items-end': props?.right,
			}"
		>
			<h2 v-if="props.title" class="title">{{ props.title }}</h2>
			<h2
				v-if="props.mediumTitle"
				:class="{ 'align-right': props?.right, 'align-left': props?.left }"
				class="title-md"
			>
				{{ props.mediumTitle }}
			</h2>
			<div v-if="props.companyLogo" class="company-logo">
				<img :src="props.companyLogo" alt="company-logo" />
			</div>
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
		<div v-if="props?.sliderList" class="slider-box">
			<div v-for="(obj, idx) in props.sliderList" :key="idx" class="slide">
				<img :src="obj.imageSrc" alt="slider-1" />
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: null,
	mediumTitle: null,
	subTitle: null,
	description: null,
	miniDescription: null,
	linkList: null,
	sliderList: null,
	backgroundImage: null,
	companyLogo: null,
	left: true,
	right: false,
	up: false,
	down: false,
	textColor: null,
});
</script>

<style scoped lang="scss">
.bundle-slider-box {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	box-sizing: border-box;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	padding: 100px 40px;
	height: 65em;
	&.flex-row {
		flex-direction: row;
	}
	&.flex-row-reverse {
		flex-direction: row-reverse;
	}
	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		width: 25%;
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
		.subtitle {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 50px;
			font-weight: 300;
			color: #ffffff;
			text-align: center;
		}
		.description {
			width: 80%;
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
					font-size: 8px;
					text-decoration: underline;
					text-underline-offset: 9px;
					text-decoration-color: #ffffff;
				}
			}
		}
	}
	.slider-box {
		width: 60%;
		display: flex;
		justify-content: center;
		align-items: center;
		.slide {
			width: 400px;
			height: 500px;
		}
	}
}
</style>

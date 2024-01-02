<template>
	<div class="hero-banner-box">
		<div v-if="props.backgroundImage" class="banner-image">
			<img :src="props.backgroundImage" alt="hero-banner" />
		</div>
		<div
			class="best-products"
			:class="{
				'side-left': props?.left,
				'side-right': props?.right,
				'side-up': props?.up,
				'side-down': props?.down,
			}"
		>
			<h2 class="title" :style="{ color: props?.textColor }">
				{{ props?.title }}
			</h2>
			<p class="description" :style="{ color: props?.textColor }">
				{{ props?.description }}
			</p>
			<ul v-if="props?.linkList" class="category-list">
				<li v-for="(obj, idx) in props.linkList" :key="idx">
					<a
						:style="{
							color: props?.textColor,
							textDecorationColor: props?.textColor,
						}"
						>{{ obj.name }}</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	left: false,
	right: false,
	up: false,
	down: false,
	isBackgroundImage: null,
	backgroundColor: null,
	textColor: "#fff",
	backgroundImage: null,
	title: null,
	description: null,
	linkList: null,
});
</script>

<style scoped lang="scss">
.hero-banner-box {
	position: relative;
	.banner-image {
	}
	.best-products {
		position: absolute;
		top: 40%;
		left: 0;
		transform: translateY(-60%);
		width: 500px;
		padding: 40px 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;

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
			top: 20px;
			left: 50%;
			transform: translateX(-50%);
		}
		&.side-down {
			bottom: 20px;
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
			margin: 0;
			font-size: 4em;
			font-weight: 400;
			color: #ffffff;
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			text-transform: capitalize;
		}
		.description {
			font-family: "LeJeuneDeck-Regular";
			font-size: 1.125em;
			width: 26em;
			text-align: center;
		}
		.category-list {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: row;
			gap: 15px;
			li {
				a {
					text-transform: uppercase;
					font-size: 9px;
					letter-spacing: 1px;
					color: #ffffff;
					cursor: pointer;
					text-decoration: underline;
					text-underline-offset: 12px;
				}
			}
		}
	}
}
</style>

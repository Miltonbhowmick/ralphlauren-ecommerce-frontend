<template>
	<div class="product-gellary" :style="{ backgroundImage: `url(${bgImage})` }">
		<div class="header">
			<h1 class="title">Winter Alpine</h1>
			<h2 class="subtitle">
				Cosy styles to embrace the rustic charm of winter wonderland style
			</h2>
			<ul class="explore-link-list">
				<li><a>shop boys</a></li>
				<li><a>shop girls</a></li>
			</ul>
		</div>
		<div class="products">
			<div @click="openSidebarModal" class="item item-1">
				<div class="image">
					<img src="/images/kid-1.jpg" alt="kid-1" />
				</div>
			</div>
			<div @click="openSidebarModal" class="item item-2">
				<div class="image">
					<img src="/images/kid-2.jpg" alt="kid-1" />
				</div>
			</div>
			<div @click="openSidebarModal" class="item item-3">
				<div class="image">
					<img src="/images/kid-3.jpg" alt="kid-1" />
				</div>
			</div>
			<div @click="openSidebarModal" class="item item-4">
				<div class="image">
					<img src="/images/kid-4.jpg" alt="kid-1" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import bgImage from "~/assets/images/leaf-clothe.jpg";

const emit = defineEmits();

const openSidebarModal = () => {
	console.log("=====");
	emit("openProductSidebar");
};
</script>

<style scoped lang="scss">
.product-gellary {
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px 10px;

	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		.title {
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			color: #ffffff;
			font-size: 4.375em;
			font-weight: normal;
		}
		.subtitle {
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			color: currentColor;
			font-size: 11px;
			font-weight: normal;
			letter-spacing: 0.604px;
			color: #ffffff;
		}
		.explore-link-list {
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
					text-decoration: underline;
					text-underline-offset: 15px;
					text-decoration-color: #ffffff;
					&:hover {
						cursor: pointer;
						text-underline-offset: 9px;
						transition: text-underline-offset 3ms ease-in-out;
					}
				}
			}
		}
	}
	.products {
		margin-top: 40px;
		display: grid;
		grid-template-columns: repeat(16, 50px);
		grid-template-rows: repeat(23, 50px);
		grid-gap: 15px;
		.item {
			cursor: pointer;
			.image {
				// width: 80%;
				img {
					object-fit: contain;
				}
			}
		}
		.item-1 {
			grid-column-start: 1;
			grid-column-end: 8;
			grid-row-start: 1;
			grid-row-end: 10;
		}
		.item-2 {
			grid-column-start: 8;
			grid-column-end: 17;
			grid-row-start: 1;
			grid-row-end: 13;
		}
		.item-3 {
			grid-column-start: 1;
			grid-column-end: 8;
			grid-row-start: 10;
			grid-row-end: 13;
		}
		.item-4 {
			grid-column-start: 8;
			grid-column-end: 17;
			grid-row-start: 14;
			grid-row-end: 24;
		}
	}
}
</style>

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
	</div>
</template>

<script setup>
import bgImage from "~/assets/images/leaf-clothe.jpg";
</script>

<style scoped lang="scss">
.product-gellary {
	background-size: cover;
	background-repeat: no-repeat;
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
}
</style>

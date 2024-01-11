<template>
	<div class="hero-banner-box">
		<div class="banner-image">
			<img src="/images/bg-2.jpg" alt="banner" />
		</div>
		<div class="best-products">
			<h2 class="title">Double RL & CO</h2>
			<ul class="category-list">
				<li><a>men</a></li>
				<li><a>women</a></li>
				<li><a>boys</a></li>
				<li><a>girls</a></li>
			</ul>
		</div>
	</div>
</template>
<script setup></script>

<style scoped lang="scss">
.hero-banner-box {
	position: relative;
	.banner-image {
	}
	.best-products {
		position: absolute;
		left: 50%;
		bottom: 30px;
		transform: translateX(-50%);
		width: 500px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 15px;
		.title {
			margin: 0;
			font-size: 4em;
			font-weight: 400;
			color: #ffffff;
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			text-transform: uppercase;
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
					&:hover {
						cursor: pointer;
						text-decoration: underline;
					}
				}
			}
		}
	}
}
</style>

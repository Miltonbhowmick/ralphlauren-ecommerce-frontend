<template>
	<div class="hero-banner-box">
		<div class="banner-image">
			<img src="/images/hero-banner.jpg" alt="hero-banner" />
		</div>
		<div class="best-products">
			<h2 class="title">Best of Polo</h2>
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
		.title {
			margin: 0;
			font-size: 4em;
			font-weight: 400;
			color: #ffffff;
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
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

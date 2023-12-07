<template>
	<div class="menu-box">
		<div class="sidebar">
			<ul>
				<li><a>Brands</a></li>
				<li><a>Explore</a></li>
				<li><a>Clothing</a></li>
			</ul>
		</div>
		<div class="content" :style="{ backgroundImage: `url(${bgImage})` }">
			<h2 class="title">MEN'S BRANDS</h2>
			<div class="products">
				<div class="item"><img src="/images/person-jacket.jpg" /></div>
				<div class="item"><img src="/images/person-jacket.jpg" /></div>
				<div class="item"><img src="/images/person-jacket.jpg" /></div>
				<div class="item"><img src="/images/person-jacket.jpg" /></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import bgImage from "~/assets/images/menu/menu-bg.jpg";
</script>

<style scoped lang="scss">
.menu-box {
	min-height: 500px;
	position: absolute;
	z-index: 999;
	left: 0;
	top: 70px;
	border-top: 1px solid #d1d1d1;
	background: #f7f7f7;
	width: 100%;
	display: flex;

	.sidebar {
		width: 20%;
		padding: 50px;
		ul {
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 30px;
			li {
				a {
					font-family: "LeJeuneDeck-Regular", Times, serif;
					font-size: 18px;
					color: #707070;
					&:hover {
						cursor: pointer;
						color: #041e3a;
						text-decoration: underline;
						text-underline-offset: 9px;
						text-decoration-color: #041e3a;
					}
				}
			}
		}
	}
	.content {
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		padding: 50px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 30px;
		.title {
			margin: 0;
			font-size: 14px;
			font-weight: 400;
			color: #041e3a;
			padding: 5px 0px;
			border-bottom: 1px solid #041e3a;
		}
		.products {
			display: flex;
			justify-content: center;
			gap: 15px;
		}
	}
}
</style>

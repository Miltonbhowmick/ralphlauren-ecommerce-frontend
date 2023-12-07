<template>
	<div class="menu-box">
		<div class="sidebar">
			<ul>
				<li><a>Brands</a></li>
				<li><a>Explore</a></li>
				<li><a>Clothing</a></li>
			</ul>
		</div>
		<div class="content">
			<h2 class="title">FOR HIM</h2>
			<div class="products">
				<ul class="link-list">
					<li><a>Shop All Gifts</a></li>
					<li><a>Our Favourite Gifts</a></li>
					<li><a>Polo Bear Shop</a></li>
					<li><a>Luxury Gifts</a></li>
					<li><a>Cashmere Shop</a></li>
					<li><a>Gifts Under 150 €</a></li>
					<li><a>Matching Accessories</a></li>
					<li><a>Gifts That Give Back</a></li>
				</ul>
				<div class="mini-banner">
					<img src="/images/tshirt.jpg" alt="tshirt-banner" />
				</div>
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
		background: #fff;
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
			justify-content: space-between;
			gap: 15px;
			.link-list {
				padding: 0;
				margin: 0;
				list-style: none;
				display: flex;
				flex-direction: column;
				gap: 15px;
				li {
					a {
						font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
							Arial, sans-serif;
						font-size: 13px;
						font-weight: 500;
						color: #041e3a;
						letter-spacing: 0.0625rem;
						&:hover {
							cursor: pointer;
							text-decoration: underline;
							text-underline-offset: 9px;
							text-decoration-color: #041e3a;
						}
					}
				}
			}
			.mini-banner {
				width: 25%;
			}
		}
	}
}
</style>

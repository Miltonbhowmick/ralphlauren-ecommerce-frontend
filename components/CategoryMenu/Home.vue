<template>
	<div class="menu-box" id="navbarMenuBox">
		<div class="sidebar">
			<ul>
				<li><a>Brands</a></li>
				<li><a>Explore</a></li>
				<li><a>Clothing</a></li>
			</ul>
		</div>
		<div class="content">
			<h2 class="title">BRANDS</h2>
			<div class="products">
				<ul class="link-list">
					<li><a>Double RL Home</a></li>
					<li><a>Ralph Lauren Home</a></li>
					<li><a>Polo Ralph Lauren Home</a></li>
				</ul>
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
	top: 53px;
	border-top: 1px solid #d1d1d1;
	background: #f7f7f7;
	width: 100%;
	display: flex;
	animation: expandHeight 2s forwards;

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
@keyframes expandHeight {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
</style>

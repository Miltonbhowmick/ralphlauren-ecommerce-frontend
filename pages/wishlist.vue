<template>
	<div class="wishlist-box">
		<div class="banner" :style="{ backgroundImage: `url(${wishlistBg})` }">
			<div class="content">
				<h6>MY RL</h6>
				<h1>Wishlist</h1>
				<p>
					All of your favorite styles in one place. Keep track of your items,
					create multiple lists, and share your favorites with friends and
					family.
				</p>
			</div>
		</div>
	</div>
	<div class="shop">
		<div class="account box">
			<h3 class="title">My RL Account</h3>
			<p class="details">
				To access your wishlist, and see previously saved items, please sign
				into your account.
			</p>
			<ul class="link-list">
				<li><a>SIGN IN</a></li>
			</ul>
		</div>
		<div class="wishlist box">
			<h3 class="title">My RL Account</h3>
			<p class="details">
				To access your wishlist, and see previously saved items, please sign
				into your account.
			</p>
			<ul class="link-list">
				<li><a>SHOP MEN'S</a></li>
				<li><a>SHOP WOMEN'S</a></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import wishlistBg from "~/assets/images/wishlist-banner.png";
</script>

<style scoped lang="scss">
.wishlist-box {
	.banner {
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 400px;
		.content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			h6 {
				margin: 0;
				font-size: 0.6875rem;
				letter-spacing: 0.61px;
				line-height: 0.8125rem;
				color: #fff;
			}
			h1 {
				margin: 0;
				font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
					serif;
				font-weight: 400;
				font-style: normal;
				font-size: 2.75rem;
				color: #fff;
				line-height: 3.25rem;
				padding: 0.625rem 0 1.25rem;
			}
			p {
				margin: 0;
				color: #fff;
				font-size: 1.125rem;
				line-height: 2rem;
			}
		}
	}
}
.shop {
	margin-top: 50px;
	padding: 0 3.4375rem;
	display: flex;
	gap: 30px;
	.box {
		padding: 70px 130px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		background: #f8f8f8;
		.title {
			margin: 0;
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-weight: 400;
			font-style: normal;
			font-size: 28px;
		}
		.details {
			margin: 0;
			text-align: center;
			font-size: 14px;
			font-weight: 500;
			letter-spacing: normal;
		}
		.link-list {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			gap: 20px;
			li {
				a {
					text-transform: uppercase;
					text-decoration: underline;
					text-underline-offset: 13px;
					font-size: 10px;
					letter-spacing: 1px;
					color: #041e3a;
					&:hover {
						cursor: pointer;
						text-underline-offset: 7px;
					}
				}
			}
		}
	}
}
</style>

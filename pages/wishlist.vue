<template>
	<div class="wishlist-box">
		<div
			v-if="isAuth === false"
			class="banner"
			:style="{ backgroundImage: `url(${wishlistBg})` }"
		>
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
		<div v-else-if="isAuth === true">
			<AccountHeroBanner />
			<AccountPageNavbar />
		</div>
	</div>

	<div v-if="isAuth === false" class="shop">
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
	<div v-else-if="isAuth === true">
		<div class="wishlist-shop">
			<div class="box info">
				<i class="fa fa-heart-o" aria-hidden="true"></i>
				<h4 class="title">Start a Wishlist</h4>
				<p class="description">
					Click the heart icon to curate a dream list to share with friends and
					family
				</p>
			</div>
			<div class="box card">
				<div class="image">
					<img src="/images/Mens-New-arrivals.jpg" alt="Mens-New-arrivals" />
				</div>
				<div class="name">men's new arrival</div>
			</div>
			<div class="box card">
				<div class="image">
					<img
						src="/images/Womens-New-arrivals.jpg"
						alt="Womens-New-arrivals"
					/>
				</div>
				<div class="name">women's new arrival</div>
			</div>
			<div class="box card">
				<div class="image">
					<img src="/images/Home.jpg" alt="Home" />
				</div>
				<div class="name">home new arrival</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import wishlistBg from "~/assets/images/wishlist-banner.png";

const isAuth = ref(true);
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
.wishlist-shop {
	margin-top: 50px;
	padding: 0 8rem;
	display: flex;
	gap: 10px;
	.box {
		flex-basis: 25%;
		&.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			background-color: #f8f8f8;
			// padding: 0 20px;
			i {
				font-size: 30px;
			}
			.title {
				margin: 0;
				font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
					serif;
				font-size: 28px;
				font-weight: 400;
				font-style: normal;
				line-height: 1.8125rem;
				letter-spacing: 1.25px;
				color: #000;
				text-transform: capitalize;
			}
			.description {
				width: 70%;
				text-align: center;
				font-size: 12px;
				line-height: 1.3125rem;
				color: #000;
			}
		}
		&.card {
			.name {
				// margin-top: 30px;
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-style: Normal;
				font-size: 9px;
				font-weight: 500;
				text-align: left;
				line-height: 1.25rem;
				letter-spacing: 2.25px;
				color: #041e3a;
				text-transform: uppercase;
			}
		}
	}
}
</style>

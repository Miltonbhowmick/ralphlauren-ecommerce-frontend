<template>
	<section class="account-page">
		<AccountHeroBanner />
		<div class="page-navbar">
			<ul>
				<li><a class="active">overview</a></li>
				<li><a>wishlist</a></li>
				<li><a>Orders/Returns</a></li>
				<li><a>RL Wardrobe</a></li>
				<li><a>Profile</a></li>
				<li><a>Addresses</a></li>
				<li><a>Payments</a></li>
			</ul>
		</div>
		<div class="content-view">
			<div class="orders">
				<h3 class="title">Orders</h3>
				<div class="orders"></div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.account-page {
	.page-navbar {
		padding: 30px 20px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			gap: 3rem;
			li {
				a {
					color: #9d9fa3;
					font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
						serif;
					font-size: 18px;
					text-transform: capitalize;
					&:hover {
						color: #000;
						cursor: pointer;
					}
					&.active {
						text-decoration: underline 1px;
						text-underline-offset: 6px;
						color: #000;
					}
				}
			}
		}
	}
	.content-view {
		padding: 15px 40px;
		.orders {
			.title {
				color: #041e3a;
				font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times, serif;
				font-size: 30px;
				font-weight: 300;
				letter-spacing: 0;
				text-transform: capitalize;
			}
		}
	}
}
</style>

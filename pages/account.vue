<template>
	<section class="account-page">
		<AccountHeroBanner />
		<AccountPageNavbar />
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

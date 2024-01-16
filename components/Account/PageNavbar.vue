<template>
	<div class="page-navbar">
		<ul>
			<li>
				<nuxt-link
					to="/account"
					:class="{ active: route.path.includes('/account') }"
					>overview</nuxt-link
				>
			</li>
			<li>
				<nuxt-link
					to="/wishlist"
					:class="{ active: route.path.includes('/wishlist') }"
					>wishlist</nuxt-link
				>
			</li>
			<li>
				<nuxt-link
					to="/orders"
					:class="{ active: route.path.includes('/orders') }"
					>Orders/Returns</nuxt-link
				>
			</li>
			<li><a>RL Wardrobe</a></li>
			<li>
				<nuxt-link
					to="/profile"
					:class="{ active: route.path.includes('/profile') }"
					>Profile</nuxt-link
				>
			</li>
			<li>
				<nuxt-link
					to="/addressbook"
					:class="{ active: route.path.includes('/addressbook') }"
					>Addresses</nuxt-link
				>
			</li>
			<li>
				<nuxt-link
					to="/wallet"
					:class="{ active: route.path.includes('/wallet') }"
					>Payments</nuxt-link
				>
			</li>
		</ul>
	</div>
</template>
<script setup>
const route = useRoute();
</script>

<style scoped lang="scss">
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
</style>

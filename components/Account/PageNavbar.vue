<template>
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
</template>
<script setup></script>

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

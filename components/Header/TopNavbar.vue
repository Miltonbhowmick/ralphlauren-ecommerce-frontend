<template>
	<div class="top-banner">
		<div class="swipe-wrapper">
			<article v-for="(item, idx) in articleList" :key="idx" class="article">
				<span>{{ item.title }}</span>
			</article>
		</div>
		<ul class="nav-list">
			<li>
				<i class="fa fa-globe" aria-hidden="true"></i> <span>RO English</span>
			</li>
			<li>
				<nuxt-link to="/stores">
					<i class="fa fa-map-marker" aria-hidden="true"></i>
					<span>Find A Store</span>
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>
<script setup>
const articleList = [
	{
		title: "Last Chance Gifting | Order by 20th December",
		link: null,
	},
	// {
	// 	title: "Free Standard Delivery & Extended Returns",
	// 	link: "Complimentary Delivery offer valid on full price orders shipped in Romania and applies to Standard Delivery only. Gift certificates, taxes, additional shipping and handling do not count toward the qualifying amount. Not valid for cash. Previous Purchases are not eligible for adjustments. To participate, simply add merchandise to your shopping basket and complimentary Standard Delivery will automatically be applied. You must select the 'Standard Delivery' option to receive the complimentary shipping offer. If you have questions, please contact Customer Assistance by email at CustomerAssistance@RalphLauren.eu or by phone at +44 (0) 203 450 7750",
	// },
];
</script>

<style scoped lang="scss">
.top-banner {
	background-color: #041e3a;
	padding: 16px 7px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	.swipe-wrapper {
		.article {
			color: #ffffff;
			letter-spacing: 1px;
			font-size: 10px;
		}
	}
	.nav-list {
		margin: 0;
		list-style: none;
		position: absolute;
		top: 50%;
		right: 50px;
		transform: translateY(-50%);
		display: flex;
		flex-direction: row;
		gap: 20px;
		li {
			margin: 0 5px;
			a {
				cursor: pointer;
			}
			span,
			i {
				color: #ffffff;
			}
			i {
				margin-right: 6px;
				font-size: 15px;
			}
			span {
				font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
					Arial, sans-serif;
				font-size: 10px;
				line-height: 10px;
				letter-spacing: 1px;
				text-transform: capitalize;
			}
		}
	}
}
</style>

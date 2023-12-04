<template>
	<div class="top-banner">
		<div class="swipe-wrapper">
			<article v-for="(item, idx) in articleList" :key="idx" class="article">
				<span>{{ item.title }}</span>
			</article>
		</div>
		<ul class="nav-list">
			<li><i></i><span>RO English</span></li>
			<li><i></i><span>Find A Store</span></li>
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
	padding: 15px 7px;
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	.swipe-wrapper {
		.article {
			color: #ffffff;
		}
	}
	.nav-list {
		margin: 0;
		list-style: none;
		position: absolute;
		top: 50%;
		right: 20px;
		transform: translateY(-50%);
		display: flex;
		flex-direction: row;
		li {
			margin: 0 5px;
			span {
				color: #ffffff;
			}
		}
	}
}
</style>

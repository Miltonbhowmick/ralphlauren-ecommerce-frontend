<template>
	<section class="account-hero-banner">
		<div class="bg-image">
			<img src="/images/Mood-banner.jpg" alt="Mood-banner" />
		</div>
		<div class="content">
			<h6 class="your-rl">Your RL</h6>
			<h1 class="title">
				Welcome back , Milton <span class="signout">sign out</span>
			</h1>
			<p class="description">
				This page is unique to you. Track recent order, review your wish list,
				update account details, discover recommended products and more
			</p>
		</div>
	</section>
</template>
<script setup></script>

<style scoped lang="scss">
.account-hero-banner {
	position: relative;
	.content {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.your-rl {
			margin: 0 0 30px 0;
			font-size: 12px;
			font-weight: 300;
			color: #fff;
			text-align: center;
		}
		.title {
			margin: 0;
			font-size: 44px;
			font-weight: 300;
			line-height: 52px;
			margin-bottom: 25px;
			color: #fff;
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			letter-spacing: 0;
			text-align: center;
			.signout {
				text-transform: capitalize;
				text-decoration: underline;
				font-size: 14px;
			}
		}
		.description {
			color: #fff;
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-size: 24px;
			line-height: 2.5rem;
			letter-spacing: 0;
			text-align: center;
		}
	}
}
</style>

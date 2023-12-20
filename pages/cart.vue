<template>
	<div class="cart-empty">
		<h1 class="title">Your Shopping Bag is Empty</h1>
		<p class="caption">
			<a>Sign In</a> to your account to see your previously added items.
		</p>
		<div class="links">
			<a>sign in</a>
			<a class="has-bg">continue shopping</a>
		</div>
	</div>
	<div class="non-authenticate">
		<div class="content">
			<h2 class="title">Create An Account</h2>
			<p class="caption">
				Signing up for an account is quick and gives you access to exclusive
				offers, news, order history and faster checkout.
				<a>Create an Account</a> or
				<a>Sign In</a>
			</p>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.cart-empty {
	background-color: #f8f8f8;
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
	.title {
		margin: 0;
		font-size: 1.375rem;
		font-weight: 400;
		line-height: 0.90909em;
		font-family: "LeJeuneDeck-Regular", "Times New Roman", Times, serif;
		letter-spacing: normal;
	}
	.caption {
		margin: 0;
		font-size: 0.8125rem;
		line-height: 1.48462em;
		letter-spacing: 0.01562rem;
		a {
			text-decoration: underline;
		}
	}
	.links {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		gap: 50px;
		a {
			color: #041e3a;
			background-color: #fff;
			border: 1px solid #041e3a;
			width: 20vw;
			padding: 15px 0;
			text-align: center;
			text-transform: uppercase;
			font-size: 0.5875rem;
			font-family: "Founders Grotesk Mono Regular", Arial, Helvetica, sans-serif;
			letter-spacing: 0.0625rem;
			&.has-bg {
				background-color: #041e3a;
				color: #fff;
			}
		}
	}
}
.non-authenticate {
	margin-top: 60px;
	display: flex;
	justify-content: center;
	.content {
		width: 60%;
		background-color: #f2f3f5;
		padding: 35px 30px;
		.title {
			margin: 0;
			color: #996e40;
			font-size: 1.25rem;
			font-weight: 400;
			font-family: "LeJeuneDeck-Regular", Times, serif;
		}
		.caption {
			color: #041e3a;
			font-family: "Founders Grotesk text Regular", Helvetica, Arial, sans-serif;
			font-size: 0.7125rem;
			letter-spacing: 0.03562rem;
			a {
				text-decoration: underline;
			}
		}
	}
}
</style>

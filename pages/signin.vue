<template>
	<div class="login-content">
		<div class="help-box">
			<div class="info">
				<h5>NEED HELP?</h5>
				<p class="question-contact">
					If you have any questions or need help with your account, you may
					contact us to assist you.
				</p>
				<p class="help-item">
					<span class="icon"
						><img
							src="/images/Account-Help-Phone-Icon.svg"
							alt="Account-Help-Phone-Icon"
					/></span>
					<span> +40 (0) 8004 00643 </span>
				</p>
				<div class="help-item">
					<p>Monday-Friday 08.00-17.00</p>
					<p>Saturday 10.00-18.00</p>
				</div>
				<p class="help-item">
					<span class="icon"
						><img
							src="/images/Account-Help-Email-Icon.svg"
							alt="Account-Help-Email-Icon"
					/></span>
					<a>Email Us</a> <span> 24/7 </span>
				</p>
			</div>
		</div>
		<div class="form-box">
			<div class="account-content">
				<div class="toggle-buttons">
					<a @click="toggleAuthType = true" :class="{ active: toggleAuthType }"
						>Sign In</a
					><a
						@click="toggleAuthType = false"
						:class="{ active: !toggleAuthType }"
						>Create Account</a
					>
				</div>
				<div class="info">
					<div class="social-links">
						<a>
							<div class="logo">
								<img src="/images/facebook.svg" alt="facebook-logo" />
							</div>
							<span>facebook</span></a
						>
						<a>
							<div class="logo">
								<img src="/images/google.svg" alt="google-logo" />
							</div>
							<span>google</span></a
						>
					</div>
					<div class="or-bar">
						<div class="left"></div>
						<div class="middle">Or</div>
						<div class="right"></div>
					</div>
					<form>
						<div class="checkbox-group">
							<input type="checkbox" />
							<label class="label"
								>Remember Me - I want Ralph Lauren to personalise my shopping
								experience</label
							>
						</div>
						<div v-if="toggleAuthType == false" class="checkbox-group">
							<input type="checkbox" />
							<label class="label"
								>Tick here if you would like to receive e-mails about latest
								news, special offers and exclusive events relating to Ralph
								Lauren products and services. You can unsubscribe at any time by
								clicking on the unsubscribing link in each e-mail.</label
							>
						</div>
						<div class="input-group">
							<input type="email" placeholder="email address*" />
						</div>
						<div v-if="toggleAuthType == false" class="input-group">
							<input type="email" placeholder="confirm email address" />
						</div>
						<div class="input-group">
							<input type="password" placeholder="password*" />
						</div>
						<div v-if="toggleAuthType == false" class="input-group">
							<input type="password" placeholder="re-enter password*" />
						</div>
						<div v-if="toggleAuthType == false" class="input-group">
							<input type="text" placeholder="name" />
						</div>
						<div v-if="toggleAuthType == false" class="input-group">
							<input type="text" placeholder="surname" />
						</div>
						<button v-if="toggleAuthType == true">sign in</button>
						<button v-if="toggleAuthType == false">create account</button>
					</form>
				</div>
			</div>
		</div>
		<div class="order-box">
			<div v-if="toggleAuthType == true" class="order-track">
				<h3>Check Order</h3>
				<div class="login-box-content">
					<p>
						See your order even if you are not a registered user. Enter the
						order number and the billing address postcode.
					</p>
					<form>
						<div class="input-group">
							<input type="text" placeholder="order number*" />
						</div>
						<div class="input-group">
							<input type="email" placeholder="order email address*" />
						</div>
						<div class="input-group">
							<input type="text" placeholder="invoicing postcode" />
						</div>
						<button>check status</button>
					</form>
				</div>
			</div>
			<div v-else-if="toggleAuthType == false" class="benefits">
				<div class="content-assets">
					<h3 class="headline">Benefits of Creating an Account</h3>
					<div class="detail">
						<h4 class="title">News and Exclusive Offers!</h4>
						<p class="description">
							Sign up to receive email updates on special promotions, new
							product announcements, gift ideas and more.
						</p>
						<h4 class="title">Order History</h4>
						<p class="description">
							Receive important information about your order. You can even track
							it up to the minute it arrives.
						</p>
						<h4 class="title">Faster Checkout</h4>
						<p class="description">
							Save your billing and shipping information to make it easier to
							buy your favorite gear.
						</p>
					</div>
					<a class="read-more">Read more about security </a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
// toggleAuthType is true - active signin button
// toggleAuthType is false - active create signup button
var toggleAuthType = ref(true);
</script>

<style scoped lang="scss">
.login-content {
	padding: 0 60px;
	display: flex;
	justify-content: center;
	gap: 25px;
	.help-box {
		width: 20%;
		padding: 15px;
		.info {
			h5 {
				color: #474747;
				text-transform: uppercase;
				letter-spacing: 0.1rem;
				font-size: 0.875rem;
				font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 600;
			}
			.question-contact {
				line-height: 1.6em;
				color: #041e3a;
				font-size: 12px;
				font-weight: 500;
			}
			.help-item {
				color: #041e3a;
				.icon {
					display: inline-block;
					width: 10%;
					margin-right: 15px;
				}
				span,
				p {
					margin: 0;
					font-size: 13px;
					font-weight: 500;
					letter-spacing: 1px;
				}
				a {
					text-decoration: underline;
					font-size: 13px;
					font-weight: 500;
					letter-spacing: 1px;
				}
			}
		}
	}
	.form-box {
		padding: 15px;
		width: 45%;
		.account-content {
			border: 1px solid #c6c8cc;
			.info {
				padding: 20px 30px 30px 30px;
			}
			.social-links {
				display: flex;
				justify-content: center;
				gap: 15px;
				a {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 8px;
					padding: 15px 15px;
					border: 1px solid #000;
					.logo {
						width: 10%;
					}
					span {
						text-transform: uppercase;
						font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
							Helvetica, sans-serif;
						font-style: Normal;
						font-weight: 500;
						cursor: pointer;
						font-size: 0.525rem;
						letter-spacing: 0.0625rem;
					}
				}
			}
			.toggle-buttons {
				display: flex;
				justify-content: center;
				a {
					width: 100%;
					text-align: center;
					padding: 25px 15px;
					box-shadow: inset -6px -5px 11px -13px rgba(0, 0, 0, 0.75);
					background-color: #f2f3f5;
					font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
						serif;
					color: #041e3a;
					font-size: 1.4rem;
					cursor: pointer;
					&.active {
						background-color: #fff;
						box-shadow: none;
					}
				}
			}
			.or-bar {
				margin: 20px 0;
				box-sizing: border-box;
				width: 100%;
				display: flex;
				align-items: center;
				.left,
				.right {
					width: 47%;
					border-top: 1px solid #ccc;
					padding: 0;
				}
				.left {
					float: left;
				}
				.right {
					float: right;
				}
				.middle {
					padding: 0;
					margin: 0 15px;
					color: #041e3a;
				}
			}
			form {
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 25px;
				.checkbox-group {
					display: flex;
					gap: 10px;
					input {
						align-self: flex-start;
					}
					.label {
						font-family: RL_DroidKufi, Founders Grotesk Mono Light,
							Lucida Console, Arial, Helvetica, sans-serif;
						font-style: Normal;
						font-weight: 300;
						line-height: 16px;
					}
				}
				.input-group {
					width: 100%;
					position: relative;
					input {
						height: 100%;
						width: 100%;
						box-sizing: border-box;
						padding: 0.78125rem 1.25rem;
						border: 1px solid #757575;
						font-size: 12px;
						&:focus {
							outline: none;
						}
						&::placeholder {
							font-size: 12px;
							text-transform: uppercase;
						}
					}
				}
				button {
					width: 100%;
					border: none;
					padding: 20px 0;
					background: #041e3a;
					color: #fff;
					text-transform: uppercase;
					font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
						Helvetica, sans-serif;
					font-style: Normal;
					font-size: 10px;
					font-weight: 500;
					letter-spacing: 1.25px;
					&:hover {
						background-color: #153456;
					}
				}
			}
		}
	}
	.order-box {
		padding: 15px;
		width: 35%;
		.order-track {
			background-color: #f2f3f5;
			padding: 40px;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			h3 {
				margin: 0;
				color: #041e3a;
				text-transform: uppercase;
				letter-spacing: 0.1rem;
				font-size: 0.875rem;
				font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 600;
			}
			.login-box-content {
				p {
					color: #041e3a;
					display: block;
					width: 50%;
					margin: 0 auto 10px;
					font-size: 0.75rem;
					font-weight: 500;
					text-align: center;
					line-height: 20px;
				}
				form {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 15px;
					.input-group {
						position: relative;
						width: max-content;
						input {
							height: 100%;
							box-sizing: border-box;
							padding: 0.78125rem 1.25rem;
							border: 1px solid #757575;
							font-size: 12px;
							&:focus {
								outline: none;
							}
							&::placeholder {
								font-size: 12px;
								text-transform: uppercase;
							}
						}
					}
					button {
						margin-top: 30px;
						background: none;
						border: none;
						font-size: 11px;
						letter-spacing: 1.25px;
						text-transform: uppercase;
						text-decoration: underline;
						text-underline-offset: 12px;
						text-decoration-color: #041e3a;
					}
				}
			}
		}
		.benefits {
			.content-assets {
				h3 {
					color: #041e3a;
					text-align: center;
					text-transform: uppercase;
					letter-spacing: 0.1rem;
					font-size: 0.675rem;
					font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
						Arial, sans-serif;
					font-style: Normal;
					font-weight: 500;
				}
				.detail {
					margin-top: 1.2rem;
					.title {
						font-size: 1.15em;
						font-weight: 600;
						color: #041e3a;
						font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
							Arial, sans-serif;
					}
				}
				.read-more {
					color: #041e3a;
					cursor: pointer;
				}
			}
		}
	}
}
</style>

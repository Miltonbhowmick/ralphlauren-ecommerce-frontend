<template>
	<section class="order-status-page">
		<div class="data-box">
			<div class="sidebar">
				<div class="menu-box">
					<h2 class="headline">Account Menu</h2>
					<ul class="account-menu">
						<li><a>My account</a></li>
						<li><a>Wishlist</a></li>
						<li><a>Orders/Returns</a></li>
						<li><a>Profile</a></li>
						<li><a>Addresses</a></li>
						<li><a>Payments</a></li>
					</ul>
					<ul class="auth-menu">
						<li><a>privacy policy</a></li>
						<li><a>logout</a></li>
					</ul>
				</div>

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
			</div>
			<div class="order">
				<div class="form-data">
					<h3 class="headline">check order</h3>
					<p class="description">
						See your order even if you are not a registered user. Enter the
						order number and the billing address postcode.
					</p>
					<form>
						<div class="input-wrapper">
							<label class="label">* order number</label>
							<div class="field-wrapper">
								<input type="text" placeholder="order number" />
							</div>
						</div>
						<div class="input-wrapper">
							<label class="label">* order email address</label>
							<div class="field-wrapper">
								<input type="email" placeholder="order email address" />
							</div>
						</div>
						<div class="input-wrapper">
							<label class="label">* invoicing postcode</label>
							<div class="field-wrapper">
								<input type="text" placeholder="invoicing postcode" />
							</div>
						</div>
						<button class="submit-btn">check status</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.order-status-page {
	margin-top: 4rem;
	.data-box {
		padding: 0 6rem;
		display: flex;
		gap: 40px;
		.sidebar {
			width: 20%;
			.menu-box {
				.headline {
					font-size: 1.15em;
					font-weight: 600;
				}
				.account-menu {
					list-style: none;
					padding: 30px 0;
					display: flex;
					flex-direction: column;
					gap: 15px;
					border-bottom: 1px solid #d1d1d1;
					li {
						a {
							color: #767676;
							font-size: 0.775rem;
							font-weight: 300;
							letter-spacing: 0.45px;
							text-transform: capitalize;
							&:hover {
								text-decoration: underline;
							}
						}
					}
				}
				.auth-menu {
					list-style: none;
					padding: 20px 0;
					display: flex;
					flex-direction: column;
					gap: 15px;
					li {
						a {
							color: #767676;
							font-size: 0.775rem;
							font-weight: 300;
							letter-spacing: 0.45px;
							text-transform: capitalize;
							&:hover {
								text-decoration: underline;
							}
						}
					}
				}
			}
			.help-box {
				width: 80%;
				// padding: 15px;
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
							width: 6%;
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
		}
		.order {
			width: 40%;
			.form-data {
				.headline {
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					font-style: Normal;
					font-weight: 400;
					font-size: 1.5rem;
					letter-spacing: 0.15rem;
					color: #474747;
					text-transform: uppercase;
				}
				form {
					display: flex;
					flex-direction: column;
					gap: 15px;
					.input-wrapper {
						.label {
							font-size: 1.1em;
							color: #474747;
							text-transform: uppercase;
							font-family: RL_DroidKufi, Founders Grotesk Mono Light,
								Lucida Console, Arial, Helvetica, sans-serif;
							font-style: Normal;
							font-weight: 300;
							letter-spacing: 0.3px;
						}
						.field-wrapper {
							margin-top: 10px;
							display: flex;
							gap: 10px;
							input {
								border: 1px solid #757575;
								box-sizing: border-box;
								height: 2.5rem;
								padding: 0.625rem;
								text-indent: 0;
								width: 100%;
								&::placeholder {
									text-transform: uppercase;
									font-size: 12px;
								}
							}
							select {
								border: 1px solid #757575;
								box-sizing: border-box;
								height: 2.5rem;
								padding: 0.625rem;
								width: 100%;
							}
						}
						.caption {
							margin-top: 10px;
							color: #767676;
						}
					}
				}
				.submit-btn {
					background-color: #041e3a;
					border: 1px solid #041e3a;
					color: #fff;
					cursor: pointer;
					font-size: 0.75rem;
					letter-spacing: 0.05em;
					padding: 0.9375rem 0;
					text-align: center;
					text-transform: uppercase;
					width: 70%;
					font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
						Helvetica, sans-serif;
					font-style: Normal;
					font-weight: 500;
				}
			}
		}
	}
}
</style>

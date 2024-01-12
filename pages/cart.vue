<template>
	<section class="cart-page">
		<div v-if="loggedIn" class="user-cart">
			<div class="product-detail">
				<div class="header">
					<h1>Shopping Bag</h1>
				</div>
				<div class="product-box">
					<div class="images">
						<div class="image">
							<img src="/images/s7-1497837_lifestyle.jpg" />
						</div>
					</div>
					<div class="product-info">
						<div class="links">
							<a class="product-name">Twill Jacket</a>
							<ul class="product-cart-update">
								<li>
									<a><i class="fa fa-pencil" aria-hidden="true"></i> </a>
								</li>
								<li>
									<a><i class="fa fa-heart-o" aria-hidden="true"></i> </a>
								</li>
								<li>
									<a><i class="fa fa-times" aria-hidden="true"></i> </a>
								</li>
							</ul>
						</div>
						<p class="attribute-box">
							<span class="name">Colour:</span
							><span class="value">Cafe Tan</span>
						</p>
						<p class="attribute-box">
							<span class="name">Size:</span><span class="value">M</span>
						</p>
						<p class="product-id">#3616534545091</p>
						<div class="quantity-action">
							<button>-</button>
							<span class="value-box">QTY: <span class="value">1</span></span>
							<button>+</button>
						</div>
						<div class="delivery-variant">
							<button class="delivery">delivery</button>
							<button class="pickup">pick up</button>
						</div>
						<p class="delivery-time">
							<i class="fa fa-truck" aria-hidden="true"></i>
							<span class="standard">Standard Delivery</span
							><span class="date"> Receive by Tuesday, January 23</span>
						</p>
						<p class="product-price">€ <span>299,00</span></p>
					</div>
				</div>
				<div class="gift-options">
					<div class="banner">
						<div class="image">
							<img src="/images/cart-gift-image-2022.jpg" />
						</div>
					</div>
					<div class="header">
						<h5>Gift Options</h5>
					</div>
					<div class="accordion-box">
						<div class="accordion" id="accordionExample">
							<div class="accordion-item">
								<h2 class="accordion-header" id="headingOne">
									<button
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										Add the perfect finishing touch, with our signature gift
										boxes
									</button>
								</h2>
								<div
									id="collapseOne"
									class="accordion-collapse collapse show"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div class="accordion-body">
										<div class="detail-box">
											<div class="images">
												<div class="image">
													<img src="/images/s7-1497837_lifestyle.jpg" />
												</div>
											</div>
											<div class="accordion-product-detail">
												<h6 class="product-name">
													Twill Jacket <span class="quantity">(Qty: 1)</span>
												</h6>
												<div class="check-input">
													<input type="checkbox" />
													<label>Add Gift Box</label>
												</div>
												<div class="check-input">
													<input type="checkbox" />
													<label>Add Gift Message</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="payment-detail">
				<div class="order-header">
					<h3>ORDER SUMMARY</h3>
				</div>
				<div class="order-body">
					<div class="cart-totals">
						<div class="cs-row">
							<div class="cs-col"><p class="name">Subtotal</p></div>
							<div class="cs-col">
								<p class="info">
									<span class="currency-icon">€</span><span>1.196,00</span>
								</p>
							</div>
						</div>
						<div class="cs-row">
							<div class="cs-col"><p class="name">Standard Delivery</p></div>
							<div class="cs-col">
								<p class="info"><span>Free</span></p>
							</div>
						</div>
						<div class="cs-row">
							<div class="cs-col">
								<p class="name bold">Estimated Total</p>
							</div>
							<div class="cs-col">
								<p class="info bold">
									<span class="currency-icon">€</span><span>1.196,00 </span>
								</p>
							</div>
						</div>
						<a class="promo-link">Apply Promo Code</a>
						<div class="promo-input-wrapper">
							<input type="text" placeholder="enter promo code" />
							<button class="apply">apply</button>
						</div>
					</div>
					<div class="free-shipping">
						<p class="title">You Qualify For free shipping</p>
						<progress value="32" max="100">32%</progress>
					</div>
					<div class="checkout-continue">
						<button class="continue-btn">proceed to checkout</button>
						<div class="or-bar">
							<div class="left"></div>
							<div class="middle">Or</div>
							<div class="right"></div>
						</div>
						<!-- <button class="paypal"></button> -->
					</div>
				</div>
			</div>
		</div>
		<div v-else class="non-user">
			<div class="cart-empty">
				<h1 class="title">Your Shopping Bag is Empty</h1>
				<p class="caption">
					<nuxt-link to="/signin">Sign In</nuxt-link> to your account to see
					your previously added items.
				</p>
				<div class="links">
					<nuxt-link to="/signin">sign in</nuxt-link>
					<a class="has-bg">continue shopping</a>
				</div>
			</div>
			<div class="non-authenticate">
				<div class="content">
					<h2 class="title">Create An Account</h2>
					<p class="caption">
						Signing up for an account is quick and gives you access to exclusive
						offers, news, order history and faster checkout.
						<nuxt-link to="/signin">Create an Account</nuxt-link> or
						<nuxt-link to="/signin">Sign In</nuxt-link>
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
var loggedIn = ref(true);
</script>

<style scoped lang="scss">
section.cart-page {
	margin-top: 4rem;
	padding: 0 5rem;
	.user-cart {
		display: flex;
		gap: 8rem;
		.product-detail {
			width: 65%;
			display: flex;
			flex-direction: column;
			gap: 3rem;
			.header {
				padding: 15px 0;
				border-bottom: 1px solid #d1d1d1;
				h1 {
					margin: 0;
					color: #041e3a;
					font-family: "LeJeuneDeck-Regular", Times, serif;
					letter-spacing: 0;
					text-transform: capitalize;
					font-size: 1.75rem;
				}
			}
			.product-box {
				padding: 15px 0;
				border-bottom: 1px solid #d1d1d1;
				display: flex;
				gap: 8px;
				.images {
					width: 30%;
				}
				.product-info {
					width: 70%;
					.links {
						display: flex;
						justify-content: space-between;
						.product-name {
							font-family: "LeJeuneDeck-Regular", "Times New Roman", Times,
								serif;
							letter-spacing: 0.01375rem;
							color: #041e3a;
							font-weight: normal;
							font-size: 1.1375rem;
							&:hover {
								text-decoration: underline;
								cursor: pointer;
							}
						}
						ul {
							list-style: none;
							margin: 0;
							padding: 0;
							display: flex;
							align-items: center;
							gap: 15px;
							a {
								cursor: pointer;
								i {
									font-size: 16px;
								}
							}
						}
					}
					.attribute-box {
						font-family: "Founders Grotesk text Regular", Helvetica, Arial,
							sans-serif;
						font-size: 0.75rem;
						line-height: 2.08333em;
						color: #041e3a;
						margin: 6px 0 0 0;
						letter-spacing: 0.04562rem;
					}
					.product-id {
						margin-top: 12px;
						font-family: "Founders Grotesk text Regular", Helvetica, Arial,
							sans-serif;
						font-size: 0.75rem;
						line-height: 2.08333em;
						color: #041e3a;
						margin: 6px 0 0 0;
						letter-spacing: 0.04562rem;
					}
					.quantity-action {
						margin-top: 30px;
						padding: 5px 10px;
						width: max-content;
						background: #f2f3f5;
						border-radius: 1rem;
						display: flex;
						justify-content: center;
						align-items: center;
						gap: 10px;
						button {
							border: none;
							font-size: 18px;
							font-weight: 300;
						}
						.value-box {
							color: #041e3a;
							font-family: "Founders Grotesk text Regular", Helvetica, Arial,
								sans-serif;
							letter-spacing: 0.04562rem;
							font-size: 0.525rem;
							text-transform: uppercase;
							.value {
							}
						}
					}
					.delivery-variant {
						margin-top: 30px;
						padding: 5px 10px;
						button {
							padding: 8px 36px;
						}
						.delivery {
							border-radius: 1rem 0rem 0rem 1rem;
							background: #f2f3f5;
							border: 1px solid #041e3a;
							font-weight: bold;
							font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
								sans-serif;
							letter-spacing: 0.02813rem;
							font-size: 0.525rem;
							text-transform: uppercase;
						}
						.pickup {
							border-radius: 0rem 1rem 1rem 0rem;
							border: 1px solid #e1e1e5;
							background-color: #fff;
							text-transform: uppercase;
							color: #041e3a;
							font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
								sans-serif;
							margin: 0;
							letter-spacing: 0.02813rem;
							font-size: 0.525rem;
						}
					}
					.delivery-time {
						margin-top: 10px;
						display: flex;
						gap: 5px;
						.standard {
							color: #041e3a;
							font-family: "Founders Grotesk text Regular", Helvetica, Arial,
								sans-serif;
							letter-spacing: 0.05562rem;
							font-size: 0.5875rem;
							text-transform: capitalize;
						}
						.date {
							font-family: "Founders Grotesk text Regular", Helvetica, Arial,
								sans-serif;
							letter-spacing: 0.05562rem;
							font-size: 0.5875rem;
							color: #6d6f73;
						}
					}
					.product-price {
						text-align: end;
						font-family: "Founders Grotesk Text Medium", Helvetica, Arial,
							sans-serif;
						font-weight: 600;
						letter-spacing: 0.01688rem;
						font-size: 0.8125rem;
					}
				}
			}
			.gift-options {
				.header {
					h5 {
						margin: 0;
						color: #041e3a;
						font-family: "LeJeuneDeck-Regular", Times, serif;
						letter-spacing: 0;
						text-transform: capitalize;
						font-size: 1.55rem;
					}
				}
			}
		}
		.payment-detail {
			width: 35%;
			.order-header {
				background-color: #f0eeed;
				padding: 1.375rem 1.875rem;
				h3 {
					margin: 0;
					font-family: "Founders Grotesk Text Medium", Helvetica, Arial,
						sans-serif;
					font-size: 0.8375rem;
					font-weight: 600;
					letter-spacing: 0.02937rem;
					color: #041e3a;
					text-transform: uppercase;
				}
			}
			.order-body {
				padding: 0 1.875rem;
				background-color: #f8f8f8;
				.cart-totals {
					padding: 1.975rem 0;
					display: flex;
					flex-direction: column;
					gap: 10px;
					.cs-row {
						display: flex;
						justify-content: space-between;
						.cs-col {
							.name,
							.info {
								margin: 0;
								font-family: "Founders Grotesk text Regular", Helvetica, Arial,
									sans-serif;
								font-size: 0.8125rem;
								letter-spacing: 0.04562rem;
								color: #041e3a;
								&.bold {
									font-weight: 600;
								}
							}
							.info {
								display: flex;
								justify-content: flex-end;
							}
						}
					}
					.promo-link {
						margin-top: 15px;
						color: #6d6f73;
						letter-spacing: 0.03562rem;
						text-decoration: underline;
						cursor: pointer;
						font-size: 0.6875rem;
					}
					.promo-input-wrapper {
						margin-top: 10px;
						position: relative;
						input {
							border: 1px solid #e1e1e5;
							background: #fff;
							width: 100%;
							padding: 20px 15px;
							font-size: 0.65rem;
							color: #6d6f73;
							letter-spacing: 0.01562rem;
							font-family: "Founders Grotesk text Regular", Helvetica, Arial,
								sans-serif;
							&::placeholder {
								text-transform: capitalize;
								letter-spacing: 0.05562rem;
							}
							&:focus {
								outline: none;
							}
						}
						.apply {
							position: absolute;
							right: 5px;
							top: 50%;
							transform: translateY(-50%);
							background: none;
							width: max-content;
							border: none;
							color: #6d6f73;
							text-transform: uppercase;
							font-size: 0.55rem;
						}
					}
				}
				.free-shipping {
					padding: 1.975rem 0;
					border-top: 1px solid #e1e1e5;
					border-bottom: 1px solid #e1e1e5;
					display: flex;
					flex-direction: column;
					align-items: center;
					.title {
						font-family: "Founders Grotesk Text Medium", Helvetica, Arial,
							sans-serif;
						font-size: 0.71875rem;
						font-weight: 600;
						letter-spacing: 0.01562rem;
						color: #041e3a;
					}
					progress {
						width: 100%;
						accent-color: black;
					}
				}
				.checkout-continue {
					padding: 1.975rem 0;
					.continue-btn {
						width: 100%;
						padding: 15px 0;
						background: #041e3a;
						color: #fff;
						border: none;
						text-transform: uppercase;
						font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
							sans-serif;
						font-size: 0.55rem;
						cursor: pointer;
						letter-spacing: 0.0625rem;
						&:hover {
							background: #153456;
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
				}
			}
		}
	}
	.non-user {
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
				width: 34%;
				margin-top: 20px;
				display: flex;
				justify-content: center;
				gap: 50px;
				a {
					color: #041e3a;
					background-color: #fff;
					border: 1px solid #041e3a;
					width: 20vw;
					padding: 18px 0;
					text-align: center;
					text-transform: uppercase;
					font-size: 0.5875rem;
					font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
						sans-serif;
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
					font-family: "Founders Grotesk text Regular", Helvetica, Arial,
						sans-serif;
					font-size: 0.7125rem;
					letter-spacing: 0.03562rem;
					a {
						text-decoration: underline;
					}
				}
			}
		}
	}
}

:deep(.accordion-button) {
	background: none;
	padding-left: 0;
	font-size: 0.75rem;
	text-transform: none;
	font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica, Arial,
		sans-serif;
	font-style: Normal;
	font-weight: 400;
	color: #474747;
	letter-spacing: 1.1px;
	box-shadow: none;
}

:deep(.accordion-item) {
	border: none;
	border-radius: 0;
	border-bottom: 1px solid #d1d1d1;
}

:deep(.accordion-body) {
	padding-left: 0;
	.detail-box {
		display: flex;
		.images {
			width: 30%;
		}
		.accordion-product-detail {
			width: 70%;
			display: flex;
			flex-direction: column;
			gap: 15px;
			.product-name {
				font-family: "LeJeuneDeck-Regular", "Times New Roman", Times, serif;
				color: #041e3a;
				.quantity {
					color: #6d6f73;
					font-family: "Founders Grotesk text Regular", Helvetica, Arial,
						sans-serif;
					letter-spacing: 0.01562rem;
					font-size: 0.75rem;
				}
			}
			.check-input {
				margin-top: 10px;
				width: 100%;
				display: flex;
				gap: 5px;
				label {
					font-family: "Founders Grotesk text Regular", Helvetica, Arial,
						sans-serif;
					letter-spacing: 0.01562rem;
					font-size: 0.75rem;
					color: #041e3a;
					cursor: pointer;
				}
			}
		}
	}
}
</style>

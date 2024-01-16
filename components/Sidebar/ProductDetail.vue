<template>
	<div class="modal-overlay">
		<div class="product-detail-sidebar">
			<a class="close" @click="close">x</a>
			<div class="content">
				<div class="image-list">
					<div class="image">
						<img src="/images/long-swetter.jpg" alt="long-swetter" />
					</div>
					<div class="image">
						<img src="/images/long-swetter.jpg" alt="long-swetter" />
					</div>
				</div>
				<div class="info">
					<div class="product-info">
						<h1 class="brand-name">GIRLS 7–14 YEARS</h1>
						<h2 class="product-name">Fair Isle Fleece Quarter-Zip Pullover</h2>
						<div class="product-price">€ <span class="value">149,95</span></div>
						<div class="promotion-msg">
							<span class="message"
								>Complimentary standard delivery on all orders</span
							>
							<a class="tooltip promo-link" href="#">
								Details
								<div class="tooltip-content" data-layout="small">
									Complimentary Delivery offer valid on full price orders
									shipped in Romania and applies to Standard Delivery only. Gift
									certificates, taxes, additional shipping and handling do not
									count toward the qualifying amount. Not valid for cash.
									Previous Purchases are not eligible for adjustments. To
									participate, simply add merchandise to your shopping basket
									and complimentary Standard Delivery will automatically be
									applied. You must select the "Standard Delivery" option to
									receive the complimentary shipping offer. If you have
									questions, please contact Customer Assistance by email at
									CustomerAssistance@RalphLauren.eu or by phone at +44 (0) 203
									450 7750
								</div>
							</a>
						</div>
					</div>
					<div class="product-bag">
						<div class="product-variation">
							<ul>
								<li class="attribute-color">
									<div class="value">
										<div class="selected-value">Brown Nordic</div>
										<ul>
											<li>
												<div class="image">
													<img
														src="/images/long-swetter.jpg"
														alt="long-swetter"
													/>
												</div>
											</li>
										</ul>
									</div>
								</li>
								<li class="attribute-years">
									<ul>
										<li><a class="unavailable">1.5 yrs</a></li>
										<li><a class="unavailable">2 yrs</a></li>
										<li><a class="unavailable">3 yrs</a></li>
										<li><a>4 yrs</a></li>
										<li><a>5 yrs</a></li>
									</ul>
								</li>
								<li class="attribute-sizes">
									<ul>
										<li><a class="unavailable">S</a></li>
										<li><a class="unavailable">M</a></li>
										<li><a>L</a></li>
										<li><a>XL</a></li>
									</ul>
								</li>
							</ul>
						</div>
						<div class="extra-info">
							<ul>
								<li>
									<div class="icon">
										<img src="/images/df-size-shart.svg" alt="df-size-shart" />
									</div>
									<span>Size Chart</span>
								</li>
								<li>
									<div class="icon">
										<img src="/images/findInStore.svg" alt="findInStore" />
									</div>
									<span>Pick Up In Store</span>
								</li>
							</ul>
						</div>
						<div class="cart-actions">
							<button>ADD TO BAG</button>
						</div>
						<div class="full-detail-link">
							<a>Full Details</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits();

const close = () => {
	emit("hideModal");
};

onMounted(() => {
	document.body.style.overflowY = "hidden";
});
onBeforeUnmount(() => {
	document.body.style.overflowY = "scroll";
});
</script>

<style scoped lang="scss">
.modal-overlay {
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 9999999;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	.product-detail-sidebar {
		position: relative;
		height: 100vh;
		overflow-y: auto;
		background: #ffffff;
		width: 60%;
		float: right;
		.close {
			position: fixed;
			top: 5px;
			right: 35px;
			width: 10px;
			height: 10px;
			z-index: 99;
			color: rgb(50, 50, 50);
			font-size: 24px;
			font-weight: 300;
			cursor: pointer;
		}
		.content {
			position: relative;
			display: flex;
			gap: 10px;
			.image-list {
				display: flex;
				flex-direction: column;
				gap: 0;
				.image {
					flex-basis: 50%;
				}
			}
			.info {
				position: sticky;
				top: 0;
				align-self: flex-start;
				width: 480px;
				padding: 60px 20px;
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				gap: 10px;
				.product-info {
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 10px;
					.brand-name {
						margin: 0;
						font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
							Arial, sans-serif;
						font-style: Normal;
						font-weight: 400;
						font-size: 0.6875rem;
						line-height: 0.875rem;
						color: #6d6f73;
					}
					.product-name {
						margin: 0;
						font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman,
							Times, serif;
						font-weight: 400;
						font-style: normal;
						-webkit-font-smoothing: auto;
						-moz-osx-font-smoothing: grayscale;
						font-size: 1.125rem;
						line-height: 1.25rem;
						color: #041e3a;
						width: 80%;
						text-align: center;
					}
					.product-price {
						margin-bottom: 30px;
						color: #041e3a;
						font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
							Arial, sans-serif;
						font-size: 12px;
					}
					.promotion-msg {
						margin-bottom: 30px;
						width: 70%;
						text-align: center;
						.message {
							font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
								Helvetica, sans-serif;
							font-style: Normal;
							font-weight: 500;
							font-size: 0.6875rem;
							line-height: 0.8125rem;
							letter-spacing: 0.746px;
							color: #996e40;
							text-transform: uppercase;
						}
						.promo-link {
							position: relative;
							color: #996e40;
							text-decoration: underline;
							.tooltip-content {
								visibility: hidden;
								position: absolute;
								background: #ffffff;
								color: black;
								border: 1px solid black;
								padding: 5px;
							}
							&:hover {
								.tooltip-content {
									visibility: visible;
								}
							}
						}
					}
				}
				.product-bag {
					width: 100%;
					.product-variation {
						margin-bottom: 30px;
						ul {
							padding: 0;
							margin: 0;
							list-style: none;
							.attribute-color {
								margin-bottom: 20px;
								.value {
									.selected-value {
										text-align: center;
										margin-bottom: 15px;
										font-family: RL_DroidKufi, Founders Grotesk Text Medium,
											Helvetica, Arial, sans-serif;
										font-style: Normal;
										font-weight: 500;
										font-size: 0.75rem;
										line-height: 0.9375rem;
										color: #041e3a;
										border: 0;
									}
									ul {
										padding: 0;
										margin: 0;
										li {
											display: flex;
											flex-direction: row;
											justify-content: center;
											.image {
												cursor: pointer;
												width: 50px;
												height: 50px;
												background: #041e3a;
												padding: 1px;
												border-radius: 50%;
												img {
													border-radius: 50%;
												}
											}
										}
									}
								}
							}
							.attribute-years {
								ul {
									border-top: 1px solid #d1d1d1;
									display: flex;
									justify-content: center;
									gap: 20px;
									li {
										padding: 20px 10px;
										a {
											font-family: RL_DroidKufi, Founders Grotesk Text Medium,
												Helvetica, Arial, sans-serif;
											font-style: Normal;
											font-weight: 600;
											position: relative;
											font-size: 0.6125rem;
											text-transform: uppercase;
											&.unavailable {
												color: #6d6f73;
												font-weight: 300;
											}
										}
									}
								}
							}
							.attribute-sizes {
								ul {
									border-top: 1px solid #d1d1d1;
									display: flex;
									justify-content: center;
									gap: 20px;
									li {
										padding: 20px 10px;
										a {
											font-family: RL_DroidKufi, Founders Grotesk Text Medium,
												Helvetica, Arial, sans-serif;
											font-style: Normal;
											font-weight: 600;
											position: relative;
											font-size: 0.6125rem;
											&.unavailable {
												color: #6d6f73;
											}
										}
									}
								}
							}
						}
					}
					.extra-info {
						margin-bottom: 30px;
						ul {
							margin: 0;
							padding: 0;
							list-style: none;
							display: flex;
							justify-content: center;
							gap: 10px;
							li {
								display: flex;
								flex-direction: row;
								align-items: center;
								.icon {
									width: 15px;
									display: inline-block;
									margin-right: 5px;
								}
								span {
									color: #6d6f73;
									letter-spacing: 0.01875rem;
									font-size: 0.6875rem;
								}
							}
						}
					}
					.cart-actions {
						margin-bottom: 30px;
						text-align: center;
						button {
							width: 100%;
							background-color: #041e3a;
							border: 1px solid #041e3a;
							border-radius: 0;
							color: #fff;
							cursor: pointer;
							display: inline-block;
							font-size: 0.75rem;
							letter-spacing: 0.05em;
							min-height: 3.25rem;
							padding: 0.9375rem 0;
							text-align: center;
							text-transform: uppercase;
						}
					}
					.full-detail-link {
						margin-bottom: 30px;
						text-align: center;
						a {
							display: block;
							height: 2rem;
							cursor: pointer;
							text-decoration: underline;
							text-underline-offset: 15px;
							&:hover {
								text-underline-offset: 9px;
								transition: 300ms ease-in-out;
							}
						}
					}
				}
			}
		}
	}
}
</style>

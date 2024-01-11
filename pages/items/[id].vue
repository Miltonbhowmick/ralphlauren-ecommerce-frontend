<template>
	<div class="box">
		<div class="product-content">
			<div class="product-details">
				<div class="gellary">
					<div class="image">
						<img
							src="/images/formal-shirt/little-girl-black-skirt.jpg"
							alt="little-girl-black-skirt"
						/>
					</div>
					<div class="image">
						<img
							src="/images/formal-shirt/little-girl-black-skirt-full.jpg"
							alt="little-girl-black-skirt-full"
						/>
					</div>
				</div>
				<div class="main-details">
					<div class="header">
						<ul>
							<li><a class="active">description</a></li>
							<li><a>details</a></li>
							<li><a>delivery & returns</a></li>
						</ul>
					</div>
					<div class="information">
						<div>
							Inspired by two of our icons, this button-down combines the look
							of an oxford with the comfort and ease of our Polo shirt's cotton
							mesh fabric.
						</div>
					</div>
				</div>
				<div class="gellary">
					<div class="image">
						<img
							src="/images/formal-shirt/little-girl-black-skirt-full.jpg"
							alt="little-girl-black-skirt-full"
						/>
					</div>
					<div class="image">
						<img
							src="/images/formal-shirt/little-girl-black-skirt-face.jpg"
							alt="little-girl-black-skirt-face"
						/>
					</div>
					<div class="image">
						<img
							src="/images/formal-shirt/little-girl-black-skirt-eye.jpg"
							alt="little-girl-black-skirt-eye"
						/>
					</div>
				</div>
			</div>
			<div class="product-attribute">
				<div class="info">
					<h6 class="brand-name">GIRLS 7-14 YEARS</h6>
					<div class="product-title">
						<h2>Polka Dot Tulle Dress</h2>
						<i class="fa fa-heart"></i>
					</div>
					<p class="product-price">
						<data class="money" value="100.00">€ 449,95</data>
						<data class="discount-money" value="100.00">€ 320,95</data>
					</p>
				</div>
				<div class="promotion-call">
					<p>new arrival</p>
				</div>
				<div class="product-sizes">
					<ul>
						<li v-for="(obj, idx) in productSizes" :key="idx">
							<a :class="{ available: obj.active }">{{ obj.name }}</a>
						</li>
					</ul>
				</div>
				<div class="sizes-guideline">
					<a
						><div class="icon">
							<img src="/images/df-size-shart.svg" alt="df-size-shart" />
						</div>
						Size Chart</a
					>
				</div>
				<button class="add-bag">add to bag</button>
				<div class="delivery-box">
					<div class="image">
						<img src="/images/delivery-truck.png" alt="delivery-truck" />
					</div>
					<p>FREE STANDARD DELIVERY ON ALL ORDERS &</p>
					<p>FREE 30-DAY RETURNS</p>
				</div>
				<div class="review-box">
					<div class="image">
						<img src="/images/df_reviews.svg" alt="delivery-truck" />
					</div>
					<p>Reviews (<span class="value">356</span>)</p>
				</div>
				<div class="complete-look-box">
					<h5 class="title">Complete the Look</h5>
					<SingleLookCustomSlider />
				</div>
			</div>
		</div>
		<div class="like-products">
			<div class="title">You May Also Like</div>
			<LadderLookCustomSlider :itemList="ladderSliderProducts" />
		</div>
		<ModernCustomSlider
			:headlineBlack="true"
			:isBackgroundImage="true"
			:smallBigTitle="{ small: 'Recently', big: 'Viewed' }"
			:exploreLink="true"
		/>
	</div>
</template>
<script setup>
var productSizes = [
	{
		name: "XS",
		active: false,
	},
	{
		name: "S",
		active: false,
	},
	{
		name: "M",
		active: false,
	},
	{
		name: "L",
		active: true,
	},
	{
		name: "XL",
		active: true,
	},
	{
		name: "XXL",
		active: true,
	},
];

var ladderSliderProducts = [
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
	{
		imageSrc: "/images/full-jacket.jpg",
		brandName: "Polo Ralph Lauren",
		productTitle: "The Colden Packable Jacket",
		price: {
			low: "€ 299,95",
			high: "€ 349,00",
		},
	},
];
</script>

<style scoped lang="scss">
.box {
	padding: 80px 80px;
	.product-content {
		display: flex;
		gap: 20px;
		.product-details {
			width: 70%;
			display: flex;
			flex-direction: column;
			gap: 40px;
			.gellary {
				display: flex;
				flex-wrap: wrap;
				gap: 14px;
				.image {
					width: 48%;
				}
			}
			.main-details {
				.header {
					margin-bottom: 20px;
					ul {
						list-style: none;
						margin: 0;
						padding: 0;
						display: flex;
						justify-content: center;
						gap: 30px;
						li {
							a {
								display: block;
								height: 24px;
								width: max-content;
								font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
									Helvetica, sans-serif;
								font-weight: 500;
								font-size: 0.775rem;
								letter-spacing: 1.5833px;
								text-transform: uppercase;
								color: #6d6f73;
								&.active {
									color: #041e3a;
									border-bottom: 3px solid #041e3a;
								}
							}
						}
					}
				}
				.information {
					color: #474747;
					font-size: 0.75rem;
					padding: 0 30px;
					text-align: center;
				}
			}
		}
		.product-attribute {
			width: 30%;
			.product-title {
				display: flex;
				justify-content: space-between;
				align-items: center;
				i {
					font-size: 20px;
				}
			}
			.product-price {
				.money {
					margin-right: 10px;
					text-decoration: line-through;
					color: #757575;
				}
				.discount-money {
					color: #996e40;
				}
			}
			.product-sizes {
				border-top: 1px solid #6d6f73;
				ul {
					list-style: none;
					margin: 0;
					margin-top: 10px;
					padding: 0;
					display: flex;
					flex-wrap: wrap;
					gap: 10px;
					li {
						padding: 10px 20px;
						a {
							font-family: RL_DroidKufi, Founders Grotesk text Regular,
								Helvetica, Arial, sans-serif;
							font-size: 12px;
							font-weight: 600;
							color: #6d6f73;
							&.available {
								color: #041e3a;
							}
						}
					}
				}
			}
			.sizes-guideline {
				margin-top: 30px;
				a {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 8px;
					color: #6d6f73;
					.icon {
						width: 7%;
					}
				}
			}
			.add-bag {
				margin-top: 30px;
				width: 100%;
				padding: 20px 0;
				background-color: #041e3a;
				color: #fff;
				text-transform: uppercase;
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-size: 0.6rem;
				font-weight: 500;
				letter-spacing: 1.65px;
			}
			.delivery-box {
				margin-top: 30px;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 15px;
				.image {
					width: 15%;
				}
				p {
					margin: 0;
					text-transform: uppercase;
					font-family: "Founders Grotesk Mono Medium", "Lucida Console", "Arial",
						"sans-serif";
					font-style: Normal;
					font-size: 12px;
					font-weight: 600;
					line-height: 0.85rem;
					text-align: center;
				}
			}
			.review-box {
				margin-top: 45px;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 15px;
				.image {
					width: 8%;
				}
				p {
					margin: 0;
					font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
						Helvetica, sans-serif;
					font-style: Normal;
					font-weight: 500;
					font-size: 0.6875rem;
					text-align: center;
					text-transform: capitalize;
					letter-spacing: 1.245px;
					color: #6d6f73;
					.value {
						font-size: 0.7875rem;
					}
				}
			}
			.complete-look-box {
				margin-top: 80px;
				.title {
					font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
						serif;
					font-weight: 400;
					font-style: normal;
					font-size: 1.25rem;
					color: #041e3a;
					margin-bottom: 0.6875rem;
					text-align: center;
				}
			}
		}
	}
	.like-products {
		margin-top: 60px;
		padding: 0 50px;
		.title {
			width: 100%;
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-weight: 400;
			font-style: normal;
			color: #041e3a;
			font-size: 1.5rem;
			letter-spacing: 0.05rem;
			margin-bottom: 30px;
			text-align: center;
		}
	}
}
</style>

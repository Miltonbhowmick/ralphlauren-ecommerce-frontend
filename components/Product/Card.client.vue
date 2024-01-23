<template>
	<div class="product-card">
		<div class="slider-box">
			<carousel
				:per-page="1"
				:mouse-drag="true"
				:navigationEnabled="true"
				:paginationEnabled="false"
			>
				<slide class="cs-slider"
					><div class="slider-image">
						<img src="/images/formal-shirt/backside-jacket-half.jpg" />
					</div>
				</slide>
				<slide class="cs-slider"
					><div class="slider-image">
						<img src="/images/formal-shirt/chest-jacket-half.jpg" />
					</div>
				</slide>
				<slide class="cs-slider"
					><div class="slider-image">
						<img src="/images/formal-shirt/jacket-half.jpg" />
					</div>
				</slide>
				<slide class="cs-slider"
					><div class="slider-image">
						<img src="/images/formal-shirt/face-front-jacket-half.jpg" />
					</div>
				</slide>
			</carousel>
			<div class="product-variations">
				<ul class="variant-list">
					<li v-for="(variant, idx) in itemData.itemVariant" :key="idx">
						<a :class="getColor(variant.color)"></a>
					</li>
				</ul>
				<a class="quick-btn">quickshop</a>
			</div>
		</div>

		<div class="product-info">
			<div class="product-title">
				<a>{{ itemData.title }}</a>
				<i class="fa fa-heart-o" aria-hidden="true"></i>
			</div>
			<div class="brand-name">
				<span>{{ itemData.brandName }}</span>
			</div>
			<div class="product-price">
				<span v-if="itemData.productPrice.low" class="low"
					>€ {{ itemData.productPrice.low }}</span
				>
				<span v-if="itemData.productPrice.high" class="high"
					>- € {{ itemData.productPrice.high }}</span
				>
			</div>
			<div v-if="itemData?.totalVariant" class="colors-available">
				<div class="title">Matching Set</div>
				<div class="value-box">
					<span class="value">{{ itemData.totalVariant }}</span
					><span> colors available</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
var itemData = {
	title: "Slim Fit Oxford Shirt",
	brandName: "Polo Ralph Lauren",
	productPrice: {
		low: "139,00",
		high: "149,00",
	},
	totalVariant: 3,
	itemVariant: [
		{
			color: "black",
		},
		{
			color: "pink",
		},
	],
};

const getColor = (value) => {
	return "bg-" + value;
};
</script>

<style scoped lang="scss">
.product-card {
	// width: 515px;
	// height: 830px;
	// padding: 5px;
	.slider-box {
		position: relative;

		.product-variations {
			width: 100%;
			position: absolute;
			bottom: 0;
			box-sizing: border-box;
			display: flex;
			justify-content: space-between;
			visibility: hidden;
			background: hsla(0, 0%, 100%, 0.9);
			padding: 0.9375rem 1.25rem;
			.variant-list {
				list-style: none;
				margin: 0;
				padding: 0;
				display: flex;
				gap: 10px;
				li {
					a {
						display: block;
						width: 20px;
						height: 20px;
						border-radius: 50%;
						&:hover {
							cursor: pointer;
						}
					}
				}
			}
			.quick-btn {
				border-radius: 25px;
				padding: 6px 20px;
				color: #041e3a;
				border: 1px solid #041e3a;
				background: none;
				text-transform: uppercase;
				font-family: RL_DroidKufi, Founders Grotesk Mono Light, Lucida Console,
					Arial, Helvetica, sans-serif;
				font-style: Normal;
				font-size: 10px;
				&:hover {
					cursor: pointer;
					color: #ffffff;
					background-color: #041e3a;
				}
			}
		}
		.cs-slider {
			.slider-image {
				&:hover {
					cursor: pointer;
				}
			}
		}
		&:hover {
			.product-variations {
				visibility: visible;
			}
		}
	}

	.product-info {
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		.product-title {
			display: flex;
			justify-content: space-between;

			a {
				color: #041e3a;
				font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
					serif;
				font-size: 1.325rem;
				font-weight: 400;
				font-style: normal;
				line-height: 1.375rem;
				&:hover {
					cursor: pointer;
					text-decoration: underline 2px;
				}
			}
			i {
				font-size: 1rem;
			}
		}
		.brand-name {
			color: #041e3a;
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-weight: 400;
			font-style: normal;
			-webkit-font-smoothing: auto;
		}
		.product-price {
			margin-top: 8px;
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
		}
		.colors-available {
			margin-top: 8px;
			display: flex;
			flex-direction: column;
			gap: 8px;
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			font-size: 0.6875rem;
			line-height: 0.75rem;
			letter-spacing: 0.25px;
			.title {
				color: #6d6f73;
			}
			.value {
				&:hover {
					cursor: pointer;
					text-decoration: underline;
				}
			}
		}
	}
}
:deep(.VueCarousel-navigation-next) {
	padding: 0 !important;
	margin-right: 4rem;
	font-family: none;
}
:deep(.VueCarousel-navigation-prev) {
	padding: 0 !important;
	margin-left: 4rem;
	font-family: none;
}
:deep(.VueCarousel-navigation-button) {
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: #ffffff;
}
</style>

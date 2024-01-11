<template>
	<div class="slider-box">
		<carousel :per-page="4">
			<slide v-for="(item, idx) in itemList" :key="idx">
				<div class="item">
					<div class="image">
						<img :src="item.imageSrc" :alt="item.productTitle" />
					</div>
					<div class="info">
						<h6 class="brand-name">{{ item.brandName }}</h6>
						<div class="product-title">{{ item.productTitle }}</div>
						<div class="product-price">
							<span v-if="item.price.low" class="low">{{ item.price.low }}</span
							><span v-if="item.price.high">-</span
							><span class="high">{{ item.price.high }}</span>
						</div>
					</div>
				</div>
			</slide>
		</carousel>
	</div>
</template>

<script setup>
const props = defineProps({
	itemList: null,
});
</script>

<style scoped lang="scss">
.item {
	margin: 5px;
	.info {
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
		h6,
		h4 {
			margin: 0;
		}
		.brand-name {
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			font-size: 0.6075rem;
			color: #6d6f73;
			letter-spacing: 1.55px;
		}
		.product-title {
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-weight: 400;
			font-style: normal;
			font-size: 15px;
			text-align: center;
		}
		.product-price {
			margin-top: 8px;
			.low {
				margin-right: 4px;
			}
			.high {
				margin-left: 4px;
			}
		}
	}
}
</style>

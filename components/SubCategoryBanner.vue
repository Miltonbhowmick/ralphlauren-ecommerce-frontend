<template>
	<div class="category-box">
		<div class="header">
			<h1 class="title">Shop by <span>Category</span></h1>
		</div>
		<div class="sub-category-list">
			<div class="item">
				<div><img src="/images/bed-sheat.jpg" alt="bed-sheat" /></div>
				<h5 class="name">Bedding</h5>
			</div>
			<div class="item">
				<img src="/images/pillow.jpg" alt="pillows-and-cushions" />
				<h5 class="name">Pillows & Cushions</h5>
			</div>
			<div class="item">
				<img src="/images/light-stand.jpg" alt="light" />
				<h5 class="name">Lighting</h5>
			</div>
			<div class="item">
				<img src="/images/warm-sheat.jpg" alt="warm-sheat" />
				<h5 class="name">Towels & Bath Mats</h5>
			</div>
			<div class="item">
				<img src="/images/table-light.jpg" alt="table-light" />
				<h5 class="name">Candles & Hurricans</h5>
			</div>
			<div class="item">
				<img src="/images/pet-dress.jpg" alt="pet-dress" />
				<h5 class="name">Pup Shop</h5>
			</div>
			<div class="item">
				<img src="/images/plates.jpg" alt="plates" />
				<h5 class="name">Tableware</h5>
			</div>
			<div class="item">
				<img src="/images/wine-glass.jpg" alt="wine-glass" />
				<h5 class="name">Barware</h5>
			</div>
			<div class="item">
				<img src="/images/plain-sheat.jpg" alt="plain-sheat" />
				<h5 class="name">Throws & Blankets</h5>
			</div>
			<div class="item">
				<img src="/images/photo-frame.jpg" alt="photo-frame" />
				<h5 class="name">Frames</h5>
			</div>
			<div class="item">
				<img src="/images/lader-chair.jpg" alt="photo-frame" />
				<h5 class="name">Furniture</h5>
			</div>
			<div class="item">
				<img src="/images/prayer-sheat.jpg" alt="prayer-sheat" />
				<h5 class="name">Rugs</h5>
			</div>
		</div>
	</div>
</template>
<script setup></script>

<style scoped lang="scss">
.category-box {
	padding: 30px 40px;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	.header {
		width: 20%;
		.title {
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-weight: 100;
			font-size: 3.75em;
			line-height: 1.477em;
			letter-spacing: 0em;
			span {
				font-size: 1.684em;
				line-height: 1em;
			}
		}
	}
	.sub-category-list {
		width: 80%;
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		.item {
			width: 15%;
			height: 100%;
			.name {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				font-size: 16px;
				font-weight: 400;
				text-align: center;
			}
		}
	}
}
</style>

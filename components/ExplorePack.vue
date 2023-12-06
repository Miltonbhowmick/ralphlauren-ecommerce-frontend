<template>
	<div class="explore-box">
		<h1 class="headline">More to Explore</h1>
		<div class="content">
			<div class="item">
				<div class="image">
					<img src="/images/explore-image-1.jpg" alt="explore-image-1" />
				</div>
				<h2 class="title">Collection</h2>
				<a class="link">explore now</a>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/explore-image-2.jpg" alt="explore-image-1" />
				</div>
				<h2 class="title">Luxury Gifts</h2>
				<a class="link">shop now</a>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/explore-image-3.jpg" alt="explore-image-1" />
				</div>
				<h2 class="title">Purple Label</h2>
				<a class="link">explore now</a>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.explore-box {
	padding: 10px 0;
	.headline {
		font-family: "LeJeuneDeck-Regular", Times, serif;
		font-size: 30px;
		font-weight: 500;
		text-transform: none;
		color: #041e3a;
		margin: 0 auto 1.429em;
		text-align: center;
	}
	.content {
		padding: 0px 200px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 30px;
		.item {
			display: flex;
			flex-direction: column;
			gap: 15px;
			.title {
				font-family: "LeJeuneDeck-Regular", Times, serif;
				font-size: 25px;
				font-weight: 300;
				margin: 0;
				text-align: center;
			}
			.link {
				display: block;
				width: 100%;
				font-size: 10px;
				text-align: center;
				text-transform: uppercase;
			}
		}
	}
}
</style>

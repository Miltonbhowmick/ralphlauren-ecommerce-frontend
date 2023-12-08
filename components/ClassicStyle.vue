<template>
	<div
		class="classic-style-box"
		:style="{ backgroundImage: `url(${normalBg})` }"
	>
		<div class="logo">
			<img
				src="/images/the_polo_gazette_lockup.png"
				alt="the_polo_gazette_lockup"
			/>
		</div>
		<h2 class="sub-title">AUTHENTICITY AND TIMELESS STYLE</h2>
		<div class="product-list">
			<div class="item">
				<div class="image">
					<img src="/images/style-person1.jpg" alt="style-person-1" />
				</div>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/style-person2.jpg" alt="style-person-1" />
				</div>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/style-person3.jpg" alt="style-person-1" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import normalBg from "~/assets/images/normal-bg.jpg";
</script>

<style scoped lang="scss">
.classic-style-box {
	background-size: cover;
	background-repeat: no-repeat;
	padding: 40px 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 30px;
	.logo {
		width: 30%;
	}
	.sub-title {
		font-size: 0.91em;
		font-family: LeJeuneDeck-Regular, Times, serif;
		color: #000;
		text-transform: uppercase;
		text-align: center;
		letter-spacing: 0.05em;
	}
	.product-list {
		display: flex;
		justify-content: center;
		gap: 10px;
	}
}
</style>

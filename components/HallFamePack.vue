<template>
	<div
		class="holiday-pack-box"
		:style="{
			backgroundImage: `url(${bgHallFame})`,
		}"
	>
		<div class="content">
			<h2 class="title">For The Host</h2>
			<h3 class="subtitle">Elegant home gifts to make a thoughtful gesture</h3>
			<ul>
				<li><a>shop now</a></li>
				<li><a>explore home</a></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import bgHallFame from "~/assets/images/hall-fame-bg.jpg";
</script>

<style scoped lang="scss">
.holiday-pack-box {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 700px;
	position: relative;
	.content {
		position: absolute;
		left: 50%;
		bottom: 50px;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		.title {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 60px;
			color: #ffffff;
			text-align: center;
		}
		.subtitle {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 20px;
			font-weight: 300;
			color: #ffffff;
			text-align: center;
		}
		.company-logo {
			width: 200px;
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			justify-content: center;
			gap: 20px;
			li {
				a {
					color: #ffffff;
					text-transform: uppercase;
					font-size: 10px;
				}
			}
		}
	}
}
</style>

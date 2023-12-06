<template>
	<div
		class="holiday-pack-box"
		:style="{
			backgroundImage: `url(${bgGroup})`,
		}"
	>
		<div class="content">
			<h2 class="title">POLO</h2>
			<div class="company-logo">
				<img src="/images/company-logo.png" alt="company-logo" />
			</div>
			<h3 class="subtitle">Holiday Dressing</h3>
			<ul>
				<li><a>men</a></li>
				<li><a>women</a></li>
				<li><a>boys</a></li>
				<li><a>girls</a></li>
				<li><a>baby</a></li>
				<li><a>home</a></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
import bgGroup from "~/assets/images/bg-group.jpg";
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
		top: 50%;
		left: 90px;
		transform: translateY(-50%);
		padding: 100px 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		.title {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 100px;
			color: #ffffff;
			text-align: center;
		}
		.subtitle {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 50px;
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

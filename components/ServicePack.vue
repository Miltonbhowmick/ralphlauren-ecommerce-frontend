<template>
	<div
		class="service-pack-box"
		:style="{
			backgroundImage: `url(${props?.backgroundImage})`,
		}"
	>
		<h3 class="title">Gift Services</h3>
		<div class="service-list">
			<div
				v-for="(obj, idx) in serviceList"
				:key="'service_' + idx"
				class="item"
			>
				<h5 class="name">{{ obj.name }}</h5>
				<p class="description">{{ obj.description }}</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	title: null,
	subTitle: null,
	description: null,
	linkList: null,
	backgroundImage: null,
	companyLogo: null,
	serviceList: null,
});
</script>

<style scoped lang="scss">
.service-pack-box {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	padding: 90px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	.title {
		margin: 0;
		font-family: "Northwell Alt", cursive;
		font-weight: 100;
		font-size: 4em;
		color: #fff;
		line-height: 0.571em;
		letter-spacing: 0em;
	}
	.service-list {
		margin-top: 50px;
		display: flex;
		gap: 70px;
		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			.name {
				margin: 0;
				font-family: "LeJeuneDeck-Regular", Times, serif;
				font-weight: 100;
				font-size: 1.325em;
				letter-spacing: 0em;
				color: #fff;
			}
			.description {
				font-family: "Founders Grotesk text Regular", Arial, Helvetica,
					sans-serif;
				font-size: 0.75em;
				line-height: 1.833em;
				margin: 0 auto;
				width: 15em;
				color: #fff;
				text-align: center;
			}
		}
	}
}
</style>

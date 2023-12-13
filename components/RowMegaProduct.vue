<template>
	<div
		class="mega-pack-box"
		:style="{
			backgroundImage: `url(${props?.backgroundImage})`,
		}"
	>
		<div class="product-list">
			<div
				v-for="(data, idx) in props.itemList"
				:key="'product_' + idx"
				class="item"
			>
				<div class="image"><img :src="data.imageSrc" /></div>
				<h3 class="title">{{ data.title }}</h3>
				<ul>
					<li v-for="(link, idx) in data.linkList" :key="idx">
						<a>{{ link.name }}</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
// import bgGroup from "~/assets/images/bg-group.jpg";

const props = defineProps({
	backgroundImage: null,
	itemList: null,
});
</script>

<style scoped lang="scss">
.mega-pack-box {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	padding: 50px 10px;
	.product-list {
		display: flex;
		justify-content: center;

		.item {
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;
			.image {
				width: 60%;
			}
			.title {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 40px;
				color: #ffffff;
				text-align: center;
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
						text-decoration: underline;
						text-underline-offset: 15px;
						text-decoration-color: #ffffff;
					}
				}
			}
		}
	}
}
</style>

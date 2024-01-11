<template>
	<div
		class="mega-pack-box"
		:style="{
			backgroundImage: `url(${props?.backgroundImage})`,
		}"
	>
		<div class="product-list">
			<div
				v-for="(data, productId) in props?.itemList"
				:key="'product_' + productId"
				class="item"
			>
				<div v-if="data?.imageSrc" class="image">
					<img :src="data?.imageSrc" />
				</div>
				<h3
					v-if="data?.content?.title"
					class="title"
					:style="{ color: data?.content?.textColor }"
				>
					{{ data?.content?.title }}
				</h3>
				<ul v-if="data?.content?.linkList">
					<li
						v-for="(link, linkId) in data?.content?.linkList"
						:key="'link_' + linkId"
					>
						<a
							:href="link.src"
							:style="{
								color: data?.content?.textColor,
								textDecorationColor: data?.content?.textColor,
							}"
							>{{ link.name }}</a
						>
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
						display: block;
						height: 2rem;
						color: #ffffff;
						text-transform: uppercase;
						font-size: 9px;
						text-transform: uppercase;
						text-decoration: underline;
						text-underline-offset: 15px;
						text-decoration-color: #fff;
						&:hover {
							cursor: pointer;
							text-underline-offset: 9px;
							transition: 300ms ease-in-out;
						}
					}
				}
			}
		}
	}
}
</style>

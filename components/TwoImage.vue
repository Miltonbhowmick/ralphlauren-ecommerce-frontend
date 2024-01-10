<template>
	<div
		class="two-image-box"
		:style="{ backgroundImage: `url(${props?.backgroundImage})` }"
	>
		<div v-if="props?.header" class="header">
			<h1 v-if="props?.header?.title" class="title">
				{{ props?.header?.title }}
			</h1>
		</div>
		<div class="content">
			<div
				v-for="(obj, idx) in props?.itemList"
				:key="'two_image_box_' + idx"
				class="box"
			>
				<div class="image">
					<img :src="obj?.imageSrc" alt="holiday_seasonal_lp_c11a_img" />
					<ul v-if="obj?.content?.linkList" class="link-list">
						<li
							v-for="(element, indx) in obj?.content?.linkList"
							:key="'two_image_box_' + indx"
						>
							<a>{{ element.name }}</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	header: null,
	backgroundImage: null,
	itemList: null,
});
</script>

<style scoped lang="scss">
.two-image-box {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.header {
		padding: 30px 0;
		display: flex;
		flex-direction: column;
		gap: 10px;
		h1.title {
			margin: 0;
			font-family: "LeJeuneDeck-Regular", Times, serif;
			font-size: 2.75em;
			line-height: 1.052em;
			letter-spacing: 0;
			color: #fff;
		}
	}
	.content {
		width: 70%;
		padding: 20px 10px 50px 10px;
		display: flex;
		justify-content: center;
		gap: 40px;
		.box {
			position: relative;
			.link-list {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 15px;
				left: 15px;
				display: flex;
				gap: 10px;
				li {
					a {
						font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
							sans-serif;
						font-size: 0.688em;
						letter-spacing: 0.091em;
						text-transform: uppercase;
						color: #fff;
					}
					.line {
						color: #fff;
						margin-left: 3px;
					}
				}
			}
		}
	}
}
</style>

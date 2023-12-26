<template>
	<div
		class="two-image-box"
		:style="{ backgroundImage: `url(${props.backgroundImage})` }"
	>
		<div class="content">
			<div
				v-for="(obj, idx) in itemList"
				:key="'two_image_box_' + idx"
				class="box"
			>
				<div class="image">
					<img :src="obj.imageSrc" alt="holiday_seasonal_lp_c11a_img" />
					<ul v-if="obj.linkList" class="link-list">
						<li
							v-for="(element, indx) in obj.linkList"
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
	backgroundImage: null,
	itemList: null,
});
</script>

<style scoped lang="scss">
.two-image-box {
	display: flex;
	justify-content: center;
	.content {
		width: 70%;
		padding: 50px 10px;
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

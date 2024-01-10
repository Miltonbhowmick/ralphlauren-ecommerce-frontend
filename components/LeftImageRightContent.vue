<template>
	<section class="left-image-right-content">
		<div class="content">
			<div class="box">
				<div class="image">
					<img src="/images/0104_kids_hub_c04_img.jpg" />
				</div>
			</div>
			<div class="box detail">
				<div class="company-logo">
					<img src="/images/2021_australian_open_polo_navy_logo.svg" />
				</div>
				<p class="description">
					Honoring tradition and welcoming the youthful spirit of the next
					generation at the Australian Open
				</p>
				<ul>
					<li><a>shop now</a></li>
					<li><a>explore now</a></li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script setup>
const props = defineProps({
	imageSrc: null,
	data: null,
});
</script>

<style scoped lang="scss">
section.left-image-right-content {
	background: #f1f1f1;
	.content {
		display: flex;
		.box {
			width: 50%;
			&.detail {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				gap: 20px;
				.company-logo {
					width: 70%;
				}

				.description {
					margin: 0;
					font-family: "LeJeuneDeck-Regular";
					font-size: 1.625em;
					line-height: 20px;
					width: 26em;
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
							color: #474747;
							text-transform: uppercase;
							font-size: 10px;
							text-decoration: underline;
							text-underline-offset: 9px;
							text-decoration-color: #474747;
						}
					}
				}
			}
		}
	}
}
</style>

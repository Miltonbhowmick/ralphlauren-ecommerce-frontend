<template>
	<section class="women-brands-page">
		<RowCustomSlider
			:perSlider="1"
			:itemList="[
				{
					videoSrc: '/videos/12-28_WPolo_PreSpring_Hub_Video-1hero2_dsk.mp4 ',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'active club',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						left: true,
					},
					zeroMargin: true,
				},
				{
					videoSrc: null,
					imageSrc: '/images/1228_w_polo_hub_c01b_img.jpg',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'winter alpine',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						left: true,
					},
					zeroMargin: true,
				},
				{
					videoSrc: null,
					imageSrc: '/images/1228_w_polo_hub_c01c_img.jpg',
					content: {
						companyLogo: '/images/2018_polo_white_logo.svg',
						subTitle: 'winter alpine',
						linkList: [
							{ name: 'shop now', src: '' },
							{ name: 'explore now', src: '' },
						],
						left: true,
					},
					zeroMargin: true,
				},
			]"
		/><CustomSlider
			:headlineBlack="false"
			:backgroundImage="'/images/1228_w_polo_hub_c02_bg.jpg'"
			:isBackgroundImage="true"
			:title="'The Shops'"
			:subTitle="'Signature collections and seasonal edits'"
			:exploreLink="{
				name: 'SHOP ALL WOMEN’S POLO',
				src: '/',
			}"
			:slideList="[
				{
					imageSrc: '/images/1228_w_polo_hub_m_c02a_img.jpg',
					content: {
						title: 'sweaters',
					},
				},
				{
					imageSrc: '/images/1228_w_polo_hub_m_c02b_img.jpg',
					content: {
						title: 'outerwear',
					},
				},
				{
					imageSrc: '/images/1228_w_polo_hub_m_c02c_img.jpg',
					content: {
						title: 'polo ID',
					},
				},
			]"
		/>
		<div
			class="photo-gellary"
			:style="{ backgroundImage: `url(${bgImage42})` }"
		>
			<div class="box">
				<div class="text-content">
					<h3 class="title">Shades of Blue</h3>
					<p class="description">
						Indigo denim and patchwork, plaid, and petite floral patterns
					</p>
				</div>
				<div class="image">
					<img src="/images/1228_w_polo_hub_c03b_img.jpg" />
				</div>
				<div class="image">
					<img src="/images/1228_w_polo_hub_c03d_img.jpg" />
				</div>
				<div class="image">
					<img src="/images/1228_w_polo_hub_c03d_img.jpg" />
				</div>
			</div>
			<div class="box">
				<div class="image">
					<img src="/images/1228_w_polo_hub_c03a_img.jpg" />
				</div>
				<div class="image">
					<img src="/images/1228_w_polo_hub_c03c_img.jpg" />
				</div>
				<div class="image">
					<img src="/images/1228_w_polo_hub_c03f_img.jpg" />
				</div>
				<div class="image">
					<img src="/images/1228_w_polo_hub_c03h_img.jpg" />
				</div>
			</div>
		</div>

		<div
			class="garment-content"
			:style="{ backgroundImage: `url(${bgImage43})` }"
		>
			<div class="garment-photo-gellary">
				<div class="box">
					<div class="text-content">
						<h3 class="title">Shades of Blue</h3>
						<p class="description">
							Indigo denim and patchwork, plaid, and petite floral patterns
						</p>
					</div>
					<div class="image">
						<img src="/images/1228_w_polo_hub_c04_bg.jpg" />
					</div>
					<div class="image">
						<img src="/images/1228_w_polo_hub_c04b_img.jpg" />
					</div>
				</div>
			</div>
			<TwoImage
				:header="{
					title: 'New Accessories',
				}"
				:itemList="[
					{
						imageSrc: '/images/1102_holiday_seasonal_lp_c11a_img.jpg',
					},
					{
						imageSrc: '/images/1102_holiday_seasonal_lp_c11b_img.jpg',
						content: {
							linkList: [
								{
									name: 'men',
								},
								{
									name: 'women',
								},
							],
						},
					},
				]"
			/>
		</div>
	</section>
</template>

<script setup>
import bgImage42 from "~/assets/images/1228_w_polo_hub_c03_bg.jpg";
import bgImage43 from "~/assets/images/1228_w_polo_hub_c04_bg.jpg";
</script>

<style scoped lang="scss">
section.women-brands-page {
	.photo-gellary {
		padding: 100px 70px;
		display: flex;
		gap: 10px;
		background-repeat: no-repeat;
		background-size: 100%;
		.box {
			display: flex;
			flex-direction: column;
			gap: 10px;
			.text-content {
				.title {
					text-align: center;
					font-family: "LeJeuneDeck-Regular", "Times New Roman", Times, serif;
					font-size: 3.75em;
					color: #fff;
				}
				.description {
					text-align: center;
					font-family: "LeJeuneDeck-Regular", "Times New Roman", Times, serif;
					font-size: 1.25rem;
					color: #fff;
				}
			}
			.image {
				height: 100%;
			}
		}
	}

	.garment-content {
		background-repeat: no-repeat;
		background-size: 100%;
		.garment-photo-gellary {
			padding: 120px 70px;
			display: flex;
			gap: 10px;
			.box {
				margin-left: 130px;
				display: flex;
				flex-direction: column;
				gap: 10px;
				width: 30%;
				.text-content {
					.title {
						text-align: center;
						font-family: "LeJeuneDeck-Regular", "Times New Roman", Times, serif;
						font-size: 3.75em;
						color: #fff;
					}
					.description {
						text-align: center;
						font-family: "LeJeuneDeck-Regular", "Times New Roman", Times, serif;
						font-size: 1.25rem;
						color: #fff;
					}
				}
				.image {
					height: 100%;
				}
			}
		}
	}
}
</style>

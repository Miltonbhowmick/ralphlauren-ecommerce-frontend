<template>
	<section class="outwear-box">
		<VideoBannerPolo
			:subTitle="'outerwear shop'"
			:videoSrc="'/videos/video-banner-group.mp4'"
			:companyLogo="'/images/2018_polo_white_logo.svg'"
			:down="true"
		/>
		<div class="page-navbar">
			<ul>
				<li><a>down</a></li>
				<li><a>wool</a></li>
				<li><a>leather & suede</a></li>
				<li><a>accessories</a></li>
			</ul>
			<a class="collection-link">shop the collection</a>
		</div>
		<HeroBanner
			:middle="true"
			:title="'down for the season'"
			:description="'Lightweight, versatile and exceptionally warm, our down-filled coats and puffer jackets arrive in time for myriad seasonal uses – all imbued with lasting, timeless style'"
			:linkList="[
				{
					name: 'shop all',
					src: '',
				},
			]"
			:backgroundImage="'/images/bg-group37.jpg'"
			:textColor="'#fff'"
		/>
		<VideoBannerPolo
			:videoSrc="'/videos/RL_Polo_MensOuterwear_Down_D_06s_v2_dsk.mp4'"
		/>
		<div class="jacket-outerwear">
			<div class="info">
				<div class="bg-image">
					<img src="/images/bg-group37.jpg" alt="bg-group37" />
				</div>
				<div class="detail">
					<h4 class="title">the gorham down jacket</h4>
					<p class="description">
						Considered comfort and water-repellent utility converge with
						650-fill-power down for a silhouette replete with everyday purpose
					</p>
					<ul class="logo-list">
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/recycled_poly_ripstop_icon.png" />
								</div>
								<span class="text">recycled ripstop</span>
							</div>
						</li>
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/recycled_down_icon.png" />
								</div>
								<span class="text">recycled down</span>
							</div>
						</li>
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/water_repellent_icon.png" />
								</div>
								<span class="text">water-repellent</span>
							</div>
						</li>
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/detachable_hood_icon.png" />
								</div>
								<span class="text">detachable hood</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="products">
				<div class="product-images">
					<div class="image">
						<img src="/images/outerwear-jacket.png" alt="outerwear-jacket" />
					</div>
				</div>
				<div class="content">
					<ul class="type-list">
						<li><a class="active">jacket</a></li>
						<li><a>gilet</a></li>
					</ul>
					<ul class="variant-list">
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1496198.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1415595.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo">
									<img src="/images/swatch_710849776002.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1487070.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1487070.png" /></div
							></a>
						</li>
					</ul>
					<a class="shop-link">shop now</a>
				</div>
			</div>
		</div>

		<div class="europe-bg-slider">
			<div class="bg-image">
				<img src="/images/York_city_walls.jpg" alt="York_city_walls" />
			</div>
			<div class="slider-box">
				<RowCustomSlider
					:perSlider="1"
					:itemList="[
						{
							videoSrc: null,
							imageSrc: '/images/1010_m_polo_outerwear_feat_c05b_img.jpg',
							content: {
								miniDescription:
									'Water-repellent ripstop shell crafted with recycled polyester shields the fully lined interior',
								linkList: [
									{
										name: 'shop now',
										src: '',
									},
								],
								leftDown: true,
								itemsLeft: true,
							},
						},
						{
							videoSrc: null,
							imageSrc: '/images/1010_m_polo_outerwear_feat_c05a_img.jpg',
							content: {
								miniDescription:
									'Equipped with a zip-off drawstring hood with snapped closures at the front for variable use',
								linkList: [
									{
										name: 'shop now',
										src: '',
									},
								],
								leftDown: true,
								itemsLeft: true,
							},
						},
						{
							videoSrc: null,
							imageSrc: '/images/1010_m_polo_outerwear_feat_c05c_img.jpg',
							content: {
								// name: 'girls',
							},
						},
					]"
				/>
			</div>
		</div>
		<VideoBannerPolo
			:videoSrc="'/videos/RL_Polo_MensOuterwear_Down_B_06s_v2_dsk.mp4'"
		/>
		<div class="jacket-outerwear">
			<div class="info">
				<div class="bg-image">
					<img src="/images/m_polo_outerwear_feat.jpg" alt="bg-group37" />
				</div>
				<div class="detail">
					<h4 class="title">the wainwright down jacket</h4>
					<p class="description">
						Available in two discerning lengths and fabrications, built to brave
						the elements with 650-fill-power down and a water-resistant
						construction.
					</p>
					<ul class="logo-list">
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/recycled_poly_ripstop_icon.png" />
								</div>
								<span class="text">recycled ripstop</span>
							</div>
						</li>
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/recycled_down_icon.png" />
								</div>
								<span class="text">recycled down</span>
							</div>
						</li>
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/water_repellent_icon.png" />
								</div>
								<span class="text">water-repellent</span>
							</div>
						</li>
						<li>
							<div class="go-info">
								<div class="logo">
									<img src="/images/detachable_hood_icon.png" />
								</div>
								<span class="text">detachable hood</span>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="products">
				<div class="product-images">
					<div class="image">
						<img src="/images/rsz_1jacket_1487234.png" alt="outerwear-jacket" />
					</div>
				</div>
				<div class="content">
					<ul class="type-list">
						<li><a class="active">jacket</a></li>
						<li><a>gilet</a></li>
					</ul>
					<ul class="variant-list">
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1496198.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1415595.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo">
									<img src="/images/swatch_710849776002.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1487070.png" /></div
							></a>
						</li>
						<li>
							<a
								><div class="logo"><img src="/images/swatch_1487070.png" /></div
							></a>
						</li>
					</ul>
					<a class="shop-link">shop now</a>
				</div>
			</div>
		</div>
		<div class="europe-bg-slider">
			<div class="bg-image">
				<img
					src="/images/1010_m_polo_outerwear_feat_c08_bg.jpg"
					alt="York_city_walls"
				/>
			</div>
			<div class="slider-box">
				<RowCustomSlider
					:perSlider="1"
					:itemList="[
						{
							videoSrc: null,
							imageSrc: '/images/1010_m_polo_outerwear_feat_c08b_img.jpg',
							content: {
								miniDescription:
									'Water-repellent ripstop shell crafted with recycled polyester shields the fully lined interior',
								linkList: [
									{
										name: 'shop now',
										src: '',
									},
								],
								leftDown: true,
								itemsLeft: true,
							},
						},
						{
							videoSrc: null,
							imageSrc: '/images/1010_m_polo_outerwear_feat_c08a_img.jpg',
							content: {
								miniDescription:
									'Equipped with a zip-off drawstring hood with snapped closures at the front for variable use',
								linkList: [
									{
										name: 'shop now',
										src: '',
									},
								],
								leftDown: true,
								itemsLeft: true,
							},
						},
						{
							videoSrc: null,
							imageSrc: '/images/1010_m_polo_outerwear_feat_c05c_img.jpg',
							content: {
								// name: 'girls',
							},
						},
					]"
				/>
			</div>
		</div>
		<VideoBannerPolo
			:normalTitle="'outerwear shop'"
			:videoSrc="'/videos/RL_Polo_MensOuterwear_Down_A_06s_v2_dsk.mp4'"
			:miniDescription="'Hybrid construction marries substance and style to create an all-season, water-resistant staple'"
			:leftDown="true"
			:itemsStart="true"
		/>
		<HeroBanner
			:leftDown="true"
			:itemsStart="true"
			:normalTitle="'down for the season'"
			:description="'Lightweight, versatile and exceptionally warm, our down-filled coats and puffer jackets arrive in time for myriad seasonal uses – all imbued with lasting, timeless style'"
			:linkList="[
				{
					name: 'shop all',
					src: '',
				},
			]"
			:backgroundImage="'/images/1010_m_polo_outerwear_feat_c17_img.jpg'"
			:textColor="'#fff'"
		/>
		<VideoGellaryGridCustomSlider
			:backgroundImage="'/images/bg-group40.jpg'"
			:header="{
				title: 'EXPLORE MORE WOOL OUTERWEAR',
				linkList: [
					{
						name: 'shop now',
						src: '',
					},
				],
			}"
			:photoList="[
				{
					videoSrc: '/videos/RL_Polo_MensOuterwear_Wool_06s_dsk.mp4',
					content: {},
				},
				{
					imageSrc: '/images/1010_m_polo_outerwear_feat_c21a_img.jpg',
					content: {},
				},
			]"
			:perSlider="5"
			:itemList="[
				{
					videoSrc: null,
					imageSrc: '/images/1010_m_polo_outerwear_feat_c22d_img.png',
					content: {
						name: 'Quilted Wool-Blend Down Jacket',
						down: true,
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/1010_m_polo_outerwear_feat_c22e_img.png',
					content: {
						name: 'Quilted Wool-Blend Down Jacket',
						down: true,
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/1010_m_polo_outerwear_feat_c22a_img.png',
					content: {
						name: 'Quilted Wool-Blend Down Jacket',
						down: true,
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/1010_m_polo_outerwear_feat_c22b_img.png',
					content: {
						name: 'Quilted Wool-Blend Down Jacket',
						down: true,
					},
				},
				{
					videoSrc: null,
					imageSrc: '/images/1010_m_polo_outerwear_feat_c22c_img.png',
					content: {
						name: 'Quilted Wool-Blend Down Jacket',
						down: true,
					},
				},
			]"
		/>
		<HeroBanner
			:leftDown="true"
			:itemsStart="true"
			:normalTitle="'LEATHER & SUEDE'"
			:description="'Rugged yet refined, thoughtfully designed for durability and timeless sartorial appeal'"
			:linkList="[
				{
					name: 'shop all',
					src: '',
				},
			]"
			:backgroundImage="'/images/1010_m_polo_outerwear_feat_c23_img.jpg'"
			:textColor="'#fff'"
		/>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.outwear-box {
	.page-navbar {
		position: sticky;
		z-index: 9999;
		top: 60px;
		padding: 10px 50px;
		background: #091d33;
		display: flex;
		justify-content: space-between;
		align-items: center;
		ul {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			gap: 20px;
			li {
				a {
					font-family: "LeJeuneDeck-Regular";
					font-size: 0.963em;
					letter-spacing: 0.222em;
					text-transform: uppercase;
					color: #fff;
					&:hover {
						color: #fff;
						text-decoration: underline;
						text-underline-offset: 9px;
						cursor: pointer;
					}
				}
			}
		}
		.collection-link {
			padding: 10px 15px;
			border: 1px solid #fff;
			border-radius: 25px;
			color: #fff;
			text-transform: uppercase;
			font-size: 0.663em;
			letter-spacing: 0.222em;
			&:hover {
				background: #fff;
				color: #383838;
				cursor: pointer;
			}
		}
	}
	.jacket-outerwear {
		display: flex;
		.info {
			width: 35%;
			position: relative;
			.bg-image {
				height: 100%;
			}
			.detail {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				.title {
					margin: 0;
					font-family: var(--foundersReg);
					font-size: 1.875em;
					font-weight: 300;
					letter-spacing: 0.033em;
					line-height: 35px;
					text-transform: uppercase;
					color: #fff;
				}
				.description {
					font-family: "Founders Grotesk text Regular", "Times New Roman", Times,
						serif "";
					font-size: 0.875em;
					font-weight: 300;
					line-height: 1.914em;
					color: #fff;
				}
				.logo-list {
					list-style: none;
					margin: 0;
					padding: 0;
					display: flex;
					gap: 30px;
					li {
						.go-info {
							display: flex;
							flex-direction: column;
							align-items: center;
							gap: 8px;
							.logo {
								width: 40px;
								height: 40px;
							}
							.text {
								font-size: 8px;
								text-align: center;
								color: #fff;
								letter-spacing: 1.05px;
							}
						}
					}
				}
			}
		}
		.products {
			padding: 0 40px;
			display: flex;
			.product-images {
				.image {
					width: 400px;
					height: 400px;
				}
			}
			.content {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 30px;
				.type-list,
				.variant-list {
					list-style: none;
					margin: 0;
					padding: 0;
				}
				.type-list {
					display: flex;
					gap: 30px;
					li {
						a {
							font-weight: bold;
							opacity: 1;
							color: #041e3a;
							text-transform: uppercase;
							font-size: 0.6875em;
							letter-spacing: 0.1427272727em;
							cursor: pointer;
							&.active {
								text-decoration: underline;
								text-underline-offset: 9px;
							}
						}
					}
				}
				.variant-list {
					display: flex;
					justify-content: center;
					flex-wrap: wrap;
					gap: 10px 0;
					width: 80%;
					li {
						a {
							cursor: pointer;
							.logo {
								width: 50%;
							}
						}
					}
				}
				.shop-link {
					color: #000;
					padding: 15px 60px;
					border: 1px solid #000;
				}
			}
		}
	}
	.europe-bg-slider {
		position: relative;
		.slider-box {
			position: absolute;
			top: 10px;
			padding: 20px 40px;
		}
	}
}
</style>

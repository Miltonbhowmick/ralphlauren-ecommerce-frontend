<template>
	<section class="men-brands">
		<div class="hero-slider">
			<RowCustomSlider
				:perSlider="1"
				:itemList="[
					{
						videoSrc:
							'/videos/1228 Mens Polo_ Active Club_23_HP HUB_DSK_1440x720.mp4',
						imageSrc: null,
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
						imageSrc: '/images/1205_m_polo_hub_c01b_img.jpg',
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
						imageSrc: '/images/bg-group25.jpg',
						content: {
							companyLogo: '/images/2018_polo_white_logo.svg',
							subTitle: 'beach shop',
							linkList: [
								{ name: 'shop now', src: '' },
								{ name: 'explore now', src: '' },
							],
							down: true,
						},
						zeroMargin: true,
					},
				]"
			/>
		</div>
		<CustomSlider
			:title="'the shops'"
			:subTitle="'Destinations for Polo style, from timeless classics to new collections'"
			:backgroundColor="'#1d2333'"
		/>
		<div
			:style="{ backgroundImage: `url(${bgGroup33})` }"
			class="polo-gazette-box"
		>
			<div class="content">
				<div class="company-logo"><img src="/images/polo-gazetter.jpg" /></div>
				<h3 class="subTitle">Authenticity and Timeless Style</h3>
			</div>
			<div class="slider-box">
				<NewsPaperStyleCustomSlider
					:perSlider="1"
					:itemList="[
						{
							imageSrc: '/images/news-paper-style-slide.jpg',
							content: {
								issueNo: '03',
								subTitle: 'Boss Tweed Ties? Yes, Ties! And more ...',
								description:
									'Somehow, it just wouldn’t feel like fall here at Polo without having a little <i>big</i> tweed in your wardrobe – crunchy wools in checks of cognac and camel or charcoal and grey that have been exploded this season in size to become statement pieces. In addition to a mix of notes on other matters of style, we’ve also put together a special package of stories on the meaning of the necktie. – The Editors',
								linkList: [{ name: 'shop now', src: '' }],
							},
							zeroMargin: true,
						},
						{
							imageSrc: '/images/news-paper-style-slide-2.jpg',
							content: {
								issueNo: '03',
								subTitle: 'Boss Tweed Ties? Yes, Ties! And more ...',
								description:
									'Somehow, it just wouldn’t feel like fall here at Polo without having a little <i>big</i> tweed in your wardrobe – crunchy wools in checks of cognac and camel or charcoal and grey that have been exploded this season in size to become statement pieces. In addition to a mix of notes on other matters of style, we’ve also put together a special package of stories on the meaning of the necktie. – The Editors',
								linkList: [{ name: 'shop now', src: '' }],
							},
							zeroMargin: true,
						},
					]"
				/>
			</div>
		</div>
		<div class="active-club-box">
			<div class="header">
				<h2 class="title">Active Club</h2>
				<p class="description">
					A technicolour mix of bold graphics, colour-blocking and neon brights
					unites for an electric collection of streetwear essentials
				</p>
				<ul class="link-list">
					<li><a>shop now</a></li>
				</ul>
			</div>
			<TwoImage
				:itemList="[
					{
						imageSrc: '/images/biker-jacket.jpg',
					},
					{
						imageSrc: '/images/biker-jacket-back.jpg',
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
			<!-- <div class="infinite-scroll">
				<div class="m-scroll">
					<span
						><img
							src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
					/></span>
					<span
						><img
							src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
					/></span>
					<span
						><img
							src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png"
					/></span>
				</div>
			</div> -->
			<TwoImage
				:itemList="[
					{
						imageSrc: '/images/1228_m_polo_hub_c06_img.jpg',
						content: {
							linkList: [
								{
									name: 'men',
								},
							],
						},
					},
				]"
			/>
			<div class="polo-hero-slider-box">
				<div class="bg-image">
					<img
						src="/images/1228_m_polo_hub_c07_bg.jpg"
						alt="1228_m_polo_hub_c07_bg"
					/>
				</div>
				<div class="slider-content">
					<RowCustomSlider
						:perSlider="4"
						:itemList="[
							{
								imageSrc: '/images/1228_m_polo_hub_c07a_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07b_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07c_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07d_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07e_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
						]"
					/>
				</div>
			</div>
			<div class="bear-hero-banner">
				<div class="bg-image">
					<img
						src="/images/1228_m_polo_hub_c08_img.jpg"
						alt="1228_m_polo_hub_c08_img"
					/>
				</div>
				<div class="content">
					<div class="company-logo">
						<img
							src="/images/2023_polo_boxed_logo_white.svg"
							alt="2023_polo_boxed_logo_white"
						/>
					</div>
					<h3 class="subTitle">Bear Shop</h3>
					<p class="description">
						This season, the world’s best-dressed bear celebrates creativity and
						artistic expression
					</p>
					<ul class="link-list">
						<li><a>explore now</a></li>
					</ul>
				</div>
			</div>
			<div class="beach-slider-box">
				<div class="bg-image">
					<img
						src="/images/1205_m_polo_hub_c04_bg.jpg"
						alt="1205_m_polo_hub_c04_bg"
					/>
				</div>
				<div class="content">
					<div class="info">
						<h5 class="title">beach shop</h5>
						<p class="description">
							Explore an edited selection of floral swim trunks, graphic layers,
							lightweight shirting and more
						</p>
						<ul class="link-list">
							<li><a>shop now</a></li>
						</ul>
					</div>
					<RowCustomSlider
						:perSlider="4"
						:itemList="[
							{
								imageSrc: '/images/1228_m_polo_hub_c07a_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07b_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07c_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07d_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07e_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
						]"
					/>
				</div>
			</div>
			<div
				class="winter-hill"
				:style="{ backgroundImage: `url(${bgGroup34})` }"
			>
				<div class="banner-box">
					<div class="hero-bg-banner">
						<div class="image">
							<img
								src="/images/1128_m_polo_hub_c04_img.jpg"
								alt="1128_m_polo_hub_c04_img"
							/>
						</div>
						<div class="content">
							<h2 class="title">Winter Alpine</h2>
							<p class="description">
								At the base of snow-capped mountains in the American West, après
								style finds its footing with seasonal function, timeless design
								and unfailing quality
							</p>
							<ul class="link-list">
								<li><a>explore now</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div>
					<RowCustomSlider
						:perSlider="4"
						:itemList="[
							{
								imageSrc: '/images/1228_m_polo_hub_c07a_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07b_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07c_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07d_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
							{
								imageSrc: '/images/1228_m_polo_hub_c07e_img.jpg',
								videoSrc: null,
								content: {
									name: 'polo',
								},
							},
						]"
					/>
				</div>
			</div>
			<HeroBanner
				:down="true"
				:backgroundImage="'/images/1120_m_polo_hub_c04_img.jpg'"
				:textColor="'#fff'"
				:title="'best of polo'"
				:description="'Discover a timely selection of jumpers, sleepwear, outerwear and more, all in time for the holidays'"
				:linkList="[
					{
						name: 'shop now',
						src: '',
					},
				]"
			/>
			<div
				class="king-bear-slider-box"
				:style="{ backgroundImage: `url(${bgGroup35})` }"
			>
				<RowCustomSlider
					:perSlider="4"
					:itemList="[
						{
							imageSrc: '/images/1228_m_polo_hub_c07a_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07b_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07c_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07d_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07e_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
					]"
				/>
			</div>
			<HeroBanner
				:down="true"
				:backgroundImage="'/images/1120_m_polo_hub_c04_img.jpg'"
				:textColor="'#BAAD72'"
				:title="'Holiday Dressing'"
				:description="'This season, a look only Polo can do: Elegant eveningwear, traditional plaids and rich velvets contrast bold, bright colours in performance fabrications'"
				:linkList="[
					{
						name: 'shop the collection',
						src: '',
					},
				]"
			/>
			<div
				class="king-bear-slider-box"
				:style="{ backgroundImage: `url(${bgGroup36})` }"
			>
				<RowCustomSlider
					:perSlider="4"
					:itemList="[
						{
							imageSrc: '/images/1228_m_polo_hub_c07a_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07b_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07c_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07d_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
						{
							imageSrc: '/images/1228_m_polo_hub_c07e_img.jpg',
							videoSrc: null,
							content: {
								name: 'polo',
							},
						},
					]"
				/>
			</div>
		</div>
	</section>
</template>

<script setup>
import bgGroup33 from "~/assets/images/bg-group33.jpg";
import bgGroup34 from "~/assets/images/bg-group34.jpg";
import bgGroup35 from "~/assets/images/bg-group35.jpg";
import bgGroup36 from "~/assets/images/bg-group36.jpg";
</script>

<style scoped lang="scss">
section.men-brands {
	.polo-gazette-box {
		position: relative;
		height: 120vh;
		width: 100%;
		.content {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 30%;
			.subTitle {
				text-transform: uppercase;
				color: #000;
				font-size: 1em;
				font-weight: normal;
				margin: 0 auto;
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0.675em;
				text-align: center;
			}
			.company-logo {
			}
		}
		.slider-box {
			padding: 100px 80px;
		}
	}
	.active-club-box {
		padding: 70px 0;
		background-color: #041e3a;
		.header {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.title {
				margin: 0;
				font-family: monospace;
				font-size: 3.85em;
				line-height: 1.429em;
				text-transform: uppercase;
				letter-spacing: 0;
				color: transparent;
				-webkit-text-stroke-width: 0.2px;
				-webkit-text-stroke-color: #fff;
			}
			.description {
				margin: 0;
				font-family: "LeJeuneDeck-Regular";
				font-size: 1.2em;
				font-weight: 300;
				line-height: 1.714em;
				text-align: center;
				width: 34em;
				color: #fff;
			}
			.link-list {
				list-style: none;
				margin: 20px 0 0 0;
				padding: 0;
				display: flex;
				gap: 10px;
				li {
					a {
						color: #ffffff;
						text-transform: uppercase;
						font-size: 8px;
						text-decoration: underline;
						text-underline-offset: 9px;
						text-decoration-color: #ffffff;
					}
				}
			}
		}
		.infinite-scroll {
			position: relative;
			width: 100vw;
			background-color: #041e3a;
			overflow: hidden;
			z-index: 1;
			margin: 0;
			padding: 0;
			.m-scroll {
				overflow: hidden;
				height: 100%;
				white-space: nowrap;
				animation: scrollText 1s infinite linear;
				margin: 0;
				font-size: 0;
				display: flex;
				justify-content: space-between;
				width: fit-content;
				span {
					display: inline-block;
					margin: 0;
					padding: 0;
					color: white;
				}
			}
		}
		.polo-hero-slider-box {
			position: relative;
			.bg-image {
			}
			.slider-content {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				// padding-top: 200px;
			}
		}
		.bear-hero-banner {
			margin-top: 50px;
			position: relative;
			.bg-image {
			}
			.content {
				width: 40%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				.company-logo {
					margin-left: 45px;
					width: 16%;
				}
				.subTitle {
					margin: 0;
					font-size: 9em;
					letter-spacing: 0;
					font-family: "LeJeuneDeck-Regular";
					text-transform: capitalize;
					color: #fff;
				}
				.description {
					font-family: "LeJeuneDeck-Regular";
					font-size: 1.125em;
					font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
						sans-serif;
					letter-spacing: 0;
					color: #fff;
				}
				.link-list {
					list-style: none;
					margin: 4rem 0 0 0;
					padding: 0;
					li {
						text-align: center;
						a {
							padding: 1.25rem 2rem;
							background-color: #fff;
							font-size: 0.6875em;
							line-height: 1;
							color: #000;
							border: 1px solid #fff;
							white-space: nowrap;
							text-transform: uppercase;
							font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
								sans-serif;
							text-transform: uppercase;
							cursor: pointer;
						}
					}
				}
			}
		}
		.beach-slider-box {
			margin-bottom: 30rem;

			position: relative;
			.content {
				position: absolute;
				top: 8rem;
				left: 1rem;
				.info {
					margin-left: 2rem;
					width: 25%;
					.title {
						margin: 0;
						font-family: "LeJeuneDeck-Regular";
						font-size: 3.375em;
						font-weight: 400;
						letter-spacing: 0;
						text-align: left;
						text-transform: capitalize;
					}
					.description {
						font-family: "LeJeuneDeck-Regular";
						font-size: 1em;
						line-height: 1.625;
						letter-spacing: 0.01375em;
					}
					.link-list {
						list-style: none;
						margin: 0;
						padding: 0;
						li {
							a {
								color: #000;
								text-transform: uppercase;
								font-size: 8px;
								text-decoration: underline 1.5px;
								text-underline-offset: 9px;
								text-decoration-color: #000;
							}
						}
					}
				}
			}
		}
		.winter-hill {
			background-repeat: no-repeat;
			background-size: 100%;
			.banner-box {
				// margin-top: -30rem;
			}
			.hero-bg-banner {
				position: relative;
				padding: 0px 120px 0px 120px;
				.content {
					position: absolute;
					bottom: 4rem;
					left: 50%;
					transform: translateX(-50%);
					display: flex;
					flex-direction: column;
					align-items: center;
					gap: 30px;
					.title {
						margin: 0;
						font-family: "LeJeuneDeck-Regular";
						text-transform: capitalize;
						font-size: 3em;
						color: #fff;
					}
					.description {
						margin: 0;
						font-family: "LeJeuneDeck-Regular";
						font-size: 1.125em;
						width: 26em;
						color: #fff;
						text-align: center;
					}
					.link-list {
						list-style: none;
						margin: 0;
						padding: 0;
						li {
							a {
								color: #fff;
								text-transform: uppercase;
								font-size: 8px;
								text-decoration: underline 1.5px;
								text-underline-offset: 9px;
								text-decoration-color: #fff;
							}
						}
					}
				}
			}
		}
	}
}

@keyframes scrollText {
	from {
		transform: translateX(0%);
	}
	to {
		transform: translateX(-50%);
	}
}
</style>

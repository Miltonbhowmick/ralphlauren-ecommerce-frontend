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
		</div>
	</section>
</template>

<script setup>
import bgGroup33 from "~/assets/images/bg-group33.jpg";
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

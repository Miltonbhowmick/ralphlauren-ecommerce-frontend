<template>
	<div>
		<HolidayPack
			:backgroundImage="bgImage17"
			:down="true"
			:companyLogo="'/images/2018_polo_white_logo.svg'"
		/>
		<div class="page-navbar">
			<ul>
				<li><a>Outerwear</a></li>
				<li><a>Seasonal Essentials</a></li>
				<li><a>Jumpers</a></li>
				<li><a>Denim</a></li>
				<li><a>Accessories</a></li>
			</ul>
			<a class="collection-link">shop the collection</a>
		</div>
		<!-- <div class="product-gellary">
			<div class="item">
				<div class="image">
					<img src="/images/long-hair-boy.jpg" alt="long-hair-boy" />
				</div>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/winter-hill.jpg" alt="winter-hill" />
				</div>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/jeans-jacket-boy.jpg" alt="jeans-jacket-boy" />
				</div>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/shoe-horse.jpg" alt="shoe-horse" />
				</div>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/winter-clothes.jpg" alt="winter-clothes" />
				</div>
			</div>
			<div class="item">
				<div class="image">
					<img src="/images/watch.jpg" alt="watch" />
				</div>
			</div>
		</div> -->

		<HolidayPack
			:spaceTitle="'Iconic Outerwear'"
			:down="true"
			:backgroundImage="'/images/smart-people.jpg'"
			:miniDescription="'A celebration of bold individuality, exquisite craftsmanship and exceptional personal style'"
			:linkList="[{ name: 'SHOP now', src: '' }]"
		/>
		<BundleCustomSliderTypo
			:backgroundImage="'/images/old-smart-person.jpg'"
			:right="true"
			:down="true"
			:mediumTitle="'The Plaid Wool-Blend Ranch Coat'"
			:miniDescription="'A favourite of Mr Lauren’s, the classic ranch coat is updated with a vintage-inspired plaid pattern in an Italian wool-blend cloth with genuine horn buttons'"
			:linkList="[{ name: 'shop now' }]"
			:sliderList="[
				{
					imageSrc: '/images/old-smart-person.jpg',
				},
			]"
		/>
		<div
			class="four-photo-gellary"
			:style="{ backgroundImage: `url(${bgImage18})` }"
		>
			<div class="header">
				<h3 class="title">The Shearling Biker Jacket</h3>
				<p class="description">
					An “R.L.”-debossed throat latch and leather patches complement an
					asymmetrical front zip, motorcycle pockets and belt loops
				</p>
				<ul class="link-list">
					<li><a>shop outerwear</a></li>
				</ul>
			</div>
			<div class="content">
				<div class="photo-list">
					<div class="cs-col">
						<div class="item">
							<div class="image">
								<img src="/images/eye-catching.jpg" alt="eye-catching" />
							</div>
						</div>
						<div class="item">
							<div class="image">
								<img
									src="/images/sit-eye-catching.jpg"
									alt="sit-eye-catching"
								/>
							</div>
						</div>
					</div>
					<div class="cs-col">
						<div class="item">
							<div class="image">
								<img
									src="/images/stand-eye-catching.jpg"
									alt="stand-eye-catching"
								/>
							</div>
						</div>
						<div class="item">
							<div class="image">
								<img
									src="/images/chest-eye-catching.jpg"
									alt="chest-eye-catching"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<BundleCustomSliderTypo
			:backgroundImage="'/images/fashion-old-man.jpg'"
			:left="true"
			:down="true"
			:mediumTitle="'The Shearling Toggle Coat'"
			:miniDescription="'Inspired by vintage US flight jackets from the 1940s; crafted with soft, semi-curly shearling; and finished with leather trim throughout'"
			:linkList="[{ name: 'shop now' }]"
			:sliderList="[
				{
					imageSrc: '/images/fashion-old-man.jpg',
				},
			]"
		/>
		<RowImageHolidayPack
			:mediumTitle="'The Fleece-Lined Denim Western Overshirt'"
			:down="true"
			:rowImageList="[
				{ imageSrc: '/images/stand-sit-eye-catching.jpg' },
				{ imageSrc: '/images/jeans-pocket.jpg' },
				{ imageSrc: '/images/jeans-jacket-boy.jpg' },
			]"
			:miniDescription="'A celebration of bold individuality, exquisite craftsmanship and exceptional personal style'"
			:linkList="[{ name: 'SHOP now', src: '' }]"
		/>

		<HalfFrameCustomSlider
			:headlineBlack="true"
			:backgroundImage="'/images/bg-group19.jpg'"
			:isBackgroundImage="true"
			:mediumTitle="'Layered for Warmth'"
			:linkList="[{ name: 'shop shirt jacket & layers', src: '' }]"
			:sliderList="[
				{
					imageSrc: '/images/huti-group.jpg',
				},
				{
					imageSrc: '/images/warm-shirts-full.jpg',
				},
				{
					imageSrc: '/images/warm-shirts-long.jpg',
				},
			]"
		/>
		<HolidayPack
			:mediumTitle="'Seasonal Essentials'"
			:down="true"
			:backgroundImage="'/images/bg-group20.jpg'"
			:miniDescription="'Explore soft but rugged high-pile fleece styles in patterns and solids appropriate for layering'"
			:linkList="[{ name: 'SHOP now', src: '' }]"
		/>
		<HolidayPack
			:mediumTitle="'Jumpers With Heft'"
			:down="true"
			:backgroundImage="'/images/bg-group20.jpg'"
			:miniDescription="'Classic motifs, knit with various fabrications – wool, cotton, cashmere – offer warmth and style for a weekend at the lodge'"
			:linkList="[{ name: 'SHOP now', src: '' }]"
		/>
		<BundleCustomSliderTypo
			:backgroundImage="'/images/bg-group22.jpg'"
			:left="true"
			:down="true"
			:mediumTitle="'The Snowflake Wool-Blend Jumper'"
			:miniDescription="'This chunky-knit jumper features a Nordic-inspired snowflake motif that integrates our “Polo” logo at each sleeve'"
			:linkList="[{ name: 'shop now' }]"
			:sliderList="[
				{
					imageSrc: '/images/bg-group22.jpg',
				},
			]"
		/>
		<BundleCustomSliderTypo
			:backgroundImage="'/images/bg-group23.jpg'"
			:right="true"
			:down="true"
			:mediumTitle="'The Snowflake Wool-Blend Jumper'"
			:miniDescription="'This chunky-knit jumper features a Nordic-inspired snowflake motif that integrates our “Polo” logo at each sleeve'"
			:linkList="[{ name: 'shop now' }]"
		/>

		<div
			class="jean-slider-combo"
			:style="{ backgroundImage: `url(${bgImage23})` }"
		>
			<div class="header">
				<div class="left">
					<div class="image"><img src="/images/polo-tag-jeans.jpg" /></div>
					<h5>
						Ralph Lauren’s denim offering blends custom washes and sustainable
						practices in partnership with the world’s best suppliers
					</h5>
				</div>
				<div class="right">
					<div class="image"><img src="/images/jeans-pocket-old.jpg" /></div>
				</div>
			</div>
			<div><RowCustomSlider :perSlider="3" /></div>
		</div>
		<HalfFrameCustomSlider
			:headlineBlack="true"
			:backgroundImage="'/images/bg-group24.jpg'"
			:isBackgroundImage="true"
			:mediumTitle="'Layered for Warmth'"
			:linkList="[{ name: 'shop shirt jacket & layers', src: '' }]"
			:sliderList="[
				{
					imageSrc: '/images/huti-group.jpg',
				},
				{
					imageSrc: '/images/warm-shirts-full.jpg',
				},
				{
					imageSrc: '/images/warm-shirts-long.jpg',
				},
			]"
		/>
		<BundleCustomSliderTypo
			:backgroundImage="'/images/bg-group25.jpg'"
			:right="true"
			:down="true"
			:mediumTitle="'Persisting Accessories'"
			:miniDescription="'Durable leather gloves, soft wool beanies and twill ball caps deliver timeless function and style'"
			:linkList="[{ name: 'shop now' }]"
		/>
		<HolidayPack
			:mediumTitle="'The Polo Vintage 67 Watch'"
			:down="true"
			:backgroundImage="'/images/bg-group26.jpg'"
			:miniDescription="'A tribute to Ralph Lauren’s passion for timepieces from the early 1920s and ’30s, featuring a stainless-steel 40-mm case and opaline silver dial, powered by an LJP7380 calibre, manual-winding mechanical movement – designed to the highest standards of Swiss precision. Burnished tan calf strap ages beautifully over time'"
			:linkList="[{ name: 'SHOP now', src: '' }]"
		/>
		<VideoBannerPoloTypoAlign
			:mediumTitle="'Winter for all'"
			:miniDescription="'Discover cosy, cold weather staples for everyone this holiday season'"
			:videoSrc="'/videos/WinterAlpine_Video.mp4'"
			:linkList="[
				{ name: 'shop women' },
				{ name: 'shop men' },
				{ name: 'shop girls' },
			]"
			:right="true"
			:down="true"
			class="mt-60"
		/>
		<CustomSlider
			:title="'The Shops'"
			:subTitle="'Destinations for Polo style, from timeless classics to new collections'"
			:backgroundColor="'#041e3a'"
		/>
	</div>
</template>

<script setup>
import bgImage17 from "~/assets/images/bg-group17.jpg";
import bgImage18 from "~/assets/images/bg-group18.jpg";
import bgImage23 from "~/assets/images/bg-group23.jpg";
</script>

<style scoped lang="scss">
.page-navbar {
	padding: 10px 20px;
	background: #383838;
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
				font-size: 0.763em;
				letter-spacing: 0.222em;
				text-transform: capitalize;
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

.product-gellary {
	display: grid;
	grid-template-rows: repeat(12, 1fr);
	grid-template-columns: repeat(12, 1fr);
	.item {
		width: 100%;
		height: 100%;
		&:nth-child(1) {
			grid-row-start: 1;
			grid-row-end: 3;
			grid-column-start: 1;
			grid-column-end: 5;
		}
		&:nth-child(2) {
			grid-row-start: 1;
			grid-row-end: 2;
			grid-column-start: 6;
			grid-column-end: 10;
		}
	}
}
.four-photo-gellary {
	padding: 80px 40px;
	.header {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		margin-bottom: 40px;

		.title {
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			font-size: 2.425em;
			font-weight: 400;
			line-height: 1.4117647059;
			letter-spacing: 0;
			text-align: center;
		}
		.description {
			width: 25%;
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			font-size: 0.925em;
			line-height: 1.5714285714;
			letter-spacing: 0;
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
					color: #000;
					text-transform: uppercase;
					font-size: 10px;
					text-decoration: underline;
					text-underline-offset: 9px;
					text-decoration-color: #000;
				}
			}
		}
	}
	.content {
		display: flex;
		justify-content: center;
		.photo-list {
			width: 70%;
			display: flex;
			justify-content: center;
			gap: 10px;
			.cs-col {
				display: flex;
				flex-direction: column;
				gap: 10px;
				.item {
					height: 100%;
					.image {
						height: inherit;
					}
				}
			}
		}
	}
}
.jean-slider-combo {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	box-sizing: border-box;
	height: 115em;
	.header {
		position: relative;
		height: 44%;
		.left,
		.right {
			position: absolute;
			width: 30%;
		}
		.left {
			left: 10%;
			top: -12rem;
			z-index: 999;
			h5 {
				font-size: 1.5em;
				font-weight: 500;
				line-height: 1.5;
				letter-spacing: 0;
				font-family: "LeJeuneDeck-Regular";
				margin-left: 10px;
			}
		}
		.right {
			right: 10%;
			top: 6rem;
		}
	}
}
</style>

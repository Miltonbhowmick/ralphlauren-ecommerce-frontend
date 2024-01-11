<template>
	<div>
		<HolidayPack
			:backgroundImage="bgImage27"
			:down="true"
			:companyLogo="'/images/2019_polo_logo_dark_gold.svg'"
		/>
		<div class="page-navbar">
			<ul>
				<li><a>Shirts & Jumpers</a></li>
				<li><a>Polo Bear</a></li>
				<li><a>Jackets & Coats</a></li>
				<li><a>Eveningwear</a></li>
			</ul>
			<a class="collection-link">shop the collection</a>
		</div>
		<div class="mini-banner" :style="{ backgroundImage: `url(${bgImage28})` }">
			<div class="content">
				<h3 class="title">Holiday Dressing</h3>
				<p class="description">
					This season, a look only Polo can do: Elegant eveningwear, traditional
					plaids and rich velvets contrast bold, bright colours in performance
					fabrications
				</p>
				<ul class="link-list">
					<li><a>shop the collection</a></li>
				</ul>
			</div>
		</div>
		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/black-green-dress.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/black-green-dress-jacket.jpg" alt="image-2" />
				</div>
			</div>
		</div>
		<HalfFrameCustomSlider
			:headlineBlack="true"
			:backgroundImage="'/images/bg-group28.jpg'"
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
		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/half-sit-smart.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/half-face-smart.jpg" alt="image-2" />
				</div>
			</div>
		</div>
		<BundleCustomSliderTypo
			:backgroundImage="'/images/bg-group29.jpg'"
			:left="true"
			:down="true"
			:mediumTitle="'The Patchwork Plaid Cardigan'"
			:miniDescription="'This wool-blend layer utilises more than 45 yarns to create 14 different patches consisting of plaid, cable-knit and Western-inspired motifs'"
			:linkList="[{ name: 'shop now' }]"
			:sliderList="[
				{
					imageSrc: '/images/watch-warm.jpg',
				},
			]"
		/>
		<BundleCustomSliderTypo
			:backgroundImage="'/images/bg-group30.jpg'"
			:left="true"
			:down="true"
			:mediumTitle="'The Patchwork Plaid Cardigan'"
			:miniDescription="'This wool-blend layer utilises more than 45 yarns to create 14 different patches consisting of plaid, cable-knit and Western-inspired motifs'"
			:linkList="[{ name: 'shop now' }]"
			:sliderList="[
				{
					imageSrc: '/images/smart-guy.jpg',
				},
			]"
		/>
		<div
			class="photo-gellary"
			:style="{ backgroundImage: `url(${bgImage31})` }"
		>
			<div class="content">
				<h4 class="title">Polo Bear</h4>
				<p class="description">
					Celebrate the season in good cheer with apparel and accessories
					featuring the world’s best-dressed bear
				</p>
				<ul class="link-list">
					<li><a>shop now</a></li>
				</ul>
			</div>
		</div>
		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/chest-green-view.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/green-jacket.jpg" alt="image-2" />
				</div>
			</div>
		</div>
		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/long-hair-warm-dress.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/back-side-warm-dress.jpg" alt="image-2" />
				</div>
			</div>
		</div>
		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/eye-japan-dress.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/eye-japan-sit-dress.jpg" alt="image-2" />
				</div>
			</div>
		</div>
		<div
			class="single-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="header">
					<h4 class="title">The Textured Crewneck Jumper</h4>
					<p class="description">
						New this season, this crewneck jumper is knit with a blend of wool
						and alpaca for a soft, fuzzy feel
					</p>
					<ul class="link-list">
						<li><a>shop now</a></li>
					</ul>
				</div>
				<div class="image"><img src="/images/bg-group33.jpg" /></div>
			</div>
		</div>

		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/japan-court.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/japan-court-watch.jpg" alt="image-2" />
				</div>
			</div>
		</div>

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

		<BundleCustomSliderTypo
			:backgroundImage="'/images/bg-group36.jpg'"
			:right="true"
			:down="true"
			:mediumTitle="'Formal Essentials'"
			:miniDescription="'An assortment of dress shirts, silk ties and sophisticated accessories – all the sartorial components needed for a gathering under the soft glow of the holiday lights'"
			:linkList="[{ name: 'shop now' }]"
		/>
		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/old-man-eye.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/old-man-eye-stand.jpg" alt="image-2" />
				</div>
			</div>
		</div>

		<VideoBannerPoloTypoAlign
			:mediumTitle="'Our favourite gifts'"
			:miniDescription="'Unwrap the magic of the season with signature Ralph Lauren style'"
			:videoSrc="'/videos/WATCH_15s_Master.mp4'"
			:linkList="[{ name: 'shop now' }]"
			:right="true"
			:down="true"
		/>
		<div
			class="mini-banner-lg"
			:style="{ backgroundImage: `url(${bgImage28})` }"
		>
			<div class="content">
				<div class="image">
					<img src="/images/japan-eye-suit.jpg" alt="image-1" />
				</div>
				<div class="image">
					<img src="/images/japan-eye-suit-sit.jpg" alt="image-2" />
				</div>
			</div>
		</div>

		<CustomSlider
			:headlineBlack="false"
			:backgroundImage="'/images/leaf-bg.jpg'"
			:isBackgroundImage="true"
			:title="'The Shops'"
			:subTitle="'Signature collections and seasonal edits'"
		/>
	</div>
</template>

<script setup>
import bgImage27 from "~/assets/images/bg-group27.jpg";
import bgImage28 from "~/assets/images/bg-group28.jpg";
import bgImage31 from "~/assets/images/bg-group31.jpg";
</script>

<style scoped lang="scss">
.page-navbar {
	padding: 10px 20px;
	background: #1c2d24;
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
				font-size: 0.863em;
				letter-spacing: 0.222em;
				text-transform: capitalize;
				color: #9d9fa3;
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

.mini-banner {
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 52vh;
	display: flex;
	justify-content: center;
	align-items: center;

	.content {
		width: 30%;
		display: flex;
		flex-direction: column;
		gap: 15px;
		.title {
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			font-size: 3.375em;
			font-weight: 400;
			color: #baad72;
			line-height: 1.25;
			letter-spacing: 0;
			text-align: center;
		}
		.description {
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			font-size: 1em;
			line-height: 1.625;
			color: #baad72;
			letter-spacing: 0.01375em;
			text-align: center;
		}
		.link-list {
			margin: 0;
			padding: 0;
			display: flex;
			justify-content: center;
			gap: 15px;
			li {
				a {
					font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
						sans-serif;
					font-size: 0.688em;
					color: #baad72;
					line-height: 0.909em;
					letter-spacing: 0.091em;
					text-transform: uppercase;
					text-decoration: underline;
					text-decoration-color: #baad72;
					text-underline-offset: 9px;
				}
			}
		}
	}
}

.mini-banner-lg {
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	.content {
		display: flex;
		justify-content: center;
		gap: 15px;
		padding: 30px 40px;
	}
}
.photo-gellary {
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 150vh;
	display: flex;
	justify-content: center;
	align-items: center;
	.content {
		margin-top: 100px;
		width: 20%;
		.title {
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			font-size: 3.375em;
			font-weight: 400;
			color: #baad72;
			line-height: 1.25;
			letter-spacing: 0;
			text-align: center;
		}
		.description {
			margin: 0;
			font-family: "LeJeuneDeck-Regular";
			font-size: 1.25em;
			line-height: 1.625;
			color: #baad72;
			letter-spacing: 0.01375em;
			text-align: center;
		}
		.link-list {
			margin: 30px 0 0 0;
			padding: 0;
			display: flex;
			justify-content: center;
			gap: 15px;
			li {
				a {
					font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
						sans-serif;
					font-size: 0.688em;
					color: #baad72;
					line-height: 0.909em;
					letter-spacing: 0.091em;
					text-transform: uppercase;
					text-decoration: underline;
					text-decoration-color: #baad72;
					text-underline-offset: 9px;
				}
			}
		}
	}
}
.single-banner-lg {
	padding: 0 40px;
	.content {
		position: relative;
		.header {
			width: 30%;
			position: absolute;
			bottom: 30px;
			right: 60px;
			.title {
				margin: 0;
				font-family: "LeJeuneDeck-Regular";
				font-size: 2em;
				font-weight: 400;
				color: #baad72;
				line-height: 1.25;
				letter-spacing: 0;
				text-align: end;
			}
			.description {
				margin: 0;
				font-family: "LeJeuneDeck-Regular";
				font-size: 1.15em;
				line-height: 1.625;
				color: #baad72;
				letter-spacing: 0.01375em;
				text-align: end;
			}
			.link-list {
				padding: 0;
				display: flex;
				justify-content: flex-end;
				gap: 15px;
				li {
					a {
						font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
							sans-serif;
						font-size: 0.688em;
						color: #baad72;
						line-height: 0.909em;
						letter-spacing: 0.091em;
						text-transform: uppercase;
						text-decoration: underline;
						text-decoration-color: #baad72;
						text-underline-offset: 9px;
					}
				}
			}
		}
	}
}
</style>

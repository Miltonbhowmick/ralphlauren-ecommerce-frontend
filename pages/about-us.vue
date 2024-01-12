<template>
	<section class="about-us">
		<nav class="navbar">
			<carousel
				:per-page="5"
				:mouse-drag="true"
				:navigationEnabled="false"
				:paginationEnabled="false"
			>
				<slide class="cs-slider"><div class="title">about us</div></slide>
				<slide class="cs-slider"><div class="title">flagships</div> </slide>
				<slide class="cs-slider"><div class="title">restaurants</div> </slide>
				<slide class="cs-slider"><div class="title">careers</div> </slide>
				<slide class="cs-slider"
					><div class="title">investor relations</div>
				</slide>
			</carousel>
		</nav>

		<div class="banner">
			<div class="image">
				<img src="/images/old-bike-man.jpg" alt="image-old" />
			</div>
			<div class="content">
				<p>
					“What I do is about living. It’s about living the best life you can
					and enjoying the fullness of the life around you—from what you wear,
					to the way you live, to the way you love.”
				</p>
				<div class="logo">
					<img
						src="/images/Ralph-Lauren-Signature_WHITE.png"
						alt="Ralph-Lauren-Signature_WHITE"
					/>
				</div>
			</div>
		</div>

		<div class="detail-context">
			<h1>About Us</h1>
			<p>
				Ralph Lauren Corporation is a global leader in the design, marketing,
				and distribution of premium lifestyle products, including apparel,
				accessories, home furnishings, and other licenced product categories.
				For five decades, our long-standing reputation and distinctive image
				have been consistently developed across an expanding number of products,
				brands, sales channels, and international markets. We believe that our
				global reach, breadth of product offerings, and multichannel
				distribution are unique among luxury and apparel companies.
			</p>
		</div>
		<div class="detail-context">
			<h1>Our Products & Brands</h1>
			<p>
				Since 1967, our distinctive brand image has been consistently developed
				across an expanding number of products, price tiers, and markets. Our
				products, which include apparel, accessories, and fragrance collections
				for men and women, as well as childrenswear and home furnishings,
				compose one of the world’s most widely recognised families of consumer
				brands. Reflecting a distinctive American perspective, we have been an
				innovator in aspirational lifestyle branding and believe that, under the
				direction of internationally renowned designer Ralph Lauren, we have had
				a considerable influence on the way people dress and the way that
				fashion is advertised and celebrated throughout the world. We combine
				consumer insights with our design, marketing, and imaging skills to
				offer, along with our licencing alliances, broad lifestyle product
				collections with a unified vision.
			</p>
		</div>
		<div class="visit-corporate">
			<a>VISIT OUR CORPORATE SITE (ENGLISH ONLY)</a>
		</div>
		<div class="brand-slider">
			<h6>shop by brand</h6>
			<RowCustomSlider
				:perSlider="4"
				:itemList="[
					{
						videoSrc: null,
						imageSrc: '/images/slider/slider1.jpg',
						content: {
							name: 'men',
						},
					},
					{
						videoSrc: null,
						imageSrc: '/images/slider/slider2.jpg',
						content: {
							name: 'women',
						},
					},
					{
						videoSrc: null,
						imageSrc: '/images/slider/slider3.jpg',
						content: {
							name: 'girls',
						},
					},
					{
						videoSrc: null,
						imageSrc: '/images/slider/slider4.jpg',
						content: {
							name: 'boys',
						},
					},
					{
						videoSrc: null,
						imageSrc: '/images/slider/slider5.jpg',
						content: {
							name: 'baby',
						},
					},
				]"
			/>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.about-us {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 8rem;
	.navbar {
		margin-top: 40px;
		width: 80%;
		.cs-slider {
			.title {
				width: max-content;
				color: #041e3a;
				font-family: "HCo Gotham Book";
				line-height: 1.2;
				font-size: 0.988em;
				letter-spacing: 0.1em;
				text-transform: uppercase;
			}
		}
	}
	.banner {
		margin-top: 20px;
		position: relative;
		width: 100%;
		.image {
			width: 100%;
		}
		.content {
			width: 40%;
			position: absolute;
			bottom: 30px;
			right: 30px;
			display: flex;
			flex-direction: column;
			align-items: center;
			p {
				font-family: "Didot W01";
				font-size: 1.9em;
				font-style: italic;
				letter-spacing: 0.025em;
				text-align: center;
				color: #fff;
			}
			.logo {
				width: 60%;
			}
		}
	}

	.detail-context {
		margin-top: 40px;
		width: 80%;
		h1 {
			font-size: 3.5em;
			font-family: "Didot W01 Headline";
			font-weight: 400;
			line-height: 0.9;
			letter-spacing: 0;
			padding: 0 0 0.5em 0;
			text-align: center;
		}
		p {
			font-size: 1.2em;
			font-family: "HCo Gotham Book";
			line-height: 1.571em;
			letter-spacing: 0.025em;
			padding: 0 0 1.786em 0;
			margin: 1em 0;
			text-align: justify;
		}
	}
	.visit-corporate {
		a {
			position: relative;
			text-align: center;
			width: 100%;
			color: #000;
			font-family: "HCo Gotham";
			font-weight: 400;
			font-size: 1.238em;
			line-height: 1em;
			letter-spacing: 0.05em;
			text-transform: uppercase;
			&::after {
				content: "";
				display: block;
				height: 2px;
				width: 88px;
				background: rgba(0, 0, 0, 0.5);
				bottom: -15px;
				position: absolute;
				left: 50%;
				-webkit-transform: translateX(-50%);
				transform: translateX(-50%);
				flex-basis: 100%;
			}
		}
	}
	.brand-slider {
		margin-top: 80px;
		h6 {
			margin: 0;
			text-align: center;
			font-family: "HCo Gotham";
			font-weight: 400;
			color: #041e3a;
			text-transform: uppercase;
			font-size: 13px;
			line-height: 0.938em;
			letter-spacing: 0.05em;
			display: block;
			padding: 0;
			margin: 0 auto 1.4em;
		}
	}
}
:deep(.VueCarousel) {
	width: 100%;
}
</style>

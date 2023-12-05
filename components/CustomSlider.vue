<template>
	<div class="slider-content">
		<div class="header">
			<h1 class="title">The Gift Guide</h1>
			<a class="explore-link">explore now</a>
		</div>
		<div class="banner">
			<img src="/images/slider-bg.jpg" alt="slider-bg" />
		</div>
		<carousel :per-page="3" :mouse-drag="true" :navigationEnabled="true">
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider1.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Polo Bear Shop</h2>
					<ul>
						<li><a>men</a></li>
						<li><a>women</a></li>
						<li><a>boys</a></li>
						<li><a>girls</a></li>
						<li><a>baby</a></li>
						<li><a>home</a></li>
					</ul>
				</div>
			</slide>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider2.jpg" />
				</div>
				<div class="content">
					<h2 class="title">Our Favourites</h2>
					<ul>
						<li><a>men</a></li>
						<li><a>women</a></li>
						<li><a>boys</a></li>
						<li><a>girls</a></li>
						<li><a>baby</a></li>
						<li><a>home</a></li>
					</ul>
				</div></slide
			>
			<slide class="cs-slider"
				><div class="slider-image">
					<img src="/images/slider/slider3.jpg" />
				</div>
				<div class="content">
					<h2 class="title">For the Host</h2>
					<ul>
						<li><a>shop</a></li>
						<li><a>now</a></li>
					</ul>
				</div>
			</slide>
		</carousel>
	</div>
</template>
<script setup></script>

<style scoped lang="scss">
.slider-content {
	margin-top: -4px;
	position: relative;
	display: flex;
	flex-direction: row;
	align-items: center;
	min-height: 60em;
	.header {
		width: 60em;
		padding: 10px 40px;
		z-index: 999;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 10px;
		.title {
			font-family: "Northwell Alt", cursive;
			font-weight: 100;
			font-size: 6em;
			line-height: 1.1em;
			display: block;
			letter-spacing: 0em;
			text-transform: none;
			margin: 0 auto;
			text-align: center;
			color: #ffffff;
		}
		.explore-link {
			text-transform: uppercase;
			font-size: 9px;
			text-align: center;
			color: #ffffff;
		}
	}
	.banner {
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		height: 45rem;
	}
	.cs-slider {
		position: relative;
		.content {
			position: absolute;
			bottom: 50px;
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 10px;
			.title {
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 30px;
				color: #ffffff;
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
						color: #ffffff;
						text-transform: uppercase;
						font-size: 9px;
					}
				}
			}
		}
	}
}

::v-deep .VueCarousel-slide {
	margin: 10px;
}
</style>

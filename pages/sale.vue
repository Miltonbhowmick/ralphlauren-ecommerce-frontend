<template>
	<div class="wishlist-box">
		<div class="banner" :style="{ backgroundImage: `url(${wishlistBg})` }">
			<div class="content">
				<h1>WINTER SALE</h1>
				<p>ENJOY UP TO 50% OFF</p>
				<ul>
					<li><a>men</a></li>
					<li><a>women</a></li>
					<li><a>boys</a></li>
					<li><a>girls</a></li>
					<li><a>baby</a></li>
					<li><a>home</a></li>
				</ul>
				<a class="see-details">see details </a>
			</div>
			<div class="help-text">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
				occaecat cupidatat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
				in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
				qui officia deserunt mollit anim id est laborum.
			</div>
		</div>
	</div>
</template>

<script setup>
import wishlistBg from "~/assets/images/winter-sale.jpg";
</script>

<style scoped lang="scss">
.wishlist-box {
	.banner {
		position: relative;
		background-size: cover;
		background-repeat: no-repeat;
		width: 100%;
		height: 400px;
		.content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 20px;
			h1 {
				margin: 0;
				font-family: "LeJeuneDeck-Regular", Times, serif;
				font-size: 3.75em;
				font-weight: 400;
				font-style: normal;
				color: #fff;
				line-height: 3.25rem;
			}
			p {
				color: #fff;
				font-family: "Founders Grotesk text Regular", Arial, Helvetica,
					sans-serif;
				font-style: normal;
				font-size: 1.25em;
				text-transform: uppercase;
				letter-spacing: 2.25px;
			}
			ul {
				margin: 10px 0 0 0;
				list-style: none;
				margin: 0;
				padding: 0;
				display: flex;
				gap: 20px;
				li {
					border-bottom: 1px solid #fff;
					height: 18px;
					a {
						display: block;
						width: max-content;
						color: #fff;
						font-family: "Founders Grotesk text Regular", Arial, Helvetica,
							sans-serif;
						font-style: normal;
						font-size: 9px;
						text-transform: uppercase;
						letter-spacing: 1.25px;
					}
				}
			}

			.see-details {
				margin: 20px 0 0 0;
				color: #fff;
				font-family: "Founders Grotesk text Regular", Arial, Helvetica,
					sans-serif;
				font-style: normal;
				font-size: 9px;
				text-transform: uppercase;
				letter-spacing: 1.25px;

				&:hover {
					cursor: help;
				}
			}
		}
		.help-text {
			display: none;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			background: #fff;
			font-size: 12px;
			color: #000;
			text-align: justify;
			padding: 10px;
			border: 1px solid #000;
		}
		.content.see-details:hover + .help-text {
			display: block;
		}
	}
}
</style>

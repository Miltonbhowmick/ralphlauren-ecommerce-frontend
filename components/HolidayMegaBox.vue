<template>
	<div
		class="holiday-mega-box"
		:style="{ backgroundImage: `url(${bgImage12})` }"
	>
		<div class="header">
			<h4 class="title">A SEASON FOR DREAMING</h4>
			<p>
				“THE HOLIDAYS HOLD A CERTAIN SORT OF MAGIC THAT CAN’T BE CAPTURED—ONLY
				FELT WITHIN YOUR HEART. IT IS A SEASON OF WARMTH, REFLECTION AND COMFORT
				THAT INSPIRES YOU TO DREAM OF THE BEST THINGS IN LIFE AND SHARE THEM
				WITH PEOPLE YOU LOVE.”
			</p>
		</div>
		<div class="holiday-category">
			<div class="image">
				<img src="/images/holiday_seasonal.jpg" alt="holiday_seasonal" />
			</div>
			<div class="info">
				<div class="company-logo">
					<img :src="companyLogo" alt="2018_polo_white_logo" />
				</div>
				<h5 v-if="props.spaceTitle" class="space-title">
					{{ props.spaceTitle }}
				</h5>
				<p v-if="props.description" class="description">
					{{ props.description }}
				</p>
				<p v-if="props.miniDescription" class="description-mini">
					{{ props.miniDescription }}
				</p>
				<ul v-if="props.linkList">
					<li v-for="(obj, idx) in props.linkList" :key="idx">
						<a>{{ obj.name }}</a>
					</li>
				</ul>
			</div>
		</div>

		<div class="users-category">
			<div class="box">
				<div class="image">
					<img src="/images/smart-guy.jpg" alt="img1" />
				</div>
				<ul class="link-list">
					<li><a>for him</a></li>
				</ul>
			</div>
			<div class="box">
				<div class="image">
					<img
						src="/images/holiday_seasonal_img.jpg"
						alt="holiday_seasonal_lp_c11b_img"
					/>
				</div>
				<ul class="link-list">
					<li><a>for her</a></li>
				</ul>
			</div>
			<div class="box">
				<div class="image">
					<img
						src="/images/holiday_seasonal_children.jpg"
						alt="holiday_seasonal_lp_c11b_img"
					/>
				</div>
				<ul class="link-list">
					<li><a>for boys</a> <span class="line">|</span></li>
					<li><a>for girls</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import bgImage12 from "~/assets/images/bg-group12.jpg";

const props = defineProps({
	spaceTitle: null,
	description: null,
	miniDescription: null,
	linkList: null,
	companyLogo: null,
});
</script>

<style scoped lang="scss">
.holiday-mega-box {
	padding: 40px 0;
	.header {
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			font-family: "SackersGothicW01-Heavy", Arial, Helvetica, sans-serif;
			font-size: 1.125em;
			line-height: 1.944em;
			letter-spacing: 0.417em;
			text-transform: uppercase;
			text-align: center;
			color: #ffffff;
			margin-bottom: 9px;
		}
		p {
			width: 50%;
			font-family: "SackersGothicW01-Medium", Arial, Helvetica, sans-serif;
			font-size: 0.5em;
			line-height: 3em;
			letter-spacing: 0.333em;
			text-transform: uppercase;
			text-align: center;
			color: #ffffff;
		}
	}
	.holiday-category {
		margin-top: 60px;
		padding: 0 50px;
		display: flex;
		gap: 30px;

		.image,
		.info {
			width: 50%;
		}
		.info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			.space-title {
				margin: 0;
				font-family: "SackersGothicW01-Heavy", Arial, Helvetica, sans-serif;
				font-size: 1.125em;
				line-height: 1.944em;
				letter-spacing: 0.417em;
				text-transform: uppercase;
				color: #ffffff;
			}
			.company-logo {
				width: 200px;
			}
			.description {
				width: 70%;
				font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
				margin: 0;
				font-size: 20px;
				font-weight: 300;
				color: #ffffff;
				text-align: center;
				&-mini {
					@extend .description;
					line-height: 20px;
					font-size: 12px;
				}
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
						font-size: 10px;
						text-decoration: underline;
						text-underline-offset: 9px;
						text-decoration-color: #ffffff;
					}
				}
			}
		}
	}
	.users-category {
		margin-top: 60px;
		display: flex;
		justify-content: space-around;
		gap: 20px;
		.box {
			position: relative;
			.link-list {
				list-style: none;
				margin: 0;
				padding: 0;
				position: absolute;
				bottom: 15px;
				left: 15px;
				display: flex;
				gap: 10px;
				li {
					a {
						font-family: "Founders Grotesk Mono Regular", Arial, Helvetica,
							sans-serif;
						font-size: 0.688em;
						letter-spacing: 0.091em;
						text-transform: uppercase;
						color: #fff;
						cursor: pointer;
					}
					.line {
						color: #fff;
						margin-left: 3px;
					}
				}
			}
		}
	}
}
</style>

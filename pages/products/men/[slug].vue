<template>
	<section class="products-list-view">
		<div class="header" :style="{ backgroundImage: `url(${bgGroup40})` }">
			<div class="content">
				<ul class="category-path">
					<li>
						<a>men<span class="slash">/</span></a>
					</li>
					<li><a>clothing</a></li>
				</ul>
				<h1 class="category-title">Men's Jackets & Coats</h1>
				<div class="filter-list">
					<div class="box">
						<div class="image">
							<img src="/images/1010_m_outerwear_visual_filter_c01a_img.jpg" />
						</div>
						<h6 class="name">Down</h6>
					</div>
					<div class="box">
						<div class="image">
							<img src="/images/1010_m_outerwear_visual_filter_c01e_img.jpg" />
						</div>
						<h6 class="name">Water-Repllent</h6>
					</div>
				</div>
			</div>
		</div>

		<div class="page-navbar">
			<ul class="path-list">
				<li>
					<a>men<span class="slash">/</span></a>
				</li>
				<li><a>clothing</a></li>
			</ul>
			<button>
				<i class="fa fa-filter" aria-hidden="true"></i> Filter & Sort
			</button>
		</div>
		<div class="list-box">
			<div class="boxer"><ProductCard /></div>
			<div class="boxer"><ProductCard /></div>
			<div class="boxer"><ProductCard /></div>
			<div class="boxer"><ProductCard /></div>
			<div class="boxer"><ProductCard /></div>
			<div class="boxer"><ProductCard /></div>
			<div class="boxer"><ProductCard /></div>
			<div class="boxer"><ProductCard /></div>
		</div>
	</section>
</template>

<script setup>
import bgGroup40 from "~/assets/images/bg-group-40.jpg";

definePageMeta({
	layout: "non-sticky-navbar",
});
</script>

<style scoped lang="scss">
section.products-list-view {
	.header {
		background-size: 100%;
		background-repeat: no-repeat;
		.content {
			padding: 40px 50px;
			.category-path {
				list-style: none;
				margin: 0;
				padding: 0;
				display: flex;
				gap: 10px;
				li {
					a {
						color: #fff;
						text-transform: uppercase;
						font-size: 10px;
						letter-spacing: 1.25px;
						.slash {
							margin-left: 10px;
						}
					}
				}
			}
			.category-title {
				font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
					serif;
				font-weight: 400;
				font-size: 2.75rem;
				line-height: 1.18182em;
				color: #fff;
			}
			.filter-list {
				margin-top: 3rem;
				display: flex;
				gap: 10px;
				.box {
					width: 12%;
					display: flex;
					flex-direction: column;
					gap: 10px;
					.name {
						font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
							Arial, sans-serif;
						font-style: Normal;
						font-weight: 400;
						font-size: 0.75rem;
						color: #fff;
						letter-spacing: 1.25px;
					}
				}
			}
		}
	}

	.page-navbar {
		position: sticky;
		top: 0;
		z-index: 99999;
		display: flex;
		justify-content: space-between;
		padding: 25px 3rem;
		background: #fff;
		.path-list {
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			gap: 10px;
			li {
				a {
					color: #474747;
					overflow: hidden;
					text-decoration: none;
					letter-spacing: 0.01875rem;
					font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
						Helvetica, sans-serif;
					color: #041e3a;
					text-transform: uppercase;
					text-overflow: ellipsis;
					font-size: 0.5875rem;
					.slash {
						margin-left: 7px;
					}
				}
			}
		}
		button {
			font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 500;
			cursor: pointer;
			font-size: 0.8875rem;
			letter-spacing: 0.0625rem;
			text-transform: uppercase;
			border: none;
			background: none;
		}
	}
	.list-box {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-row-gap: 60px;
		grid-column-gap: 1px;
		.boxer {
			grid-column: span 1;
			grid-row: span 1;
		}
	}
}
</style>

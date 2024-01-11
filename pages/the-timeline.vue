<template>
	<section class="timeline">
		<div class="hero-banner">
			<div class="image">
				<img src="/images/20191112_rl50_timeline_c01_hero.jpg" />
			</div>
			<div class="content"><h4 class="title">The Timeline</h4></div>
		</div>
		<nav class="navbar">
			<ul>
				<li><a>The man</a></li>
				<li><a>The timeline</a></li>
				<li><a>letters to ralph</a></li>
				<li><a>the awards</a></li>
				<li><a>in the press</a></li>
			</ul>
		</nav>
		<div class="context-timeline">
			<div class="item">
				<div class="image">
					<img
						src="/images/timeline/rl_timeline_c02_banner.png"
						alt="rl_timeline_c02_banner"
					/>
				</div>
				<div class="content">
					<h1 class="year">1967</h1>
					<div class="copygroup-inner">
						<h3 class="medium-title">
							<em>It all started with a tie…</em>
							Ralph launches a
							<em>neckwear line</em>
							under the name <em>Polo</em>
						</h3>
						<p class="mini-description">
							Working out of a drawer in the Empire State Building and drawing
							inspiration from the glamour of Old Hollywood, Ralph bucks the
							trends of the day with a collection of wide ties, each handmade
							from the highest quality fabrics.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.timeline {
	.hero-banner {
		position: relative;
		display: flex;
		.image {
			width: 100%;
		}
		.content {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			.title {
				font-family: "Didot W01 Headline", times, serif;
				font-weight: normal;
				font-size: 5rem;
				font-weight: 400;
				text-transform: uppercase;
				color: #fff;
			}
		}
	}
	.navbar {
		padding: 10px 0;
		background: #000;
		ul {
			list-style: none;
			display: flex;
			justify-content: center;
			gap: 3rem;
			li {
				a {
					font-family: "Didot W01 Headline", times, serif;
					font-weight: normal;
					font-size: 1rem;
					font-weight: 400;
					text-transform: uppercase;
					color: #fff;
				}
			}
		}
	}
	.context-timeline {
		.item {
			.image {
			}
			.content {
				.year {
					font-family: "Didot W01 Roman", times, serif;
					font-size: 12.8644em;
					font-weight: 400;
					letter-spacing: 0;
					text-align: left;
					color: #000;
				}
				.copygroup-inner {
					.medium-title {
						font-family: "Didot W01 Roman", times, serif;
						font-weight: 400;
						font-size: 2.196em;
						letter-spacing: 0em;
					}
					.mini-description {
						font-family: "Didot W01 Roman", times, serif;
						font-size: 1.2079em;
						font-weight: 400;
						letter-spacing: 0.075em;
					}
				}
			}
		}
	}
}
</style>

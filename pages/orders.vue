<template>
	<section class="account-page">
		<AccountHeroBanner />
		<AccountPageNavbar />
	</section>
	<section class="orders">
		<h2 class="section-headline">orders/returns</h2>
		<div class="order-explore-banner">
			<div class="bg-image">
				<img
					src="/images/0304_my_wardrobe_c01_img.jpg"
					alt="0304_my_wardrobe_c01_img"
				/>
			</div>
			<div class="content">
				<div class="title">
					<span class="rl">RL</span><span class="typo">Wardrobe </span>
				</div>
				<p class="description">
					A new virtual styling experience providing personalised
					recommendations. Build your dream Ralph Lauren closet
				</p>
				<a class="explore-link">
					<div class="arrow"></div>
					<span>explore now</span>
				</a>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.orders {
	padding: 0 6rem;

	.section-headline {
		font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
			sans-serif;
		font-style: Normal;
		font-weight: 400;
		font-size: 1.5rem;
		letter-spacing: 0.15rem;
		color: #474747;
		text-transform: uppercase;
		margin-bottom: 3rem;
	}
	.order-explore-banner {
		position: relative;
		.content {
			width: 40%;
			position: absolute;
			top: 50%;
			left: 10%;
			transform: translateY(-50%);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			gap: 20px;
			.title {
				.rl {
					font-size: 2.8125rem;
					letter-spacing: 1.8px;
					color: #fff;
				}
				.typo {
					// display: flex;
					font-family: Northwell Alt;
					font-size: 2.8125rem;
					letter-spacing: 1.8px;
					line-height: 72px;
					color: #fff;
				}
			}
			.description {
				text-align: center;
				font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
					serif;
				font-size: 1.25rem;
				letter-spacing: 0.38px;
				line-height: 28px;
				margin: 0 auto;
				max-width: 425px;
				color: #fff;
			}
			.explore-link {
				color: #fff;
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-size: 0.6875rem;
				line-height: 28px;
				letter-spacing: 1.22px;
				text-transform: uppercase;
				display: flex;
				flex-direction: column;
				align-items: center;
				gap: 10px;
				.arrow {
					width: 40px;
					height: 40px;
					background-color: #fff;
					border-radius: 50%;
					position: relative;
					&::after {
						content: "";
						position: absolute;
						top: 18px;
						left: 15px;
						width: 10px;
						height: 10px;
						border-bottom: 1px solid #000;
						border-right: 1px solid #000;
						transform: rotate(225deg);
					}
				}
			}
		}
	}
}
</style>

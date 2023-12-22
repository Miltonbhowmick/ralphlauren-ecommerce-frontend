<template>
	<div class="locations-box">
		<div class="store-directions">Store Locator / Directory</div>
		<h1 class="title">
			<span class="total-store">238</span> Ralph Lauren Stores
		</h1>
		<div class="store-list">
			<ul>
				<li><a>Colombia (3)</a></li>
				<li><a>Czech Republic (2)</a></li>
				<li><a>DO (2)</a></li>
				<li><a>Denmark (3)</a></li>
				<li><a>EC (6)</a></li>
				<li><a>Egypt (9)</a></li>
				<li><a>France (20)</a></li>
				<li><a>Germany (15)</a></li>
				<li><a>Greece (5)</a></li>
				<li><a>Guatemala (1)</a></li>
				<li><a>Hungary (1)</a></li>
				<li><a>IN (4)</a></li>
				<li><a>Ireland (2)</a></li>
				<li><a>Israel (3)</a></li>
				<li><a>Italy (25)</a></li>
				<li><a>Jordan (1)</a></li>
				<li><a>Kuwait (2)</a></li>
				<li><a>Malta (1)</a></li>
				<li><a>Morocco (1)</a></li>
				<li><a>NO (2)</a></li>
				<li><a>PE (1)</a></li>
				<li><a>Panama (2)</a></li>
				<li><a>Poland (1)</a></li>
				<li><a>Portugal (5)</a></li>
				<li><a>Qatar (3)</a></li>
				<li><a>Russia (3)</a></li>
				<li><a>Saudi Arabia (3)</a></li>
				<li><a>Spain (15)</a></li>
				<li><a>Sweden (8)</a></li>
				<li><a>Switzerland (3)</a></li>
				<li><a>The Netherlands (10)</a></li>
				<li><a>Turkey (3)</a></li>
				<li><a>UAE (8)</a></li>
				<li><a>Ukraine (5)</a></li>
				<li><a>United Kingdom (27)</a></li>
			</ul>
		</div>
		<button class="back-btn">back to store locator</button>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.locations-box {
	margin-top: 40px;
	padding: 0px 55px;
	.store-directions {
		margin-bottom: 0.625rem;
		color: #767676;
	}
	.title {
		font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
			serif;
		font-weight: 400;
		font-style: normal;
		font-size: 2.125rem;
		color: #041e3a;
		text-transform: capitalize;
	}
	.store-list {
		margin-top: 48px;
		ul {
			height: 300px;
			list-style: none;
			margin: 0;
			padding: 0;
			display: flex;
			flex-direction: column;
			flex-wrap: wrap;
			gap: 15px;
			li {
				a {
					width: 50px;
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					font-size: 0.875rem;
					color: #041e3a;
					text-decoration: underline;
					margin-bottom: 0.875rem;
				}
			}
		}
	}
	.back-btn {
		margin-top: 40px;
		color: #041e3a;
		background: #fff;
		padding: 0.9375rem 1.5rem;
		border: 1px solid #041e3a;
		font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial, Helvetica,
			sans-serif;
		font-style: Normal;
		font-weight: 500;
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
	}
}
</style>

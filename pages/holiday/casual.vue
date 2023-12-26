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
		<div class="product-gellary"></div>
	</div>
</template>

<script setup>
import bgImage17 from "~/assets/images/bg-group17.jpg";
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
</style>

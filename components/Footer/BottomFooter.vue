<template>
	<div class="bottom-footer">
		<ul class="nav-list">
			<li><a class="link">What's New</a></li>
			<li>
				<div class="link active"><span>Men's Brands</span></div>
			</li>
			<li><div class="link">Women's Brands</div></li>
			<li><div class="link">Home Brands</div></li>
			<li><div class="link">Our Story</div></li>
			<li><div class="link">Timeless by Design</div></li>
			<li><div class="link">World of RL</div></li>
			<li><div class="link">Restaurants</div></li>
			<li><div class="link">Stores</div></li>
		</ul>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.bottom-footer {
	position: sticky;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 60px;
	border-top: 1px solid #fff;
	display: flex;
	align-items: center;

	.nav-list {
		height: 100%;
		width: 100%;
		margin: 0;
		padding: 0 20px;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 15px;
		list-style: none;
		li {
			height: 100%;
			flex-grow: 1;

			.link {
				width: max-content;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-family: "LeJeuneDeck-Regular";
				font-size: 1.2vw;
				letter-spacing: 0.014em;
				color: #e3e3e3;
				&:hover {
					cursor: pointer;
					color: #fff;
				}
				&.active {
					border-top: 3px solid #fff;
				}
			}
		}
	}
}
</style>

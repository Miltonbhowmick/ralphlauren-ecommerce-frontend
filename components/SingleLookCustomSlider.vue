<template>
	<div class="slider-card">
		<div class="slider-box">
			<carousel :per-page="1">
				<slide>
					<div class="product-image">
						<img src="/images/full-pant.jpg" alt="full-pant" />
					</div>
					<div class="info">
						<h6 class="brand-name">Polo Ralph Lauren</h6>
						<h2 class="product-title">Sitting Polo Bear 42 MM Steel Watch</h2>
						<div class="product-price">
							<span>€ 1.900,00</span>
						</div>
						<div class="attribute-list">
							<div class="item">
								<div class="title">Size</div>
								<ul>
									<li><a>28</a></li>
									<li><a>29</a></li>
									<li><a class="available">30</a></li>
									<li><a class="available">32</a></li>
									<li><a class="available">34</a></li>
									<li><a>36</a></li>
									<li><a>38</a></li>
									<li><a class="available">40</a></li>
									<li><a class="available">42</a></li>
								</ul>
							</div>
							<div class="item">
								<div class="title">Length</div>
								<ul>
									<li><a>30L</a></li>
									<li><a class="available">32L</a></li>
									<li><a class="available">34L</a></li>
								</ul>
							</div>
						</div>
						<button class="add-bag">add to bag</button>
					</div>
				</slide>
				<slide>
					<div class="product-image">
						<img src="/images/full-tshirt.jpg" alt="full-pant" />
					</div>
					<div class="info">
						<h6 class="brand-name">Polo Ralph Lauren</h6>
						<h2 class="product-title">Sitting Polo Bear 42 MM Steel Watch</h2>
						<div class="product-price">
							<span>€ 1.900,00</span>
						</div>
						<div class="attribute-list">
							<div class="item">
								<div class="title">Size</div>
								<ul>
									<li><a>28</a></li>
									<li><a>29</a></li>
									<li><a class="available">30</a></li>
									<li><a class="available">32</a></li>
									<li><a class="available">34</a></li>
									<li><a>36</a></li>
									<li><a>38</a></li>
									<li><a class="available">40</a></li>
									<li><a class="available">42</a></li>
								</ul>
							</div>
							<div class="item">
								<div class="title">Length</div>
								<ul>
									<li><a>30L</a></li>
									<li><a class="available">32L</a></li>
									<li><a class="available">34L</a></li>
								</ul>
							</div>
						</div>
						<button class="add-bag">add to bag</button>
					</div>
				</slide>
			</carousel>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.slider-card {
	width: 100%;
	.slider-box {
	}
	.info {
		margin-top: 15px;
		.brand-name {
			margin: 10px 0 0 0;
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			font-size: 0.6875rem;
			color: #6d6f73;
			text-transform: none;
			letter-spacing: 0.92px;
			text-align: center;
		}
		.product-title {
			margin: 10px 0 0 0;
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			font-size: 1rem;
			color: #041e3a;
			text-align: center;
		}
		.product-price {
			margin: 10px 0 0 0;
			color: #474747;
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			font-size: 0.875rem;
			text-align: center;
		}
		.attribute-list {
			margin: 30px 0 0 0;
			display: flex;
			flex-direction: column;
			gap: 20px;
			.item {
				.title {
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					font-size: 12px;
					font-weight: 500;
					color: #6d6f73;
					text-align: center;
				}
				ul {
					list-style: none;
					margin: 0;
					margin-top: 10px;
					padding: 0;
					display: flex;
					flex-wrap: wrap;
					justify-content: center;
					gap: 10px;
					li {
						padding: 10px 20px;
						a {
							font-family: RL_DroidKufi, Founders Grotesk text Regular,
								Helvetica, Arial, sans-serif;
							font-size: 12px;
							font-weight: 600;
							color: #6d6f73;
							&.available {
								color: #041e3a;
							}
						}
					}
				}
			}
		}
		.add-bag {
			margin-top: 30px;
			width: 100%;
			padding: 20px 0;
			background-color: #041e3a;
			color: #fff;
			text-transform: uppercase;
			font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial, Helvetica,
				sans-serif;
			font-size: 0.6rem;
			font-weight: 500;
			letter-spacing: 1.65px;
		}
	}
}
</style>

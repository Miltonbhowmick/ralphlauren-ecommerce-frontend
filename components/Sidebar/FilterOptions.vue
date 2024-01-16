<template>
	<div class="modal-overlay">
		<div class="product-detail-sidebar">
			<div class="header">
				<div class="left">
					<h3>Filter & Sort</h3>
				</div>
				<div class="right">
					<div class="total-filters">
						<span class="value">3</span> Filters -
					</div>
					<a class="clear-action">Clear All</a>
					<a class="close" @click="close">x</a>
				</div>
			</div>
			<div class="content">
				<div class="sort-box">
					<div class="select-input-group">
						<div
							class="current-value"
							:style="[
								showSortByDropdown === true
									? { 'border-bottom': 'none' }
									: { 'border-bottom': '' },
							]"
						>
							<label class="label">sort by:</label>
							<div
								@click="showSortByDropdown = !showSortByDropdown"
								class="field-wrapper"
							>
								<span class="select-value">default</span>
								<i
									:data-icon="[
										showSortByDropdown === true ? '&#x25B2;' : '&#x25BC;',
									]"
								></i>
							</div>
						</div>
						<ul
							v-if="showSortByDropdown === true"
							class="dropdown-list"
							:style="[
								showSortByDropdown === true
									? { 'border-top': 'none' }
									: { 'border-top': '1px solid #e1e1e5' },
							]"
						>
							<li><a>default</a></li>
							<li><a>new arrivals</a></li>
							<li><a>best sellers</a></li>
							<li><a>price low to high</a></li>
							<li><a>price high to low</a></li>
						</ul>
					</div>
				</div>
				<div class="accordion-filter-list">
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									category<span class="value">1</span>
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									<div class="type-list">
										<div class="item active">
											Skirts & Trousers<span class="value">(1)</span>
										</div>
										<div class="item">
											T-Shirts & Sweatshirts<span class="value">(4)</span>
										</div>
										<div class="item">
											Polo Shirts<span class="value">(1)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="accordion" id="accordionExample2">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="true"
									aria-controls="collapseTwo"
								>
									color<span class="value">1</span>
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse show"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample2"
							>
								<div class="accordion-body">
									<div class="type-list">
										<div class="item active">
											<span class="color-circle bg-pink"></span>pink<span
												class="value"
												>(1)</span
											>
										</div>
										<div class="item">
											<span class="color-circle bg-white"></span>white
											<span class="value">(4)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									category<span class="value">1</span>
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									<div class="type-list">
										<div class="item active">
											Skirts & Trousers<span class="value">(1)</span>
										</div>
										<div class="item">
											T-Shirts & Sweatshirts<span class="value">(4)</span>
										</div>
										<div class="item">
											Polo Shirts<span class="value">(1)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="accordion" id="accordionExample2">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="true"
									aria-controls="collapseTwo"
								>
									color<span class="value">1</span>
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse show"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample2"
							>
								<div class="accordion-body">
									<div class="type-list">
										<div class="item active">
											<span class="color-circle bg-pink"></span>pink<span
												class="value"
												>(1)</span
											>
										</div>
										<div class="item">
											<span class="color-circle bg-white"></span>white
											<span class="value">(4)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="accordion" id="accordionExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
								>
									category<span class="value">1</span>
								</button>
							</h2>
							<div
								id="collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="headingOne"
								data-bs-parent="#accordionExample"
							>
								<div class="accordion-body">
									<div class="type-list">
										<div class="item active">
											Skirts & Trousers<span class="value">(1)</span>
										</div>
										<div class="item">
											T-Shirts & Sweatshirts<span class="value">(4)</span>
										</div>
										<div class="item">
											Polo Shirts<span class="value">(1)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="accordion" id="accordionExample2">
						<div class="accordion-item">
							<h2 class="accordion-header" id="headingTwo">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
									aria-expanded="true"
									aria-controls="collapseTwo"
								>
									color<span class="value">1</span>
								</button>
							</h2>
							<div
								id="collapseTwo"
								class="accordion-collapse collapse show"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordionExample2"
							>
								<div class="accordion-body">
									<div class="type-list">
										<div class="item active">
											<span class="color-circle bg-pink"></span>pink<span
												class="value"
												>(1)</span
											>
										</div>
										<div class="item">
											<span class="color-circle bg-white"></span>white
											<span class="value">(4)</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="footer">
				<button class="filter-submit-btn">
					done <span class="value">(14)</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits();

var showSortByDropdown = ref(false);

const close = () => {
	emit("hideModal");
};

onMounted(() => {
	document.body.style.overflowY = "hidden";
});
onBeforeUnmount(() => {
	document.body.style.overflowY = "scroll";
});
</script>

<style scoped lang="scss">
.modal-overlay {
	position: fixed;
	right: 0;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 9999999;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	.product-detail-sidebar {
		position: relative;
		height: 100vh;
		overflow-y: auto;
		background: #ffffff;
		width: 60%;
		float: right;

		.header {
			position: sticky;
			top: 0;
			left: 0;
			right: 0;
			z-index: 99999;
			padding: 1.5rem 2.2rem;
			display: flex;
			justify-content: space-between;
			background-color: #ffffff;
			border-bottom: 1px solid #e1e1e5;
			.left {
				h3 {
					color: #041e3a;
					font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
						serif;
					font-size: 1.625rem;
					font-style: normal;
					font-weight: 400;
					text-transform: none;
					letter-spacing: normal;
				}
			}
			.right {
				display: flex;
				align-items: center;
				gap: 3px;
				.total-filters {
					font-size: 0.875rem;
					font-weight: 600;
					color: #041e3a;
					font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
						Arial, sans-serif;
				}
				.clear-action {
					color: #041e3a;
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					letter-spacing: 0.03125rem;
					text-decoration: underline;
					font-size: 0.875rem;
					cursor: pointer;
				}
				.close {
					margin-left: 1rem;
					color: rgb(50, 50, 50);
					font-size: 22px;
					font-weight: 300;
					cursor: pointer;
				}
			}
		}
		.content {
			padding: 1.5rem 2.2rem;
			position: relative;
			display: flex;
			flex-direction: column;
			gap: 10px;
			.sort-box {
				width: 100%;
				.select-input-group {
					border-width: 1px 1px 1px 1px;
					border-style: solid;
					border-color: #e1e1e5;
					position: relative;
					.current-value {
						font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
							Arial, sans-serif;
						font-style: Normal;
						font-weight: 400;
						color: #041e3a;
						font-size: 0.75rem;
						padding: 10px 20px;
						.label {
							font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
								Arial, sans-serif;
							font-style: Normal;
							font-weight: 500;
							color: #041e3a;
							text-transform: capitalize;
						}
						.field-wrapper {
							padding: 4px 0;
							width: 100%;
							display: flex;
							cursor: pointer;
							i:after {
								content: attr(data-icon);
							}
							.select-value {
								width: 100%;
								font-family: RL_DroidKufi, Founders Grotesk Text Medium,
									Helvetica, Arial, sans-serif;
								font-style: Normal;
								color: #041e3a;
								font-size: 0.7325rem;
								letter-spacing: 1.25px;
								font-weight: bold;
								text-transform: uppercase;
							}
						}
					}
					.dropdown-list {
						position: absolute;
						z-index: 9999;
						width: 100%;
						list-style: none;
						margin: 0;
						padding: 0;
						background: #ffffff;
						border: 1px solid #e1e1e5;
						li {
							padding: 10px 20px;
							cursor: pointer;
							&:hover {
								background-color: rgba(31, 52, 94, 0.25);
							}
							a {
								font-family: RL_DroidKufi, Founders Grotesk Text Medium,
									Helvetica, Arial, sans-serif;
								font-style: Normal;
								color: #041e3a;
								font-size: 0.7325rem;
								letter-spacing: 1.25px;
								text-transform: uppercase;
							}
						}
					}
				}
			}
			.accordion-filter-list {
				margin-top: 1rem;
			}
		}
		.footer {
			position: sticky;
			bottom: 0;
			padding: 1.5rem 2.2rem;
			background: #fff;
			box-shadow: 0 -10px 20px 0 rgba(0, 0, 0, 0.05);
			.filter-submit-btn {
				width: 100%;
				padding: 20px 5px;
				background: #041e3a;
				color: #fff;
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-style: Normal;
				font-weight: 500;
				text-align: center;
				text-transform: uppercase;
				transition: all 0.5s ease;
				font-size: 0.55rem;
				letter-spacing: 0.05em;
				border: none;
			}
		}
	}
}

:deep(.accordion-button) {
	background: none;
	padding: 25px 0 25px 0;
	font-size: 0.75rem;
	text-transform: none;
	font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica, Arial,
		sans-serif;
	font-style: Normal;
	font-weight: 600;
	color: #474747;
	letter-spacing: 1.1px;
	text-transform: uppercase;
	box-shadow: none;
	.value {
		background: #f2f3f5;
		border-radius: 50%;
		margin-left: 10px;
		padding: 3px 6px;
		font-size: 9px;
	}
}

:deep(.accordion-item) {
	border: none;
	border-radius: 0;
	border-bottom: 1px solid #d1d1d1;
}
:deep(.accordion-body) {
	padding: 10px 0 25px 0;
	.type-list {
		display: flex;
		flex-wrap: wrap;

		gap: 10px;
		.item {
			width: max-content;
			padding: 8px;
			border-radius: 4px;
			border: 1px solid #c6c8cc;
			text-transform: capitalize;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			gap: 5px;
			&:hover {
				background: #f2f3f5;
			}
			&.active {
				background: #f2f3f5;
				border: 1px solid #041e3a;
				color: #041e3a;
				font-weight: 600;
			}
			.color-circle {
				display: block;
				width: 15px;
				height: 15px;
				border-radius: 50%;
				border: 1px solid #041e3a;
			}
			.value {
				font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 400;
				color: #6d6f73;
				font-size: 0.625rem;
			}
		}
	}
}
</style>

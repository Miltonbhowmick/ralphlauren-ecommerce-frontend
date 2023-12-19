<template>
	<div class="header">
		<div class="full-search">
			<form role="search" class="form">
				<button class="action-btn">
					<i class="fa fa-search" aria-hidden="true"></i>
				</button>
				<div class="input-wrapper">
					<input class="input" placeholder="Search" />
				</div>
				<button class="clear-btn">clear</button>
			</form>
		</div>
		<div class="search-refinement">
			<ul>
				<li><a>All</a></li>
				<li><a class="active">Men</a></li>
				<li><a>Women</a></li>
				<li><a>Kids</a></li>
				<li><a>Home</a></li>
			</ul>
		</div>
		<div class="results-status">
			<h1>
				<span class="total-product">124</span> results for "<span>tshirt</span>"
			</h1>
		</div>
		<p class="results-caption">
			We have autocorrected your search term “<span>tshir</span>” for better
			results.
		</p>
	</div>

	<div class="content">
		<div class="filter-list">
			<div class="current-active">
				<ul>
					<li>
						<a>Men <i class="fa fa-times" aria-hidden="true"></i> </a>
					</li>
					<li>
						<a>Women <i class="fa fa-times" aria-hidden="true"></i> </a>
					</li>
				</ul>
				<a class="clear-all">Clear All</a>
			</div>
			<div class="options">
				<button>
					<i class="fa fa-filter" aria-hidden="true"></i> filter & sort
				</button>
			</div>
		</div>
		<div class="product-list">
			<ProductCard />
			<ProductCard />
			<ProductCard />
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
	margin-top: 60px;
	.full-search {
		padding: 0 20px;
		.form {
			height: 50px;
			width: 100%;
			position: relative;
			background: hsla(0, 0%, 82%, 0.12549019607843137);
			border-radius: 2px;
			.action-btn {
				padding: 10px 0px;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				width: 50px;
				border: none;
				background: none;
				i {
					font-size: 15px;
					font-weight: 300;
				}
			}
			.input-wrapper {
				box-sizing: border-box;
				width: 100%;
				.input {
					box-sizing: border-box;
					padding: 15px 45px;
					width: 100%;
					border: none;
					background: none;
					text-align: center;
					color: #041e3a;
					font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
						serif;
					font-size: 20px;
					&:focus {
						outline: none;
					}
				}
			}
			.clear-btn {
				padding: 10px 0px;
				position: absolute;
				top: 50%;
				right: 0;
				transform: translateY(-50%);
				width: 80px;
				border: none;
				background: none;
				text-transform: uppercase;
				cursor: pointer;
				color: #041e3a;
				font-family: RL_DroidKufi, Founders Grotesk Mono Light, Lucida Console,
					Arial, Helvetica, sans-serif;
				font-size: 0.625rem;
			}
		}
	}
	.search-refinement {
		margin-top: 20px;
		display: flex;
		justify-content: center;
		ul {
			list-style: none;
			display: flex;
			gap: 10px;
			li {
				a {
					padding: 10px 25px;
					background-color: #f2f3f5;
					color: #041e3a;
					font-size: 12px;
					font-weight: 500;
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					border-radius: 50px;
					letter-spacing: 0.01875rem;
					&.active {
						background-color: #041e3a;
						box-shadow: 0 15px 20px -15px rgba(1, 65, 129, 0.4);
						color: #fff;
					}
				}
			}
		}
	}
	.results-status {
		margin-top: 20px;
		h1 {
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-weight: 400;
			font-size: 2.25rem;
			line-height: 2.5rem;
			text-align: center;
		}
	}
	.results-caption {
		font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
			sans-serif;
		font-style: Normal;
		font-weight: 400;
		font-size: 0.75rem;
		line-height: 1.125rem;
		margin-top: 0.8125rem;
		text-align: center;
	}
}
.content {
	margin-top: 100px;
	.filter-list {
		padding: 0px 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.current-active {
			display: flex;
			gap: 10px;
			ul {
				margin: 0;
				padding: 0;
				list-style: none;
				display: flex;
				gap: 10px;
				li {
					a {
						font-size: 11px;
						padding: 0.5625rem 0.75rem;
						background-color: #f2f3f5;
						letter-spacing: 0.01875rem;
						i {
							margin-left: 3px;
							font-weight: 300;
						}
					}
				}
			}
			.clear-all {
				text-decoration: underline;
			}
		}
		.options {
			button {
				font-size: 14px;
				font-weight: 500;
				text-transform: uppercase;
				background: none;
				border: none;
			}
		}
	}
	.product-list {
		margin-top: 30px;
		display: flex;
		justify-content: space-between;
		gap: 2px;
	}
}
</style>

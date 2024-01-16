<template>
	<div class="dropdown-signin">
		<div class="info">
			<ul class="header">
				<li class="title">
					<span
						>Welcome, <span class="first-name">Milton<span>!</span></span></span
					>
				</li>
				<li class="signout">
					<a>sign out</a>
				</li>
			</ul>
			<ul class="menu-list">
				<li>
					<a>
						<i
							class="fa fa-user-o"
							:class="{ 'text-black': bgWhite }"
							aria-hidden="true"
						></i
						>MY ACCOUNT</a
					>
				</li>
				<li>
					<a>
						<i
							class="fa fa-user-o"
							:class="{ 'text-black': bgWhite }"
							aria-hidden="true"
						></i
						>ORDERS & RETURNS</a
					>
				</li>
				<li>
					<a>
						<i
							class="fa fa-user-o"
							:class="{ 'text-black': bgWhite }"
							aria-hidden="true"
						></i
						>RL WARDROBE</a
					>
				</li>
				<li>
					<a>
						<i
							class="fa fa-user-o"
							:class="{ 'text-black': bgWhite }"
							aria-hidden="true"
						></i
						>TRACK ORDER</a
					>
				</li>
			</ul>
		</div>
		<div class="discover-box">
			<h3 class="typo-title">My Style</h3>
			<p class="description">Discover a shopping experience unique to you.</p>
			<a class="link">discover now</a>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.dropdown-signin {
	position: absolute;
	top: 58px;
	right: 10px;
	z-index: 99;
	width: 370px;
	min-height: 200px;
	.info {
		padding: 25px 25px;
		background-color: #f4f5f6;
		.header {
			padding: 0;
			margin: 0;
			list-style: none;
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 10px;
			.title {
				font-size: 22px;
				font-weight: 500;
				font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
					serif;
				font-weight: 400;
				i {
					margin-right: 10px;
				}
			}
			.signout {
				a {
					font-size: 0.6575rem;
					color: #707070;
					border: 0;
					min-height: 0;
					background-color: transparent;
					text-decoration: underline;
					letter-spacing: 0.0625rem;
					text-transform: capitalize;
					text-decoration: underline;
				}
			}
		}
		.menu-list {
			list-style: none;
			margin: 2rem 0 0 0;
			padding: 0;
			display: flex;
			flex-direction: column;
			gap: 10px;
			li {
				a {
					font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
						Arial, sans-serif;
					font-style: Normal;
					font-weight: 600;
					color: #041e3a;
					font-size: 0.75rem;
					text-transform: uppercase;
					letter-spacing: 0.0625rem;
					i {
						margin-right: 10px;
						font-size: 20px;
						font-weight: 300;
					}
				}
			}
		}
	}
	.discover-box {
		background-color: #fff;
		padding: 20px 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 7px;
		.typo-title {
			margin: 0;
			font-family: Northwell Alt, Helvetica, sans-serif;
			font-style: normal;
			font-weight: 400;
			text-align: center;
			font-size: 1.5rem;
			margin: 0;
			color: #041e3a;
			line-height: normal;
		}
		.description {
			margin: 0;
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-weight: 400;
			font-style: normal;
			text-align: center;
			font-size: 0.875rem;
			color: #041e3a;
		}
		.link {
			font-family: RL_DroidKufi, Founders Grotesk Mono Medium, Lucida Console,
				Arial, sans-serif;
			font-style: Normal;
			font-weight: 500;
			font-size: 0.75rem;
			text-transform: uppercase;
			text-decoration: underline;
			color: #041e3a;
		}
	}
}
</style>

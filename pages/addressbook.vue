<template>
	<section class="account-page">
		<AccountHeroBanner />
		<AccountPageNavbar />
	</section>
	<section class="addressbook">
		<div class="header">
			<h2 class="title">addresses</h2>
			<a class="link">create new address</a>
		</div>
		<div class="user-info">
			<h6>DEFAULT ADDRESS</h6>
			<div class="info">
				<h3 class="nickname">mil</h3>
				<h4 class="name">xyz roy</h4>
				<div class="mini-address">
					<address>
						Hasdau
						<br />
						sdasd, 337486<br />
						Romania
						<br />Phone: 01238128312
					</address>
				</div>
				<div class="edit-links"><a>Edit</a><span>|</span><a>Delete</a></div>
			</div>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.addressbook {
	padding: 0 6rem;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		.title {
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			font-size: 1.5rem;
			letter-spacing: 0.15rem;
			color: #474747;
			text-transform: uppercase;
		}
		.link {
			color: #767676;
			text-decoration: underline;
			font-size: 0.875rem;
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			text-transform: uppercase;
		}
	}
	.user-info {
		margin-top: 20px;
		h6 {
			font-size: 0.875rem;
			font-family: RL_DroidKufi, Founders Grotesk Mono Medium, Lucida Console,
				Arial, sans-serif;
			font-weight: 400;
			letter-spacing: 1.6px;
			color: #474747;
			text-transform: uppercase;
			margin-top: 0;
			line-height: 1.5em;
		}
		.info {
			border: 1px solid #474747;
			padding: 20px;
			display: flex;
			flex-direction: column;
			.nickname {
				margin: 0;
				font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 500;
				font-size: 0.875rem;
				line-height: 2em;
				text-transform: capitalize;
			}
			.name {
				margin: 0;
				color: #767676;
				font-size: 0.875rem;
				line-height: 1.25rem;
				font-weight: 300;
			}
			.mini-address {
				address {
					color: #767676;
					font-style: normal;
					font-size: 0.875rem;
					font-weight: 300;
					line-height: 1.25rem;
				}
			}
			.edit-links {
				margin-top: 15px;
				display: flex;
				gap: 10px;
				a {
					color: #474747;
					letter-spacing: 0.01875rem;
					font-size: 0.875rem;
					cursor: pointer;
					text-decoration: underline;
				}
			}
		}
	}
}
</style>

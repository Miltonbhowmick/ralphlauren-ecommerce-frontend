<template>
	<div class="main-navigation">
		<div class="primary-logo">
			<nuxt-link to="/">
				<div class="logo">
					<img src="/images/company-logo.png" alt="company-logo" />
				</div>
			</nuxt-link>
		</div>
		<nav class="navbar">
			<ul>
				<li>
					<a>men</a>
				</li>
				<li>
					<a>women</a>
				</li>
				<li>
					<a>kids</a>
				</li>
				<li>
					<a>home</a>
				</li>
				<li>
					<a>gift</a>
				</li>
				<li>
					<a>discover</a>
				</li>
			</ul>
		</nav>
		<ul class="user-links">
			<li><a>s</a></li>
			<li><a>u</a></li>
			<li><a>f</a></li>
			<li><a>c</a></li>
		</ul>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.main-navigation {
	position: relative;
	background-color: #ffffff;
	padding: 10px 25px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	.primary-logo {
		width: 25rem;
		flex-grow: 0;
	}
	.navbar {
		margin: 0;
		width: 100%;
		ul {
			list-style: none;
			display: flex;
			gap: 10px;
			li {
				a {
					font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
						Helvetica, sans-serif;
					text-transform: uppercase;
					font-size: 11px;
					letter-spacing: 0.095rem;
				}
			}
		}
	}
	.user-links {
		margin: 0;
		list-style: none;
		display: flex;
		gap: 10px;
	}
}
</style>

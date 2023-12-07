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
				<li
					@mouseover="currentMenu = men"
					@mouseleave="handleCurrentMenu($event)"
				>
					<a>men</a>
					<component
						v-if="currentMenu"
						:is="currentMenu"
						@mouseleave="handleCurrentMenu($event)"
					/>
				</li>
				<li
					@mouseover="currentMenu = women"
					@mouseleave="handleCurrentMenu($event)"
				>
					<a>women</a>
					<component
						v-if="currentMenu"
						:is="currentMenu"
						@mouseleave="handleCurrentMenu($event)"
					/>
				</li>
				<li
					@mouseover="currentMenu = kids"
					@mouseleave="handleCurrentMenu($event)"
				>
					<a>kids</a>
					<component
						v-if="currentMenu"
						:is="currentMenu"
						@mouseleave="handleCurrentMenu($event)"
					/>
				</li>
				<li
					@mouseover="currentMenu = home"
					@mouseleave="handleCurrentMenu($event)"
				>
					<a>home</a>
					<component
						v-if="currentMenu"
						:is="currentMenu"
						@mouseleave="handleCurrentMenu($event)"
					/>
				</li>
				<li
					@mouseover="currentMenu = gifts"
					@mouseleave="handleCurrentMenu($event)"
				>
					<a>gift</a>
					<component
						v-if="currentMenu"
						:is="currentMenu"
						@mouseleave="handleCurrentMenu($event)"
					/>
				</li>
				<li
					@mouseover="currentMenu = discover"
					@mouseleave="handleCurrentMenu($event)"
				>
					<a>discover</a>
					<component
						v-if="currentMenu"
						:is="currentMenu"
						@mouseleave="handleCurrentMenu($event)"
					/>
				</li>
			</ul>
		</nav>
		<ul class="user-links">
			<li>
				<a><i class="fa fa-search" aria-hidden="true"></i></a>
			</li>
			<li
				@mouseover="openSigninMenu = true"
				@mouseleave="openSigninMenu = false"
			>
				<a><i class="fa fa-user-o" aria-hidden="true"></i></a>
				<DropdownSignin v-if="openSigninMenu" />
			</li>
			<li>
				<a><i class="fa fa-heart-o" aria-hidden="true"></i> </a>
			</li>
			<li>
				<a><i class="fa fa-briefcase" aria-hidden="true"></i></a>
			</li>
		</ul>
	</div>
</template>

<script setup>
const men = resolveComponent("CategoryMenuMen");
const women = resolveComponent("CategoryMenuWomen");
const kids = resolveComponent("CategoryMenuKids");
const gifts = resolveComponent("CategoryMenuGifts");
const discover = resolveComponent("CategoryMenuDiscover");
const home = resolveComponent("CategoryMenuHome");

var currentMenu = shallowRef(null);
var openSigninMenu = ref(false);

const handleCurrentMenu = (event) => {
	console.log(event.target);
};
</script>

<style scoped lang="scss">
.main-navigation {
	position: relative;
	z-index: 999999;
	background-color: #ffffff;
	padding: 0px 25px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	.primary-logo {
		// padding: 10px 0px;
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
				padding: 20px 0px;
				a {
					font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
						Helvetica, sans-serif;
					text-transform: uppercase;
					font-size: 11px;
					letter-spacing: 0.095rem;
					&:hover {
						cursor: pointer;
					}
				}
			}
		}
	}
	.user-links {
		position: relative;
		margin: 0;
		list-style: none;
		display: flex;
		gap: 25px;
		li {
			cursor: pointer;
			a {
				font-size: 16px;
				font-weight: 500;
			}
		}
	}
}
</style>

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
				<li @mouseover="showDropdown('men')" @mouseleave="hideDropdown('men')">
					<a>men</a>
					<component
						v-if="activeDropdown === 'men'"
						:is="men"
						@mouseover="showDropdown('men')"
						@mouseleave="hideDropdown('men')"
					/>
				</li>
				<li
					@mouseover="showDropdown('women')"
					@mouseleave="hideDropdown('women')"
				>
					<a>women</a>
					<component
						v-if="activeDropdown === 'women'"
						:is="women"
						@mouseover="showDropdown('women')"
						@mouseleave="hideDropdown('women')"
					/>
				</li>
				<li
					@mouseover="showDropdown('kids')"
					@mouseleave="hideDropdown('kids')"
				>
					<a>kids</a>
					<component
						v-if="activeDropdown === 'kids'"
						:is="women"
						@mouseover="showDropdown('kids')"
						@mouseleave="hideDropdown('kids')"
					/>
				</li>
				<li
					@mouseover="showDropdown('home')"
					@mouseleave="hideDropdown('home')"
				>
					<a>home</a>
					<component
						v-if="activeDropdown === 'home'"
						:is="home"
						@mouseover="showDropdown('home')"
						@mouseleave="hideDropdown('home')"
					/>
				</li>
				<li
					@mouseover="showDropdown('gifts')"
					@mouseleave="hideDropdown('gifts')"
				>
					<a>gift</a>
					<component
						v-if="activeDropdown === 'gifts'"
						:is="gifts"
						@mouseover="showDropdown('gifts')"
						@mouseleave="hideDropdown('gifts')"
					/>
				</li>
				<li
					@mouseover="showDropdown('discover')"
					@mouseleave="hideDropdown('discover')"
				>
					<a>discover</a>
					<component
						v-if="activeDropdown === 'discover'"
						:is="discover"
						@mouseover="showDropdown('discover')"
						@mouseleave="hideDropdown('discover')"
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
var activeDropdown = ref(null);
var openSigninMenu = ref(false);

const showDropdown = (item) => {
	activeDropdown.value = item;
};
const hideDropdown = (item) => {
	activeDropdown.value = null;
};
</script>

<style scoped lang="scss">
.main-navigation {
	position: relative;
	z-index: 999999;
	background-color: #ffffff;
	padding: 0px 55px;
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
			margin: 0;
			display: flex;
			gap: 10px;
			li {
				padding: 20px 10px;
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

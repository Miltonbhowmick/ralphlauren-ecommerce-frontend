<template>
	<div
		class="main-navigation"
		@mouseover="bgWhite = true"
		:class="{ 'bg-white': bgWhite }"
	>
		<div class="primary-logo">
			<nuxt-link to="/">
				<div
					class="logo"
					:style="[
						bgWhite === true
							? { 'background-color': '#000' }
							: { 'background-color': '#fff' },
					]"
				>
					<!-- <img src="/images/company-logo.png" alt="company-logo" /> -->
				</div>
			</nuxt-link>
		</div>
		<nav class="cs-navbar">
			<ul>
				<li @mouseover="showDropdown('men')" @mouseleave="hideDropdown('men')">
					<nuxt-link to="/products/men" :class="{ 'text-black': bgWhite }"
						>men</nuxt-link
					>
					<component
						v-if="activeDropdown === 'men'"
						:is="men"
						@mouseover="showDropdown('men')"
						@mouseleave="hideDropdown('men')"
						class="dropdown-start-top"
					/>
				</li>
				<li
					@mouseover="showDropdown('women')"
					@mouseleave="hideDropdown('women')"
				>
					<nuxt-link to="/products/women" :class="{ 'text-black': bgWhite }"
						>women</nuxt-link
					>
					<component
						v-if="activeDropdown === 'women'"
						:is="women"
						@mouseover="showDropdown('women')"
						@mouseleave="hideDropdown('women')"
						class="dropdown-start-top"
					/>
				</li>
				<li
					@mouseover="showDropdown('kids')"
					@mouseleave="hideDropdown('kids')"
				>
					<nuxt-link to="/products/kids" :class="{ 'text-black': bgWhite }"
						>kids</nuxt-link
					>
					<component
						v-if="activeDropdown === 'kids'"
						:is="women"
						@mouseover="showDropdown('kids')"
						@mouseleave="hideDropdown('kids')"
						class="dropdown-start-top"
					/>
				</li>
				<li
					@mouseover="showDropdown('home')"
					@mouseleave="hideDropdown('home')"
					class="dropdown-start-top"
				>
					<nuxt-link to="/products/home" :class="{ 'text-black': bgWhite }"
						>home</nuxt-link
					>
					<component
						v-if="activeDropdown === 'home'"
						:is="home"
						@mouseover="showDropdown('home')"
						@mouseleave="hideDropdown('home')"
						class="dropdown-start-top"
					/>
				</li>
				<li
					@mouseover="showDropdown('gifts')"
					@mouseleave="hideDropdown('gifts')"
					class="dropdown-start-top"
				>
					<nuxt-link to="/products/gifts" :class="{ 'text-black': bgWhite }"
						>gift</nuxt-link
					>
					<component
						v-if="activeDropdown === 'gifts'"
						:is="gifts"
						@mouseover="showDropdown('gifts')"
						@mouseleave="hideDropdown('gifts')"
						class="dropdown-start-top"
					/>
				</li>
				<li
					@mouseover="showDropdown('discover')"
					@mouseleave="hideDropdown('discover')"
					class="dropdown-start-top"
				>
					<nuxt-link to="/products/discover" :class="{ 'text-black': bgWhite }"
						>discover</nuxt-link
					>
					<component
						v-if="activeDropdown === 'discover'"
						:is="discover"
						@mouseover="showDropdown('discover')"
						@mouseleave="hideDropdown('discover')"
						class="dropdown-start-top"
					/>
				</li>
			</ul>
		</nav>
		<ul class="user-links">
			<li>
				<a
					><i
						class="fa fa-search"
						:class="{ 'text-black': bgWhite }"
						aria-hidden="true"
					></i
				></a>
			</li>
			<li
				v-if="loggedIn === true"
				@mouseover="openMyAccountMenu = true"
				@mouseleave="openMyAccountMenu = false"
			>
				<a
					><i
						class="fa fa-user-o"
						:class="{ 'text-black': bgWhite }"
						aria-hidden="true"
					></i
				></a>
				<DropdownMyAccount
					v-if="openMyAccountMenu === true"
					@mouseover="openMyAccountMenu = true"
					@mouseleave="openMyAccountMenu = false"
				/>
			</li>
			<li
				v-else-if="loggedIn === false"
				@mouseover="openSigninMenu = true"
				@mouseleave="openSigninMenu = false"
			>
				<a
					><i
						class="fa fa-user-o"
						:class="{ 'text-black': bgWhite }"
						aria-hidden="true"
					></i
				></a>
				<DropdownSignin
					v-if="openSigninMenu === true"
					@mouseover="openSigninMenu = true"
					@mouseleave="openSigninMenu = false"
				/>
			</li>
			<li>
				<a
					><i
						class="fa fa-heart-o"
						:class="{ 'text-black': bgWhite }"
						aria-hidden="true"
					></i>
				</a>
			</li>
			<li>
				<nuxt-link to="/cart"
					><i
						class="fa fa-briefcase"
						:class="{ 'text-black': bgWhite }"
						aria-hidden="true"
					></i
				></nuxt-link>
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
var toggleNavbarBackground = ref(true);
var bgWhite = ref(true);

var loggedIn = ref(false);

const showDropdown = (item) => {
	activeDropdown.value = item;
};
const hideDropdown = (item) => {
	activeDropdown.value = null;
};
</script>

<style scoped lang="scss">
.main-navigation {
	// position: sticky;
	// top: 0;
	// z-index: 999999;
	padding: 0px 55px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background: none;
	&.bg-white {
		background-color: #ffffff;
	}
	.primary-logo {
		// padding: 10px 0px;
		width: 25rem;
		flex-grow: 0;
		.logo {
			height: 25px;
			mask-image: url("/images/logo-mask.svg");
			mask-repeat: no-repeat;
			mask-position: center;
		}
	}
	.cs-navbar {
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
					font-size: 9px;
					letter-spacing: 0.095rem;
					color: #fff;

					.text-black {
						color: #041e3a;
					}
					&:hover {
						cursor: pointer;
						text-decoration: underline;
						text-underline-offset: 5px;
						font-weight: 600;
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
		gap: 18px;
		li {
			padding: 17px 10px;
			cursor: pointer;
			a {
				color: #fff;
				font-size: 16px;
				font-weight: 500;
			}
		}
	}
}

.dropdown-start-top {
	top: 6.5rem;
}
</style>

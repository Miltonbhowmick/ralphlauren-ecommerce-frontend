<template>
	<div
		class="main-navigation"
		@mouseover="bgWhite = true"
		@mouseleave="handleNavbarBackground(false)"
		:class="{
			'bg-white': bgWhite,
			'bottom-border': openSigninMenu === true,
			'no-border': openSigninMenu === false,
		}"
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
					/>
				</li>
				<li
					@mouseover="showDropdown('home')"
					@mouseleave="hideDropdown('home')"
				>
					<nuxt-link to="/products/home" :class="{ 'text-black': bgWhite }"
						>home</nuxt-link
					>
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
					<nuxt-link to="/products/gifts" :class="{ 'text-black': bgWhite }"
						>gift</nuxt-link
					>
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
					<nuxt-link to="/products/discover" :class="{ 'text-black': bgWhite }"
						>discover</nuxt-link
					>
					<component
						v-if="activeDropdown === 'discover'"
						:is="discover"
						@mouseover="showDropdown('discover')"
						@mouseleave="hideDropdown('discover')"
					/>
				</li>
				<li
					@mouseover="showDropdown('sale')"
					@mouseleave="hideDropdown('sale')"
				>
					<nuxt-link to="/products/sale" :class="{ 'text-black': bgWhite }"
						>sale</nuxt-link
					>
					<component
						v-if="activeDropdown === 'sale'"
						:is="discover"
						@mouseover="showDropdown('sale')"
						@mouseleave="hideDropdown('sale')"
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
				@mouseover="handleSigninMenu(true)"
				@mouseleave="handleSigninMenu(false)"
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
					@mouseover="handleSigninMenu(true)"
					@mouseleave="handleSigninMenu(false)"
					@openForgetPassword="openForgetPasswordModal"
					@hideForgetPassword="hideForgetPasswordModal"
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
		<ModalForgetPasswordModal
			v-if="showForgetPasswordModal"
			:modalOpen="showForgetPasswordModal"
			@hideModal="hideForgetPasswordModal"
		/>
	</div>
</template>

<script setup>
const men = resolveComponent("CategoryMenuMen");
const women = resolveComponent("CategoryMenuWomen");
const kids = resolveComponent("CategoryMenuKids");
const gifts = resolveComponent("CategoryMenuGifts");
const discover = resolveComponent("CategoryMenuDiscover");
const home = resolveComponent("CategoryMenuHome");
const sale = resolveComponent("CategoryMenuSale");

var currentMenu = shallowRef(null);
var activeDropdown = ref(null);
var openSigninMenu = ref(false);
var toggleNavbarBackground = ref(false);
var bgWhite = ref(false);

var loggedIn = ref(false);

var showForgetPasswordModal = ref(false);

const openForgetPasswordModal = () => {
	showForgetPasswordModal.value = true;
};

const hideForgetPasswordModal = () => {
	showForgetPasswordModal.value = false;
};

const showDropdown = (item) => {
	activeDropdown.value = item;
	handleNavbarBackground(toggleNavbarBackground.value);
};

const hideDropdown = (item) => {
	activeDropdown.value = null;
	handleNavbarBackground(toggleNavbarBackground.value);
};

const handleSigninMenu = (action) => {
	if (action === false) {
		setTimeout(() => {
			openSigninMenu.value = false;
		}, 800);
	} else if (action === true) {
		openSigninMenu.value = true;
	}
};
const updateScrollPosition = () => {
	// if (route.path.includes("/products") === true || route.path === "/") {
	if (window.scrollY > 50) {
		toggleNavbarBackground.value = true;
	} else {
		if (activeDropdown.value === null) toggleNavbarBackground.value = false;
	}
	// }
};

const handleNavbarBackground = (toggle) => {
	if (toggleNavbarBackground.value === false && toggle === false) {
		setTimeout(() => {
			bgWhite.value = false;
		}, 800);
	}
};

watch(toggleNavbarBackground, (newVal, oldVal) => {
	bgWhite.value = toggleNavbarBackground.value;
});

// watch(
// 	() => route.path,
// 	(newVal, oldVal) => {
// 		newVal.includes("/products") === true
// 			? (toggleNavbarBackground.value = false)
// 			: (toggleNavbarBackground.value = true);
// 	}
// );

onMounted(() => {
	window.addEventListener("scroll", updateScrollPosition);
	// route.path.includes("/products") === true
	// 	? (toggleNavbarBackground.value = false)
	// 	: (toggleNavbarBackground.value = true);
});
</script>

<style scoped lang="scss">
.main-navigation {
	position: sticky;
	top: 0;
	z-index: 999999;
	padding: 0px 50px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background: none;
	&.bg-white {
		background-color: #ffffff;
		transition: 300ms ease-in-out;
	}
	&.bottom-border {
		border-bottom: 1px solid #e4dddd;
	}
	&.no-border {
		border: none;
	}
	.primary-logo {
		// padding: 10px 0px;
		width: 21.5rem;
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
			padding-left: 32px;
			margin: 0;
			display: flex;
			gap: 1px;
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
		// gap: 20px;
		li {
			padding: 19px 15px;
			cursor: pointer;
			a {
				color: #fff;
				font-size: 0.9375rem;
				font-weight: 500;
			}
		}
	}
}
</style>

<template>
	<div class="dropdown-signin">
		<ul class="header">
			<li class="title">
				<i class="fa fa-user-o" aria-hidden="true"></i> <span>Sign In</span>
			</li>
			<li class="signup">
				<nuxt-link to="/signin">create account</nuxt-link>
			</li>
		</ul>
		<div class="form">
			<div class="input-group">
				<input type="email" placeholder="EMAIL ADDRESS *" name="email" />
			</div>
			<div class="input-group">
				<input type="password" placeholder="PASSWORD *" name="password" />
			</div>
			<ul class="forget-group">
				<li class="forget-password">
					<a @click="openForgetModal">Forgot Password?</a>
				</li>
				<li class="required"><a>* Required</a></li>
			</ul>
			<div class="remember-box">
				<input type="checkbox" name="keepLogIn" />
				<label
					>Remember Me - I want Ralph Lauren to personalise my shopping
					experience</label
				>
			</div>
			<nuxt-link to="/signin" class="signin-btn">sign in</nuxt-link>
		</div>
		<div class="or-bar">
			<div class="left"></div>
			<div class="middle">or</div>
			<div class="right"></div>
		</div>
		<div class="social-links">
			<a class="link"
				><div class="images"><img src="/images/google.svg" alt="google" /></div>
				<span class="name">google</span></a
			>
			<a class="link"
				><div class="images">
					<img src="/images/facebook.svg" alt="facebook" />
				</div>
				<span class="name">facebook</span></a
			>
		</div>
	</div>
</template>

<script setup>
const emit = defineEmits();

const openForgetModal = () => {
	emit("openForgetPassword");
};
const hideForgetModal = () => {
	emit("hideForgetPassword");
};
</script>

<style scoped lang="scss">
.dropdown-signin {
	position: absolute;
	top: 60px;
	right: 10px;
	z-index: 99;
	background-color: #f4f5f6;
	padding: 35px 25px;
	width: 350px;
	height: 480px;

	.header {
		padding: 0;
		margin: 0;
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		.title {
			font-size: 18px;
			font-weight: 500;
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
				serif;
			font-weight: 400;
			i {
				margin-right: 10px;
			}
		}
		.signup {
			a {
				font-size: 0.6875rem;
				color: #707070;
				border: 0;
				min-height: 0;
				background-color: transparent;
				text-decoration: underline;
				letter-spacing: 0.0625rem;
				text-transform: uppercase;
				text-decoration: underline;
			}
		}
	}
	.form {
		width: 100%;
		margin-top: 25px;
		.forget-group {
			list-style: none;
			margin: 0;
			margin-bottom: 15px;
			padding: 0;
			display: flex;
			justify-content: space-between;
			.forget-password {
				a {
					font-size: 9px;
					color: #707070;
					border: 0;
					min-height: 0;
					background-color: transparent;
					text-decoration: underline;
					letter-spacing: 0.0625rem;
					text-transform: uppercase;
					text-decoration: underline;
				}
			}
			.required {
				color: #949494;
				padding: 0;
				line-height: 1.25em;
			}
		}
		.input-group {
			width: 100%;
			margin-bottom: 18px;
			input {
				box-sizing: border-box;
				width: 100%;
				padding: 0.51125rem 1.25rem;
			}
		}
		.remember-box {
			margin-bottom: 20px;
			display: flex;
			align-items: flex-start;
			gap: 2px;
			label {
				font-size: 9px;
				font-weight: 400;
				color: #707070;
				background-color: transparent;
				letter-spacing: 0.0625rem;
				text-transform: capitalize;
			}
		}
		.signin-btn {
			padding: 16px 0;
			width: 100%;
			display: block;
			text-transform: uppercase;
			font-size: 0.65rem;
			text-align: center;
			background-color: #041e3a;
			border: none;
			color: #ffffff;
		}
	}

	.or-bar {
		margin: 20px 0;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		.left,
		.right {
			width: 47%;
			border-top: 1px solid #ccc;
			padding: 0;
		}
		.left {
			float: left;
		}
		.right {
			float: right;
		}
		.middle {
			padding: 0;
			margin: 0 15px;
			color: #ccc;
		}
	}
	.social-links {
		margin-top: 10px;
		display: flex;
		justify-content: center;
		gap: 2rem;
		.link {
			position: relative;
			padding: 15px;
			background: #ffffff;
			border-radius: 50%;
			width: 3.75rem;
			height: 3.75rem;
			.name {
				position: absolute;
				bottom: -20px;
				left: 50%;
				transform: translateX(-50%);
				text-transform: uppercase;
				color: #041e3a;
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-style: Normal;
				font-weight: 500;
				font-size: 8px;
				letter-spacing: 1.25px;
			}
		}
	}
}
</style>

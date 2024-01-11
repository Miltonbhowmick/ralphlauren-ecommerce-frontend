<template>
	<div class="dropdown-signin">
		<ul class="header">
			<li class="title">
				<i class="fa fa-user-o" aria-hidden="true"></i> <span>Sign In</span>
			</li>
			<li class="signup">
				<a>create account</a>
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
				<li class="forget-password"><a>Forgot Password?</a></li>
				<li class="required"><a>* Required</a></li>
			</ul>
			<div class="remember-box">
				<input type="checkbox" name="keepLogIn" />
				<label
					>Remember Me - I want Ralph Lauren to personalise my shopping
					experience</label
				>
			</div>
			<button class="signin-btn">sign in</button>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.dropdown-signin {
	position: absolute;
	top: 48px;
	right: 10px;
	z-index: 99;
	background-color: #f4f5f6;
	padding: 35px 25px;
	width: 300px;
	min-height: 200px;
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
				padding: 0.78125rem 1.25rem;
			}
		}
		.remember-box {
			margin-bottom: 20px;
			label {
				font-size: 9px;
				font-weight: 400;
				color: #707070;
				background-color: transparent;
				letter-spacing: 0.0625rem;
				text-transform: uppercase;
			}
		}
		.signin-btn {
			padding: 15px 0px;
			width: 100%;
			text-transform: uppercase;
			font-size: 0.75rem;
			background-color: #041e3a;
			border: none;
			color: #ffffff;
		}
	}
}
</style>

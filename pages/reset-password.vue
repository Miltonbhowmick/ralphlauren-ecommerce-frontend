<template>
	<section class="reset-password">
		<div class="help-box">
			<div class="info">
				<h5>NEED HELP?</h5>
				<p class="question-contact">
					If you have any questions or need help with your account, you may
					contact us to assist you.
				</p>
				<p class="help-item">
					<span class="icon"
						><img
							src="/images/Account-Help-Phone-Icon.svg"
							alt="Account-Help-Phone-Icon"
					/></span>
					<span> +40 (0) 8004 00643 </span>
				</p>
				<div class="help-item">
					<p>Monday-Friday 08.00-17.00</p>
					<p>Saturday 10.00-18.00</p>
				</div>
				<p class="help-item">
					<span class="icon"
						><img
							src="/images/Account-Help-Email-Icon.svg"
							alt="Account-Help-Email-Icon"
					/></span>
					<a>Email Us</a> <span> 24/7 </span>
				</p>
			</div>
		</div>
		<div class="form-box">
			<h2 class="title">request to reset your password</h2>
			<p class="description">
				Provide your account email address to receive an email to reset your
				password.
			</p>
			<form>
				<div class="input-wrapper">
					<label class="label">* Email</label>
					<div class="field-wrapper">
						<input type="email" placeholder="email" />
					</div>
				</div>
				<button class="request-btn">request</button>
			</form>
		</div>
	</section>
</template>

<script setup></script>

<style scoped lang="scss">
section.reset-password {
	padding: 0 60px;
	display: flex;
	justify-content: flex-start;
	.help-box {
		width: 20%;
		padding: 15px;
		.info {
			h5 {
				color: #474747;
				text-transform: uppercase;
				letter-spacing: 0.1rem;
				font-size: 0.875rem;
				font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 600;
			}
			.question-contact {
				line-height: 1.6em;
				color: #041e3a;
				font-size: 12px;
				font-weight: 500;
			}
			.help-item {
				color: #041e3a;
				.icon {
					display: inline-block;
					width: 10%;
					margin-right: 15px;
				}
				span,
				p {
					margin: 0;
					font-size: 13px;
					font-weight: 500;
					letter-spacing: 1px;
				}
				a {
					text-decoration: underline;
					font-size: 13px;
					font-weight: 500;
					letter-spacing: 1px;
				}
			}
		}
	}
	.form-box {
		width: 80%;
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
		form {
			margin-top: 30px;
			.input-wrapper {
				.label {
					font-size: 1.1em;
					color: #474747;
					text-transform: uppercase;
					font-family: RL_DroidKufi, Founders Grotesk Mono Light, Lucida Console,
						Arial, Helvetica, sans-serif;
					font-style: Normal;
					font-weight: 300;
					letter-spacing: 0.3px;
				}
				.field-wrapper {
					margin-top: 10px;
					display: flex;
					gap: 10px;
					input {
						border: 1px solid #757575;
						box-sizing: border-box;
						font-size: 12px;
						height: 2.5rem;
						padding: 0.625rem;
						text-indent: 0;
						width: 100%;
						&::placeholder {
							text-transform: uppercase;
							font-size: 12px;
						}
					}
					select {
						border: 1px solid #757575;
						box-sizing: border-box;
						height: 2.5rem;
						padding: 0.625rem;
						width: 100%;
					}
				}
				.caption {
					margin-top: 10px;
					color: #767676;
				}
			}
			.request-btn {
				margin-top: 30px;
				background-color: #041e3a;
				border: 1px solid #041e3a;
				color: #fff;
				cursor: pointer;
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-weight: 300;
				font-size: 10px;
				letter-spacing: 0.05em;
				text-transform: uppercase;
				padding: 20px 35px;
			}
		}
	}
}
</style>

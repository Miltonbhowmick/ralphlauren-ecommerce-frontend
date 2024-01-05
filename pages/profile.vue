<template>
	<section class="account-page">
		<AccountHeroBanner />
		<AccountPageNavbar />
	</section>
	<section class="account-profile">
		<div class="header">
			<h2>profile</h2>
			<span>*required</span>
		</div>
		<div class="social">
			<a class="link"
				><div class="logo"><img src="/images/google.svg" alt="google" /></div>
				<span class="name">google</span></a
			>
		</div>
		<div class="or-bar">
			<div class="left"></div>
			<div class="middle">Or</div>
			<div class="right"></div>
		</div>
		<form class="user-form">
			<div class="rememberme">
				<div class="input-wrapper">
					<input class="check-input" type="checkbox" id="rememberme-input" />
					<label class="label" for="rememberme-input"
						>Remember Me - I want Ralph Lauren to personalise my shopping
						experience</label
					>
				</div>
			</div>
			<div class="subscribe">
				<div class="input-wrapper">
					<input class="check-input" type="checkbox" id="subscribe-input" />
					<label class="label" for="subscribe-input"
						>Tick here if you have not yet subscribed and would like to receive
						e-mails about latest news, special offers and exclusive events
						relating to Ralph Lauren products and services. You can unsubscribe
						at any time by clicking in the unsubscribe link in each
						e-mail.</label
					>
				</div>
				<div class="content-asset">
					<div>
						Tick here if you have not yet subscribed and would like to receive
						e-mails about latest news, special offers and exclusive events
						relating to Ralph Lauren products and services You can unsubscribe
						at any time by clicking in the unsubscribe link in each e-mail.
					</div>
					<div class="policy-notice">
						<span
							>For more information, see Ralph Lauren Europe Sàrl’s Privacy
							Policy</span
						><a>Privacy Policy</a>
					</div>
					<a class="click-subscribe"
						>Click Here to Unsubscribe from All Marketing and Promotional
						Emails</a
					>
				</div>
			</div>
			<div class="input-wrapper">
				<label class="label">* Email Address</label>
				<div class="field-wrapper">
					<input type="email" />
				</div>
			</div>
			<div class="input-wrapper">
				<label class="label">birthday</label>
				<div class="field-wrapper">
					<select>
						<option label="Month" value="">Month</option>
						<option label="January" value="1">January</option>
						<option label="February" value="2">February</option>
						<option label="March" value="3">March</option>
					</select>
					<select>
						<option label="Day" value="">Day</option>
						<option label="01" value="1">01</option>
						<option label="02" value="2">02</option>
						<option label="03" value="3">03</option>
						<option label="04" value="4">04</option>
					</select>
				</div>
			</div>
			<div class="input-wrapper">
				<div class="field-wrapper">
					<select>
						<option label="Gender (optional)" value="">
							Gender (optional)
						</option>
						<option label="Male" value="1">Male</option>
						<option label="Female" value="2">Female</option>
						<option label="Not specified" value="3">Not specified</option>
					</select>
				</div>
				<div class="caption">
					Providing your gender is fully optional. This information helps us
					curate a more specific experience.
				</div>
			</div>
			<div class="input-wrapper">
				<div class="field-wrapper">
					<input type="text" placeholder="mobile number" />
				</div>
			</div>
			<div class="input-wrapper">
				<div class="field-wrapper">
					<input type="text" placeholder="phone number" />
				</div>
			</div>
			<div class="input-wrapper">
				<div class="field-wrapper">
					<input type="text" placeholder="name" />
				</div>
			</div>
			<div class="input-wrapper">
				<div class="field-wrapper">
					<input type="text" placeholder="surname" />
				</div>
			</div>
			<button class="save-btn">save</button>
		</form>
	</section>
</template>
<script setup></script>

<style scoped lang="scss">
section.account-profile {
	width: 40%;
	padding: 0 6rem;
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		h2 {
			font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica, Arial,
				sans-serif;
			font-style: Normal;
			font-weight: 400;
			font-size: 1.5rem;
			letter-spacing: 0.15rem;
			color: #474747;
			text-transform: uppercase;
		}
		span {
			font-size: 0.75rem;
			letter-spacing: 0.04375rem;
			color: #949494;
			text-transform: capitalize;
		}
	}
	.social {
		display: flex;
		gap: 10px;
		a.link {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5px;
			background: #747474;
			padding: 10px 15px;
			width: 30%;
			&:hover {
				background: #041e3a;
			}
			.logo {
				width: 14%;
			}
			.name {
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-style: Normal;
				font-size: 9px;
				font-weight: 500;
				letter-spacing: 1.24px;
				text-transform: uppercase;
				color: #fff;
			}
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
			color: #041e3a;
		}
	}
	.user-form {
		font-size: 0.75rem;
		line-height: 0.9375rem;
		display: flex;
		flex-direction: column;
		gap: 20px;

		.checkbox-input-wrapper {
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			gap: 5px;
			.check-input {
				margin: 0;
			}
			.label {
				font-family: RL_DroidKufi, Founders Grotesk Mono Light, Lucida Console,
					Arial, Helvetica, sans-serif;
				font-style: Normal;
				font-weight: 300;
			}
		}
		.rememberme {
			.input-wrapper {
				@extend .checkbox-input-wrapper;
			}
		}
		.subscribe {
			.input-wrapper {
				@extend .checkbox-input-wrapper;
			}
			.content-asset {
				color: #767676;
				font-size: 0.75rem;
				padding-left: 1.2rem;
				text-align: left;
				font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 400;
				.policy-notice {
					color: #767676;
					font-size: 0.75rem;
					text-align: left;
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					font-style: Normal;
					font-weight: 400;
				}
				.click-subscribe {
					text-decoration: underline;
				}
			}
		}
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
					height: 2.5rem;
					padding: 0.625rem;
					text-indent: 0;
					width: 100%;
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
		.save-btn {
			width: 20%;
			background-color: #041e3a;
			padding: 0.9375rem 1.5rem;
			border: none;
			color: #fff;
			font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial, Helvetica,
				sans-serif;
			font-style: Normal;
			font-size: 9px;
			font-weight: 500;
			text-transform: uppercase;
			letter-spacing: 1.24px;
		}
	}
}
</style>

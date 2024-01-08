<template>
	<section class="product-returns">
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
			<div class="return-content">
				<div class="toggle-buttons">
					<a
						@click="toggleReturnType = true"
						:class="{ active: toggleReturnType }"
						>Exchanges & Returns</a
					><a
						@click="toggleReturnType = false"
						:class="{ active: !toggleReturnType }"
						>Gift Return</a
					>
				</div>
				<div class="info">
					<form>
						<div class="input-wrapper">
							<div class="field-wrapper">
								<input type="text" placeholder="order number" />
							</div>
						</div>
						<div v-if="toggleReturnType" class="input-wrapper">
							<div class="field-wrapper">
								<input type="text" placeholder="billing zip code" />
							</div>
						</div>
						<div v-if="toggleReturnType === false" class="input-wrapper">
							<div class="field-wrapper">
								<input type="email" placeholder="email address" />
							</div>
						</div>
						<div v-if="toggleReturnType === false" class="input-wrapper">
							<div class="field-wrapper">
								<input type="text" placeholder="shipping zip code" />
							</div>
						</div>

						<div class="link-box"><a>Our Return Policy</a></div>
						<button class="request-btn">next</button>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
var toggleReturnType = ref(true);
</script>

<style scoped lang="scss">
section.product-returns {
	margin-top: 40px;
	padding: 0 80px;
	display: flex;
	justify-content: flex-start;
	.help-box {
		width: 30%;
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

		.return-content {
			width: 65%;
			border: 1px solid #c6c8cc;
			.info {
				padding: 20px 30px 30px 30px;
			}
			.toggle-buttons {
				display: flex;
				justify-content: center;
				a {
					width: 100%;
					text-align: center;
					padding: 15px 15px;
					box-shadow: inset -6px -5px 11px -13px rgba(0, 0, 0, 0.75);
					background-color: #f2f3f5;
					font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times New Roman, Times,
						serif;
					color: #041e3a;
					font-size: 1.4rem;
					cursor: pointer;
					&.active {
						background-color: #fff;
						box-shadow: none;
					}
				}
			}
			form {
				margin-top: 30px;
				display: flex;
				flex-direction: column;
				gap: 20px;
				.input-wrapper {
					.label {
						font-size: 1.1em;
						color: #474747;
						text-transform: uppercase;
						font-family: RL_DroidKufi, Founders Grotesk Mono Light,
							Lucida Console, Arial, Helvetica, sans-serif;
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
				.link-box {
					a {
						text-decoration: underline;
						color: #474747;
						letter-spacing: 0.01875rem;
					}
				}
				.request-btn {
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
}
</style>

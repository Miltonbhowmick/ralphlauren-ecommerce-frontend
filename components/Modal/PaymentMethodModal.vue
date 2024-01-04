<template>
	<div class="modal-overlay">
		<div class="modal-box">
			<div class="content">
				<div class="close">
					<a>X</a>
				</div>
				<div class="header">
					<h2 class="title">add credit card</h2>
					<a class="link">*Required</a>
				</div>
				<div>
					<form class="card-form">
						<div class="input-wrapper">
							<label class="label">card number</label>
							<div class="field-wrapper">
								<input type="text" />
							</div>
						</div>
						<div class="input-wrapper-inline">
							<div class="input-wrapper">
								<label class="label">expiry date</label>
								<div class="field-wrapper">
									<input type="text" />
								</div>
							</div>
							<div class="input-wrapper">
								<label class="label">cvc / cvv</label>
								<div class="field-wrapper">
									<input type="text" />
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<label class="label">name on card</label>
							<div class="field-wrapper">
								<input type="email" />
							</div>
						</div>
						<button class="action-btn apply">apply</button>
						<button class="action-btn cancel">cancel</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.modal-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 999999;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(15, 3, 3, 0.5);
	.modal-box {
		position: absolute;
		top: 20px;
		left: 50%;
		transform: translateX(-50%);
		background: #fff;
		width: 44rem;
		min-height: 25rem;
		padding: 40px 30px 20px 30px;
		.content {
			.close {
				display: flex;
				justify-content: flex-end;
				a {
					font-size: 25px;
				}
			}
			.header {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.title {
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					font-style: Normal;
					font-weight: 400;
					font-size: 1.5rem;
					letter-spacing: 0.15rem;
					color: #474747;
					text-transform: uppercase;
				}
				.link {
					color: #767676;
					text-decoration: underline;
					font-size: 0.875rem;
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					font-style: Normal;
					font-weight: 400;
					text-transform: uppercase;
				}
			}
			.card-form {
				margin-top: 40px;
				display: flex;
				flex-direction: column;
				gap: 10px;
				.input-wrapper {
					width: 100%;
					.label {
						font-size: 1em;
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
							border-radius: 4px;
							box-sizing: border-box;
							height: 2.5rem;
							padding: 0.625rem;
							text-indent: 0;
							width: 100%;
							&:focus {
								outline: none;
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
				.input-wrapper-inline {
					display: flex;
					gap: 20px;
				}
				.action-btn {
					margin-top: 10px;
					width: 60%;
					padding: 20px 0;
					font-size: 10px;
					font-weight: 300;
					text-transform: uppercase;
					letter-spacing: 1.15px;
					border: 1px solid #041e3a;
					&.apply {
						background-color: #041e3a;
						color: #fff;
					}
					&.cancel {
						background-color: #fff;
						color: #041e3a;
					}
				}
			}
		}
	}
}
</style>

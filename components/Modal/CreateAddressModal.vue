<template>
	<div>
		<div class="modal-overlay" v-if="modalOpen" @click="close"></div>
		<div class="modal-box" v-if="modalOpen">
			<div class="content">
				<div class="close">
					<a @click="close">X</a>
				</div>
				<div class="header">
					<h2 class="title">add address</h2>
					<a class="link">*Required</a>
				</div>
				<div>
					<form class="card-form">
						<div class="input-wrapper">
							<div class="field-wrapper">
								<input type="text" placeholder="address nickname" />
							</div>
						</div>
						<div class="input-wrapper-inline">
							<div class="input-wrapper">
								<div class="field-wrapper">
									<input type="text" placeholder="name *" />
								</div>
							</div>
							<div class="input-wrapper">
								<div class="field-wrapper">
									<input type="text" placeholder="surname*" />
								</div>
							</div>
						</div>
						<div class="input-wrapper-inline">
							<div class="input-wrapper">
								<div class="field-wrapper">
									<input type="text" placeholder="address line 1 *" />
								</div>
								<div class="caption">Street Address, P.O. Box</div>
							</div>
							<div class="input-wrapper">
								<div class="field-wrapper">
									<input type="text" placeholder="address line 2 *" />
								</div>
								<div class="caption">Apartment, Suite, Unit, Floor</div>
							</div>
						</div>
						<div class="input-wrapper-inline">
							<div class="input-wrapper">
								<div class="field-wrapper">
									<input type="text" placeholder="city" />
								</div>
							</div>
							<div class="input-wrapper">
								<div class="field-wrapper">
									<input type="text" placeholder="country/state/region" />
								</div>
							</div>
						</div>
						<div class="input-wrapper-inline">
							<div class="input-wrapper">
								<div class="field-wrapper">
									<input type="text" placeholder="postcode *" />
								</div>
							</div>
							<div class="input-wrapper">
								<div class="field-wrapper">
									<select>
										<option label="Country/Region" value="">
											Gender (optional)
										</option>
										<option label="Bangladesh" value="BD">Bangladesh</option>
										<option label="India" value="IN">India</option>
									</select>
								</div>
							</div>
						</div>
						<div class="input-wrapper">
							<div class="field-wrapper">
								<input type="email" placeholder="mobile number *" />
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

<script setup>
const props = defineProps({
	modalOpen: false,
});

const emit = defineEmits();

const close = () => {
	emit("hideModal");
};
</script>

<style scoped lang="scss">
.modal-overlay {
	position: fixed;
	width: 100%;
	height: 100%;
	z-index: 9999;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(15, 3, 3, 0.5);
}
.modal-box {
	position: fixed;
	top: 50%;
	left: 50%;
	z-index: 999999;
	transform: translate(-50%, -50%);
	background: #fff;
	width: 44rem;
	min-height: 25rem;
	max-height: 40rem;
	overflow-y: auto;
	padding: 40px 30px 20px 30px;
	.content {
		.close {
			display: flex;
			justify-content: flex-end;
			a {
				font-size: 25px;
				cursor: pointer;
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
				font-size: 0.675rem;
				font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 400;
				text-transform: capitalize;
				letter-spacing: 1.85px;
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
						&:focus {
							outline: none;
						}
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
						text-transform: uppercase;
						color: #757575;
						&:focus {
							outline: none;
						}
						option {
							text-transform: uppercase;
						}
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
					background-color: #041e3a;
					color: #fff;
				}
			}
		}
	}
}
</style>

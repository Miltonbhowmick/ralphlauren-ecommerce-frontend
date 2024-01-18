<template>
	<div>
		<div class="modal-overlay" v-if="modalOpen" @click="close"></div>
		<div class="modal-box" v-if="modalOpen">
			<div class="content">
				<div class="close">
					<a @click="close">X</a>
				</div>
				<div class="header">
					<h2 v-if="step === 1" class="title">
						request to reset your password
					</h2>
					<p v-if="step === 1" class="description">
						Provide your account email address to receive an email to reset your
						password.
					</p>
					<h2 v-if="step === 2" class="title">
						request to reset your password
					</h2>
					<p v-if="step === 2" class="description">
						Thank you for submitting your email address. Once your email address
						is successfully located in our system, we will send you an email
						with the information needed to reset your password.
					</p>
					<p v-if="step === 2" class="description">
						The email might take a couple of minutes to reach your account.
						Please check your junk mail to ensure you receive it.
					</p>
					<a v-if="step === 2" class="link">Return To Homepage</a>
				</div>
				<div v-if="step === 1">
					<form class="card-form">
						<div class="input-wrapper">
							<label class="label">* Email</label>
							<div class="field-wrapper">
								<input type="email" placeholder="email" />
							</div>
						</div>
						<button class="action-btn apply">request</button>
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

var step = ref(1);

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
	min-height: 15rem;
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
			flex-direction: column;
			align-items: flex-start;
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
			.description {
				margin-top: 15px;
				font-size: 0.775rem;
				color: #767676;
				letter-spacing: 0.0125rem;
			}
		}
		.card-form {
			margin-top: 10px;
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
</style>

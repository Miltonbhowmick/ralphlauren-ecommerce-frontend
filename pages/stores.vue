<template>
	<div class="stores">
		<div class="box">
			<div class="postcode">
				<h3 class="title">FIND A STORE NEAR YOU</h3>
				<a class="view-all">View All Stores</a>
				<p class="caption">
					We're sorry, we couldn't find results for your search.
				</p>
				<form class="form">
					<label class="label">SEARCH WITHIN ROMANIA</label>
					<div class="wrapper">
						<fieldset class="fieldset">
							<div class="location-field">
								<i class="fa fa-location-arrow" aria-hidden="true"></i>
								<input placeholder="CITY OR POSTCODE*" />
							</div>
							<div class="select-field">
								<select>
									<option value>Select Radius*</option>
									<option value="15">15 Kilometers</option>
									<option value="30">30 Kilometers</option>
									<option value="100">100 Kilometers</option>
									<option value="300">300 Kilometers</option>
								</select>
							</div>
						</fieldset>
						<button class="action">search</button>
					</div>
				</form>
			</div>
			<div class="or-bar">
				<div class="left"></div>
				<div class="middle">OR</div>
				<div class="right"></div>
			</div>
			<div class="international">
				<form class="form">
					<label class="label">SEARCH INTERNATIONALLY </label>
					<div class="wrapper">
						<fieldset class="fieldset">
							<div class="select-field">
								<select>
									<option value>Select Radius*</option>
									<option value="15">15 Kilometers</option>
									<option value="30">30 Kilometers</option>
									<option value="100">100 Kilometers</option>
									<option value="300">300 Kilometers</option>
								</select>
							</div>
						</fieldset>
						<button class="action">search</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.stores {
	display: flex;
	justify-content: center;
	.box {
		width: 50%;
		margin-top: 40px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 30px;
		.postcode {
			width: 100%;
			display: flex;
			flex-direction: column;
			gap: 20px;
			.title {
				margin: 0;
				font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
					Arial, sans-serif;
				font-style: Normal;
				font-weight: 400;
				font-size: 1.5rem;
				letter-spacing: 0.15rem;
				color: #474747;
				text-transform: uppercase;
			}
			.view-all {
				text-decoration: underline;
				color: #474747;
				letter-spacing: 0.01875rem;
				font-size: 11px;
			}
			.caption {
				margin: 0;
				letter-spacing: 0.05625rem;
			}
			.form {
				.label {
					margin: 0;
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					text-transform: uppercase;
					color: #474747;
					font-size: 0.75rem;
					font-weight: 300;
					letter-spacing: 0.05625rem;
				}
				.wrapper {
					margin-top: 15px;
					display: flex;
					gap: 10px;
				}
				.fieldset {
					border: none;
					padding: 0;
					margin: 0;
					width: 60%;
					display: flex;
					gap: 10px;
				}
				.location-field {
					position: relative;
					input {
						height: 100%;
						box-sizing: border-box;
						padding: 0.58125rem 1.25rem;
						border: 1px solid #757575;
						font-size: 12px;
						&:focus {
							outline: none;
						}
					}
					i {
						position: absolute;
						right: 11px;
						font-size: 25px;
						top: 50%;
						transform: translateY(-50%) rotate(180deg);
					}
				}
				.select-field {
					width: 100%;
					select {
						width: 100%;
						padding: 0.88125rem 1.25rem;
						option {
							font-size: 11px;
						}
					}
				}
				.action {
					width: 40%;
					padding: 0.88125rem 1.25rem;
					background-color: #041e3a;
					border: 1px solid #041e3a;
					color: #fff;
					text-transform: uppercase;
					font-size: 10px;
				}
			}
		}
		.or-bar {
			width: 100%;
			display: flex;
			align-items: center;
			.left,
			.right {
				width: 47%;
				border-top: 1px solid #ccc;
			}
			.left {
				float: left;
			}
			.right {
				float: right;
			}
			.middle {
				margin: 0 15px;
				color: #d1d1d1;
			}
		}
		.international {
			width: 100%;
			.form {
				.label {
					margin: 0;
					font-family: RL_DroidKufi, Founders Grotesk text Regular, Helvetica,
						Arial, sans-serif;
					text-transform: uppercase;
					color: #474747;
					font-size: 0.75rem;
					font-weight: 300;
					letter-spacing: 0.05625rem;
				}
				.wrapper {
					margin-top: 15px;
					display: flex;
					gap: 10px;
				}
				fieldset {
					border: none;
					padding: 0;
					margin: 0;
					width: 60%;
					display: flex;
					gap: 10px;
				}
				.select-field {
					width: 100%;
					select {
						width: 100%;
						padding: 0.88125rem 1.25rem;
						option {
							font-size: 11px;
						}
					}
				}
				.action {
					width: 40%;
					padding: 0.88125rem 1.25rem;
					background-color: #041e3a;
					border: 1px solid #041e3a;
					color: #fff;
					text-transform: uppercase;
					font-size: 10px;
				}
			}
		}
	}
}
</style>

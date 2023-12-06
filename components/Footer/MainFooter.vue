<template>
	<div class="footer-container">
		<footer>
			<div class="item">
				<h4 class="headline">about</h4>
				<ul class="list">
					<li><a>About Us</a></li>
					<li><a>Careers</a></li>
					<li><a>World of RL</a></li>
					<li><a>Protecting Our Brands</a></li>
					<li><a>Privacy</a></li>
				</ul>
			</div>
			<div class="item">
				<h4 class="headline">account</h4>
				<ul class="list">
					<li><a>My Account</a></li>
					<li><a>Check Order</a></li>
					<li><a>Personalise Your Experience</a></li>
				</ul>
			</div>
			<div class="item">
				<h4 class="headline">customer service</h4>
				<ul class="list">
					<li><a>Help</a></li>
					<li><a>Shipping</a></li>
					<li><a>Free Online Returns & Exchanges</a></li>
					<li><a>Operating Guidelines</a></li>
				</ul>
			</div>
			<div class="item subscription">
				<h4 class="headline">
					SIGN UP TO RECEIVE EMAIL UPDATES ON SPECIAL PROMOTIONS, NEW PRODUCT
					ANNOUNCEMENTS, GIFTS IDEAS AND MORE.
				</h4>
				<div class="mail-box">
					<input type="email" placeholder="ENTER EMAIL ADDRESS" />
					<button>SUBMIT</button>
				</div>
				<p>
					Be the first to know. Discover new arrivals, exclusive offers, and
					much more.
				</p>
				<p>
					You can unsubscribe at any time by clicking on the unsubscribing link
					in each E-Mail. For more information, see
					<a>Ralph Lauren Europe Sàrl’s Privacy Policy.</a>
				</p>
			</div>
		</footer>
	</div>
</template>

<script setup></script>

<style scoped lang="scss">
.footer-container {
	padding: 15px 0px;
	footer {
		padding: 35px 0px;
		padding-right: 25px;
		border-top: 1px solid #d1d1d1;
		border-bottom: 1px solid #d1d1d1;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.item {
			width: 25%;
			padding: 0px 0px 0px 30px;
			border-left: 1px solid #d1d1d1;
			display: flex;
			flex-direction: column;
			gap: 30px;
			&.subscription {
				gap: 10px;
				.mail-box {
					margin-bottom: 20px;
					display: flex;
					input {
						width: 65%;
						padding: 10px 20px;
						&::placeholder {
							font-size: 10px;
							letter-spacing: 0.05313rem;
						}
						&:focus {
							outline: none;
						}
					}
					button {
						width: 35%;
						padding: 10px 5px;
						background: #041e3a;
						border: none;
						color: #ffffff;
					}
				}
				p {
					margin-bottom: 4px;
					font-size: 12px;
					font-weight: 300;
					letter-spacing: 0.00313rem;
				}
			}
			.headline {
				margin: 0;
				font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
					Arial, sans-serif;
				letter-spacing: 0.00313rem;
				font-size: 14px;
				font-weight: 500;
				font-style: Normal;
				text-transform: uppercase;
			}
			.list {
				list-style: none;
				padding: 0;
				margin: 0;
				li {
					margin-bottom: 0.625rem;
					a {
						font-size: 12px;
						font-weight: 300;
						letter-spacing: 0.00313rem;
					}
				}
			}
		}
	}
}
</style>

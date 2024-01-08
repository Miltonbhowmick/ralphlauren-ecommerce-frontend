<template>
	<section class="help">
		<div class="header">
			<h1 class="title text-white">Customer Service</h1>
		</div>
		<div class="content">
			<div class="sidebar">
				<h2 class="current-help">
					customer service / {{ activeHelpDetail.name }}
				</h2>
				<div class="menu-data">
					<ul>
						<li v-for="(item, idx) in helpData" :key="'help_' + idx">
							<a
								@click="handleHelpData(item)"
								:class="{ active: item.id === activeHelpDetail.id }"
								>{{ item.name }}</a
							>
						</li>
						<!-- <li><a>sustainability</a></li>
						<li><a>gifting</a></li>
						<li><a>products</a></li>
						<li><a>returns & exchanges</a></li>
						<li><a>cancelling your order</a></li>
						<li><a>shopping & payment</a></li>
						<li><a>ralph lauren gift cards</a></li>
						<li><a>account information</a></li>
						<li><a>privacy notice</a></li>
						<li><a>company information</a></li>
						<li><a>terms and conditions</a></li>
						<li><a>help</a></li> -->
					</ul>
				</div>
			</div>
			<div class="details">
				<div class="accordion-info">
					<h3 class="title">{{ activeHelpDetail.name }}</h3>
					<div class="accordion-box">
						<div class="accordion" id="accordionExample">
							<div
								v-for="(questionData, qid) in activeHelpDetail.questionList"
								:key="'question_' + qid"
								class="accordion-item"
							>
								<h2 class="accordion-header" id="headingOne">
									<button
										class="accordion-button"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
									>
										{{ questionData.question }}
									</button>
								</h2>
								<div
									id="collapseOne"
									class="accordion-collapse collapse show"
									aria-labelledby="headingOne"
									data-bs-parent="#accordionExample"
								>
									<div
										class="accordion-body"
										v-html="questionData.answer"
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const helpData = [
	{
		id: 1,
		name: "shipping",
		questionList: [
			{
				question: "When will my order arrive?",
				answer: `<p>Our shipping options available are:</p>
										<p>Standard Delivery – 6-7 Business Days</p>
										<p>
											You can expect your items to arrive by the estimated
											delivery date, which is shown for each item during
											checkout. Once your order ships you will receive an email
											with tracking information. Your items may arrive sooner
											than the estimated delivery date. Please also note that
											the estimated delivery date is an estimate only and is not
											guaranteed.
										</p>
										<p>
											Bespoke or made to order items are manufactured according
											to customers specifications and their delivery will take
											slightly longer than the Standard/ Express timeframes.
											Please refer to the estimated delivery dates shown at
											checkout for your customised items.
										</p>`,
			},
		],
	},
	{
		id: 2,
		name: "sustainability",
		questionList: [
			{
				question: "Sustainable Products Packaging",
				answer: `<p>Ralph Lauren is happy to present to you a series of sustainable products - the perfect combination of style and care for the environment.</p>
									<p>
										All our sustainable items come in 100% recyclable packaging, and with no paperwork included. For this reason, if you wish to return the item you purchased, please use our Online Returns Service to obtain a pre-paid label.
									</p>
									`,
			},
		],
	},
];
var activeHelpDetail = ref(helpData[0]);

const handleHelpData = (item) => {
	activeHelpDetail.value = item;
};
</script>

<style scoped lang="scss">
section.help {
	margin-top: 50px;
	padding: 0px 55px;
	.header {
		margin-bottom: 40px;
		display: flex;
		justify-content: center;
		h1.title {
			font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times, serif;
			font-style: Normal;
			margin: 0 auto 0.625rem;
			text-transform: none;
			padding: 0;
			font-size: 1.875rem;
			font-weight: 500;
		}
	}
	.content {
		display: flex;
		gap: 50px;
		.sidebar {
			width: 25%;
			.current-help {
				margin: 0;
				padding: 28px 10px 28px 25px;
				font-size: 0.65rem;
				color: #6d6f73;
				text-transform: uppercase;
				font-family: RL_DroidKufi, Founders Grotesk Mono Regular, Arial,
					Helvetica, sans-serif;
				font-weight: 500;
				background-color: #f2f3f5;
				text-align: left;
				letter-spacing: 0.04875rem;
			}
			.menu-data {
				background-color: #f2f3f5;
				margin-top: 20px;
				ul {
					margin: 0;
					padding: 0;
					list-style: none;
					li {
						a {
							box-sizing: border-box;
							text-align: left;
							cursor: pointer;
							padding: 18px 10px 18px 25px;
							width: 100%;
							display: block;
							font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
								Arial, sans-serif;
							font-weight: 500;
							font-size: 0.7125rem;
							text-transform: uppercase;
							color: #474747;
							&.active {
								color: #000;
								background-color: #fff;
								border: 1px solid #000;
								font-weight: 600;
							}
						}
					}
				}
			}
		}
		.details {
			width: 70%;
			.accordion-info {
				.title {
					font-size: 1.125rem;
					font-family: RL_DroidKufi, LeJeuneDeck-Regular, Times, serif;
					font-weight: 400;
					text-transform: capitalize;
					margin-bottom: 5px;
				}
				.accordion-box {
					margin-top: 20px;
				}
				.accordion-body {
					p {
						color: #767676;
						font-size: 0.75rem;
						text-transform: none;
						font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica,
							Arial, sans-serif;
						font-style: Normal;
						font-weight: 500;
					}
				}
			}
		}
	}
}

:deep(.accordion-button) {
	background: none;
	padding-left: 0;
	font-size: 0.75rem;
	text-transform: none;
	font-family: RL_DroidKufi, Founders Grotesk Text Medium, Helvetica, Arial,
		sans-serif;
	font-style: Normal;
	font-weight: 600;
	color: #474747;
	letter-spacing: 1.1px;
}

:deep(.accordion-item) {
	border: none;
}

:deep(.accordion-body) {
	padding-left: 0;
}
</style>

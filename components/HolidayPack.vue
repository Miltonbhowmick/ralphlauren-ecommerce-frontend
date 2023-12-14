<template>
	<div
		class="holiday-pack-box"
		:style="{
			backgroundImage: `url(${props?.backgroundImage})`,
		}"
	>
		<div
			class="content"
			:class="{
				'side-left': props.left,
				'side-right': props.right,
				'side-up': props.up,
				'side-down': props.down,
				'side-middle': props.middle,
			}"
		>
			<h2 v-if="props.title" class="title">{{ props.title }}</h2>
			<div v-if="props.companyLogo" class="company-logo">
				<img :src="props.companyLogo" alt="company-logo" />
			</div>
			<h3 v-if="props.subTitle" class="subtitle">{{ props.subTitle }}</h3>
			<p v-if="props.description" class="description">
				{{ props.description }}
			</p>
			<ul>
				<li><a>men</a></li>
				<li><a>women</a></li>
				<li><a>boys</a></li>
				<li><a>girls</a></li>
				<li><a>baby</a></li>
				<li><a>home</a></li>
			</ul>
		</div>
	</div>
</template>

<script setup>
// import bgGroup from "~/assets/images/bg-group.jpg";

const props = defineProps({
	title: null,
	subTitle: null,
	description: null,
	linkList: null,
	backgroundImage: null,
	companyLogo: null,
	left: true,
	right: false,
	down: false,
	up: false,
	middle: false,
});
</script>

<style scoped lang="scss">
.holiday-pack-box {
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 800px;
	position: relative;
	.content {
		position: absolute;
		transform: translateY(-50%);
		// padding: 100px 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
		&.side-left {
			top: 50%;
			left: 60px;
		}
		&.side-right {
			top: 50%;
			right: 90px;
		}
		&.side-up {
			top: 10px;
			left: 50%;
			transform: translateX(-50%);
		}
		&.side-down {
			bottom: 30px;
			left: 50%;
			transform: translateX(-50%);
		}
		&.side-middle {
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		.title {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 100px;
			color: #ffffff;
			text-align: center;
		}
		.subtitle {
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 50px;
			font-weight: 300;
			color: #ffffff;
			text-align: center;
		}
		.description {
			width: 80%;
			font-family: LeJeuneDeck-Regular, "Times New Roman", Times, serif;
			margin: 0;
			font-size: 20px;
			font-weight: 300;
			color: #ffffff;
			text-align: center;
		}
		.company-logo {
			width: 200px;
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			justify-content: center;
			gap: 20px;
			li {
				a {
					color: #ffffff;
					text-transform: uppercase;
					font-size: 10px;
					text-decoration: underline;
					text-underline-offset: 9px;
					text-decoration-color: #ffffff;
				}
			}
		}
	}
}
</style>

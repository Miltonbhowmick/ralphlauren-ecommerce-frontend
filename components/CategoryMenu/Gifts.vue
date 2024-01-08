<template>
	<div class="menu-box" id="navbarMenuBox">
		<div class="sidebar">
			<ul>
				<li><a @mouseover="showActiveSidebarContent('brands')">Brands</a></li>
				<li><a @mouseover="showActiveSidebarContent('explore')">Explore</a></li>
				<li>
					<a @mouseover="showActiveSidebarContent('clothing')">Clothing</a>
				</li>
			</ul>
		</div>
		<div class="detail">
			<span v-for="(item, idx) in sideBarData" :key="'sidebar_content_' + idx">
				<div
					v-if="activeSideBar === item.name"
					:style="[
						item?.backgroundImage
							? { 'background-image': `url(${bgImage})` }
							: {},
					]"
					class="box"
				>
					<div class="content">
						<h2 class="title">{{ item.name }}</h2>
						<div class="products">
							<span v-for="(obj, iddx) in item.content" :key="'detail_' + iddx">
								<div v-if="obj.type === 'linkList'" class="link-data">
									<ul>
										<li
											v-for="(linkObj, linkId) in obj.itemList"
											:key="'link_' + linkId"
										>
											<a :href="linkObj.src">{{ linkObj.name }}</a>
										</li>
									</ul>
								</div>
								<div v-if="obj.type === 'images'" class="images">
									<a
										v-for="(imageObj, imageId) in obj.itemList"
										:key="'image_' + imageId"
										:href="imageObj.src"
										><div class="item">
											<img :src="imageObj.imageSrc" /></div
									></a>
								</div>
							</span>
						</div>
					</div>
				</div>
			</span>
		</div>
	</div>
</template>

<script setup>
import bgImage from "~/assets/images/menu/menu-bg.jpg";

var sideBarData = [
	{
		name: "brands",
		backgroundImage: bgImage,
		content: [
			{
				type: "images",
				itemList: [
					{ src: "", imageSrc: "/images/person-jacket.jpg" },
					{ src: "", imageSrc: "/images/person-jacket.jpg" },
					{ src: "", imageSrc: "/images/person-jacket.jpg" },
					{ src: "", imageSrc: "/images/person-jacket.jpg" },
				],
			},
		],
	},
	{
		name: "explore",
		content: [
			{
				type: "linkList",
				itemList: [
					{
						name: "New Arrivals",
						src: "",
					},
					{
						name: "Australian Open",
						src: "",
					},
					{
						name: "The Beach Shop",
						src: "",
					},
					{
						name: "New Arrivals",
						src: "",
					},
					{
						name: "Australian Open",
						src: "",
					},
					{
						name: "The Beach Shop",
						src: "",
					},
					{
						name: "New Arrivals",
						src: "",
					},
					{
						name: "Australian Open",
						src: "",
					},
					{
						name: "The Beach Shop",
						src: "",
					},
					{
						name: "New Arrivals",
						src: "",
					},
					{
						name: "Australian Open",
						src: "",
					},
					{
						name: "The Beach Shop",
						src: "",
					},
					{
						name: "New Arrivals",
						src: "",
					},
					{
						name: "Australian Open",
						src: "",
					},
					{
						name: "The Beach Shop",
						src: "",
					},
				],
			},
			{
				type: "images",
				itemList: [{ src: "", imageSrc: "/images/person-jacket.jpg" }],
			},
		],
	},
	{
		name: "clothing",
		content: [
			{
				type: "linkList",
				itemList: [
					{
						name: "New Arrivals",
						src: "",
					},
					{
						name: "Australian Open",
						src: "",
					},
					{
						name: "The Beach Shop",
						src: "",
					},
					{
						name: "New Arrivals",
						src: "",
					},
				],
			},
		],
	},
];

var activeSideBar = ref("brands");

const showActiveSidebarContent = (option) => {
	activeSideBar.value = option;
};
</script>

<style scoped lang="scss">
.menu-box {
	min-height: 200px;
	position: absolute;
	z-index: 999;
	left: 0;
	top: 53px;
	border-top: 1px solid #d1d1d1;
	background: #f7f7f7;
	width: 100%;
	display: flex;
	animation: expandHeight 2s forwards;
	.sidebar {
		width: 20%;
		padding: 50px;
		background-color: #e1dede;
		ul {
			padding: 0;
			list-style: none;
			display: flex;
			flex-direction: column;
			gap: 30px;
			li {
				a {
					font-family: "LeJeuneDeck-Regular", Times, serif;
					font-size: 18px;
					color: #707070;
					&:hover {
						cursor: pointer;
						color: #041e3a;
						text-decoration: underline;
						text-underline-offset: 9px;
						text-decoration-color: #041e3a;
					}
				}
			}
		}
	}
	.detail {
		width: 80%;
		.box {
			background-size: cover;
			background-repeat: no-repeat;
			padding: 50px;
		}
		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 30px;
			.title {
				margin: 0;
				font-size: 12px;
				font-weight: 400;
				color: #041e3a;
				padding: 5px 0px;
				border-bottom: 1px solid #041e3a;
				text-transform: uppercase;
			}
			.products {
				display: flex;
				justify-content: space-between;
				.link-data {
					height: 20rem;
					ul {
						list-style: none;
						margin: 0;
						padding: 0;
						display: flex;
						flex-wrap: wrap;
						flex-direction: column;
						height: inherit;
						gap: 0px 4rem;
						li {
							padding: 10px 0;
							a {
								letter-spacing: 0.0625rem;
								font-family: RL_DroidKufi, Founders Grotesk Text Medium,
									Helvetica, Arial, sans-serif;
								color: #041e3a;
								font-weight: 600;
								&:hover {
									cursor: pointer;
									text-decoration: underline;
								}
							}
						}
					}
				}
				.images {
					display: flex;
					justify-content: center;
					gap: 15px;
				}
			}
		}
	}
}

@keyframes expandHeight {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>

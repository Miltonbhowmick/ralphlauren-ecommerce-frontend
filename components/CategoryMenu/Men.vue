<template>
	<div class="menu-box" id="navbarMenuBox">
		<div class="sidebar">
			<ul>
				<li @mouseover="showActiveSidebarContent('brands')"><a>Brands</a></li>
				<li @mouseover="showActiveSidebarContent('explore')"><a>Explore</a></li>
				<li @mouseover="showActiveSidebarContent('clothing')">
					<a>Clothing</a>
				</li>
			</ul>
		</div>
		<div class="content-box" :style="{ backgroundImage: `url(${bgImage})` }">
			<span v-for="(item, idx) in sideBarData" :key="'sidebar_content_' + idx">
				<div v-if="activeSideBar === item.name" class="content">
					<h2 class="title">MEN'S BRANDS</h2>
					<div class="products">
						<span v-for="(obj, iddx) in item.content" :key="'detail_' + iddx">
							<div v-if="obj.type === 'linkList'" class="link-list">
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
			</span>
		</div>
	</div>
</template>

<script setup>
import bgImage from "~/assets/images/menu/menu-bg.jpg";

var sideBarData = [
	{
		name: "brands",
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
				],
			},
			{
				type: "images",
				itemList: [{ src: "", imageSrc: "/images/person-jacket.jpg" }],
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
	min-height: 500px;
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
	.content-box {
		width: 80%;
		background-size: cover;
		background-repeat: no-repeat;
		padding: 50px;
		.content {
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 30px;
			.title {
				margin: 0;
				font-size: 14px;
				font-weight: 400;
				color: #041e3a;
				padding: 5px 0px;
				border-bottom: 1px solid #041e3a;
			}
			.products {
				display: flex;
				justify-content: space-between;
				.link-list {
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

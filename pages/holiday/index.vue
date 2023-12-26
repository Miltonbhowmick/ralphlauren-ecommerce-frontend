<template>
	<div>
		<VideoBannerPolo
			:spaceTitle="'HOLIDAY 2023'"
			:videoSrc="'/videos/Holiday23_Video.mp4'"
			:companyLogo="'/images/2021_ralph_lauren_logo_white.svg'"
			:linkList="[{ name: 'watch now' }]"
			:down="true"
			class="mt-60"
		/>
		<div class="page-navbar">
			<ul>
				<li><a>HOLIDAY DRESSING</a></li>
				<li><a>COLLECTION & PURPLE LABEL</a></li>
				<li><a>HOME</a></li>
				<li><a>WINTER ALPINE</a></li>
				<li><a>GIFTING</a></li>
			</ul>
		</div>
		<HolidayMegaBox
			:spaceTitle="'WINTER ALPINE'"
			:miniDescription="'Embrace the rustic charm of winter wonderland style'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
			:companyLogo="'/images/2018_polo_white_logo.svg'"
		/>
		<VideoBannerPolo
			:spaceTitle="'OUR FAVOURITE GIFTS'"
			:miniDescription="'Unwrap the magic of the season with signature Ralph Lauren style'"
			:videoSrc="'/videos/OurFavoriteGifts_Video.mp4'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
			:down="true"
		/>
		<RowCustomSlider :perSlider="5" />
		<HolidayPack
			:backgroundImage="bgImage14"
			:right="true"
			:companyLogo="'/images/2021_ralph_lauren_logo_white.svg'"
			:miniDescription="'A celebration of bold individuality, exquisite craftsmanship and exceptional personal style'"
			:linkList="[
				{ name: 'SHOP COLLECTION', src: '' },
				{ name: 'SHOP PURPLE LABEL', src: '' },
			]"
		/>

		<TwoImage
			:backgroundImage="bgImage16"
			:itemList="[
				{
					imageSrc: '/images/sit-girls.jpg',
					linkList: [
						{
							name: 'COLLECTION',
						},
					],
				},
				{
					imageSrc: '/images/1102_holiday_seasonal_lp_c06b_img.jpg',
					linkList: [
						{
							name: 'PURPLE LABEL',
						},
					],
				},
			]"
		/>

		<VideoBannerPolo
			:spaceTitle="'LUXURY GIFTS'"
			:miniDescription="'Gifts of artful craftsmanship and refined glamour'"
			:videoSrc="'/videos/ObjectsOfDesire_Video.mp4'"
			:linkList="[
				{ name: 'SHOP MEN' },
				{ name: 'SHOP WOMEN' },
				{ name: 'SHOP HOME' },
			]"
			:down="true"
			class="mt-60"
		/>

		<RowCustomSlider :perSlider="5" />

		<HolidayPack
			:backgroundImage="bgImage15"
			:left="true"
			:spaceTitle="'HOME'"
			:companyLogo="'/images/2021_ralph_lauren_logo_white.svg'"
			:miniDescription="'Iconic dining collections for elegant entertaining and perfect gifts for the holiday hosts'"
			:linkList="[{ name: 'SHOP now', src: '' }]"
		/>

		<VideoBannerPolo
			:spaceTitle="'WINTER ALPINE'"
			:miniDescription="'Embrace the rustic charm of winter wonderland style'"
			:videoSrc="'/videos/WinterAlpine_Video.mp4'"
			:companyLogo="'/images/2018_polo_white_logo.svg'"
			:linkList="[
				{ name: 'men' },
				{ name: 'women' },
				{ name: 'boys' },
				{ name: 'girls' },
			]"
			:down="true"
		/>

		<TwoImage
			:backgroundImage="bgImage13"
			:itemList="[
				{
					imageSrc: '/images/1102_holiday_seasonal_lp_c11a_img.jpg',
				},
				{
					imageSrc: '/images/1102_holiday_seasonal_lp_c11b_img.jpg',
					linkList: [
						{
							name: 'men',
						},
						{
							name: 'women',
						},
					],
				},
			]"
		/>

		<VideoBannerPolo
			:spaceTitle="'THE GIFT GUIDE'"
			:miniDescription="'It’s the season of giving: Discover timeless gifts from the World of Ralph Lauren to make the holidays extra special'"
			:videoSrc="'/videos/GiftGuide_Video.mp4'"
			:linkList="[{ name: 'explore now' }]"
			:down="true"
			class="mt-60"
		/>

		<ServicePack
			:backgroundImage="bgImage10"
			:down="true"
			:subTitle="'Gift Services'"
			:serviceList="[
				{
					name: 'Gift Boxing',
					description:
						'For a festive finishing touch, select our signature gift boxing at checkout',
				},
				{
					name: 'E-Gift Cards',
					description:
						'It’s a gift that always fits: buy now and schedule delivery for your preferred date',
				},
				{
					name: 'Book Appointment',
					description:
						'Our brand specialists are happy to help you find the perfect gift',
				},
				{
					name: 'Write a Note Appointment',
					description:
						'Add a personal message at checkout for an elegant card to go with your gift',
				},
				{
					name: 'Wishlist',
					description:
						'Click the heart icon to curate a dream list to share with friends and family',
				},
			]"
		/>
	</div>
</template>

<script setup>
import bgImage10 from "~/assets/images/bg-group10.jpg";
import bgImage14 from "~/assets/images/bg-group14.jpg";
import bgImage13 from "~/assets/images/bg-group13.jpg";
import bgImage12 from "~/assets/images/bg-group13.jpg";
import bgImage15 from "~/assets/images/bg-group15.jpg";
import bgImage16 from "~/assets/images/bg-group16.jpg";
</script>

<style scoped lang="scss">
.page-navbar {
	padding: 20px 0px;
	background: #000;
	display: flex;
	justify-content: center;
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 20px;
		li {
			a {
				font-family: "SackersGothicW01-Medium", Arial, Helvetica, sans-serif;
				font-size: 0.563em;
				letter-spacing: 0.222em;
				text-transform: uppercase;
				color: #fff;
			}
		}
	}
}
</style>

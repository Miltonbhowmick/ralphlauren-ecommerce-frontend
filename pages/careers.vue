<template>
	<div>
		<div class="header">
			<nav class="navbar">
				<a class="visit-company"
					><div class="image"><img src="/images/company-logo-black.png" /></div
				></a>
				<ul>
					<li><a>JOIN TALENT COMMUNITY</a></li>
					<li><a>SIGN IN</a></li>
					<li><a>LANGUAGE: ENGLISH</a></li>
				</ul>
			</nav>
			<ul class="explore-link-list">
				<li><a>WELCOME</a></li>
				<li><a>ABOUT US</a></li>
				<li><a>YOUR CAREER</a></li>
				<li><a>BENEFITS</a></li>
				<li><a>DIVERSITY & INCLUSION</a></li>
				<li><a>FIND YOUR OPPORTUNITY</a></li>
			</ul>
		</div>
		<section class="content">
			<div class="hero-banner">
				<div class="image">
					<img src="/images/HomePage_Banner.jpg" alt="HomePage_Banner" />
				</div>
				<div class="content">
					<h3 class="title">Start Your Ralph Lauren Story</h3>
					<p class="quote">“Be anything you want to be. And be many things.”</p>
					<div class="logo">
						<img src="/images/RL_signature.png" alt="RL_signature" />
					</div>
				</div>
			</div>
			<div class="context-detail">
				<h3 class="main-title">Our Pattern of Success</h3>
				<p class="localTitle">
					Ralph Lauren has brought elegance, texture and excitement to American
					design since 1967. We are a company that quite literally recognizes
					why each and every thread counts—and we want you to join our
					world-class team as we celebrate, elevate and look forward.
				</p>
				<div class="buttons">
					<a>corporate</a>
					<a>retail</a>
					<a>north carolina campus</a>
				</div>
				<div class="image">
					<img src="/images/home-1.jpg" alt="home-1" />
				</div>
				<p class="localTitle">
					Our Company began with Ralph Lauren’s legendary story and his vision
					to inspire the dream of a better life through authenticity and
					timeless style. For more than 50 years, thousands of stories have come
					together to deliver that vision and build Ralph Lauren into the
					leading global lifestyle company it is today. These stories are
					individual and specific, but together they speak to what it means to
					be a part of the Ralph Lauren family. They are the stories of our
					colleagues who are...<br /><br />Inspired by a Company that is a
					symbol for aspiration and optimism in the world.<br /><br />Thriving
					in a Culture that champions respect, individuality and possibility.<br /><br />Building
					Careers that enable us to live our fullest lives, in and outside of
					work.<br /><br />Each one of us at a Ralph Lauren has a story that
					brought us here and keeps us here. That inspires us, that grows and
					feeds our passion. These are our stories.<br /><br />This is
					#LifeAtRL.
				</p>
			</div>
			<div class="context-detail">
				<h3 class="main-title">Explore #LifeAtRL</h3>
				<p class="localTitle">
					Hear from team members who are defining our company and our culture as
					they deliver on our Purpose every day.
				</p>
				<div class="youtube-slider">
					<iframe
						width="100%"
						height="400"
						src="https://www.youtube.com/embed/tgbNymZ7vqY"
					></iframe>
				</div>
				<h4 class="mini-local-title">YOUR CAREER STORY STARTS HERE</h4>
				<p class="localTitle">
					We are passionate about empowering you to create your own journey.
					From those who've only begun exploring opportunities to longtime
					family members, we are focused on tailoring your career path to your
					unique talents, skills and dreams.
				</p>
				<RowCustomSlider :perSlider="6" />
				<h4 class="mini-local-title">SO MUCH MORE THAN A JOB</h4>
				<p class="localTitle">
					Ralph Lauren offers a variety of ways to help you build a better life
					outside of work. Discover the top five ways joining Ralph Lauren is
					embracing a lifestyle of fulfillment, benefits and, of course,
					shopping.
				</p>
			</div>
			<div class="context-detail">
				<h3 class="main-title">Explore The World of Ralph Lauren</h3>
				<p class="localTitle">
					The Ralph Lauren journey is one of constant movement, evolution and
					innovation. See what's exciting our teams now!
				</p>
			</div>
		</section>
		<div class="career-footer">
			<a class="visit-company"
				><div class="image"><img src="/images/company-logo-black.png" /></div
			></a>
			<p class="description">
				Ralph Lauren is dedicated to providing a comfortable and consciously
				inclusive work environment for everyone regardless of gender identity
				and expression, race, religion, national origin, sexual orientation,
				age, marital status, disability, or any other category protected by
				applicable law. If you are vision-impaired or have some other disability
				under the Americans with Disabilities Act or a similar law, and you wish
				to discuss potential accommodations related to applying for employment
				at Ralph Lauren, please contact Global People Practices at
				globalpeoplepractices@ralphlauren.com.
			</p>
			<div class="policy"><a>Privacy Notice</a> | <a>Terms of Use</a></div>
			<div class="follow-box">
				<div class="links">
					<h5>VISIT US</h5>
					<a>RALPHLAUREN.COM</a>
				</div>
				<div class="links">
					<h5>follow us</h5>
					<div class="social">
						<a><i class="fa fa-facebook" aria-hidden="true"></i> </a>
						<a><i class="fa fa-twitter" aria-hidden="true"></i> </a>
						<a><i class="fa fa-instagram" aria-hidden="true"></i></a>
						<a><i class="fa fa-linkedin" aria-hidden="true"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: "career-layout",
});
</script>

<style scoped lang="scss">
.header {
	margin: 0px 9rem;
	.navbar {
		padding: 25px 0;
		display: flex;
		justify-content: space-between;
		.visit-company {
			width: 30%;
		}
		ul {
			margin: 0;
			padding: 0;
			list-style: none;
			display: flex;
			align-items: center;
			li {
				a {
					color: #bd9e72;
				}
			}
		}
	}
	.explore-link-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 40px;
		li {
			a {
				color: #474747;
				text-transform: uppercase;
			}
		}
	}
}

section.content {
	margin: 50px 80px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.hero-banner {
	position: relative;
	.content {
		position: absolute;
		z-index: 999;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		.title {
			font-size: 45px;
			font-weight: normal;
			font-weight: 300;
			padding: 0 10px;
			font-family: "DidotRegular", serif;
			margin-bottom: 25px;
			color: #fff;
		}
		.quote {
			padding: 0 10px;
			font-family: "DidotItalic", serif;
			text-align: center;
			max-width: 600px;
			font-size: 22px;
			line-height: 34px;
			margin-bottom: 28px;
			font-style: italic;
			color: #fff;
		}
		.logo {
			width: 40%;
		}
	}
}
.context-detail {
	width: 80%;
	display: flex;
	flex-direction: column;
	gap: 15px;
	.main-title {
		font-size: 35px;
		font-weight: 400;
		margin-bottom: 10px;
		font-family: "DidotRegular", serif;
		color: #031e3a;
		text-align: center;
	}
	.localTitle {
		padding: 0;
		margin: 0.5em 0 0.5em 0;
		font-size: 1.525em;
		line-height: 1.5;
		font-weight: normal;
		text-align: center;
	}
	.buttons {
		display: flex;
		justify-content: center;
		gap: 15px;
		a {
			padding: 10px 20px;
			background-color: #000;
			color: #fff;
			text-transform: uppercase;
			font-size: 14px;
		}
	}
	.mini-local-title {
		font-size: 24px;
		margin: 10px 0;
		font-weight: normal;
		font-weight: 400;
		text-transform: uppercase;
		text-align: center;
	}
}

.career-footer {
	background-color: #d1d1d1;
	padding: 25px 9rem;
	.visit-company {
		display: block;
		width: 17%;
	}
	.description {
		color: #041e3a;
		font-size: 14px;
		font-weight: 400;
		line-height: 25px;
	}
	.policy {
		color: #041e3a;
		font-size: 14px;
		font-weight: 400;
		line-height: 25px;
	}
	.follow-box {
		display: flex;

		.links {
			width: 70%;
			h5 {
				font-size: 14px;
				font-weight: 400;
				text-transform: uppercase;
			}
			a {
				font-size: 14px;
				font-weight: 400;
				text-transform: uppercase;
			}
			.social {
				display: flex;
				gap: 20px;
				a {
					color: #919191;
					font-size: 22px;
				}
			}
		}
	}
}
</style>

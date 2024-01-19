<template>
	<section class="home">
		<HeroBanner
			:title="'WINTER SALE'"
			:linkList="[
				{ name: 'men', src: '' },
				{ name: 'women', src: '' },
				{ name: 'boys', src: '' },
				{ name: 'girls', src: '' },
			]"
			:backgroundImage="'/images/bg-group-winter.jpg'"
			:textColor="'#fff'"
			:normalTitle="'FURTHER REDUCTIONS'"
			:middle="true"
		/>
	</section>
</template>

<script setup>
definePageMeta({
	layout: "transparent-navbar",
});
</script>

<style scoped lang="scss">
section.home {
	margin-top: -62px;
}
</style>

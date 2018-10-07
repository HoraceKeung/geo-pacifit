<template>
    <div class="h-screen bg-hero bg-cover text-white flex flex-col">
		<div class="relative"><div class="absolute w-full"><div class="container">
			<div class="flex py-4">
				<div><img class="h-24" src="~assets/img/logo.png" alt="logo"></div>
				<div class="ml-auto flex">
					<p v-for="l in links" :key="l" class="capitalize my-auto mr-5 cursor-pointer" v-scroll-to="`#${l}`">{{l}}</p>
					<button class="btn my-auto" v-scroll-to="'#contact'">Get a quote</button>
				</div>
			</div>
		</div></div></div>
		<div class="m-auto text-center">
			<h1 class="mb-1">We are Committed</h1>
			<p class="text-lg">The most reliable metal supplier in the world</p>
		</div>
    </div>
</template>

<script>
export default {
	data: () => ({
		links: ['about', 'products']
	})
}
</script>

<style scoped>
.bg-hero {
	background-image: url(~assets/img/hero.jpg);
}
</style>
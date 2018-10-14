<template>
	<div id="application">
		<quote/>
		<div class="container text-center py-16">
			<h2 class="text-gold mb-16">Application</h2>
			<div class="md:flex flex-wrap">
				<div v-for="a in applications" :key="a.name" :id="a.name" class="md:w-1/2 lg:w-1/3">
					<div class="overflow-hidden relative trigger">
						<img class="w-full block" :src="`${baseImgUrl+a.name}.jpg`">
						<div class="absolute pin bg-transparent hover:bg-gold-70 flex">
							<div class="m-auto text-center text-white">
								<p class="capitalize text-3xl">{{a.name.replace(/-/g,' ')}}</p>
								<p v-if="a.text" class="mt-2">{{a.text}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Quote from '~/components/Quote'
export default {
	components: {Quote},
	data: () => ({
		applications: [
			{name: 'pharmaceutical', text: ''},
			{name: 'transportation', text: ''},
			{name: 'can', text: ''},
			{name: 'food-package', text: ''},
			{name: 'building-profiles', text: ''},
			{name: 'telecommunications', text: ''},
			{name: 'aviation', text: ''},
			{name: 'power-and-energy', text: ''},
			{name: 'container-foil', text: ''},
			{name: 'electronic', text: ''},
			{name: 'mold', text: ''},
			{name: 'household-appliance', text: ''}
		]
	})
}
</script>

<style scoped>
.trigger img, .trigger p, .trigger > div {
	transition: all .3s ease;
}
.trigger:hover img {
	transform: scale(1.15);
}
.trigger p {
	opacity: 0;
	transform: translateY(2rem);
}
.trigger:hover p {
	opacity: 1;
	transform: translate(0,0);
}
</style>
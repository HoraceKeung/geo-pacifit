<template>
	<div id="products">
		<quote/>
		<div class="flex py-16 px-4"><div class="text-center mx-auto max-w-sm">
			<h2 class="text-gold mb-1">Product Series</h2>
			<p class="italic font-bold">We widely supply to various industries such as transpotation, home appliance, decoration, telecommunication, etc.</p>
		</div></div>
		<div v-for="(p,index) in products" :key="p.name" :class="[{'md:flex-row-reverse':index%2!==0},'flex flex-wrap']">
			<div class="w-full md:w-1/2">
				<div class="h-full min-h-64 bg-cover bg-center" :style="`background-image: url(/img/${p.name}.jpg);`"></div>
			</div>
			<div class="w-full md:w-1/2"><div class="h-full p-16 flex">
				<div :class="'m-auto '+(index%2===0?'xl:pr-48':'xl:pl-48')">
					<h2 class="capitalize text-gold">{{p.name.replace(/-/g,' ')}}</h2>
					<div class="bg-gold h-1 w-10 mt-2 mb-4"></div>
					<p>{{p.desc}}</p>
				</div>
			</div></div>
		</div>
		<div class="bg-goldblock text-center"><div class="container">
			<h2>Just What You Need, When You Need It.</h2>
			<p class="italic text-2xl">Your Navigator in the World of Trade.</p>
		</div></div>
	</div>
</template>

<script>
import Quote from '~/components/Quote'
export default {
	components: {Quote},
	data: () => ({
		products: [
			{
				name: 'aluminum-plate',
				desc: 'We produced the rolling plate, PS board, curtain wall, tread plate and so on its performance...'
			},
			{
				name: 'aluminum-strip',
				desc: 'We produced the cable and other products, the performance indicators fully meet the leading domestic...'
			},
			{
				name: 'aluminum-foil',
				desc: 'We produced the air-conditioning foil, double-zero foil, single-zero foil, hydrophilic aluminum foil...'
			}
		]
	})
}
</script>

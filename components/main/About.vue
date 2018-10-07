<template>
	<div id="about">
		<div class="container text-center py-16 md:px-16 lg:px-32 xl:px-48">
			<h2 class="text-gold mb-4">About Us</h2>
			<p class="mb-4">Jmax metals trading is one of the large metals supplier in China, supplying tons of metal material to the world.
				Our UK office have been established since 2015 and servicing all around the Europe.</p>
			<img class="mb-8 w-full" src="~assets/img/about.jpg" alt="about">
			<p class="mb-4">Jmax metals trading was founded in March 2001.
				It is located in one of the biggest industrial Cluster Area, which is in the Guangdong County.
				Our company covers an area of 900mu and makes a total investment of RMB 5.1 billion. 
				We privide all kind of metal materials, such as, aluminum alloy plate, strip, and foil.</p>
			<p>The annual output reaches 108,500 tons, increasing by 31.7% compared with the inventory quantity in 2015.
				The total shipment is 8,400 tons, increasing by 33.8% compared with that of 2015.</p>
		</div>
		<div class="bg-goldblock">
			<div class="container">
				<h2 class="text-center mb-16">Why JMAX?</h2>
				<div class="flex flex-wrap -mx-2">
					<div v-for="p in pros" :key="p" class="w-full sm:w-1/2 md:w-1/4 px-2 text-center mb-6">
						<img :src="`${baseImgUrl+p}.png`" :alt="p">
						<p class="capitalize">{{p.replace(/-/g,' ')}}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		pros: ['best-quality', 'worldwide-shipping', 'reasonable-price', 'experience']
	})
}
</script>

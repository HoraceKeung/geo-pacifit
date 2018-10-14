<template>
	<div id="products">
		<quote/>
		<div class="flex py-16 px-4"><div class="text-center mx-auto max-w-sm">
			<h2 class="text-gold mb-1">Product Series</h2>
			<p class="italic font-bold">We widely supply to various industries such as transpotation, home appliance, decoration, telecommunication, etc.</p>
		</div></div>
		<div v-for="(p,index) in products" :key="p.name" :class="[{'md:flex-row-reverse':index%2!==0},'flex flex-wrap']">
			<div class="w-full md:w-1/2">
				<div class="bg-cover bg-center" :style="`background-image: url(${baseImgUrl+p.name}.jpg);padding-top: 56.25%;`"></div>
			</div>
			<div class="w-full md:w-1/2 bg-grey-lighter flex py-16 md:py-0">
				<div :class="'my-auto px-4 '+(index%2===0?'xl:pr-64 xl:pl-8':'xl:pl-64 xl:pr-8')">
					<h2 class="capitalize text-gold">{{p.name.replace(/-/g,' ')}}</h2>
					<div class="bg-gold h-1 w-10 mt-2 mb-4"></div>
					<p>{{p.desc}}</p>
					<button v-if="p.table" type="button" class="btn mt-4" @click="reading=p.table;$modal.show('table')">Read more</button>
				</div>
			</div>
		</div>
		<div class="bg-goldblock h-80"><div class="container h-full flex">
			<div class="m-auto text-center">
				<h2>Just What You Need, When You Need It.</h2>
				<p class="italic text-2xl">Your Navigator in the World of Trade.</p>
			</div>
		</div></div>
		<!-- START Modal -->
		<modal name="table" width="90%" height="auto">
			<div class="bg-gold p-2"><h2 class="text-white">Specificaton</h2></div>
			<div v-if="reading" class="bg-white p-2 w-full">
				<table class="w-full">
					<thead class="bg-grey-light">
						<tr>
							<th v-for="h in reading.head" :key="h" class="border border-black text-center whitespace-no-wrap p-4">{{h}}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(r,index) in reading.rows" :key="`tr${index}`" :class="{'bg-grey-lighter':index%2!==0}">
							<td v-for="d in r" :key="d" class="border border-black text-center p-4">{{d}}</td>
						</tr>
					</tbody>
				</table>
			</div>
		</modal>
		<!-- END Modal -->
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
				name: 'aluminum-coil',
				desc: 'We produced the cable and other products, the performance indicators fully meet the leading domestic...'
			},
			{
				name: 'aluminum-foil',
				desc: 'We produced the air-conditioning foil, double-zero foil, single-zero foil, hydrophilic aluminum foil...',
				table: {
					head: ['Product', 'Alloy', 'Temper', 'Thickness (mm)', 'Width (mm)'],
					rows: [
						['Household Foil', '8011', 'O', '0.009-0.03', '200-1970'],
						['Container Foil', '3003/ 8011/ 8006', 'H24/22', '0.03-0.2', '200-1970'],
						['Tape Foil', '1235/ 8011', 'O', '0.015-0.03', '200-1970'],
						['Flexible Packaging Foil', '1235/ 8011/ 8079', 'O', '0.0055-0.009', '200-1970'],
						['Battery Foil', '1235/ 8021/ 8079', 'O', '0.015-0.055', '200-1970'],
						['Pharmaceutical Foil', '1235/ 8011/ 8021/ 8079', 'O/H18', '0.02-0.03', '200-1970'],
						['Decoration Foil', '1100', 'H16/H18', '0.02-0.2', '200-1970']
					]
				}
			}
		],
		reading: null
	})
}
</script>

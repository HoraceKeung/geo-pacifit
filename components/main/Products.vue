<template>
	<div id="products">
		<quote/>
		<div class="flex py-16 px-4"><div class="text-center mx-auto max-w-sm">
			<h2 class="text-gold mb-2">Product Series</h2>
			<p class="italic font-bold">Our major products include Aluminum plate/ foil/ coil, which are widely appied to varous fields.</p>
		</div></div>
		<div v-for="(p,index) in products" :key="p.name" :class="[{'md:flex-row-reverse':index%2!==0},'flex flex-wrap']">
			<div class="w-full md:w-1/2">
				<div class="bg-cover bg-center" :style="`background-image: url(${baseImgUrl+p.name}.jpg);padding-top: 56.25%;`"></div>
			</div>
			<div class="w-full md:w-1/2 bg-grey-lighter flex py-16 md:py-0 bg-gold-lightest">
				<div :class="'my-auto px-4 '+(index%2===0?'xl:pr-64 xl:pl-8':'xl:pl-64 xl:pr-8')">
					<h2 class="capitalize text-gold">{{p.name.replace(/-/g,' ')}}</h2>
					<div class="bg-gold h-1 w-10 mt-2 mb-4"></div>
					<p>{{p.desc}}</p>
					<button v-if="p.table" type="button" class="btn mt-4" @click="reading=p.table;$modal.show('table')">Specificaton</button>
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
		<modal name="table" width="860px" height="auto" adaptive>
			<div class="bg-gold shadow p-2"><h2 class="text-white  ml-4 mt-2">Specificaton</h2></div>
			<div v-if="reading" class="bg-white p-0 mt-5 w-full">
				<table class="w-full">
					<thead class="bg-gold-lightest">
						<tr>
							<th v-for="h in reading.head" :key="h" class="border border-gold text-center whitespace-no-wrap p-4">{{h}}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(r,index) in reading.rows" :key="`tr${index}`" :class="{'bg-gold-lightest':index%2!==0}">
							<td v-for="d in r" :key="d" class="border border-gold text-center p-4">{{d}}</td>
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
				desc: 'We produced the rolling plate, PS board, curtain wall, tread plate and so on its performance...',
				table: {
					head: ['Alloy', 'Temper', 'Thickness (mm)', 'Tensile strength','Elongation','Yield strength','Hardness'],
					rows: [
						['1050', 'H14', '0.2-25', '105-145','≥6','≥85','≥34'],
						['2024', 'T4', '2.0-80', '≥425','≥14','≥275','≥120'],
						['3003', 'O', '0.2-50', '95-135','25-40','≥35','≥28'],
						['5083', 'H116, H321', '1.5-285', '≥305','≥12','≥215','≥89'],
						['6061', 'T6, T651', '0.4-100', '≥290','≥10','≥240','≥88'],
						['6082', 'T6, T651', '0.4-100', '≥310','≥10','≥260','≥89'],
						['7075', 'T6, T651', '2.0-100', '500-580','≥8','≥360','≥135']
					]
				}
			},
			{
				name: 'aluminum-coil',
				desc: 'We produced the cable and other products, the performance indicators fully meet the leading domestic...',
				table: {
					head: ['Alloy', 'Temper', 'Thickness (mm)', 'Width (mm)','Application'],
					rows: [
						['1XXX', 'H12/14/16/22/24/26/18/O', '0.2-0.8', '200-2000','Curtain Wall Panel, Hollow Glazing Bar, Aluminum Foil Stock'],
						['3XXX', 'H12/14/16/22/24/26/18/O', '0.2-1.5', '200-2000','Electronic Foil Stock, Power Battery Case, Capacitor Shell, Coating Material, Body stock'],
						['5XXX', 'H12/14/16/22/24/26/32/O', '0.2-1.5', '200-2000','End Stock, Oxidation Material, Chassis Cabinet Material, Fuel Tank, Tap Stock'],
						['8XXX', 'H14/16/18', '0.2-0.5', '200-2000','Double Zero Aluminum Foil Stock, Single Zero Aluminum Foil Stock, Bottle Cap Material, Cold-forming Aluminum Foil Stock'],
						['3003/1060', 'O/H18', '0.2-3.0', '200-2000','Non-stick Pan, Electric Cooker, Lighting Material']
					]
				}
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

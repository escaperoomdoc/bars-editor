<template>
	<svg viewBox="-1000 -3500 25000 8000" style="background: #C0C0C0">
		<g v-for="(link, i) of GET_PLAN.links" :key="i" @click="test(i)">
			<line v-for="(xy, k) of link.xy" :key="k"
				:x1="xy.x1" :y1="xy.y1" :x2="xy.x2" :y2="xy.y2"
				style="stroke:rgb(0,0,0);stroke-width:50"
			/>
		</g>
	</svg>
</template>

<script>
	import { mapGetters } from "vuex";

	export default {
		name: 'Plan',

		data: () => ({
		}),
		mounted() {
			this.$store.dispatch('GET_PLAN');
		},
		methods: {
			test(i) {
				console.log(`link ${i}`);
			}
		},
		computed: {
			...mapGetters(['GET_PLAN'])
		}
  }
</script>

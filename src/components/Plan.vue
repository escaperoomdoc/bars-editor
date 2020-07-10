<template>
	<panZoom selector="#plan" :options="zoomOptions">
		<svg viewBox="-1000 -3500 25000 8000" style="background: #C0C0C0">
			<g id="plan">
				<g v-for="(link, i) of GET_PLAN.links" :key="i" @click="test(i)">
					<line	v-for="(xy, k) of link.xy" :key="k"
							:x1="xy.x1" :y1="xy.y1" :x2="xy.x2" :y2="xy.y2"
							style="stroke:rgb(0,0,0);stroke-width:8"
					/>
				</g>
			</g>
		</svg>
	</panZoom>
</template>

<script>
	import { mapGetters } from "vuex";
	const zoomOptions = {
		minZoom: 0.01,
		maxZoom: 5,
		smoothScroll: false
		// beforeWheel (event) {
		// 	let shouldIgnore = !event.ctrlKey;
		// 	return shouldIgnore;
		// }
	};

	export default {
		name: 'Plan',

		data: () => ({
		}),
		created() {
			this.zoomOptions = zoomOptions
		},
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

<style scoped>
	svg {
		left: 0;
		top: 0;
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>

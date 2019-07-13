<style scoped lang="less">
.floating{
	img{
		width: 100%;
		height: 100%;
		display: block;
	}
}
</style>

<template>
	<Mod class="floating" :style="style">
		<img v-if="type == 0" :src="value" alt=""/>
		<p v-else>{{ value }}</p>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';

	export default {
		name: "Floating",
		mixins: [modbase],
		computed: {
			style() {
				return {
					position: this.fixed ? 'fixed' : 'absolute',
					left: this.x + 'px',
					top: this.y + 'px',
					width: this.w + 'px',
					height: this.h + 'px'
				}
			}
		},
		props: {
			value: {
				type: String,
				default: ''
			},
			type: {
				type: Number,
				default: 0
			},
			fixed: {
				type: Boolean,
				default: false
			}
		}
	};
</script>

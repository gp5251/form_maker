<style lang="less">
	.mod {
		h3{
			font-size: 14px;

			.required{
				color: red;
				font-size: 14px;
				font-weight: normal;
				// margin-right: 2px;
				vertical-align: -2px;
				display: inline-block;
			}

			&+p{
				margin: 0;
				padding: 0;
			}
		}

		.error{
			color: red;
			p{
				line-height: 20px;
				margin-bottom: 0;
			}
		}
	}
</style>

<template>
	<div class="mod">
		<h3>
			<span class="required" v-if="$parent.required">*</span>
			{{ $parent.title }}
		</h3>

		<slot name="underTitle"></slot>

		<p v-if="$parent.tip.length > 0">{{ $parent.tip }}</p>

		<slot></slot>

		<div class="error" v-if="$parent.error.length">
			<p 
				v-for="(item, index) in $parent.error"
				:key="index"
				>{{ item }}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Mod"
	};
</script>

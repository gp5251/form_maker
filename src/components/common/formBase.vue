<style lang="less">
	.formBase {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow-y: auto;

		.bn{
			text-align: center;
		}

		.submit{
			padding: 2px 10px;
		}

		.loading{
			text-align: center;
			position: absolute;
			left: 50%;
			top: 35%;
			transform: translate3d(-50%, -50%, 0);
			padding: 20px 0 50px;
			font-size: 12px;
			line-height: 32px;

			.ant-spin-text{
				padding-top: 10px;
			}
		}

		.modules{
			max-width: 500px;
			padding: 20px 20px 50px;
			margin: 10px auto;
			background-color: #eee;
			border-radius: 3px;
			box-shadow: 0 0 5px #999;

			.module{
				padding-bottom: 10px;

				h3{
					padding-bottom: 0;
					margin-bottom: 5px;

					&+p{
						padding: 0;
						margin: 0;
						line-height: 18px;
					}
				}
			}

			.bn{
				padding-top: 60px;

				.submit{
					width: 100px;
				}
			}
		}
	}
</style>

<template>
	<div class="formBase">
		<slot name="header"></slot>

		<div class="modules" v-if="modules.length">
			<div class="module" v-for="(item, index) in modules" :key="index" >
				<component 
					v-bind="item" 
					:value.sync="item.value"
					:is="item.name"/>
			</div>

			<div class="bn">
				<a-button class="submit" type="primary" @click="submit">提交</a-button>
			</div>
		</div>
		<slot name="loading" v-else>
			<div class="loading">
				<a-spin size="large" :tip="loadingTip" />
			</div>
		</slot>

		<slot name="footer"></slot>
	</div>
</template>

<script>
	import { getIndexModules } from "@utils";

	export default {
		name: "FormBase",
		props: {
			modules: {
				type: Array,
				default() {
					return []
				}
			},
			loadingTip: {
				type: String,
				default: '加载中…'
			}
		},
		components: {
			...getIndexModules()
		},
		methods: {
			submit(){
				let validArr = [];

				this.$children
					.filter(item => item.$el.classList.contains('mod'))
					.forEach(item => validArr.push(item.validate()))

				if (validArr.every(Boolean)) this.$emit('submit');
			}
		}
	};
</script>
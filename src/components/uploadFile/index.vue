<style lang="less">
	.uploader {
		padding: 5px;

		.msg{
			display: inline-block;
			line-height: 22px;;
			font-weight: bold;
			margin-left: 10px;
		}
		.err{
			color: red;
		}
		.succ{
			color: green;
		}
	}
</style>

<template>
	<Mod class="uploader">
		<a-upload 
			:customRequest="upload"
			:multiple="!requireOne"
			:showUploadList="false"
			name="file">
			<a-button> <a-icon type="upload" />点击上传附件</a-button>
		</a-upload>
		<div class="msg" :class="{err: uploadStatus == 0, succ: uploadStatus == 1}" v-if="uploadResult">{{ uploadResult }}</div>
	</Mod>
</template>

<script>
	import modbase from '@mixin/modbase';
	import ossUploader from '@utils/ossUploader'

	export default {
		name: "UploadFile",
		mixins: [modbase],
		data() {
			return {
				uploadStatus: -1,
				uploadResult: ''
			}
		},
		methods: {
			upload(e) {
				this.uploadStatus = -1;
				this.uploadResult = '上传中……';
				ossUploader.upload(e.filename, e.file)
					.then(re => re.res.status === 200 && re.res.requestUrls[0])
					.then(file => {
						if (file) {
							this.$emit('update:value', this.requireOne ? [file] : [...this.value, file])

							this.uploadStatus = 1;
							this.uploadResult = '上传成功';
						}
					})
					.catch(e => {
						this.uploadStatus = 0;
						this.uploadResult = '上传失败';
						console.error(e);
					})
			}
		},
		props: {
			requireOne: {
				type: Boolean,
				default: false
			},

			value: {
				type: Array,
				default() {
					return []
				}
			}
		},
	};
</script>

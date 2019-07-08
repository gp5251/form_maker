import oss from 'ali-oss';
import { authOss } from '@services';

class OssUploader {
	constructor() {
		this.client = null;
		this.expireTime = 0;
	}
	checkValid() {
		return new Promise((resolve, reject) => {
			if (!this.client || (Date.now() > this.expireTime)) {
				this.getClient().then(resolve, reject)
			} else resolve(this.client)
		})
	}
	async getClient() {
		const auth = await authOss();

		this.expireTime = + new Date(auth.expiration);

		this.client = oss({
			region: 'oss-cn-beijing',
			accessKeyId: auth.accessKeyId,
			accessKeySecret: auth.accessKeySecret,
			stsToken: auth.securityToken,
			endpoint: auth.endpoint,
			expireTime: auth.expiration,
			bucket: auth.bucket,
			cdnDomain: auth.cdnDomain,
		})

		return this.client;
	}
	async upload(fileName, file) {
		await this.checkValid();
		const result = await this.client.multipartUpload(fileName, file, {
			// parallel: 4,
			// partSize: 1024 * 1024,
			// progress: function (p, cpt, res) {
			// 	console.log(p, cpt, res);
			// }
		});

		console.log('result', result);

		return result;
	}
}

export default new OssUploader 

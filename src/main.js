import Vue from 'vue'
import router from './router'
import store from './store'
import App from './App'
import { 
  Button, Input, InputNumber, DatePicker, Select, Checkbox, Radio, Upload, Icon, Spin
} from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/font-awesome/css/font-awesome.min.css'
// import Button from 'ant-design-vue/lib/button';
// import Input from 'ant-design-vue/lib/input';
// import DatePicker from 'ant-design-vue/lib/date-picker';
// import Select from 'ant-design-vue/lib/select';
// import Checkbox from 'ant-design-vue/lib/checkbox';
// import Radio from 'ant-design-vue/lib/radio';
// import Upload from 'ant-design-vue/lib/upload';
// import Icon from 'ant-design-vue/lib/icon';
// import 'ant-design-vue/lib/button/style'
// import 'ant-design-vue/lib/input/style'
// import 'ant-design-vue/lib/date-picker/style'
// import 'ant-design-vue/lib/select/style'
// import 'ant-design-vue/lib/checkbox/style'
// import 'ant-design-vue/lib/radio/style'
// import 'ant-design-vue/lib/upload/style'
// import 'ant-design-vue/lib/icon/style'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Checkbox)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(Icon)
Vue.use(Spin)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

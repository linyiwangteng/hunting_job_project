import App from './App.vue'
import router from './router'
import entry from '@/entry.js';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

entry ({
  router,
  render:h=>h(App)
});
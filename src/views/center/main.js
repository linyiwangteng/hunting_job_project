import App from './App.vue'
import router from './router'
import entry from '@/entry.js';
entry ({
  router,
  render:h=>h(App)
});
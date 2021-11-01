import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

import VueTelInputVuetify from 'vue-tel-input-vuetify';

Vue.config.productionTip = false

Vue.use(VueTelInputVuetify, {
  vuetify,
});

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

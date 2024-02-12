// vue-app.js
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue'; // Your Vue App Component

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue-app',
    render: (h) => h(App),
  },
});

export const bootstrap = [vueLifecycles.bootstrap];
export const mount = [vueLifecycles.mount];
export const unmount = [vueLifecycles.unmount];

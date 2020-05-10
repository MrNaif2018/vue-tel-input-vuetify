import utils, { defaultOptions } from './utils';
import VueTelInputVuetify from './components/vue-tel-input-vuetify.vue';

const install = (Vue, customOptions = {}) => {
  utils.options = {
    ...defaultOptions,
    ...customOptions,
  };
  Vue.component('vue-tel-input-vuetify', VueTelInputVuetify);
};

export default install;

/* eslint-disable no-param-reassign */
/* eslint-disable import/prefer-default-export */

// Be careful to avoid circular references
// when declaring component names:

// https://stackoverflow.com/questions/44520195/vue-js-maximum-call-stack-size-exceeded-error-passing-data-from-parent-to-chi


import CopyPaste from './components/CopyPaste'

export default {
  install(Vue) {
    Vue.component('CopyPaste', CopyPaste);
  },
};

import Vue from 'vue'

import Vuetify, { VBtn, VTooltip } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VBtn,
    VTooltip
  }
})

export default new Vuetify({
  icons: {
    values: {
      copyIcon: 'file_copy'
    }
  }
})

<template>
  <div style="width: 50px;">
    <v-tooltip
      :disabled="!tooltip"
      :styles="tooltipStyles"
      right
    >
      <template v-slot:activator="{ on }">
        <v-btn
          :disabled="disabled"
          :small="small"
          :color="color ? color : 'blue lighten-1'"
          :style="small ? 'margin: 2px 8px 2px 8px;' : ''"
          class="copy-paste"
          icon
          text
          v-on="on"
          @click="copyText"
        >
          <v-icon
            :small="small"
            class="copy-paste material-icons"
          >
            {{ $vuetify.icons.values.copyIcon }}
          </v-icon>
        </v-btn>
        <div
          :ref="`acctId-${index || 0}`"
          :style="msgStyles"
          :class="`${color ? `${color}--text` : 'blue--text'} lighten-1 body-2`"
        >
          Copied!
        </div>
      </template>
      <span>{{ value }}</span>
    </v-tooltip>    
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: null
    },
    tooltip: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    }
  },
  created () {
    if (!this.$vuetify.icons.values.copyIcon) {
      console.warn('No icon specified - falling back on default')
    }
  },
  data () {
    return {
      tooltipStyles: {
        width: '50px',
        margin: 'auto',
        position: 'relative'
      },
      msg: {
        display: 'block',
        opacity: 0.7,
        position: 'absolute',
        fontWeight: 700,
        pointerEvents: 'none',
        userSelect: 'none',
        transform: 'translateY(-120%) scale(1.2)'
      },
      hidden: {
        opacity: 0,
        pointerEvents: 'none',
        transition: '0.3s ease-in-out',
        transform: 'scale(0.9)'
      },
      msgActive: false
    }
  },
  computed: {
    msgStyles () {
      return this.msgActive ? this.msg : { ...this.msg, ...this.hidden }
    }
  },
  methods: {
    copyText () {
      const tempInput = document.createElement('input')
      tempInput.style = 'position: absolute; left: -1000px; top: -1000px'
      tempInput.value = this.value
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('copy')
      document.body.removeChild(tempInput)
      this.msgActive = true
      setTimeout(() => { this.msgActive = false }, 50)
    }
  }
}
</script>

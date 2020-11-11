<template>
  <div style="width: 50px;">
    <v-tooltip
      :disabled="!tooltip"
      class="wrapper"
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
            file_copy
          </v-icon>
        </v-btn>
        <div
          :ref="`acctId-${index || 0}`"
          :class="`msg opacity ${color ? `${color}--text` : 'blue--text'} lighten-1 body-2`"
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
  methods: {
    copyText () {
      const tempInput = document.createElement('input')
      tempInput.style = 'position: absolute; left: -1000px; top: -1000px'
      tempInput.value = this.value
      document.body.appendChild(tempInput)
      tempInput.select()
      document.execCommand('copy')
      document.body.removeChild(tempInput)
      this.$refs[`acctId-${this.index || 0}`].classList.remove('opacity')
      setTimeout(() => {
        this.$refs[`acctId-${this.index || 0}`].classList.add('opacity')
      }, 50)
    }
  }
}
</script>

<style scoped>
.wrapper {
  width: 50px;
  margin: auto;
  position: relative;
}
.msg {
  display: block;
  opacity: 0.7;
  position: absolute;
  font-weight: 700;
  pointer-events: none;
  user-select: none;
  transform: translateY(-120%) scale(1.2);
}
.opacity {
  opacity: 0;
  pointer-events: none;
  transition: 0.3s ease-in-out;
  transform: scale(0.9);
}
</style>

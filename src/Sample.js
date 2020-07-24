import Vue from 'https://cdn.skypack.dev/vue'

export default Vue.component('sample', {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    message() {
      return `Message: ${this.text}`
    }
  },
  render(h) {
    return h('div', {}, this.message)
  }
})

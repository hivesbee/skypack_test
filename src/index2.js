import Vue from 'https://cdn.skypack.dev/vue'

import Sample from './Sample.js'

console.log(Sample)

const app = new Vue({
  el: '#app',
  components: {
    sample: Sample
  },
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  render(h) {
    return h('sample', {
      props: {
        text: this.message
      }
    })
  }
})

app.$mount()
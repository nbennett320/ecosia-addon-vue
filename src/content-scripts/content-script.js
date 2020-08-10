import Vue from 'vue'
import Widget from './Widget.vue'
import queryMatches from './parser'

Vue.config.productionTip = false

const content = document.getElementsByClassName('mainline-top')
const query = document.getElementsByClassName('search-form-input')[0].value

if(queryMatches(query)) {
  new Vue({
    render: h => h(Widget, {
      props: {
        query
      }
    }),
  }).$mount(content[0])
}
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.prototype.$http = axios;

//custom directive

Vue.directive('rainbow', {
  bind(el, binding, vnode){
    el.style.color = "#" + Math.random().toString().slice(2,8)
  }
})

Vue.directive('theme', {
  bind(el, binding, vnode){
    if(binding.value == "wide"){
      el.style.maxWidth = "1200px";
    } else if (binding.value == "narrow"){
      el.style.maxWidth = "600px"
    }
    if(binding.arg == 'column'){
      el.style.background = '#aaa',
      el.style.padding = '20px'
    }
  }
})
// filters
Vue.filter('to-uppercase', (value)=> {
  //value refers to the data that we use the filter on ie blog.title
  return value.toUpperCase()
})

Vue.filter('snippet', (value) => {
  return value.slice(0, 100) + '...' // this cuts the number of characters to 100 and adds ... to the end. this works as the value.slice is a string
})

new Vue({
  el: '#app',
  render: h => h(App)
})

/*
 * @Description: 
 * @Author: jinxiaojian
 * @Email: jinxiaojian@youxin.com
 * @Date: 2020-01-19 11:19:20
 * @LastEditTime : 2020-01-19 11:20:26
 * @LastEditors  : 靳肖健
 */
var app = new Vue({
  el: '#app',
  data () {
    return {
      list: [],
      index: imgNum,
      bigShow: false
    }
  },
  created () {
    this.addList()
  },
  methods: {
    addList () {

      for (var i = 0; i < this.index; i++) {
        this.list.push({ key: +new Date() })
      }
    },
    toggleBig () {
      this.bigShow = !this.bigShow
    }
  }
})

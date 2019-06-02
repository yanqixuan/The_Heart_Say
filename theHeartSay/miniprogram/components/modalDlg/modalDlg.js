// components/modalDlg/modalDlg.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showModal: {
      type: Boolean,
      value: false
    },
    productList: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    submit: function() {
      this.setData({
      showModal: true
      })
    },
    go: function() { 
      this.setData({
      showModal: false
      })
    },
    preventTouchMove() {
      this.setData({
        showModal: false
      })
    }
  }
})

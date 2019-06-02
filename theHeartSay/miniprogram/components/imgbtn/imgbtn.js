// The_Heart_Say/theHeartSay/miniprogram/components/imgbtn/imgbtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
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
    click: function(e) {
      wx.navigateTo({
        url: '../../pages/detail/detail?id=' + e.currentTarget.dataset.id
      })
      this.triggerEvent('btnId', { btnId: e.currentTarget.dataset.id});
    }
  }
})

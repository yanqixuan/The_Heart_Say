const app = getApp()
Page({
  data:{
    imgbtn: []
  },
  onLoad: function(option) {
    const self = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cf1f4eaabb0047e81554dd5/starbucks/imgbtn',
      success (res) {
        // console.log(res.data)
        self.setData({
          imgbtn: res.data.data.imgbtn
        })
      }
    })
  }
})
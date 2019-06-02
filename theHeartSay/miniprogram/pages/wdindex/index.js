const app = getApp()
const db = wx.cloud.database({
  env: 'http-http'
});

Page({
  data: {
    cartList: []
  },
  likePic(e) {
    const id = e.detail.id;
    const like = e.detail.like;
    wx.cloud.callFunction({
      name: 'changeLikeCard',
      data: {
        id,
        like
      },
      success: res => {
        console.log(res)
      }
    })
  },
  onLoad() {
    const that = this;
    //  数据库查询
    db.collection('starBucksCard').get({
      success(res) {
        // console.log(res.data)
        that.setData({
          cartList: res.data
        })
      }
    })
  }
})
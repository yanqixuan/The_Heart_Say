// components/slideshow/slideshow.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls:[
      '../../images/slide1.jpg',
      '../../images/slide2.jpg',
      '../../images/slide3.jpg'
    ],
    autoplay: true,
    interval: 3000,
    duration: 1000,
    swiperCurrent: 0,
    flag: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    remind: function () {
      if (this.data.flag) {
      wx.showModal({
        content: '代金券正在发放中代金券实际到账以微信支付中通知为准',
        // confirmColor: #9CDCFE,
        showCancel: false
      })
    } else if (!this.data.flag) {
      this.data.flag = true,
      wx.showModal({
        content: '您已经领过用星说代金券',
        showCancel: false
      })
    }
    },
    toDetail(e) {
      // console.log(e)
      const id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: `/pages/detail/detail?id=${id}`
      });
        
    },
    collection(){
      wx.navigateTo({
        url:'../../pages/collection/collection'
      })
    }
  }
})

// miniprogram/pages/collection/collection.js
const db = wx.cloud.database({
  env: 'http-http'
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartList: [],
    complete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var arr = [];
    const that = this;
    const select = ["starBucksCard", "starBucksCard2", "starBucksCard3", "starBucksCard4"]
    var promise1 = new Promise((resolve, reject) => {
      db.collection("starBucksCard").where({
        like: true
      }).get({
        success(res) {
          console.log(res.data)
          arr = arr.concat(res.data);
          console.log("arr"+arr);
          resolve(arr);
        }
      })
    })
    var promise2 = new Promise((resolve, reject) => {
      db.collection("starBucksCard2").where({
        like: true
      }).get({
        success(res) {
          console.log(res.data)
          arr = arr.concat(res.data);
          console.log("arr"+arr);
          resolve(arr);
        }
      })

    })
    var promise3 = new Promise((resolve, reject) => {
      db.collection("starBucksCard3").where({
        like: true
      }).get({
        success(res) {
          console.log(res.data)
          arr = arr.concat(res.data);
          console.log("arr"+arr);
          resolve(arr);
        }
      })

    })
    var promise4 = new Promise((resolve, reject) => {
      db.collection("starBucksCard4").where({
        like: true
      }).get({
        success(res) {
          console.log(res.data)
          arr = arr.concat(res.data);
          console.log("arr"+arr);
          resolve(arr);
        }
      })

    })


    // let promise = new Promise((resolve, reject) => {
      
    //   for (let i = 0; i < select.length; i++) {
        
    //     db.collection(select[i]).where({
    //       like: true
    //     }).get({
    //       success(res) {
    //         // console.log(res.data)
    //         arr = arr.concat(res.data);
    //       }
    //     })
    //   }
    //   resolve(arr)
    // })
    // Promise.all([promise1,promise2,promise3,promise4])
    promise1.then(promise2.then(promise3.then(promise4.then( arr => {
      that.setData({
        cartList: arr,
        complete: true
      })
      console.log(arr)
      console.log(this.data.cartList)
    }

    ))))
    .then( arr => {
      that.setData({
        cartList: arr,
        complete: true
      })
      console.log(arr)
      console.log(this.data.cartList)
    }

    )


  }
})
const app = getApp()
const db = wx.cloud.database({
  env:'http-http'
});
let dataMap = new Map()
Page({
  data:{
    id: 0,
    productList: {},
    productLists: [],
    buyNum: 0,
    buyAllPrice: '0.00',
    showModal: false,
    cartList:[]
  },
  onLoad(options){
    // console.log(options)
    let id = options.id
    this.setData({
      id
    })
    this.getProductData()
    const that = this;
    const select = ["starBucksCard","starBucksCard2","starBucksCard3","starBucksCard4","starBucksCard","starBucksCard","starBucksCard","starBucksCard"]
  //  数据库查询
  console.log(id-1)
  console.log(select[id-1])
  db.collection(select[id-1]).get({
    success(res) {
      that.setData({
        cartList: res.data
      })
    }
  })
  },

likePic(e) {
  let btnId = this.data.id;
  const id = e.detail.id;
  const like = e.detail.like;
  wx.cloud.callFunction({
    name: 'changeLikeCard',
    data: {
      id,
      like,
      btnId
    },
    success: res => {
      console.log(res)
    }
  })
},

  getProductData () {
    const id = this.data.id
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cf1f4eaabb0047e81554dd5/starbucks/productList#!method=get',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      data: {
        id: 1
      },
      success: (res) => {
        // console.log(res)
        this.setData({
          productLists: res.data.data[id].productList
        })
      },
      fail: (err) => {console.log(err)},
      complete: () => {}
    });
      
  },
  getListNum(e) {
    // console.log(e)
    // console.log(e.detail)
    let id = e.detail.id
    let num = e.detail.num
    let price = e.detail.price
    dataMap.set(id,{num,price})
    // console.log(dataMap)
    this.getBuyNum()
  },
  getBuyNum () {
    const values =Array.from(dataMap.values()) 
    // console.log(values)
    let buyNum = 0,
    buyAllPrice = 0
    for(let item of values) {
      buyNum += item.num
      buyAllPrice += item.price * item.num
    }
    // console.log(num,price)
    // buyAllPrice
    this.setData({
      buyNum,
      buyAllPrice: buyAllPrice.toFixed(2)
    })
  },
  seeDetail(e) {
    // e.stopImmediatePropagation()
    const productList = e.target.dataset.item
    this.setData({
      showModal: true,
      productList
    })
    // console.log(productList)
    // e.stopPropagation()
  }
})
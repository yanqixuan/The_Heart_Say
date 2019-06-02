const app = getApp()
const db = wx.cloud.database({
  env:'http-http'
});

const _ =db.command


let dataMap = new Map()
Page({
  data:{
    productList: {},
    productLists: [],
    buyNum: 0,
    buyAllPrice: '0.00',
    showModal: false,
    cartList:[]
  },
  onLoad(){
    this.getProductData()
// 鄢启轩写的
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cf1f4eaabb0047e81554dd5/starbucks/collectionScroll',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (result) => {
        //  console.log(result);
        this.setData({
          cartList: result.data.data.cartList
        })
      },
      fail: () => {},
      complete: () => {}
    });

    //  数据库查询
    db.collection('starBucksCard').where({}).get({
      success(res) {
        // console.log(res)
      }
    })
  },
  changeActive(e){
    let active = e.detail.active;
    let id = e.detail.id;
    console.log('changeactive',active,id)
    return db.collection('starBucksCard').doc(e.detail.id).update({
      data:{
        like: false
      },
      success: res => {
        console.error('[数据库] [更新记录] ：', res)
      },
      fail: err => {
        console.error('[数据库] [更新记录] 失败：', err)
    }
  })
    // console.log(selectDB)
    // selectDB.get({
    //   success(res){
    //     console.log(res)
    //   }
    // })
    // selectDB.update({
    //   data:{
    //     test:'修改后的值'
    //   },
    // })
  },
  likePic(e){
    console.log('likepic')
  },
  // 贺海写的
  getProductData () {
    wx.request({
      url: 'https://www.easy-mock.com/mock/5cf1f4eaabb0047e81554dd5/starbucks/productList#!method=get',
      header: {'content-type':'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        // console.log(res)
        this.setData({
          productLists: res.data.data.productList
        })
      },
      fail: () => {},
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
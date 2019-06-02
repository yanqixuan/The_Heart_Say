let dataMap = new Map()
Page({
  data:{
    productList: {
      // id: '3',
      // img: "http://www.ylwgift.com/Files/Product/1473/201503200455025082-1.jpg",
      // title: '星冰粽冰尚礼袋',
      // price: '198'
    },
    productLists: [],
    buyNum: 0,
    buyAllPrice: '0.00',
    showModal: false
  },
  onLoad(){
    this.getProductData()
  },
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
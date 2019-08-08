// components/productList/productList.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productList: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    status: false,
    listNum: 0,
    id: '0'
  },

  /**
   * 组件的方法列表
   */
  lifetimes: {
   ready() {
    // const id = this.properties.productList.id
    // console.log(this.properties.productList)
    // this.setData({
    //   id
    // })
    // console.log(id)
    }
  },
  methods: {
    addList () {
      let status = !this.data.status
      let listNum = this.data.listNum
      this.setData({
        status,
        listNum: ++listNum
      })
      this.getListNum()
    },
    addNum () {
      let listNum = this.data.listNum
      listNum++
      this.setData({
        listNum
      })
      this.getListNum()
    },
    subtractNum () {
      let listNum = this.data.listNum
      // setTimeout(()=>{},500)
      if(listNum <= 1) {
        // console.log('222')
        let status = !this.data.status
        listNum--
        this.setData({
          status,
          listNum
        })
        this.getListNum()
        return
      }
      // console.log('111')
      listNum--
      this.setData({
        listNum
      })
      this.getListNum()
    },
    getListNum () {
      // return this.data.listNum
      this.triggerEvent('getListNum', {num: this.data.listNum,
                                       id: this.properties.productList.id,
                                       price: this.properties.productList.price
    })
    }
  }
})

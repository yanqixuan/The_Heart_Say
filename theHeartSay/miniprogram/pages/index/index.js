const app = getApp()
const db = wx.cloud.database({
  env:'http-http'
});
const _ =db.command

Page({
    data:{
      cartList:[]
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
  onLoad(){
   wx.request({
     url: 'https://www.easy-mock.com/mock/5cf1f4eaabb0047e81554dd5/starbucks/collectionScroll',
     data: {},
     header: {'content-type':'application/json'},
     method: 'GET',
     dataType: 'json',
     responseType: 'text',
     success: (result)=>{
      //  console.log(result);
        this.setData({
          cartList:result.data.data.cartList
        })
     },
     fail: ()=>{},
     complete: ()=>{}
   }); 

  //  数据库查询
  db.collection('starBucksCard').where({
  }).get({
    success(res){
      // console.log(res)
    }
  })
  }
})
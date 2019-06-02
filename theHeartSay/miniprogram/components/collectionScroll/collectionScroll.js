// components/collectionScroll/collectionScroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardList:{
      type:Array,
      value:[]
    },
    active:{
      type:Boolean
      // value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    like : false,
    activePic:""
  },
  lifetimes:{
    ready(){
      // console.log(this.properties)
      this.setData({
        activePic:this.properties.cardList[0].src,
        like:this.properties.cardList[0].like
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 改变点击的图片的样式
    active(e){
      let _id = e.currentTarget.dataset.id;
      let activePic = e.currentTarget.dataset.activepic;
      let like = e.currentTarget.dataset.like;
      this.triggerEvent('changeActive',{active:true,id:_id});
      this.setData({
        activePic,
        like
      })
    },
    // 添加/取消收藏
    likePic(e){
      let like = e.currentTarget.dataset.like;
      this.triggerEvent('likePic',{like:!like});
      this.setData({
        like : !like
      })
    }
  }
})

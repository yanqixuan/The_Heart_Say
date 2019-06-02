// components/collectionScroll/collectionScroll.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    cardList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cardList: [],
    like: false,
    activePic: "",
    id: '',
    currentId: '',
    index: 0
  },
  lifetimes: {
    // 数据初始化
    ready() {
      this.setData({
        cardList: this.properties.cardList,
        activePic: this.properties.cardList[0].src,
        like: this.properties.cardList[0].like,
        id: this.properties.cardList[0]._id,
        currentId: this.properties.cardList[0]._id
      })
      let cardList = this.data.cardList;
      cardList[0].active = true;
      for (let i = 1; i < cardList.length; i++) {
        cardList[i].active = false;
      }
      this.setData({
        cardList
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {

    // 添加/取消收藏
    likePic(e) {
      let like = e.currentTarget.dataset.like;
      let id = e.currentTarget.dataset.id;
      let index = this.data.index;
      this.triggerEvent('likePic', { like: !like, id }, 'changeLike');
      let cardList = this.data.cardList;
      cardList[index].like = !cardList[index].like;
      this.setData({
        like: !like,
        cardList
      })
      console.log(e)
    }
    ,
    // 改变点击的图片的样式
    active(e) {
      let id = e.currentTarget.dataset.id;
      let index = e.currentTarget.dataset.index;
      this.setData({
        currentId: id,
        index
      })
      let activePic = e.currentTarget.dataset.activepic;
      let like = e.currentTarget.dataset.like;
      this.triggerEvent('changeActive', { active: true, id });
      this.setData({
        activePic,
        like,
        id
      })
    }
  }
})

Page({

  data:{
    list:[]
  },

  
  onLoad(){
    wx.cloud.database().collection('cases')
    .get()
    .then(res=> {
      console.log("案例列表获取成功",res.data)
      this.setData({
        list:res.data
      })
    })
    .catch(res=> {
      console.log("案例列表获取失败",res)
    })
  },


  onGoToDetail1(event){
    console.log(event.currentTarget.dataset.id)
    const cid1 = event.currentTarget.dataset.id
    //事件对象
    wx.navigateTo({
      url: '/pages/casefirst/casefirst?cid1='+cid1
    })
  },

  onGoToDetail2(event){
    console.log(event.currentTarget.dataset.id)
    const cid2 = event.currentTarget.dataset.id
    //事件对象
    wx.navigateTo({
      url: '/pages/casesecond/casesecond?cid2='+cid2
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
Page({
  data:{
    list:[],
    contents:'18106579320'
  },

  //获取案例信息
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

  //拨号
  phoneOn(){
    wx.makePhoneCall({
      phoneNumber: '18106579320',
      success: function(){
        console.log('拨打电话成功！')
      },
      fail: function(){
        console.log("拨打电话失败！")
      }
    })
  },

  //复制微信号
  copyText(e){
    console.log(e)
    wx.setClipboardData({
      data: e.currentTarget.dataset.text,
      success: function(res){
        wx.setClipboardData({
          success: function(res){
            wx.showToast({
              title: '复制成功',
            })
          }
        })
      }
    })
  },

  //获取位置信息


  
  /**自定义触发事件 */
  onTap: function(params){
    //跳转页面
    wx.navigateTo({
      url: '/pages/case/case',
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
  }
})
// miniprogram/pages/index/index.js
const db = wx.cloud.database()   //这里用const定义一个常量，常量不会变，不能覆盖
Page({

  /**
   * 页面的初始数据
   */
  data: {
    datashow:[]
  },

  getData(e) {
    db.collection("demolist").where({
      author:"人民日报"
    }).get().then(res=>{
      this.setData({
        datashow:res.data
      })
      console.log(res)
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
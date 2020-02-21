// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    community: "xxxxx社区",
    grids: [0, 1, 2, 3, 4, 5, 6, 7],
    hideNotice: false,
    notice: '请务必如实上报身体情况！！',
    message1: '信息1',
    message2: '信息2',
    message3: '信息3',
  },
  switchNotice: function () {
    this.setData({
      hideNotice: true
    })
  },
  gotoPage_choose: function () {
    wx.navigateTo({ url: '/pages/choose/choose', })
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
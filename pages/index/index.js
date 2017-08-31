//index.js
//获取应用实例
var app = getApp();
var testclick = require('../../component/testclick/testclick.js');
testclick = new testclick;
testclick = testclick.__proto__
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    arrays: [3,4,24,5,2],
    mkey: app.globalData.mkey
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log(app.globalData.mkey)
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    this.click1 = testclick.click1;
  },

})

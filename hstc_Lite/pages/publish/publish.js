// pages/publish/publish.js
var newsAll = require("../../data/homedata.js");
Page({


  data: {
  
  },

  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

//选择本地图片并上传
  uploadImg:function() {
    var _this=this
    
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        // console.log(tempFilePaths[0])

       _this.setData({
         imgSrc:tempFilePaths,
       })
        
        //上传图片
       wx.uploadFile({
         url: 'http://example.weixin.qq.com/upload', //地址
         filePath: tempFilePaths[0],//图片临时目录
         name: 'file',
         formData: {
           'user': 'test'
         },
         success: function (res) {
           var data = res.data
           //do something
         }
       })
      }
    })
  },

  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },

 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
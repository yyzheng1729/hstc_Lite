// pages/details/detail.js
var newsAll = require("../../data/homedata.js");

Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var newsId = options.id;
        var newsData = {};
        for (var i = 0; i < newsAll.content.length; i++) {
            if (newsId == newsAll.content[i].id) {
                newsData = newsAll.content[i];
            }
        }
        this.setData({
            newsData: newsData,
            comments: newsAll.comment
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

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

    },

    onBindblur: function (e) {
        console.log(e.detail.value);
    },

    onBindConfirm: function (event) {
        wx.navigateTo({
            // url: '../index/index?text=' + event.detail.value
            url: '../index/index?text='
        })
    }
})
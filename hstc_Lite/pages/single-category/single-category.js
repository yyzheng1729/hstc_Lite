// pages/single-category/single-category.js

var contentAll = require("../../data/homedata.js")

Page({

    /**
     * 页面的初始数据
     */
    data: {
        content:{}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var categoryId = options.categoryId;
        /* 通过当前分类的编号，可以从后台拿到此分类的新闻，并且展示出来 categoryId  */
        console.log(categoryId);
        /* 模拟数据 */
        this.setData({
            content: contentAll.content
        });
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

    },

    onPostDetail: function (event) {
        var newsId = event.currentTarget.dataset.newsId;
        wx.navigateTo({
            url: '../details/detail?id=' + newsId
        })
    },

    onScrolltolower:function(event){
        wx.showNavigationBarLoading();
        var array = this.data.content.concat(contentAll.content);
        this.setData({
            content:array
        });
        wx.hideNavigationBarLoading();
    },

    onPullDownRefresh() {
        console.log("下拉刷新！！！！");
        wx.showNavigationBarLoading();
        /* 在这里重新加载页面数据 */
        wx.hideNavigationBarLoading();
        wx.stopPullDownRefresh();
    }
})
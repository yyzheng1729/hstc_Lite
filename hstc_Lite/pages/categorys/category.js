// pages/categorys/category.js
var contentAll = require("../../data/homedata.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        categoryPageShow: true,
        searchPageShow: false,
        xxImageShow: false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // wx.request({
        //     url: 'http://120.78.139.254:8080/signIn/displayAllUser/1',
        //     method: 'POST',
        //     success: function (res) {
        //         console.log(res);
        //         console.log(res.data);
        //     }
        // })
        this.setData({
            category:contentAll.category
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },

    /**
     * 当聚焦 input 框的时候触发
    */
    onBindfocus: function (event) {
        this.setData({
            categoryPageShow: false,
            searchPageShow: true,
            xxImageShow: true
        });
    },

    onCancelImgTap: function (event) {
        this.setData({
            categoryPageShow: true,
            searchPageShow: false,
            xxImageShow: false
        });
    },

    onJumpMore:function(event){
        /* 跳到分类详情页面，并把当前分类的 id 传过去 */
        var categoryId = event.currentTarget.dataset.categoryId;
        console.log(categoryId);
        wx.navigateTo({
            url: '../single-category/single-category?categoryId='+categoryId
        })
    }
})
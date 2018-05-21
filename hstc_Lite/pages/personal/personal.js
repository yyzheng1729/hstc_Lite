// pages/personal/personal.js
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

    /**
     * 跳转到 我的收藏 页面
     */
    onJumpMyCollection: function () {
        wx.navigateTo({
            url: '../personal-collection/personal-collection'
        })
    },

    /**
     * 跳转到 我的信息 页面
     */
    onJumpMyInformation: function () {
        wx.navigateTo({
            url: '../personal-info/personal-info'
        })
    },

    /**
     * 跳转到 我的信息 页面
     */
    onJumpMyPublish: function () {
        wx.navigateTo({
            url: '../personal-publish/personal-publish'
        }) 
    },

    /**
     * 跳转到 我的关于 页面
     */
    onJumpAbout:function () {
        wx.navigateTo({
            url: '../about/about'
        }) 
    }
})
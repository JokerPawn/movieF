const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        grids: [{
                img: "../../images/collect.jpg",
                text: "收藏",
                url: ""
            },
            {
                img: "../../images/history.jpg",
                text: "浏览记录",
                url: ""
            },
            {
                img: "../../images/shark.jpg",
                text: "摇一摇",
                url: ""
            },
            {
                img: "../../images/album.jpg",
                text: "相册",
                url: ""
            },
            {
                img: "../../images/setting.jpg",
                text: "设置",
                url: ""
            }
        ],
        // info: {
        //     avatar: "../../images/myAvatar.jpg",
        //     nickname: "♚筑梦先生",
        //     sex: "♂",
        //     address: "四川,南充"
        // }
        info: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let userInfo = app.globalData.userInfo;
        console.log(userInfo)
        let info = this.data.info;
        info.avatar = userInfo.avatarUrl;
        info.nickname = userInfo.nickName;
        if (userInfo.gender === 1) {
            info.sex = '♂'
        }
        if (userInfo.gender === 0) {
            info.sex = '♀';
        }
        info.address = userInfo.province + ',' + userInfo.city;
        this.setData({
            info: info
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})
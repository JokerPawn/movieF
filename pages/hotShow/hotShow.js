const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        movies: [{
                url: "",
                src: "../../images/xyj(s).jpg",
                name: "轩辕剑",
                decs: ["神话"],
                raiting: "4.0分"
            },
            {
                url: "",
                src: "../../images/dsgl.jpg",
                name: "大圣归来",
                decs: ["神话", "动作"],
                raiting: "4.2分"
            },
            {
                url: "",
                src: "../../images/kingKong.jpg",
                name: "金刚",
                decs: ["冒险"],
                raiting: "5.0分"
            },
            {
                url: "",
                src: "../../images/xqdz.jpg",
                name: "星球大战",
                decs: ["科幻", "冒险", "动作"],
                raiting: "4.2分"
            },
            {
                url: "",
                src: "../../images/xjmh.jpg",
                name: "星际迷航 ",
                decs: ["科幻"],
                raiting: "4.4分"
            },
            {
                url: "",
                src: "../../images/noah.jpg",
                name: "诺亚方舟",
                decs: ["灾难"],
                raiting: "5.5分"
            }
        ],
        imgs: [{
                url: "",
                src: "../../images/xyj.png"
            },
            {
                url: "",
                src: "../../images/mysticRiver.png"
            },
            {
                url: "",
                src: "../../images/faster.png"
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

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
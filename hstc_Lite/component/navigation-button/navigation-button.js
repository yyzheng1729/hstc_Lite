// component/navigation-button/navigation-button.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        info: [
            [
                {
                    "img": "/images/jisuanji.png",
                    "name": "计算机"
                },
                {
                    "img": "/images/shuxue.png",
                    "name": "数学"
                },
                {
                    "img": "/images/wuli.png",
                    "name": "物理"
                },
                {
                    "img": "/images/wenxue.png",
                    "name": "文学院"
                }
            ],
            [
                {
                    "img": "/images/shengwu.png",
                    "name": "生物"
                },
                {
                    "img": "/images/huaxue.png",
                    "name": "化学"
                },
                {
                    "img": "/images/yinyue.png",
                    "name": "音乐"
                },
                {
                    "img": "/images/more.png",
                    "name": "更多"
                }
            ]
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onJumpTap: function (e) {
            var name = e.currentTarget.dataset.name;
            console.log(name);
        }
    }
})

"use strict";
var common_vendor = require("../../common/vendor.js");
const MessageInput = () => "../components/order/MessageInput.js";
const _sfc_main = {
  components: {
    MessageInput
  },
  data() {
    return {
      commentData: {
        "readNumer": 193,
        "commentList": [
          {
            "id": 1,
            "owner": false,
            "hasLike": false,
            "likeNum": 2,
            "avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
            "nickName": "\u8D85\u957F\u6635\u79F0\u8D85\u957F...",
            "content": "\u5566\u5566\u5566\u5566",
            "parentId": null,
            "createTime": "2021-07-02 16:32:07"
          },
          {
            "id": 2,
            "owner": false,
            "hasLike": false,
            "likeNum": 2,
            "avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797761970/0",
            "nickName": "\u5BC2\u5BDE\u65E0\u654C",
            "content": "\u6211\u662F\u8BC4\u8BBA\u7684\u8BC4\u8BBA",
            "parentId": 1,
            "createTime": "2021-07-02 17:05:50"
          },
          {
            "id": 4,
            "owner": true,
            "hasLike": true,
            "likeNum": 1,
            "avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797763270/0",
            "nickName": "name111",
            "content": "\u8BC4\u8BBA\u5566\u5566\u5566\u5566\u5566\u5566\u5566\u5566\u5566\u5566",
            "parentId": null,
            "createTime": "2021-07-13 09:37:50"
          },
          {
            "id": 5,
            "owner": false,
            "hasLike": false,
            "likeNum": 0,
            "avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
            "nickName": "\u8D85\u957F\u6635\u79F0\u8D85\u957F...",
            "content": "\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA\u8D85\u957F\u8BC4\u8BBA",
            "parentId": null,
            "createTime": "2021-07-13 16:04:35"
          },
          {
            "id": 13,
            "owner": false,
            "hasLike": false,
            "likeNum": 0,
            "avatarUrl": "https://inews.gtimg.com/newsapp_ls/0/13797755537/0",
            "nickName": "\u8D85\u957F\u6635\u79F0\u8D85\u957F...",
            "content": "@\u5BC2\u5BDE\u65E0\u654C \u4F60\u6015\u4E0D\u662F\u4E2A\u5927\u806A\u660E",
            "parentId": 1,
            "createTime": "2021-07-14 11:01:23"
          }
        ]
      }
    };
  },
  methods: {
    getTree(data) {
      let result = [];
      let map = {};
      data.forEach((item) => {
        map[item.id] = item;
      });
      data.forEach((item) => {
        let parent = map[item.parentId];
        if (parent) {
          (parent.children || (parent.children = [])).push(item);
        } else {
          result.push(item);
        }
      });
      return result;
    },
    add() {
    },
    del() {
    },
    like() {
    },
    focusOn() {
    }
  }
};
if (!Array) {
  const _component_MessageInput = common_vendor.resolveComponent("MessageInput");
  _component_MessageInput();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/huangchao/Works/GitHub/uni-app/pages/order/list.vue"]]);
wx.createPage(MiniProgramPage);

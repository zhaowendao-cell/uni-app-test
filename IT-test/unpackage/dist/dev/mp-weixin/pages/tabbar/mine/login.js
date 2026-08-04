"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      sex_arrs: ["男性", "女性", "其他"]
    };
  },
  methods: {
    select() {
      common_vendor.index.showActionSheet({
        itemList: this.sex_arrs,
        //success请求成功返回res值，并把res当参数执行匿名函数
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/tabbar/mine/login.vue:20", res);
          common_vendor.index.__f__("log", "at pages/tabbar/mine/login.vue:21", this.sex_arrs[res.tapIndex]);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.select && $options.select(...args), "72")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-83324f4a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/mine/login.js.map

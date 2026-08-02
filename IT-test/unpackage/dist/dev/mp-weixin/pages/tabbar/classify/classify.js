"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      rawhtml: "<a href='http://www.baidu.com'>百度</a>",
      dividname: 1001,
      flag: false
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.rawhtml),
    b: $data.rawhtml,
    c: $data.dividname,
    d: common_vendor.t($data.flag ? "真" : "假")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/classify/classify.js.map

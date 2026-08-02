"use strict";
const common_vendor = require("../../../common/vendor.js");
const Navbar = () => "../../../components/navbar/navbar.js";
common_vendor.index.showToast({
  title: "支付成功"
});
const _sfc_main = {
  data() {
    return {
      //函数执行之后，return 出去的对象，才会被 Vue 内部接管，做成响应式数据
      //数组与对象必须使用函数返回
      title: "震惊，某明星竟出轨",
      titleList: ["专升本上岸干货", "贵阳游玩指南", "故事大会征集活动"],
      message: ""
    };
  },
  //methods：放可被触发执行的函数，用来操作 data 里的数据
  methods: {
    getDatHandle(onEvent_data) {
      common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:45", onEvent_data);
      this.message = onEvent_data;
    },
    onPageScroll(e) {
      common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:50", "滚动跳位置：" + e.scrollTop);
    },
    onLoad() {
      common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:55", "页面加载完成");
    }
  },
  //components:应用的组件
  components: {
    Navbar
  }
};
if (!Array) {
  const _component_Navbar = common_vendor.resolveComponent("Navbar");
  _component_Navbar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.getDatHandle, "32"),
    b: common_vendor.p({
      title: $data.title,
      titleList: $data.titleList
    }),
    c: common_vendor.t($data.message),
    d: common_vendor.f(50, (item, k0, i0) => {
      return {
        a: common_vendor.t(item)
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/index/index.js.map

"use strict";
const common_vendor = require("../../../common/vendor.js");
const common_assets = require("../../../common/assets.js");
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
      titleList: [],
      message: ""
    };
  },
  onLoad() {
    common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:75", "页面加载完成");
    this.request();
  },
  //methods：放可被触发执行的函数，用来操作 data 里的数据
  methods: {
    getDatHandle(onEvent_data) {
      common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:82", onEvent_data);
      this.message = onEvent_data;
    },
    request() {
      common_vendor.index.request({
        method: "GET",
        url: "https://v1.hitokoto.cn/",
        timeout: 1e3,
        header: {
          token: "",
          "Content-Type": "application/json"
        },
        success: (res) => {
          common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:95", res.data);
          this.titleList = [res.data];
        },
        fail: (err) => {
          common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:99", "超时");
          common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:100", err);
          this.request();
        }
      });
    }
  },
  onPageScroll(e) {
    common_vendor.index.__f__("log", "at pages/tabbar/index/index.vue:110", "滚动距离：", e.scrollTop);
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
    a: common_vendor.o($options.getDatHandle, "ce"),
    b: common_vendor.p({
      title: $data.title
    }),
    c: common_assets._imports_0,
    d: common_assets._imports_1,
    e: common_assets._imports_2,
    f: common_assets._imports_3,
    g: common_assets._imports_4,
    h: common_vendor.f($data.titleList, (item, k0, i0) => {
      return common_vendor.e({
        a: item
      }, item ? {
        b: common_vendor.t(item.from),
        c: common_vendor.t(item.from_who),
        d: common_vendor.t(item.hitokoto)
      } : {}, {
        e: item == null ? void 0 : item.id
      });
    }),
    i: common_vendor.t($data.message)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-184b8d5d"]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/index/index.js.map

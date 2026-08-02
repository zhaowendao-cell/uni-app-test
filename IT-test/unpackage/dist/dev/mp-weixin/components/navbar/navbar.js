"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      message: "自定义事件-数据传输",
      IndexInputTitle: ""
    };
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    titleList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    sendClickHandle() {
      this.$emit("onEvent", this.message);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: $props.title,
    c: $data.IndexInputTitle,
    d: common_vendor.o(common_vendor.m(($event) => $data.IndexInputTitle = $event.detail.value, {
      lazy: true,
      trim: true
    }), "e9"),
    e: common_vendor.f($props.titleList, (x, y, i0) => {
      return {
        a: common_vendor.t(x),
        b: y
      };
    }),
    f: common_vendor.o((...args) => $options.sendClickHandle && $options.sendClickHandle(...args), "27"),
    g: common_vendor.t($data.IndexInputTitle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-eaf4c2e5"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/navbar/navbar.js.map

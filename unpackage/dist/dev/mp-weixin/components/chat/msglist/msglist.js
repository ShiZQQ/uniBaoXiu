(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat/msglist/msglist"],{

/***/ 355:
/*!*************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/msglist/msglist.vue ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msglist.vue?vue&type=template&id=5b766f9a& */ 356);
/* harmony import */ var _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msglist.vue?vue&type=script&lang=js& */ 358);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./msglist.vue?vue&type=style&index=0&lang=css& */ 360);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 49);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/chat/msglist/msglist.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 356:
/*!********************************************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/msglist/msglist.vue?vue&type=template&id=5b766f9a& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msglist.vue?vue&type=template&id=5b766f9a& */ 357);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_template_id_5b766f9a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 357:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/msglist/msglist.vue?vue&type=template&id=5b766f9a& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uModal: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-modal/u-modal */ "uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-modal/u-modal.vue */ 389))
    },
    uField: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-field/u-field */ "uview-ui/components/u-field/u-field").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-field/u-field.vue */ 396))
    },
    uActionSheet: function () {
      return __webpack_require__.e(/*! import() | uview-ui/components/u-action-sheet/u-action-sheet */ "uview-ui/components/u-action-sheet/u-action-sheet").then(__webpack_require__.bind(null, /*! @/uview-ui/components/u-action-sheet/u-action-sheet.vue */ 403))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var l0 = _vm.__map(_vm.chatMsg, function (item, __i0__) {
    var $orig = _vm.__get_orig(item)
    var m0 = !item.style ? _vm.showMessageListNickname(item.yourname) : null
    var m1 = !item.style ? _vm.handleTime(item) : null
    var m2 = _vm.showMessageListAvatar(item)
    return {
      $orig: $orig,
      m0: m0,
      m1: m1,
      m2: m2,
    }
  })
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        l0: l0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 358:
/*!**************************************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/msglist/msglist.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msglist.vue?vue&type=script&lang=js& */ 359);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 359:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/msglist/msglist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ 13));
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var msgStorage = __webpack_require__(/*! ../msgstorage */ 42);
var disp = __webpack_require__(/*! ../../../utils/broadcast */ 46);
var LIST_STATUS = {
  SHORT: "scroll_view_change",
  NORMAL: "scroll_view"
};
var page = 0;
var Index = 0;
var curMsgMid = '';
var isFail = false;
var audioMsg = function audioMsg() {
  Promise.all(/*! require.ensure | components/chat/msglist/type/audio/audio */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/chat/msglist/type/audio/audio")]).then((function () {
    return resolve(__webpack_require__(/*! ./type/audio/audio */ 410));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var fileMsg = function fileMsg() {
  __webpack_require__.e(/*! require.ensure | components/chat/msglist/type/file/index */ "components/chat/msglist/type/file/index").then((function () {
    return resolve(__webpack_require__(/*! ./type/file */ 419));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var WebIM = __webpack_require__(/*! ../../../utils/WebIM */ 38)["default"];
var _default2 = {
  data: function data() {
    return {
      view: LIST_STATUS.NORMAL,
      toView: "",
      chatMsg: [],
      __visibility__: false,
      isIPX: false,
      title: '消息举报',
      list: [{
        text: '举报'
      }],
      show: false,
      showRpt: false,
      showRptType: false,
      rptMsgId: '',
      // 举报消息id
      rptType: '',
      // 举报类型
      reason: '',
      typeList: [{
        text: "涉政"
      }, {
        text: "涉黄"
      }, {
        text: "广告"
      }, {
        text: "辱骂"
      }, {
        text: "暴恐"
      }, {
        text: "违禁"
      }],
      defaultAvatar: "/static/images/theme2x.png",
      defaultGroupAvatar: "/static/images/groupTheme.png"
    };
  },
  components: {
    audioMsg: audioMsg,
    fileMsg: fileMsg
  },
  props: {
    username: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  // lifetimes
  created: function created() {},
  beforeMount: function beforeMount() {
    this.__visibility__ = true;
    page = 0;
    Index = 0;
  },
  moved: function moved() {},
  destroyed: function destroyed() {
    this.__visibility__ = false;
    msgStorage.off("newChatMsg", this.dispMsg);
  },
  mounted: function mounted(event) {
    var me = this;
    if (getApp().globalData.isIPX) {
      this.setData({
        isIPX: true
      });
    }
    this.username = uni.username;
    var username = this.username;
    var myUsername = uni.getStorageSync("myUsername");
    var sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
    var chatMsg = uni.getStorageSync(sessionKey) || [];
    this.renderMsg(null, null, chatMsg, sessionKey);
    uni.setStorageSync(sessionKey, null);
    disp.on('em.error.sendMsgErr', function (err) {
      // curMsgMid = err.data.mid;
      isFail = true;
      // return;
      console.log('发送失败了');
      return;
      var msgList = me.chatMsg;
      msgList.map(function (item) {
        if (item.mid.substring(item.mid.length - 10) == curMsgMid.substring(curMsgMid.length - 10)) {
          item.msg.data[0].isFail = true;
          item.isFail = true;
          me.setData({
            chatMsg: msgList
          });
        }
      });

      // if (me.curChatMsg[0].mid == curMsgMid) {
      //   me.curChatMsg[0].msg.data[0].isShow = false;
      //   me.curChatMsg[0].isShow = false;
      // }

      uni.setStorageSync("rendered_" + sessionKey, msgList);
    });
    msgStorage.on("newChatMsg", this.dispMsg);
  },
  computed: {
    //消息列表头像展示
    showMessageListAvatar: function showMessageListAvatar() {
      var _this = this;
      var friendUserInfoMap = getApp().globalData.friendUserInfoMap;
      var myUserInfos = getApp().globalData.userInfoFromServer;
      return function (item) {
        if (!item.style) {
          var _friendUserInfoMap$ge;
          if (friendUserInfoMap.has(item.username) && (_friendUserInfoMap$ge = friendUserInfoMap.get(item.username)) !== null && _friendUserInfoMap$ge !== void 0 && _friendUserInfoMap$ge.avatarurl) {
            return friendUserInfoMap.get(item.username).avatarurl;
          } else {
            return _this.defaultAvatar;
          }
        } else {
          if (myUserInfos !== null && myUserInfos !== void 0 && myUserInfos.avatarurl) {
            return myUserInfos.avatarurl;
          } else {
            return _this.defaultAvatar;
          }
        }
      };
    },
    //消息列表昵称显示
    showMessageListNickname: function showMessageListNickname() {
      var friendUserInfoMap = getApp().globalData.friendUserInfoMap;
      return function (hxId) {
        var _friendUserInfoMap$ge2;
        if (friendUserInfoMap.has(hxId) && (_friendUserInfoMap$ge2 = friendUserInfoMap.get(hxId)) !== null && _friendUserInfoMap$ge2 !== void 0 && _friendUserInfoMap$ge2.nickname) {
          return friendUserInfoMap.get(hxId).nickname;
        } else {
          return hxId;
        }
      };
    },
    //处理时间显示
    handleTime: function handleTime() {
      var _this2 = this;
      return function (item) {
        return _this2.$u.timeFormat(item.time, 'mm/dd/hh:MM');
      };
    }
  },
  methods: {
    normalScroll: function normalScroll() {
      this.setData({
        view: LIST_STATUS.NORMAL
      });
    },
    dispMsg: function dispMsg(renderableMsg, type, curChatMsg, sesskey) {
      var me = this;
      var username = this.username;
      var myUsername = uni.getStorageSync("myUsername");
      var sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
      me.curChatMsg = curChatMsg;
      if (!me.__visibility__) return; // 判断是否属于当前会话

      if (username.groupId) {
        // 群消息的 to 是 id，from 是 name
        if (renderableMsg.info.from == username.groupId || renderableMsg.info.to == username.groupId) {
          if (sesskey == sessionKey) {
            me.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
          }
        }
      } else if (renderableMsg.info.from == username.your || renderableMsg.info.to == username.your) {
        if (sesskey == sessionKey) {
          me.renderMsg(renderableMsg, type, curChatMsg, sessionKey, 'newMsg');
        }
      }
    },
    onInput: function onInput(e) {
      this.setData({
        reason: e.target.value
      });
    },
    shortScroll: function shortScroll() {
      this.setData({
        view: LIST_STATUS.SHORT
      });
    },
    onTap: function onTap() {
      this.$emit("msglistTap", null, {
        bubbles: true
      });
    },
    onMsgTap: function onMsgTap(item) {
      // 别人发的消息
      if (item.style !== 'self') {
        this.setData({
          showRpt: true,
          rptMsgId: item.id
        });
      }
    },
    onMenuClick: function onMenuClick(idx) {
      if (idx === 0) {
        this.setData({
          showRptType: true
        });
      }
    },
    reportMsg: function reportMsg() {
      var that = this;
      if (this.reason === '') {
        this.$refs.uModal.clearLoading();
        uni.showToast({
          title: "请填写举报原因",
          icon: 'none'
        });
        return false;
      }
      WebIM.conn.reportMessage({
        reportType: that.rptType,
        // 举报类型
        reportReason: that.reason,
        // 举报原因。
        messageId: that.rptMsgId // 上报消息id
      }).then(function () {
        uni.showToast({
          title: "举报成功",
          icon: 'none'
        });
      }).catch(function (e) {
        uni.showToast({
          title: "举报失败",
          icon: 'none'
        });
      }).finally(function () {
        that.setData({
          reason: '',
          rptType: '',
          rptMsgId: '',
          show: false
        });
      });
    },
    onReportTypeClick: function onReportTypeClick(idx) {
      // 设置举报类型
      this.setData({
        rptType: this.typeList[idx].text,
        show: true
      });
    },
    previewImage: function previewImage(event) {
      var url = event.target.dataset.url;
      uni.previewImage({
        urls: [url] // 需要预览的图片 http 链接列表
      });
    },
    getHistoryMsg: function getHistoryMsg() {
      var me = this;
      var username = this.username;
      var myUsername = uni.getStorageSync("myUsername");
      var sessionKey = username.groupId ? username.groupId + myUsername : username.your + myUsername;
      var historyChatMsgs = uni.getStorageSync("rendered_" + sessionKey) || [];
      if (Index < historyChatMsgs.length) {
        var timesMsgList = historyChatMsgs.slice(-Index - 10, -Index);
        this.setData({
          chatMsg: timesMsgList.concat(me.chatMsg),
          toView: timesMsgList[timesMsgList.length - 1].mid
        });
        Index += timesMsgList.length;
        if (timesMsgList.length == 10) {
          page++;
        }
        uni.stopPullDownRefresh();
      }
    },
    renderMsg: function renderMsg(renderableMsg, type, curChatMsg, sessionKey, isnew) {
      var me = this;
      var historyChatMsgs = uni.getStorageSync("rendered_" + sessionKey) || [];
      historyChatMsgs = historyChatMsgs.concat(curChatMsg);
      if (!historyChatMsgs.length) return;
      if (isnew == 'newMsg') {
        this.setData({
          chatMsg: this.chatMsg.concat(curChatMsg),
          // 跳到最后一条
          toView: historyChatMsgs[historyChatMsgs.length - 1].mid
        });
      } else {
        this.setData({
          chatMsg: historyChatMsgs.slice(-10),
          // 跳到最后一条
          toView: historyChatMsgs[historyChatMsgs.length - 1].mid
        });
      }
      uni.setStorageSync("rendered_" + sessionKey, historyChatMsgs);
      var chatMsg = uni.getStorageSync(sessionKey) || [];
      chatMsg.map(function (item, index) {
        curChatMsg.map(function (item2, index2) {
          if (item2.mid == item.mid) {
            chatMsg.splice(index, 1);
          }
        });
      });
      uni.setStorageSync(sessionKey, chatMsg);
      Index = historyChatMsgs.slice(-10).length;
      // setTimeout 兼容支付宝小程序
      setTimeout(function () {
        uni.pageScrollTo({
          scrollTop: 5000,
          duration: 300,
          fail: function fail(e) {
            //console.log('滚失败了', e)
          }
        });
      }, 100);
      if (isFail) {
        this.renderFail(sessionKey);
      }
    },
    renderFail: function renderFail(sessionKey) {
      var me = this;
      var msgList = me.chatMsg;
      msgList.map(function (item) {
        if (item.mid.substring(item.mid.length - 10) == curMsgMid.substring(curMsgMid.length - 10)) {
          item.msg.data[0].isFail = true;
          item.isFail = true;
          me.setData({
            chatMsg: msgList
          });
        }
      });
      if (me.curChatMsg[0].mid == curMsgMid) {
        me.curChatMsg[0].msg.data[0].isShow = false;
        me.curChatMsg[0].isShow = false;
      }
      uni.setStorageSync("rendered_" + sessionKey, msgList);
      isFail = false;
    },
    clickMsg: function clickMsg(event) {
      if ((0, _typeof2.default)(event.target.dataset.msg) == 'object' && event.target.dataset.msg.msg.ext && event.target.dataset.msg.msg.ext.msg_extension) {
        this.$emit("clickMsg", event.target.dataset.msg.msg.ext);
      }
    }
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 360:
/*!**********************************************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/msglist/msglist.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./msglist.vue?vue&type=style&index=0&lang=css& */ 361);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_msglist_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 361:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/msglist/msglist.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/chat/msglist/msglist.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chat/msglist/msglist-create-component',
    {
        'components/chat/msglist/msglist-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(355))
        })
    },
    [['components/chat/msglist/msglist-create-component']]
]);

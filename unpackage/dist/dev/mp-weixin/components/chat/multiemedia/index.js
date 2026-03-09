(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/chat/multiemedia/index"],{

/***/ 384:
/*!****************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/multiemedia/index.nvue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.nvue?vue&type=template&id=a4227842& */ 385);
/* harmony import */ var _index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.nvue?vue&type=script&lang=js& */ 387);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 49);

var renderjs




/* normalize component */

var component = Object(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/chat/multiemedia/index.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 385:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/multiemedia/index.nvue?vue&type=template&id=a4227842& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.nvue?vue&type=template&id=a4227842& */ 386);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_template_id_a4227842___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 386:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/multiemedia/index.nvue?vue&type=template&id=a4227842& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.subUrls.length
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 387:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/multiemedia/index.nvue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.nvue?vue&type=script&lang=js& */ 388);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_nvue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 388:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/components/chat/multiemedia/index.nvue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default2 = {
  data: function data() {
    return {
      pubUrl: "",
      subUrls: [],
      showInvite: true,
      devicePosition: "front",
      muted: false,
      playVideoMuted: false,
      devicePositionIcon: 'switchCamera_white',
      devicePositionColor: '#fff',
      micphoneIcon: 'micphone_white',
      beautyIcon: 'beauty',
      micphoneColor: '#fff',
      videoIcon: 'video_white',
      videoColor: '#fff',
      beauty: 9,
      beautyColor: '#fff',
      myName: '',
      confrId: '',
      enableCamera: true,
      time: '',
      context: {}
    };
  },
  props: {
    username: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    action: {
      type: Object,
      default: {}
    },
    groupId: {
      type: String,
      default: ''
    }
  },
  methods: {
    joinRoom: function joinRoom(data) {
      var me = this;
      console.log('joinRoom', data);
      me.context = uni.createLivePusherContext("livePusher", me);
      console.log('我的播放组件', me.context);
      var context = this.context;
      if (context && context.ctx && context.ctx.attr && context.ctx.attr.url) {
        context.stop();
      }
      var id = wx.WebIM.conn.getUniqueId();
      var roomName = 'wxConfr' + id; //随机的房间名，防止和别人的房间名冲突
      var rec = wx.getStorageSync("rec") || false;
      var recMerge = wx.getStorageSync("recMerge") || false;
      var params = {
        roomName: roomName,
        password: '',
        role: 7,
        config: {
          rec: rec,
          recMerge: recMerge
        }
      };
      if (data) {
        params.roomName = data.roomName;
        params.password = data.password;
      }
      wx.emedia.mgr.joinRoom(params).then(function (res) {
        console.log('res', res);
        var confrId = res.confrId;
        me.setData({
          confrId: confrId
        });
        me.$emit('createConfrSuccess', {
          confrId: confrId,
          groupId: me.username.groupId,
          roomName: params.roomName,
          password: params.password
        });
        console.log('--------+--+----+---+--------');
        var rtcId = wx.emedia.util.getRtcId();
        console.log(11111111111111, confrId);
        wx.emedia.mgr.pubStream(rtcId).then(function (res) {
          console.log('pubUrl-------------', res.data.rtmp);
          console.log(2222222222222);
          me.setData({
            pubUrl: res.data.rtmp
          });
          setTimeout(function () {
            console.log('55555555555', me);
            console.log(me.context);
            me.context.start();
          }, 500);
        }).catch(function (e) {
          console.log(4444444, e); //404
          return f(false); //即便返回了一个成功的promise,下面的finally也会执行,如果返回的是失败的promise,控制台最后一行会报错uncaught (in promise) 404
        }).finally(function (e) {
          console.log(100, e); //100
        });

        console.log(33333333333333, me.pubUrl);
      });
    },
    createConf: function createConf() {
      console.log('>>> createConf');
      var me = this;
      var rec = wx.getStorageSync("rec") || false;
      var recMerge = wx.getStorageSync("recMerge") || false;
      //参数：会议类型 密码 是否录制 是否合并
      wx.emedia.mgr.createConference(10, '', rec, recMerge).then(function (data) {
        console.log('成功', data);
        var ticket = data.data.ticket;
        var ticketJosn = JSON.parse(ticket);
        var confrId = ticketJosn.confrId;
        wx.emedia.mgr.joinConferenceWithTicket(confrId, ticket).then(function (res) {
          console.log('加入会议成功', res);
        });
        // wx.emedia.mgr.joinConference(confrId, '').then(function(res){
        // 	console.log('加入会议成功', res)
        // })

        me.setData({
          confrId: confrId
        });
        me.$emit('createConfrSuccess', {
          confrId: confrId,
          groupId: me.username.groupId
        });
      });
    },
    joinConf: function joinConf(data) {
      console.log('加入会议 ————-------————');
      console.log(data);
      var me = this;
      wx.emedia.mgr.getConferenceTkt(data.confrId, data.password).then(function (res) {
        console.log('申请reqTkt成功', res.data);
        var ticket = res.data.ticket || '';
        var tktObj = JSON.parse(ticket);
        wx.emedia.mgr.joinConferenceWithTicket(data.confrId, ticket).then(function (res) {
          console.log('加入会议成功', res);
        });
        me.setData({
          confrId: tktObj.confrId
        });
        me.$emit('createConfrSuccess', {
          confrId: tktObj.confrId,
          groupId: me.username.groupId
        });
      });
    },
    togglePlay: function togglePlay() {
      var _this = this;
      var me = this;
      console.log("%c togglePlay", "color:green");

      // this.LivePusherContext.stop()
      this.setData({
        enableCamera: !me.enableCamera,
        pubUrl: me.pubUrl,
        videoIcon: this.videoIcon == 'video_white' ? 'video_gray' : 'video_white',
        videoColor: this.videoColor == '#fff' ? '#aaa' : '#fff'
      }, function () {
        _this.LivePusherContext.start();
      });
    },
    toggleCamera: function toggleCamera() {
      console.log("%c toggleCamera", "color:green");
      var me = this;
      // me.LivePusherContext.stop()
      me.LivePusherContext.switchCamera({
        success: function success() {
          me.setData({
            devicePosition: me.devicePosition == 'fron' ? 'back' : 'front',
            devicePositionIcon: me.devicePositionIcon == 'switchCamera_white' ? 'switchCamera_gray' : 'switchCamera_white',
            devicePositionColor: me.devicePositionColor == '#fff' ? '#aaa' : '#fff'
          }, function () {
            // me.LivePusherContext.start()
          });
        }
      });
    },
    toggleMuted: function toggleMuted() {
      console.log("%c toggleMuted", "color:green");
      this.setData({
        muted: !this.muted,
        micphoneIcon: this.micphoneIcon == 'micphone_white' ? 'micphone_gray' : 'micphone_white',
        micphoneColor: this.micphoneColor == '#fff' ? '#aaa' : '#fff'
      });
    },
    toggleBeauty: function toggleBeauty() {
      this.setData({
        beauty: this.beauty == 0 ? 9 : 0,
        beautyColor: this.beautyColor == '#fff' ? '#aaa' : '#fff',
        beautyIcon: this.beautyIcon == 'beauty' ? 'beauty_gray' : 'beauty'
      });
    },
    hangup: function hangup() {
      console.log('挂断', this.confrId);
      wx.emedia.mgr.exitConference(this.confrId);
      this.$emit('hangup');
      this.stopTimer();
    },
    inviteMember: function inviteMember() {
      this.$emit('inviteMember', this.groupId);
    },
    // statechange(e){
    // 	console.log('>>>>>>>>>live-pusher code:', e.detail)
    // 	if (e.detail.code === 5001) {
    // 		// 部分安卓手机在接电话时会停止推拉流报错，状态码5001，此时退出会议。 https://developers.weixin.qq.com/community/develop/doc/0006ac6d7a4968fa675a49fef53c00
    // 		this.hangup()
    // 		console.error('由于有电话接入，已退出会议')
    // 	}
    // },
    netstatusChange: function netstatusChange(e) {
      console.log('>>>>>>>>>>net status:', e.detail);
    },
    getTimer: function getTimer() {
      var _this2 = this;
      var count = 0;
      var time = '00:00:00';
      this.timer = setInterval(function () {
        count++;
        var s = showNum(count % 60);
        var m = showNum(parseInt(count / 60) % 60);
        var h = showNum(parseInt(count / 60 / 60));
        time = "".concat(h, ":").concat(m, ":").concat(s);
        _this2.setData({
          time: time
        });
      }, 1000);
      function showNum(num) {
        if (num < 10) {
          return '0' + num;
        }
        return num;
      }
    },
    stopTimer: function stopTimer() {
      clearInterval(this.timer);
    },
    error: function error(err) {
      console.log('EEEEEEEEEEEEE', err);
    },
    statechange: function statechange(state) {
      console.log("SSSSSSSSSSS", state);
    }
  },
  mounted: function mounted() {
    console.log('进入');
    wx.setKeepScreenOn({
      keepScreenOn: true
    });
    console.log('进入111');
    this.setData({
      myName: wx.WebIM.conn.context.userId
    });
    console.log('进入222');
    this.getTimer();
    var me = this;
    var subUrls = [];
    var obj = {};
    console.log('进入333');
    this.LivePusherContext = uni.createLivePusherContext('livePusher', this);
    console.log('this.LivePusherContext ..', this.LivePusherContext);
    if (this.action && this.action.action == 'join') {
      console.log('join');
      // 音视频sdk提供两种创建、加入会议的api 使用任意一种都可以：（1） 一种是通过会议id ticket 或者 会议id 密码加入会议 如使用下面 joinConf
      // （2）另一种是通过房间名 密码加入 如使用下面joinRoom

      //this.joinConf(this.action) // （1）
      //this.joinRoom(this.action) // （2）
      if (this.action.roomName) {
        console.log('使用joinroom');
        this.joinRoom(this.action);
      } else {
        console.log('使用joinConf');
        this.joinConf(this.action);
      }
    } else {
      // 创建会议同样是两种api （1）一种是使用createConf 单纯创建一个会议，需要再申请ticket 或者用密码加入会议 如使用下面的createConf
      // （2）也可以使用joinRoom，通过房间名、密码创建房间并直接加入 不需再进行加入会议的操作
      this.joinRoom(); // （1）
      //this.createConf() // （2）
    }

    wx.emedia.mgr.onMediaChanaged = function (e) {
      console.log('onMediaChanaged', e);
    };
    wx.emedia.mgr.onConferenceExit = function (e) {
      console.log('onConferenceExit', e);
    };
    wx.emedia.mgr.onMemberExited = function (reason) {
      console.log('onMemberExited', reason);
    };
    wx.emedia.mgr.onStreamControl = function (mem) {
      console.log('onStreamControl', mem);
    };
    wx.emedia.mgr.onStreamControl.onSoundChanage = function (a, b, c, d) {
      console.log('onSoundChanage');
    };
    wx.emedia.mgr.onReconnect = function (res, ent) {
      // 发生断网重连，相当于重新加入会议

      // 清空live-player 否则在原来的后面追加，导致原来的黑屏显示
      subUrls = [];

      // 重新加入恢复到初始状态，防止和控制按钮状态不符

      // 重连后摄像头方向不会改变
      me.setData({
        subUrls: [],
        showInvite: true,
        devicePosition: "front",
        muted: false,
        playVideoMuted: false,
        micphoneIcon: 'micphone_white',
        micphoneColor: '#fff',
        videoIcon: 'video_white',
        beautyIcon: 'beauty',
        videoColor: '#fff',
        beauty: 9,
        beautyColor: '#fff',
        enableCamera: true
      });
    };
    wx.emedia.mgr.onMemberJoined = function (mem) {
      console.log("++++++++++ member", mem);
      var jid = wx.WebIM.conn.context.jid;
      var identityName = jid.appKey + '_' + jid.name + '@' + jid.domain;
      // let identityName = wx.WebIM.conn.context.jid.split("/")[0]
      // 如果是自己进入会议了，开始发布流
      if (mem.name == identityName) {
        var rtcId = wx.emedia.util.getRtcId();
        wx.emedia.mgr.pubStream(rtcId).then(function (res) {
          me.setData({
            pubUrl: res.data.rtmp
          });
        });
        var enableCamera = me.enableCamera;
        console.warn("begin enable camera", me.enableCamera);

        //默认enableCamera为false  关闭摄像头时声音不会有延迟，否则有延迟
        //所以最好别用autopush
        me.setData({
          enableCamera: false,
          pubUrl: me.url + 'record_type=audio' || false
        }, function () {
          // var enableCameraDefault = true
          //if(!enableCameraDefault){ //治疗不推流的毛病
          // console.log('关闭摄像头推流')
          // setTimeout(() => {
          // 	me.LivePusherContext.start({
          // 		success: function () {
          // console.log('关闭摄像头推流', enableCamera)
          enableCamera && me.setData({
            enableCamera: enableCamera
          });
          // 		}
          // 	})
          // }, 1500)
          // }else{
          // 	me.LivePusherContext.start({
          //  	success: function () {
          //  		console.log('开始推流了', enableCamera)
          //    		enableCamera && me.setData({enableCamera: enableCamera})
          //  	}
          //  })
          // }
        });
      }
    };

    wx.emedia.mgr.onStreamAdded = function (stream) {
      console.log('%c onAddStream', 'color: green', stream);
      var streamId = stream.id;
      // setTimeout(() => {
      if (subUrls.length > 8) {
        return;
      }
      wx.emedia.mgr.subStream(streamId).then(function (data) {
        console.log('%c 订阅流成功', 'color:green', data);
        // let playContext = wx.createLivePlayerContext(streamId, me)
        var subUrl = {
          streamId: streamId,
          subUrl: data.data.rtmp,
          memName: stream.memName.split("_")[1].split("@")[0]
          // playContext: playContext
        };

        subUrls.push(subUrl);
        console.log('%c subUrls 11 ....', "background:yellow");
        console.log(subUrls);
        me.setData({
          subUrls: subUrls,
          showInvite: false
        });
      });
      // }, 2000)
    };

    wx.emedia.mgr.onStreamRemoved = function (stream) {
      console.log('%c onRemoveStream', 'color: red', stream);
      subUrls = subUrls.filter(function (item) {
        if (item.streamId != stream.id) {
          return item;
        } else {
          console.log('%c ------', 'backgroukd:yellow');
          console.log(item);
          // item.playContext.stop({
          // 	success: function(){
          // 		console.log('关闭成功')
          // 	},
          // 	complete: function(){
          // 		console.log('关闭成功')
          // 	}
          // })
        }
      });

      obj[stream.id] = false;
      me.setData({
        subUrls: subUrls
      });
      console.log('subUrls', subUrls);
    }, wx.emedia.mgr.onConfrAttrsUpdated = function (e) {
      console.log('onConfrAttrsUpdated: ', e);
    };
  }
};
exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/components/chat/multiemedia/index.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/chat/multiemedia/index-create-component',
    {
        'components/chat/multiemedia/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(384))
        })
    },
    [['components/chat/multiemedia/index-create-component']]
]);

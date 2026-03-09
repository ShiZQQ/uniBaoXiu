(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/main"],{

/***/ 0:
/*!*********************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createApp) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
__webpack_require__(/*! uni-pages */ 26);
var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 27));
var _store = _interopRequireDefault(__webpack_require__(/*! ./store */ 33));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _uviewUi = _interopRequireDefault(__webpack_require__(/*! uview-ui */ 50));
var _tuniaoUi = _interopRequireDefault(__webpack_require__(/*! tuniao-ui */ 76));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
_vue.default.use(_uviewUi.default);
// import './uni.promisify.adaptor'
// import VueCompositionAPI from "@vue/composition-api";
// Vue.use(VueCompositionAPI);

_vue.default.config.productionTip = false;
_App.default.mpType = 'app';

// 引入全局TuNiaoUI

_vue.default.use(_tuniaoUi.default);

// 引入TuNiaoUI提供的vuex简写方法
var vuexStore = __webpack_require__(/*! @/store/$tn.mixin.js */ 89);
_vue.default.mixin(vuexStore);
var app = new _vue.default(_objectSpread({
  store: _store.default
}, _App.default));
createApp(app).$mount();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createApp"]))

/***/ }),

/***/ 27:
/*!*********************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/App.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=scss& */ 47);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 49);
var render, staticRenderFns, recyclableRender, components
var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null,
  false,
  components,
  renderjs
)

component.options.__file = "App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 28:
/*!**********************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=script&lang=js& */ 29);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 29:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/App.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _index = _interopRequireDefault(__webpack_require__(/*! ./store/index.js */ 33));
var _updateCustomBarInfo = _interopRequireDefault(__webpack_require__(/*! ./tuniao-ui/libs/function/updateCustomBarInfo.js */ 35));
var _chunkArr2 = _interopRequireDefault(__webpack_require__(/*! ./utils/chunkArr */ 36));
var _pushStorage = __webpack_require__(/*! ./components/chat/pushStorage */ 37);
// require("sdk/libs/strophe");
var WebIM = wx.WebIM = __webpack_require__(/*! ./utils/WebIM */ 38)["default"];
var msgStorage = __webpack_require__(/*! ./components/chat/msgstorage */ 42);
var msgType = __webpack_require__(/*! ./components/chat/msgtype */ 45);
var disp = __webpack_require__(/*! ./utils/broadcast */ 46);
var logout = false;
function ack(receiveMsg) {
  // 处理未读消息回执
  var bodyId = receiveMsg.id; // 需要发送已读回执的消息id

  var ackMsg = new WebIM.message("read", WebIM.conn.getUniqueId());
  ackMsg.set({
    id: bodyId,
    to: receiveMsg.from
  });
  WebIM.conn.send(ackMsg.body);
}
function onMessageError(err) {
  if (err.type === "error") {
    uni.showToast({
      title: err.errorText
    });
    return false;
  }
  return true;
}
function getCurrentRoute() {
  var pages = getCurrentPages();
  if (pages.length > 0) {
    var currentPage = pages[pages.length - 1];
    return currentPage.route;
  }
  return "/";
}

// // 不包含陌生人版本(不接收陌生人消息)
// function calcUnReadSpot(message) {
//   let myName = uni.getStorageSync("myUsername");
//   let members = uni.getStorageSync("member") || []; //好友

//   var listGroups = uni.getStorageSync("listGroup") || []; //群组
//   let allMembers = members.concat(listGroups);
//   let count = allMembers.reduce(function(result, curMember, idx) {
//     let chatMsgs;
//     if (curMember.groupid) {
//       chatMsgs =
//         uni.getStorageSync(curMember.groupid + myName.toLowerCase()) || [];
//     } else {
//       chatMsgs =
//         uni.getStorageSync(
//           curMember.name && curMember.name.toLowerCase() + myName.toLowerCase()
//         ) || [];
//     }
//     return result + chatMsgs.length;
//   }, 0);
//   getApp().globalData.unReadMessageNum = count;
//   disp.fire("em.unreadspot", message);
// }

// 包含陌生人版本
//该方法用以计算本地存储消息的未读总数。
function calcUnReadSpot(message) {
  var myName = uni.getStorageSync("myUsername");
  var pushObj = uni.getStorageSync("pushStorageData");
  var pushAry = pushObj[myName] || [];
  uni.getStorageInfo({
    success: function success(res) {
      var storageKeys = res.keys;
      var newChatMsgKeys = [];
      var historyChatMsgKeys = [];
      storageKeys.forEach(function (item) {
        if (item.indexOf(myName) > -1 && item.indexOf("rendered_") == -1) {
          newChatMsgKeys.push(item);
        }
      });
      var count = newChatMsgKeys.reduce(function (result, curMember, idx) {
        var newName = curMember.split(myName)[0];
        var chatMsgs;
        chatMsgs = uni.getStorageSync(curMember) || [];
        //过滤消息来源与当前登录ID一致的消息，不计入总数中。
        chatMsgs = chatMsgs.filter(function (msg) {
          return msg.yourname !== myName;
        });
        if (pushAry.includes(newName)) return result;
        return result + chatMsgs.length;
      }, 0);
      getApp().globalData.unReadMessageNum = count;
      disp.fire("em.unreadspot", message);
    }
  });
}
function saveGroups() {
  var me = this;
  return WebIM.conn.getGroup({
    limit: 50,
    success: function success(res) {
      uni.setStorage({
        key: "listGroup",
        data: res.data
      });
    },
    error: function error(err) {
      console.log(err);
    }
  });
}
var _default = {
  globalData: {
    phoneNumber: '',
    unReadMessageNum: 0,
    userInfo: null,
    userInfoFromServer: null,
    //用户属性从环信服务器获取
    friendUserInfoMap: new Map(),
    //好友属性
    saveFriendList: [],
    saveGroupInvitedList: [],
    isIPX: false,
    //是否为iphone X
    conn: {
      closed: false,
      curOpenOpt: {},
      open: function open(opt) {
        uni.showLoading({
          title: "正在初始化客户端..",
          mask: true
        });
        this.curOpenOpt = opt;
        WebIM.conn.open(opt).then(function () {
          //token获取成功，即可开始请求用户属性。
          disp.fire("em.mian.profile.update");
          disp.fire("em.mian.friendProfile.update");
        }).catch(function (err) {
          console.log('>>>>>token获取失败', err);
        });
        this.closed = false;
      },
      reopen: function reopen() {
        if (this.closed) {
          //this.open(this.curOpenOpt);
          WebIM.conn.open(this.curOpenOpt);
          this.closed = false;
        }
      }
    },
    onLoginSuccess: function onLoginSuccess(myName) {
      uni.hideLoading();
      uni.redirectTo({
        url: "../conversation/conversation?myName=" + myName
      });
    },
    getUserInfo: function getUserInfo(cb) {
      var me = this;
      if (this.userInfo) {
        typeof cb == "function" && cb(this.userInfo);
      } else {
        // 调用登录接口
        uni.login({
          success: function success() {
            uni.getUserInfo({
              success: function success(res) {
                me.userInfo = res.userInfo;
                typeof cb == "function" && cb(me.userInfo);
              }
            });
          }
        });
      }
    },
    checkIsIPhoneX: function checkIsIPhoneX() {
      var me = this;
      uni.getSystemInfo({
        success: function success(res) {
          // 根据 model 进行判断
          if (res.model && res.model.search("iPhone X") != -1) {
            me.isIPX = true;
          }
        }
      });
    }
  },
  // getPage(pageName){
  // 	var pages = getCurrentPages();
  // 	return pages.find(function(page){
  // 		return page.__route__ == pageName;
  // 	});
  // },
  onLaunch: function onLaunch() {
    //图鸟UItombar部分
    // 获取设备的状态栏信息和自定义顶栏信息
    // store.dispatch('updateCustomBarInfo')
    (0, _updateCustomBarInfo.default)().then(function (res) {
      _index.default.commit('$tStore', {
        name: 'vuex_status_bar_height',
        value: res.statusBarHeight
      });
      _index.default.commit('$tStore', {
        name: 'vuex_custom_bar_height',
        value: res.customBarHeight
      });
    });

    // 调用 API 从本地缓存中获取数据
    // uni.setInnerAudioOption({
    //   obeyMuteSwitch: false
    // });
    var me = this;
    var logs = uni.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    uni.setStorageSync("logs", logs);
    disp.on("em.main.ready", function () {
      calcUnReadSpot();
    });
    disp.on("em.chatroom.leave", function () {
      calcUnReadSpot();
    });
    disp.on("em.chat.session.remove", function () {
      calcUnReadSpot();
    });
    disp.on("em.chat.audio.fileLoaded", function () {
      calcUnReadSpot();
    });
    disp.on("em.main.deleteFriend", function () {
      calcUnReadSpot();
    });
    disp.on("em.chat.audio.fileLoaded", function () {
      calcUnReadSpot();
    }); //
    disp.on("em.mian.profile.update", function () {
      me.fetchUserInfoWithLoginId();
    });
    disp.on("em.mian.friendProfile.update", function () {
      me.fetchFriendInfoFromServer();
    });
    WebIM.conn.listen({
      onOpened: function onOpened(message) {
        console.log("登录成功");
        if (getCurrentRoute() == "pages/login/login" || getCurrentRoute() == "pages/login_token/login_token") {
          me.globalData.onLoginSuccess(uni.getStorageSync("myUsername").toLowerCase());
        }
      },
      onReconnect: function onReconnect() {
        uni.showToast({
          title: "重连中...",
          duration: 2000
        });
      },
      onSocketConnected: function onSocketConnected() {
        uni.showToast({
          title: "socket连接成功",
          duration: 2000
        });
      },
      onClosed: function onClosed() {
        uni.showToast({
          title: "退出登录",
          icon: "none",
          duration: 2000
        });
        uni.redirectTo({
          url: "../login/login"
        });
        me.globalData.conn.closed = true;
        WebIM.conn.close();
        // uni.removeStorageSync('pushStorageData');
        // uni.clearStorageSync();
      },
      onInviteMessage: function onInviteMessage(message) {
        me.globalData.saveGroupInvitedList.push(message);
        disp.fire("em.invite.joingroup", message); // uni.showModal({
        // 	title: message.from + " 已邀你入群 " + message.roomid,
        // 	success(){
        // 		disp.fire("em.invite.joingroup", message);
        // 	},
        // 	error(){
        // 		disp.fire("em.invite.joingroup", message);
        // 	}
        // });
      },
      onReadMessage: function onReadMessage(message) {
        //console.log('已读', message)
      },
      //onPresence为旧版 ，建议参考最新增删好友api文档 ：http://docs-im.easemob.com/im/web/basics/buddy
      onPresence: function onPresence(message) {
        switch (message.type) {
          case "unsubscribe":
            break;
          // 好友邀请列表
          case "subscribe":
            for (var i = 0; i < me.globalData.saveFriendList.length; i++) {
              if (me.globalData.saveFriendList[i].from === message.from) {
                me.globalData.saveFriendList[i] = message;
                disp.fire("em.subscribe");
                return;
              }
            }
            msgStorage.saveReceiveMsg(message, "INFORM"); //存添加好友消息，方便展示通知
            me.globalData.saveFriendList.push(message);
            disp.fire("em.subscribe");
            break;
          case "subscribed":
            uni.showToast({
              title: "添加成功",
              duration: 1000
            });
            disp.fire("em.subscribed");
            break;
          case "unsubscribed":
            disp.fire("em.unsubscribed", message);
            break;
          case "direct_joined":
            saveGroups();
            uni.showToast({
              title: "已进群",
              duration: 1000
            });
            break;
          case "memberJoinPublicGroupSuccess":
            saveGroups();
            uni.showToast({
              title: "已进群",
              duration: 1000
            });
            break;
          case "invite":
            // 防止重复添加
            for (var _i = 0; _i < me.globalData.saveGroupInvitedList.length; _i++) {
              if (me.globalData.saveGroupInvitedList[_i].from === message.from) {
                me.globalData.saveGroupInvitedList[_i] = message;
                disp.fire("em.invite.joingroup");
                return;
              }
            }
            me.globalData.saveGroupInvitedList.push(message);
            msgStorage.saveReceiveMsg(message, "INFORM"); //存添加好友消息，方便展示通知
            disp.fire("em.invite.joingroup");
            break;
          case "unavailable":
            disp.fire("em.contacts.remove");
            disp.fire("em.group.leaveGroup", message);
            break;
          case "deleteGroupChat":
            disp.fire("em.invite.deleteGroup", message);
            break;
          case "leaveGroup":
            disp.fire("em.group.leaveGroup", message);
            break;
          case "removedFromGroup":
            disp.fire("em.group.leaveGroup", message);
            break;
          default:
            break;
        }
      },
      onRoster: function onRoster(message) {
        // let pages = getCurrentPages();
        // if(pages[0]){
        // 	pages[0].onShow();
        // }
      },
      onVideoMessage: function onVideoMessage(message) {
        console.log("onVideoMessage: ", message);
        if (message) {
          msgStorage.saveReceiveMsg(message, msgType.VIDEO);
        }
        calcUnReadSpot(message);
        ack(message);
        (0, _pushStorage.onGetSilentConfig)(message);
      },
      onAudioMessage: function onAudioMessage(message) {
        console.log("onAudioMessage", message);
        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.AUDIO);
          }
          calcUnReadSpot(message);
          ack(message);
          (0, _pushStorage.onGetSilentConfig)(message);
        }
      },
      onCmdMessage: function onCmdMessage(message) {
        console.log("onCmdMessage", message);
        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.CMD);
          }
          calcUnReadSpot(message);
          ack(message);
          (0, _pushStorage.onGetSilentConfig)(message);
        }
      },
      // onLocationMessage(message){
      // 	console.log("Location message: ", message);
      // 	if(message){
      // 		msgStorage.saveReceiveMsg(message, msgType.LOCATION);
      // 	}
      // },
      onTextMessage: function onTextMessage(message) {
        console.log("onTextMessage", message);
        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.TEXT);
          }
          calcUnReadSpot(message);
          ack(message);
          (0, _pushStorage.onGetSilentConfig)(message);
        }
      },
      onEmojiMessage: function onEmojiMessage(message) {
        console.log("onEmojiMessage", message);
        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.EMOJI);
          }
          calcUnReadSpot(message);
          ack(message);
          (0, _pushStorage.onGetSilentConfig)(message);
        }
      },
      onPictureMessage: function onPictureMessage(message) {
        console.log("onPictureMessage", message);
        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.IMAGE);
          }
          calcUnReadSpot(message);
          ack(message);
          (0, _pushStorage.onGetSilentConfig)(message);
        }
      },
      onFileMessage: function onFileMessage(message) {
        console.log("onFileMessage", message);
        if (message) {
          if (onMessageError(message)) {
            msgStorage.saveReceiveMsg(message, msgType.FILE);
          }
          calcUnReadSpot(message);
          ack(message);
          (0, _pushStorage.onGetSilentConfig)(message);
        }
      },
      // 各种异常
      onError: function onError(error) {
        console.log(error); // 16: server-side close the websocket connection
        // if (error.type == WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED) {
        //   // if(error.type == WebIM.statusCode.WEBIM_CONNCTION_DISCONNECTED && !logout){
        //   // if(WebIM.conn.autoReconnectNumTotal < WebIM.conn.autoReconnectNumMax){
        //   // 	return;
        //   // }
        //   uni.showToast({
        //     title: "websocket 断开",
        //     duration: 1000
        //   });
        //   uni.redirectTo({
        //     url: "../login/login"
        //   });
        //   logout = true;
        //   return;
        // } // 8: offline by multi login

        // if (error.type == WebIM.statusCode.WEBIM_CONNCTION_SERVER_ERROR) {
        //   uni.showToast({
        //     title: "offline by multi login",
        //     duration: 1000
        //   });
        //   uni.redirectTo({
        //     url: "../login/login"
        //   });
        // }

        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_OPEN_ERROR) {
          uni.hideLoading();
          disp.fire("em.error.passwordErr"); // uni.showModal({
          // 	title: "用户名或密码错误",
          // 	confirmText: "OK",
          // 	showCancel: false
          // });
        }

        if (error.type == WebIM.statusCode.WEBIM_CONNCTION_AUTH_ERROR) {
          uni.hideLoading();
          disp.fire("em.error.tokenErr");
        }
        if (error.type == "socket_error") {
          ///sendMsgError
          console.log("socket_errorsocket_error", error);
          uni.showToast({
            title: "网络已断开",
            icon: "none",
            duration: 2000
          });
          disp.fire("em.error.sendMsgErr", error);
        }
      }
    });
    this.globalData.checkIsIPhoneX();
  },
  methods: {
    fetchUserInfoWithLoginId: function fetchUserInfoWithLoginId() {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var userId, _yield$uni$WebIM$conn, data;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return uni.WebIM.conn.user;
              case 2:
                userId = _context.sent;
                if (!userId) {
                  _context.next = 16;
                  break;
                }
                _context.prev = 4;
                _context.next = 7;
                return uni.WebIM.conn.fetchUserInfoById(userId);
              case 7:
                _yield$uni$WebIM$conn = _context.sent;
                data = _yield$uni$WebIM$conn.data;
                _this.globalData.userInfoFromServer = Object.assign({}, data[userId]);
                _context.next = 16;
                break;
              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);
                console.log(_context.t0);
                uni.showToast({
                  title: "用户属性获取失败",
                  icon: "none",
                  duration: 2000
                });
              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[4, 12]]);
      }))();
    },
    fetchFriendInfoFromServer: function fetchFriendInfoFromServer() {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var friendList, res, _yield$uni$WebIM$conn2, data, newArr, i, _yield$uni$WebIM$conn3, _data;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                friendList = [];
                _context2.prev = 1;
                _context2.next = 4;
                return uni.WebIM.conn.getContacts();
              case 4:
                res = _context2.sent;
                friendList = Object.assign([], res === null || res === void 0 ? void 0 : res.data);
                if (!(friendList.length && friendList.length < 99)) {
                  _context2.next = 14;
                  break;
                }
                _context2.next = 9;
                return uni.WebIM.conn.fetchUserInfoById(friendList);
              case 9:
                _yield$uni$WebIM$conn2 = _context2.sent;
                data = _yield$uni$WebIM$conn2.data;
                _this2.setFriendUserInfotoMap(data);
                _context2.next = 25;
                break;
              case 14:
                newArr = (0, _chunkArr2.default)(friendList, 99);
                i = 0;
              case 16:
                if (!(i < newArr.length)) {
                  _context2.next = 25;
                  break;
                }
                _context2.next = 19;
                return uni.WebIM.conn.fetchUserInfoById(newArr[i]);
              case 19:
                _yield$uni$WebIM$conn3 = _context2.sent;
                _data = _yield$uni$WebIM$conn3.data;
                _this2.setFriendUserInfotoMap(_data);
              case 22:
                i++;
                _context2.next = 16;
                break;
              case 25:
                _context2.next = 31;
                break;
              case 27:
                _context2.prev = 27;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);
                uni.showToast({
                  title: "用户属性获取失败",
                  icon: "none"
                });
              case 31:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 27]]);
      }))();
    },
    setFriendUserInfotoMap: function setFriendUserInfotoMap(data) {
      if (Object.keys(data).length) {
        for (var key in data) {
          if (Object.hasOwnProperty.call(data, key)) {
            var values = data[key];
            Object.values(values).length && this.globalData.friendUserInfoMap.set(key, values);
          }
        }
      }
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 47:
/*!*******************************************************************************************!*\
  !*** C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/App.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./App.vue?vue&type=style&index=0&lang=scss& */ 48);
/* harmony import */ var _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_HBuilderX_4_29_2024093009_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/ShiQ/Desktop/uniBaoXiu/uniBaoXiu/App.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[0,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/main.js.map
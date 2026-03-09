let WebIM = require("../../utils/WebIM.js")["default"];
let msgType = require("./msgtype.js");

// 重构 getMsgData 方法：补充兜底和 replace 存在性判断
function getMsgData(sendableMsg, type) {
	// 1. 兜底取值：优先取 value，其次取 body.msg，最终兜底为空字符串
	let content = sendableMsg.value || sendableMsg.body?.msg || "";

	if (type == msgType.TEXT) {
		// 2. 增加 replace 方法存在性判断，避免调用 undefined.replace
		return content.replace ? content.replace(/\n/gm, "") : "";
	} else if (type == msgType.EMOJI) {
		return content; // 直接返回兜底后的内容
	} else if (
		type == msgType.IMAGE ||
		type == msgType.VIDEO ||
		type == msgType.AUDIO
	) {
		// 3. 对 body.body 做可选链兜底，避免访问 undefined 的属性
		return sendableMsg.body?.body?.url || "";
	} else if (type == msgType.FILE) {
		return sendableMsg.body?.body?.url || "";
	}

	return "";
}

module.exports = function(sendableMsg, type, myName) {
	console.log(sendableMsg, 'sendableMsg')
	//   var time = WebIM.time();
	var renderableMsg = {
		info: {
			from: sendableMsg.body?.from || "", // 补充可选链兜底
			to: sendableMsg.body?.to || "" // 补充可选链兜底
		},
		username: sendableMsg.body?.from == myName ?
			sendableMsg.body?.to || "" :
			sendableMsg.body?.from || "",
		yourname: sendableMsg.body?.from || "", // 补充兜底
		msg: {
			type: type,
			url: sendableMsg.body?.url || "", // 补充可选链兜底
			data: getMsgData(sendableMsg, type),
			ext: sendableMsg.body?.ext || {} // 补充兜底
		},
		style: sendableMsg.body?.from == myName ? "self" : "", // 补充可选链
		time: sendableMsg.time || Date.now(),
		mid: `${sendableMsg.type || ""}${sendableMsg.id || ""}`, // 兜底空字符串避免拼接 undefined
		id: sendableMsg.id || "",
		chatType: sendableMsg.body?.chatType || "" // 补充可选链兜底
	};

	if (type == msgType.IMAGE) {
		renderableMsg.msg.size = {
			width: sendableMsg.body?.body?.size?.width || 0, // 补充可选链兜底
			height: sendableMsg.body?.body?.size?.height || 0 // 补充可选链兜底
		};
	} else if (type == msgType.AUDIO) {
		renderableMsg.msg.length = sendableMsg.body?.length || 0; // 补充兜底
	} else if (type == msgType.FILE) {
		renderableMsg.msg.url = sendableMsg?.body?.body?.url || "";
		renderableMsg.msg.filename = sendableMsg?.body?.body?.filename || "";
		renderableMsg.msg.size = sendableMsg?.body?.body?.file_length || 0;
	}

	return renderableMsg;
};
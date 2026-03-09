const express = require('express');

//登录需要
const mysql = require('mysql');
const bodyParser = require('body-parser');
const router = express.Router();

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'repairs'
});

//登录需要
db.connect((err) => {
	if (err) throw err;
	console.log('Connected to MySQL database');
});

//登录需要
router.use(bodyParser.urlencoded({
	extended: true
}));
router.use(bodyParser.json());


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});



// 处理登录请求
router.post('/login', (req, res) => {
	const phone = req.body.phone;
	const password = req.body.password;

	// 查询数据库中是否存在匹配的用户信息
	const sql = 'SELECT * FROM stuinfo WHERE phone = ? AND password = ?';
	db.query(sql, [phone, password], (err, result) => {
		if (err) throw err;
		if (result.length > 0) {
			// 用户存在，登录成功
			// res.send('存在账号');
			res.redirect('/home');
		} else {
			// 用户不存在，登录失败
			res.send('不存在账号');
		}
	});
});





module.exports = router;

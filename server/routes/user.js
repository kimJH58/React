const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const mysql = require('sync-mysql');

require('dotenv').config();

var mysqlConfig = {
    host : "127.0.0.1",
    port : "3306",
    multipleStatements: true,
    dateStrings: "date",
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
};

var conn = new mysql(mysqlConfig);

router.post('/login', function(req, res){
    var id = req.body.id;
    var pwd = req.body.pwd;

    var idChk = conn.query(`SELECT account, pwd FROM tbl_user WHERE account='${id}'`)
    if(idChk == undefined){
        res.send({resultCode:300, data:'존재하지 않는 아이디 입니다.'})
        return;
    }else{
        if(idChk.pwd[0] != pwd){
            res.send({resultCode:301, data:'잘못된 비밀번호 입니다.'})
            return;
        }
        res.send({resultCode:200, data:'로그인 성공'});
    }
})


module.exports = router;
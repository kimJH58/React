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

router.post('/createPage', function(req, res) {
    console.log(req.body);
    var resultCode = 200;
    var title = req.body.title;
    var body = req.body.body;

    if(title == undefined){
        resultCode = 400;
        return;
    }
    if(body == undefined){
        resultCode = 400;
        return;
    }
    var sql = `INSERT INTO tbl_blog_post (title, body) VALUE ("`+title+`","`+body+`");`;
    conn.query(sql);
    res.send({result:resultCode});
});


module.exports = router;
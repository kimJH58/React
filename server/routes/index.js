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

// 추가 : id = 0
router.post('/post', function(req, res) {
    var resultCode = 200;
    var id = req.body.id;
    var title = req.body.title;
    var body = req.body.body;

    if(title == undefined){
        resultCode = 400;
        res.send({result:resultCode});
        return;
    }
    if(body == undefined){
        resultCode = 400;
        res.send({result:resultCode});
        return;
    }
    if(id == 0){
        var sql = `INSERT INTO tbl_blog_post (title, body) VALUE ("${title}","${body}");`;
    }else{
        var sql = `UPDATE tbl_blog_post SET title="${title}", body="${body}" WHERE id=${id};`;
    }
    conn.query(sql);
    res.send({result:resultCode});
});

router.get('/getPostList', (req, res) => {
    var list = conn.query(`SELECT * FROM tbl_blog_post;`);
    res.send(list);
});

router.get('/getPost/:id', (req, res)=>{
    var id =req.params.id;
    
    var data = conn.query(`SELECT * FROM tbl_blog_post WHERE id=${id}`);
    if(data.length < 1){
        res.send({resultCode:400, data:`no data`});
        return;
    }
    res.send({resultCode:200, data});
})

router.get('/deletePost', (req, res)=>{
    var id = req.query.id;
    console.log(id);
    conn.query(`DELETE FROM tbl_blog_post WHERE id = ${id}`);
    res.send();
})



module.exports = router;
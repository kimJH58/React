const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const api = require('./routes/index');
const user = require('./routes/user');

const corsOptions = {
    origin: "http://localhost:3000",
};
app.use(session({ resave: true, secret: '123456', saveUninitialized: true }));
app.use(bodyParser.json());

app.use(express.json({ limit : "50mb" }));
app.use(express.urlencoded({ limit:"50mb", extended: true }));

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use('/api', api);
app.use('/user',user);



app.listen(3002, () =>{
    console.log('Server run : http://localhost:3002');
})
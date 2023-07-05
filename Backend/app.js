const express= require('express');
const cors = require('cors');


const bodyParser=require('body-parser');
const sequelize=require('./database/database');
const Product = require('./model/product');

const app = express();

const shopRoutes=require('./routes/shop');

app.use(bodyParser.json({ extended: false }));
app.use(cors());
app.use(shopRoutes);

sequelize.sync().then(result=>{
    //console.log(result);
    app.listen(5000);
}).catch(err=>console.log(err));


//import express from 'express'
//import mysql from 'mysql'
// import cors from 'cors'
// import bodyparser from "body-parser"
// import multer from 'multer';
// import path from 'path';

const express = require("express");
const app = express();
const port = 5000;
const bodyparser = require("body-parser");
const mysql = require('mysql');
const cors = require('cors');
const multer = require('multer')
const path = require('path')
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "ecommercedb"
});
// conn.connect(function (err) {
//     if (err) throw err;
//     console.log('Database is connected successfully !');
// });
// module.exports = conn;

app.use(cors());
// app.use('/server', express.static("./public"))
app.use(express.static("public"))
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        //callBack(null, './public/images/')
        callBack(null, 'public/images/')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
});

// module.exports={ 
//     displayImage:function(callback){
//      // check unique email address
//      var sql='SELECT image_name FROM images';
//      db.query(sql,function (err, data, fields) {
//      if(err) throw err
//      return callback(data);
//     })
//     }
//   }

app.get("/api/get", (req, res) => {
    const sqlGet = "Select * from newproducts";
    db.query(sqlGet, (err, result) => {
        console.log('error', err);
        // console.log('result',result);
        res.send(result);
    });
});

app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "Select * from newproducts where id = ?";
    db.query(sqlGet, id, (err, result) => {
        if (err) {
            console.log('error', err);
        }
        res.send(result);
    });
});


app.post("/api/post", (req, res) => {
    const { productId, productName, productBrandName, productCatgeory, productQty, productWght, productprice, productdiscount, productdiscrip, productImageId } = req.body;
    const sqlInsert = "Insert Into newproducts (productId,productName,productBrandName,productCategory,productAvailableQty,productWeight,productPrice,productPercentageDiscount,productDiscription,productDiscountPrice,productImageId) Values (?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlInsert, [productId, productName, productBrandName, productCatgeory, productQty, productWght, productprice, productdiscount, productdiscrip, 0, productImageId], (err, result) => {
        if (err) {
            console.log(err);
        }
        // else {
        //     res.send("true");
        // }
    });
});

app.post("/upload", upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("No file upload");
    } else {
        console.log(req.file.filename)
        var imgsrc = req.file.filename
        var sqlInsert = "Insert Into productimage (productImageSource) Values (?)";
        db.query(sqlInsert, imgsrc, (err, result) => {
            if (err) {
                console.log(err);
            }
            else {
                //res.sendStatus(result.insertId);
                console.log(result.insertId);
                const lastinsertedId = result.insertId;
                //res.send(lastinsertedId);
                res.status(200).send((lastinsertedId).toString());
                //res.status(200).json({message: "Message",data: lastinsertedId});
            }
        })
    }
})

app.put("/api/put/:id", (req, res) => {
    const { id } = req.params;
    const { productId, productName, productBrandName, productCatgeory, productAvailableQty, productWeight, productPrice, productPercentageDiscount, productDiscription } = req.body;
    const sqlUpdate = "Update newproducts SET productId = ? ,productName = ?,productBrandName = ?,productCategory = ?,productAvailableQty = ?,productWeight = ?,productPrice = ?,productPercentageDiscount = ?,productDiscription = ? Where id = ?";
    db.query(sqlUpdate, [productId, productName, productBrandName, productCatgeory, productAvailableQty, productWeight, productPrice, productPercentageDiscount, productDiscription, id], (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send("true");
        }
    });
});

app.get("/api/delete/:deleteid", (req, res) => {
    const { deleteid } = req.params;
    const sqlDelete = "Delete from newproducts where id = ?";
    db.query(sqlDelete, deleteid, (err, result) => {
        if (err) {
            console.log('error', err);
        }
        res.send(result);
    });
});

// app.get('/', (req, res) => {
//     const sql = "Select * from productimage";
//     db.query(sql, (err, result) => {
//         if (err) return res.json("Error");
//         return res.json(result);
//     })
// })

app.get('/api/getAllproduct', (req, res) => {
    const sql = "Select a.id, a.productId,a.productName,a.productAvailableQty,a.productPrice,a.productImageId,a.productCategory,b.productCategories,c.productImageSource from ecommercedb.newproducts as a left join ecommercedb.productcategories as b on b.id = a.productCategory left join ecommercedb.productimage as c on c.id = a.productImageId";
    db.query(sql, (err, result) => {
        if (err) return res.json("Error");
        console.log(result);
        return res.json(result);
    })
})

app.get('api/get/:id', (req, res) => {
    const { id } = req.params;
    const sql = "Select a.*,b.productImageSource from ecommercedb.newproducts as a left join ecommercedb.productimage as b on b.Id = a.productImageId where a.Id = ? ";
    db.query(sql, id, (err, result) => {
        if (err) {
            console.log('error', err);
        }
        res.send(result);
    });
});

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>
    console.log(`Server is running at port ${PORT}`)
);


const express = require("express");
const router = express.Router();
const mysql = require('mysql');
const sgMail = require('@sendgrid/mail');
const mailgun = require("mailgun-js");
const DOMAIN = process.env.DOMAIN_KEY;
const mg = mailgun({apiKey: process.env.MAILGUN_API_KEY, domain: DOMAIN});
const connection = mysql.createPool({
    connectionLimit: 100,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});
// connection.connect(function(err) {
//     if (err) {
//         console.log("Error " + err);
//     }
//     console.log("Connected Contents API!");
// });
router.get('/',(req,res)=>{
    res.send("Hello Apı Go to Games for /getContents");
    });
router.get('/getContents/:id',(req, res) => {
    let sql = 'Select ReleaseTime,Income,GameImage,GameDescription,username,email from Contents JOIN GAMES ON(Contents.Gameid=GAMES.idGames)JOIN user ON(Contents.usr_id=user.UserID)WHERE Gameid ='+req.params.id;
    
    let query = connection.query(sql, (err, results) => {
     if(err){
         return res.send(err)
     }
     else{
         return res.json({
             data:results
            })
     }
    });
  });
  router.get('/getUserid', async function(req, res) {
    if (req.query === undefined ) {
        return res.status(401).send({ status: "error", message: "Not yet" });
    } else {
        connection.query('SELECT UserID FROM user WHERE username= ?', [req.query.name], function(error,result,fields){
            if (result.length > 0) {
                const retData = {
                    idGames: result[0].name,
                };

                return res.json({
                    data:result
                   })
            } else {
                return res.status(200).send({ status: "error", message: "User not found" });
            }
        });
    }
})
  router.get('/getGameid', async function(req, res) {
    if (req.query === undefined ) {
        return res.status(401).send({ status: "error", message: "Not yet" });
    } else {
        connection.query('SELECT idGames FROM GAMES WHERE GameTitle= ?', [req.query.name], function(error,result,fields){
            if (result.length > 0) {
                const retData = {
                    idGames: result[0].name,
                };

                return res.json({
                    data:result
                   })
            } else {
                return res.status(200).send({ status: "error", message: "User not found" });
            }
        });
    }
})
router.post('/add',function(req,res){
    const data = req.body;
            if(data.Gameid !== "" && data.usr_id !== "" && data.ReleaseTime !== "" && data.Income !== 0 ){
                    connection.query('SELECT * FROM Contents WHERE Gameid = ?', [data.Gameid], function(error,result,fields){
                        if(result.length>0) {
                            res.status(401).json({ status: 'error', message: "An error occured"});
                        }else{
                            const sql = "INSERT INTO Contents (ReleaseTime, Income, Gameid, usr_id) VALUES ?";
                            const values = [
                                [data.ReleaseTime, data.Income, data.Gameid, data.usr_id]
                            ];
                            console.log("Inserting contents...");
                            connection.query(sql, [values], async function (err, result) {
                                if (err){
                                    console.log(err);
                                }
        
                                console.log("Number of records inserted: " + result.affectedRows);
                                res.status(200).json({ status: 'success', message: "Inserted Data!"});
                            });
                        };
                    });
                
            }else{
                res.status(200).json({
                    status: "error"
                });
            }
})
  
  module.exports = router;

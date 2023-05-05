const mysql = require("mysql2");

const conn = mysql.createConnection({
    user:"root",
    host:"localhost",
    password:"a30031990",
    database:"history_patient"
});

conn.connect((err)=>{
    if(err) throw err;
    console.log("DB connected");
});



module.exports = conn;
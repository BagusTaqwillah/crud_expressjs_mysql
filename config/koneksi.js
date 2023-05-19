const mysql=require("mysql")
const koneksi=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"latihan"
})
koneksi.connect();
if (koneksi){
    console.log("database terkoneksi")
}
module.exports=koneksi
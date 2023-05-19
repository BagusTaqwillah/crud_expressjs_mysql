const db=require("../config/koneksi")
exports.index=(req,res)=>{
    db.query("SELECT * FROM latihan",(err,result)=>{
        if(err) throw err;
        res.render("user/index",{
            title:"Halaman User",
            user:result
        })
    })
}
exports.addUser=(req,res)=>{
    res.render("user/form_tambah",{
        title:"Form Tambah"
    })
}
exports.prossAdd=(req,res)=>{
    var nama=req.body.nama
    var umur=req.body.umur
    var sql=`INSERT INTO latihan (nama,umur) VALUES ('${nama}','${umur}')`;
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect("/user","msg :berhasil di tambah")
        }
    })
}
exports.deleteUser=(req,res)=>{
    var id =req.params.userId
    var sql =`DELETE FROM latihan WHERE id_latihan='${id}'`;
    db.query(sql,(err,result)=>{
        if (err) {
           res.send(err) 
        }else{
            res.redirect("/user")
        }
    })
}
exports.updateUser=(req,res)=>{
    var id=req.body.id_latihan
    var nama=req.body.nama
    var umur=req.body.umur
    var sql=`UPDATE  latihan SET nama="${nama}", umur="${umur} WHERE id_latihan="${id}""`;
    db.query(sql,(err,result)=>{
        if (err) {
            console.log(err)
        }else{
            res.redirect("/user")
        }
    })
}
exports.editUser=(req,res)=>{
    var id=req.params.id;
    var sql=`SELECT * FROM latihan WHERE id_latihan=${id}`;
    db.query(sql,(err,result)=>{

        if (err) throw err;
        res.render("user/form_edit",{
            title:"Form Edit User",
            user:result[0]
        })
    })
}
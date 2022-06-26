const url="";
let dbparams=
{
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'ajinkya',
	port:3306
}; // change port to 3306 that may be the port mostly.


const mysql = require('mysql2');
const con=mysql.createConnection(dbparams);
console.log("db adventures");


const express = require('express');
const app = express();

app.use(express.static("sf"))
app.get('/pincode',(req,res)=>{


    let input= req.query.pincode;
    let output={status:false, city:"",message:"Pincode not found"};

    con.query('select area from pinarea where pincode=?',[input],(err,rows)=>{
        if(err){
            console.log("error has occured let us see");
        }
        else{
            if(rows.length>0)
            {
                output.status=true;
                output.message="Pincode found";
                output.city=rows[0].area;
                
            }
        }
        res.send(output);
    })

});



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  



app.listen(700,function(){
    console.log("server listening at port 700 ...")
});

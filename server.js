const express= require('express');
const multer= require('multer');
const ejs= require('ejs');
const path= require('path');

//Init express
const app= express();

//EJS
app.set('view engine','ejs');

//Public Folder
app.use(express.static('./public')); 

const PORT= process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.render('index');
})


app.listen(PORT, () =>{
    console.log(`Server Running on port ${PORT}`);
})
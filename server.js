const express= require('express');
const multer= require('multer');
const ejs= require('ejs');
const path= require('path');

//Init express
const app= express();

const PORT= process.env.PORT || 5000;



app.listen(PORT, () =>{
    console.log(`Server Running on port ${PORT}`);
})
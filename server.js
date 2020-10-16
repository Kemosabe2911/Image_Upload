const express= require('express');
const multer= require('multer');
const ejs= require('ejs');
const path= require('path');

//Set Storage Engine
const storage= multer.diskStorage({
    destination: './public/uploads',
    filename: function(req,file,cb){
        cb(null,file.filename + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Init Upload
const upload= multer({
    storage: storage
}).single('pImage');


//Init express
const app= express();

//EJS
app.set('view engine','ejs');

//Public Folder
app.use(express.static('./public')); 

const PORT= process.env.PORT || 3000;

app.get('/', (req,res)=>{
    res.render("index");
});


app.listen(PORT, () =>{
    console.log(`Server Running on port ${PORT}`);
});
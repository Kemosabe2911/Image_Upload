const express= require('express');
const multer= require('multer');
const ejs= require('ejs');
const path= require('path');

//Set Storage Engine
const storage= multer.diskStorage({
    destination: './public/uploads',
    filename: function(req,file,cb){
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

//Init Upload
const upload= multer({
    storage: storage,
    fileFilter: function(req,file,cb){
        checkFileType(file,cb);
    }
}).single('pImage');

//Check File Type
function checkFileType(file,cb){
    //Allowed ext
    const filetypes= /jpeg|jpg|png|gif/;
    //Check ext
    const extname= filetypes.test(path.extname(file.originalname).toLowerCase());
    //Check mime
    const mimetype= filetypes.test(file.mimetype);

    if(mimetype && extname){
        return cb(null, true);
    }else{
        cb("Error: Only Images!!!");
    }
}


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

app.post('/uploads', (req,res)=>{
    upload(req,res,(err) =>{
        if(err){
            res.render('index',{msg:err});
        }
        else{
            if(req.file == undefined){
                res.render('index',{
                    msg: 'Error: No File Selected!'
                });
            }else{
                console.log(req.file.filename);
                res.render('index',{
                    msg: 'File Uploaded',
                    img: `/uploads/${req.file.filename}`
                });
            }
        }
    });
});


app.listen(PORT, () =>{
    console.log(`Server Running on port ${PORT}`);
});
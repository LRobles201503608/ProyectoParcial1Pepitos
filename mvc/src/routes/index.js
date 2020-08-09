var express= require('express');
var router=express.Router();
const index_controller=require('../controllers/index_controller');
const cors = require('cors');


router.get('/ejemplo',index_controller.funcionprueba);

router.get('/view',function(req,res,next){
    res.render('vista.html');
});

router.get('/login',function(req,res,next){
    res.render('login.html');
});

router.post('/input',(req,res,next)=>{
    let entrada = req.body;
    console.log(entrada);
    res.send(JSON.stringify('bienvenido'));
});

module.exports=router;
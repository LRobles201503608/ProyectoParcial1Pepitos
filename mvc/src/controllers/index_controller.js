const funcionprueba=(req,res)=>{
    var a= {
        mensaje:'hola'
    }
    res.send(a);
}

module.exports={
    funcionprueba:funcionprueba
}
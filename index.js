const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/instagram',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,    
    useCreateIndex: true
}, (error, _) => {
    if(error){
        console.log('Error')
    }else{
        console.log('Conexion')
    }
})
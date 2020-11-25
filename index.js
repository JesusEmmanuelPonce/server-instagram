const mongoose = require('mongoose')
const { ApolloServer } = require('apollo-server')
const typeDefs = require('./gql/schemas')
const resolvers = require('./gql/resolver')

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

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()
    .then((response)=>{
        console.log(`Port: ${response.url}`)
        console.log(response)
    })
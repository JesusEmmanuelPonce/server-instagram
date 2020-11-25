const resolvers = {
    Query: {
        // user
        getUser: () => {
            console.log("obteniendo usuario")
            return null
        }
    }
}

module.exports = resolvers
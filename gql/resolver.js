const resolvers = {
    Query: {
        // user
        getUser: () => {
            console.log("obteniendo usuario")
            return null
        }
    },
    Mutation: {
        register: (_, { input }) => {
            console.log('Registrando')
            console.log(input)
            return input
        }
    }
}

module.exports = resolvers
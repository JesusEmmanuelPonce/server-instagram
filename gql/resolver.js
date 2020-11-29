const UserController = require('../controllers/user')
const resolvers = {
    Query: {
        // user
        getUser: () => {
            console.log("obteniendo usuario")
            return null
        }
    },
    Mutation: {
        // user
        register: (_, { input }) => UserController.register(input),
        login: (_, { input }) => UserController.login(input)
    }
}

module.exports = resolvers
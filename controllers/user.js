const User = require('../models/user')
const bcrypt = require('bcryptjs')

exports.register = async(input) => {

    const newUser = input

    newUser.email = newUser.email.toLowerCase()
    newUser.name = newUser.name.toLowerCase()

    const { email, username, password } = newUser

    const findEmail = await User.findOne({ email })
    if (findEmail) throw new Error('El email no esta disponible')
    
    const findUsername = await User.findOne({ username })
    if(findUsername) throw new Error('El username no esta disponible')

    const salt = await bcrypt.genSaltSync(10)
    newUser.password = await bcrypt.hash(password, salt)

    try {
        const user = new User(newUser)
        user.save()
        return user
    } catch (error) {
        console.log(error)
    }
}

exports.login = async(input) => {
    const { email, password } = input
    
    const userFound = await User.findOne({ email: email.toLowerCase() })
    if(!userFound) throw new Error('Email o contraseña incorrecta')

    const passwordSuccess = await bcrypt.compare(password, userFound.password)

    if(!passwordSuccess) throw new Error ('Email o contraseña incorrecta')

    return {
        token: 'asdasdas'
    }

}
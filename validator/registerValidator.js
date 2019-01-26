const validator = require("validator");

const validate = user => {
    error ={};

    if(!user.name){
        error.name = "Plz insert name"
    }

    if(!user.email){
        error.email = "Plz insert email"
    }else if(!validator.isEmail(user.email)){
        error.email = "Plz provide valide email."
    }

    if(!user.password){
        error.password = "Plz insert password"
    }else if (user.password.length < 8){
        error.password = "Plz insert password min 8 caracter"
    }

    if(!user.confirmPassword){
        error.confirmPassword = "Plz insert confirm Password"
    }else if(user.confirmPassword != user.password){
        error.confirmPassword = "your password is not same."
    }

    return {
        error,
        isValid : Object.keys(error).length = 0
    }
}

module.exports = validate;
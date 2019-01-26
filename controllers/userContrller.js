const registerValidator = require("../validator/registerValidator");
var bcrypt = require('bcryptjs');
module.exports = {
    login(req, res){
        let name = req.body.name
        let email = req.body.email
        res.json({
            message: 'hello, welcome Mr. ' + name + ' to the login page. Your Email address is : ' + email + '. This is your first node.js app.'
        })
    },
    register(req, res){
        let {name, email, password, confirmPassword} = req.body;

        let validate = registerValidator({name, email, password, confirmPassword});

        if(!validate.isValid){
            res.status(400).json(validate.error);
        }else {
           User.findOne({email})
               .then(user =>{
                 if(user){
                     res.status(400).json({
                         message : "Email is already exist."
                     })
                 }

                   bcrypt.genSalt(10, function(err, salt) {
                       bcrypt.hash("B4c0/\/", salt, function(err, hash) {

                           if(err){
                               return res.status(500).json({
                                   message : 'server error'
                               })
                           }

                           // Store hash in your password DB.
                           var user = new User({
                               name,
                               email,
                               password : hash
                           });

                           res.json(user);
                       });

                   });
               }).catch(error => {
                   console.log("server error occurred.");
               res.status(4500).json({
                   message : 'server error occurred.'
               });
           });
        }


    }
}
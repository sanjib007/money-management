const router = require('express').Router({strict: true});

const {login, register} = require("../controllers/userContrller");

// registration route
router.post('/register', register);


// login route
router.post('/login', login);


module.exports = router;
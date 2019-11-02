const Users = require('./controller.auth');

module.exports = (router)=>{
    router.post('/registro', Users.createUser);
    router.post('/login', Users.loginUser);
}
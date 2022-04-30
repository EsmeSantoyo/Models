const User = require('./../models/user')
class UserService {
    static create(id, username, name){
        return new User(id, username, name, "bio default")
    }
    
    static getInfo(user){
        return [user.id, user.username, user.name, user.bio]
    }

    static updateUserUsername(user, newUsername){
        user.username = newUsername
    }

    static getAllUsernames(users){
        var response = [];
        users.forEach(user => { response.push(user.username) });
        return response
    }
}

module.exports = UserService

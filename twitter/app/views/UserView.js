const UserService = require("./../services/UserService")

class UserView {
    constructor (error) {
        this.error = error;
    }

    static createUser(payload){
        var response;
        if (payload === null){
            response = new UserView("payload no existe")
        } else {
            response = UserService.create(1, "carlogilmar", "Carlo")
        }
        return response
    }
}

module.exports = UserView

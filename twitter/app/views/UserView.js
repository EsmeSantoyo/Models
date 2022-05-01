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
            if (typeof payload.id != "number"){
                response = new UserView("necesitan tener un valor valido")
            } else if (typeof payload.name != "string"){
                response = new UserView("necesitan tener un valor valido")
            } else if (typeof payload.username != "string"){
                response = new UserView("necesitan tener un valor valido")
            } else {
                response = UserService.create(1, "carlogilmar", "Carlo")
            }
        }
        return response
    }
}

module.exports = UserView

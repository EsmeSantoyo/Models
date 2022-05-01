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
            if (typeof payload.id != "number" || payload.id == null){
                response = new UserView("necesitan tener un valor valido")
            } else if (typeof payload.name != "string" || payload.name == null){
                response = new UserView("necesitan tener un valor valido")
            } else if (typeof payload.username != "string" || payload.username == null){
                response = new UserView("necesitan tener un valor valido")
            } else {
                response = UserService.create(payload.id, payload.username, payload.name)
            }
        }
        return response
    }
}

module.exports = UserView

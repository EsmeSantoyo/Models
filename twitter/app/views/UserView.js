const UserService = require("./../services/UserService")

class UserView {
    constructor (error) {
        this.error = error;
    }

    static createUser(payload){
        var response;
        const types = {id:"number", name:"string", username:"string"}
        if (payload === null){
            response = new UserView("payload no existe")
        } else {
            for(let item in payload){
                if (typeof payload[item] != types[item] || payload[item] == null){
                    response = new UserView("necesitan tener un valor valido")
                }   
            }
            if (!response){
                response = UserService.create(payload.id, payload.username, payload.name)
            }
        }
        return response
    }
}

module.exports = UserView

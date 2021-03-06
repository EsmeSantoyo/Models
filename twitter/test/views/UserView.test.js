const UserView = require("./../../app/views/UserView")

describe("Tests for UserView", () => {
    test("Return an error object when try to create a new user with a null payload", () => {
        const payload = null;
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/payload no existe/)
    });
    test("Return an error object when try to create a new user with a payload with invalid properties", () => {
        const payload = {username: null, name: 12, id: "id"}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    });
    test("Return an error object when try to create a new user with a payload with missing properties", () => {
        const payload = {username: null}
        const result = UserView.createUser(payload)
        expect(result.error).toMatch(/necesitan tener un valor valido/)
    });
    test("Create user by given valid payload", () => {
        const payload = {username: "username", name: "name", id:1}
        const result = UserView.createUser(payload)
        expect(result.username).toBe("username")
        expect(result.name).toBe("name")
        expect(result.id).toBe(1)
    });
});

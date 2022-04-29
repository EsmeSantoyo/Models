const User = require('./../../app/models/user')

describe("Unit Tests for user class", () => {
    test("Create an User object", () => {
        const user = new User(1, "Carlogilmar", "Carlo", "Bio")
        expect(user.id).toBe(1);
        expect(user.username).toBe("Carlogilmar");
        expect(user.name).toBe("Carlo");
        expect(user.bio).toBe("Bio");
        expect(user.dataCreated).not.toBeUndefined();
        expect(user.lastUpdated).not.toBeUndefined();
    });
    test("Add getters", () => {
        const user = new User(1, "Carlogilmar", "Carlo", "Bio")
        expect(user.getUsername).toBe("Carlogilmar");
        expect(user.getBio).toBe("Bio");
        expect(user.getDataCreated).not.toBeUndefined();
        expect(user.getLastUpdated).not.toBeUndefined();
    });
    test("Add setters", () => {
        const user = new User(1, "Carlogilmar", "Carlo", "Bio")
        user.setUsername = "Nuevo usuario"
        expect(user.username).toBe("Nuevo usuario");
        user.setBio = "Nueva bio"
        expect(user.bio).toBe("Nueva bio");
    });
});

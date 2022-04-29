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
});

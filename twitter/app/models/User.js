class User {
    constructor (id, username, name, bio, dataCreated, lastUpdated) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dataCreated = dataCreated;
        this.lastUpdated = lastUpdated;
    }
}

module.exports = User

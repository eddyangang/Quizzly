class User {
    constructor(name, room, id, score=0){
        this.name = name,
        this.room = room,
        this.id = id,
        this.score = score
    }
}

module.exports = User
var Character ={
    name: "",
    age: 0,
    difficulty = 0,
    kindness = 0,
    cruelty = 0, 
    money = 0,
    health = 0,
    wantedLvl = 0,
}
function setCharacter(name, age, difficulty){
    return Character(
        this.name = name,
        this.age = age,
        this.difficulty = difficulty,
    )
}

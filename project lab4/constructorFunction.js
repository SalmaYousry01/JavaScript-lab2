function personConstructor(fullName, money, sleepMood, healthRate) {
    this.fullName = fullName;
    this.money = money;
    this.sleepMood = sleepMood;
    this.healthRate = healthRate;
}
personConstructor.prototype.sleep = function (hours) {
    if (hours == 7) {
        this.sleepMood = "happy";
    }
    else if (hours < 7) {
        this.sleepMood = "tired";
    }
    else {
        this.sleepMood = "lazy";
    }

};

personConstructor.prototype.eat = function (meals) {
    if (meals === 3) {
        this.healthRate = 100;
    } else if (meals === 2) {
        this.healthRate = 75;
    } else if (meals === 1) {
        this.healthRate = 50;
    }
};

personConstructor.prototype.buy = function (items) {
    this.money -= items * 10;
};

const person1 = new personConstructor('Salma Yousry', 1000, 'happy', 50);
person1.sleep(8);
person1.eat(2);
person1.buy(2);

console.log(person1);
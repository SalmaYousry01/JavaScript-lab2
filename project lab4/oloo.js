const personOloo = {
    init(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.money = money;
        this.sleepMood = sleepMood;
        this.healthRate = healthRate;
        return this;
    },

    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        } else if (hours < 7) {
            this.sleepMood = 'tired';
        } else {
            this.sleepMood = 'lazy';
        }
    },

    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    },

    buy(items) {
        this.money -= items * 10;
    },
};

const person = Object.create(personOloo).init('Salma Yousry', 1200, 'happy', 40);
person.sleep(6);
person.eat(3);
person.buy(2);

console.log(person);


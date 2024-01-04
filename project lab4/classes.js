class personClass {
    constructor(fullName, money, sleepMood, healthRate) {
        this.fullName = fullName;
        this.healthRate = healthRate;
        this.money = money;
        this.sleepMood = sleepMood;
    }
    sleep(hours) {
        if (hours === 7) {
            this.sleepMood = 'happy';
        }
        else if (hours < 7) {
            this.sleepMood = "tired";
        }
        else {
            this.sleepMood = "lazy";
        }

    }
    eat(meals) {
        if (meals === 3) {
            this.healthRate = 100;
        } else if (meals === 2) {
            this.healthRate = 75;
        } else if (meals === 1) {
            this.healthRate = 50;
        }
    }

    buy(items) {
        this.money -= items * 10;
    }
}

const person1 = new personClass("Salma Yousry", 1000, "happy", 100)
person1.sleep(7);
person1.eat(2);
person1.buy(1);

console.log(person1);


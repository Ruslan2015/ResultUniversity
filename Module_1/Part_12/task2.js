const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
       return 'Гав-Гав';
    }
 }
 
 const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
       return 'Чик-чирик';
    }
 }

 function makeDomestic(isDomestic) {
    const obj = {
        name: this.name,
        type: this.type,
        isDomestic: isDomestic,
        makeSound: this.makeSound
    }
    console.log(obj);
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return obj;
 }
 
 makeDomestic.bind(dog, true)(); 
 // Вернет объект: {name: 'Чарли', type: 'Собака', isDomestic: true, makeSound: ƒ}
 // И выведет сообщение: "Собака по имени Чарли говорит Гав-Гав"
 
 makeDomestic.call(bird, false); 
 // Вернет объект: {name: 'Петя', type: 'Воробей', isDomestic: false, makeSound: ƒ}
 // И выведет сообщение: "Воробей по имени Петя говорит Чик-чирик"
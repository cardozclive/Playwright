class Animal {

    constructor(name) {
        this.name = name;
    }

    eats() {
        console.log(this.name+' eats food')
    }
}

class Aligator extends Animal {
        
    eats() {
        super.eats();
        console.log(this.name+ ' eats fishes')
    }
}
// let animal = new Animal('Dog');
// animal.eats();
let murphy = new Aligator('Murphy');
murphy.eats();
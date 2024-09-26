class Car {

    setName (name) {
        this.name = name;
    }

    startEngine () {
        console.log('Engine has started for '+ this.name);
    }

    stopEngine () {
        console.log('Engine has stopped for '+ this.name)
    }
}

class Mercedes extends Car{
    topSpeed(speed){
        console.log('Top speed of my car '+this.name +' is '+ speed)
    }
}
let myCar = new Mercedes()
myCar.setName('Mercedes Benz');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(250);
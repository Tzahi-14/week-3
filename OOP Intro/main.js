// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const cat = new Animal("Puss", 4)
// const dog = new Animal("leo",4)
// console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"
// console.log(dog.name+ "is the best " + dog.numLegs +" legs animal")

// class Human {
//     constructor(name,age,isFriendly){
//         this.name = name
//         this.age = age
//         this.isFriendly= isFriendly
//     }
// }

// const human = new Human ("Dan",30,true)
// console.log(`${human.name} is ${human.age} years old, and he is ${human.isFriendly? "freindly" :"not freindly"}`)


// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }

//     giveBirth(name, numLegs) {
//         this.children.push({ name, numLegs })
//     }
// }

// // const cat = new Animal("Puss", 4)
// // const dog = new Animal("leo",4)
// // console.log(cat.name + " has " + cat.numLegs + " legs") //prints "Puss has 4 legs"
// // console.log(dog.name+ "is the best " + dog.numLegs +" legs animal")
// const cat = new Animal
// cat.giveBirth("Dolly", 4)
// console.log(cat.children) // should print an array with 1 item: ["Dolly"]


// class Vehicle{
//     constructor (x, y, speed) {
//       this.x = x;
//       this.y = y;
//       this.speed = speed;
//    }

//    getInfo(){
//       console.log("Cars are great");
//    }
// }

// class Vehicle {
//     constructor(x, y, speed) {
//         this.x = x
//         this.y = y
//         this.speed = speed
//         Vehicle.carsSold++;
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }    
//     static calculateMoney(){
//         console.log(Vehicle.carsSold * 30000)
//     }
// }
// Vehicle.carsSold = 0;
// const car = new Vehicle (100,50,40)
// const car2 = new Vehicle (100,50,40)
// const car3 = new Vehicle (100,50,40)
// Vehicle.getInfo()
// Vehicle.calculateMoney()

// class Vehicle {
//     constructor(x, y, speed,fuel) {
//         this.x = x;
//         this.y = y;
//         this._speed = speed;
//         this._fuel= fuel;
//     }

//      set fuel(amount) {
//         if (amount<0|| amount>150) {
//             return console.log("please check fuel")
//         }
//         this._fuel =amount
//     }
//     get fuel(){
//         return this._fuel
//     }
    
// }



// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.fuel =10 // at this point, we'll get the console log saying speed needs to be positive
// console.log(c.fuel) // prints undefined


// class Zoo {
//     constructor() {
//         this.animals = []
//     }

//     addAnimal(animal) {
//         this.animals.push(animal)
//         console.log("Added " + animal.name + " to the zoo")
//     }

//     showAnimals() {
//         this.animals.forEach(a => console.log(a.name))

//     }
// }

// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//     }
// }

// const cat = new Animal("Puss", 4)
// const zoo = new Zoo()

// zoo.addAnimal(cat) // prints "Added Puss to the zoo"
// zoo.showAnimals() // prints "Puss"
// console.log(zoo.animals)



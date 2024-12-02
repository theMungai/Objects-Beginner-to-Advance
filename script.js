/* ========== 1. Object Literal ===========
We access data using -Bracket notation and dot notation.
*/

const literalObject = {
    name : "John Doe",
    age : 57,
    location : "California",
    sayHello : function(){
        console.log("I'm a veteran")
    }
    
}

literalObject.sayHello()


/* ============== 2. Object Constructors ================ 

    - They are like blueprints since they help us create new objects without starting from scratch.

    - We use "new" keyword to call object constructors functions
 */
 
function Player(name, marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function(){
        console.log(this.name)
    }
}

const player1 = new Player("John Doe", "X");
console.log(player1);
player1.sayName()

const player2 = new Player("Smith Rock", "Y");
console.log(player2);
player2.sayName()



// ===============  3. Object Prototypes ================= 

/* 
- Prototype is another object that the original object inherits from.
- All objects have prototypes
*/

// Accessing Prototypes -> We use getPrototypeOf() method

console.log(Object.getPrototypeOf(player1) === Player.prototype);

// Original objects inheriting from prototypes

Player.prototype.moveForward = function (){
    console.log(`${this.name} move forward`)
}

// calling the above function on the original object
player1.moveForward()


class Rabbit{
    constructor(type){
        this.type = type; 
    }
    speak(line){
        console.log(`The ${this.type} rabbit says ${line}`);
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbot = new Rabbit("black");

killerRabbit.speak("hello");

//Maps 
let ages = new Map(); 
ages.set("Boris",29);
ages.set("Jane",25);
ages.set("Jack",76);

console.log(`Jane is ${ages["Jane"]}`);
console.log("Is Jims age known?", ages.has("Jim"));
console.log(ages.size);

class Temperature{ 
    constructor(celcius){
        this.celcius = celcius;
        }

        get fahrenheit() { 
            return this.celcius * 1.8 + 32;
        }

        set fahrenheit(value) {
            this.celcius = (value -32)/1.8; 
        }
        
        static fromFahrenheit(value){
            return new Temperature((value-32)/1.8);
        }
      
}

let temp = new Temperature(22); 
console.log(temp.fahrenheit);
temp.fahrenheit = 86; 
console.log(temp.celcius);
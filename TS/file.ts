/*=================================================
JSON.parse() return any type always
===================================================*/

/*=================================================
Delayed Initialization
===================================================*/
let words = ["red", "green", "blue"];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

/*=================================================
Variable whose type cannot be inferred correctly
===================================================*/

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // type boolean OR number
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}

/*=================================================
Annotations Around Functions
===================================================*/
const addition = (a: number, b: number): number => {
  //? ():number is return type
  return a + b;
};

const var1 = (a: number, b: number): void => {
  //? ():void is return type
  console.log("something");
  return null;
};

const throwError = (message: string): string => {
  throw new Error(message);
};

/*=================================================
Destructuring with Annotations
===================================================*/
const forecast = {
    date: new Date(),
    weather: "sunny",
  };
  
  const logWeather = (forecast: { date: Date; weather: string }) => {
    console.log(forecast.date);
    console.log(forecast.weather);
  };
  

logWeather(forecast)

const forecast1 = {
    date: new Date(),
    weather: "sunny",
  };
  
  const logWeather1 = ({date, weather}: { date: Date; weather: string }) => {
    console.log(date); // 2021-07-01T09:39:42.000
    console.log(weather); // sunny
  };
  

logWeather1(forecast1);

/*=================================================
 Annotations and Objects
===================================================*/
const profile = {
    personName: 'alex',
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age:number):void {
        this.age = age;
    }
}

const { age,personName }: { age: number; personName:string; } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number }} = profile;

console.log(lat); // 0
console.log(lng); // 15
// age // 20
//personName // alex

/*=================================================
 Arrays in Typescripts
===================================================*/
const carMakers = ['food', 'toyota','chevrolet'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// ! Help with inference when extracting values
const car = carMakers[0];

const myCar = carMakers.pop();
carMakers.push("honda");
myCar; // chevrolet
carMakers;

/*=================================================
 Tuples in Typescripts
===================================================*/

const drink = {
    color: 'brown',
    carbonated: 'brown',
    sugar: 40
};
const pepsi:[string, boolean, number] = ['brown', true, 40]

// Type alias
type Drink = [string, boolean, number];
const coke: Drink = ['brown', true, 44];

/*=================================================
 Interfaces in Typescripts
===================================================*/
interface Vehicle {
    name: string;
    year:number;
    broken: boolean;
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true

}

const printVehicles = (vehicle: Vehicle):void=>{
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);  
}
printVehicles(oldCivic);

/*=================================================
 Interfaces in Typescripts
===================================================*/

class Vehicle {
    drive(): void {
        console.log('demo');
        
    }
    honk(){
        console.log('beep');

        
    }
}
const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();


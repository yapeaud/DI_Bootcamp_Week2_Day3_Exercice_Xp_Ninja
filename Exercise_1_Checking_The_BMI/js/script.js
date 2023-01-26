/*Exercise 1 : Checking The BMI
Instructions
Hint:
- You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

Create two objects, each object should hold a person’s details. Here are the details:
FullName
Mass
Height

Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

Outside of the objects, create a JS function that compares the BMI of both objects.

Display the name of the person who has the largest BMI.
 */

// function calculImc(object) {
//   let IMC = object.mass / (object.height * object.height);
//   return IMC;
// }

let person1 = {
    lastName: "John",
    firstName: "Sally",
    height: 1.7,
    mass: 80,
    IMC: function () {
      let imc = person1.mass / (person1.height * person1.height);
      return imc;
    },
  };
  
  let person2 = {
    lastName: "Smith",
    firstName: "John",
    height: 1.8,
    mass: 80,
    IMC: function () {
      let imc = person2.mass / (person2.height * person2.height);
      return imc;
    },
  };
  
  function compareIMC(imc1, imc2) {
    if (imc1.IMC < imc2.IMC) {
      return imc2.lastName + " " + imc2.firstName + " has a big IMC";
    } else {
      return imc1.lastName + " " + imc1.firstName + " has a big IMC";
    }
  }
  
  console.log(compareIMC(person1, person2));
  
  
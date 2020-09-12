class Cat {
  constructor(name, sex) {
    let speak = `${name} says meow!`
  }
}
 
class Dog {
  constructor(name, sex) {
    let speak = `${name} says woof!`
  }
}
 
class Bird {
  constructor(name, sex) {
    if (this.sex === "male") {
      let speak = `Its me! ${name}, the parrot!`
    } else {
      let speak = `${name} says squawk!`
    }
  }
}
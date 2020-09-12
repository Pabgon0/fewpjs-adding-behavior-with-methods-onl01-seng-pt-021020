class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }

  speak() {
    return `${this.name} says meow!`
  }
}
 
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }

  speak() {
    return `${this.name} says woof!`
  }
}
 
class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex =  sex;
  }
    speak() {
      if (this.sex === "male") {
      let speak = `Its me! ${name}, the parrot!`
    } else {
      let speak = `${name} says squawk!`
    }
  }
}
const fruits = require("../fruits.json");

class Fruit {
  constructor(fruit) {
    this.genus = fruit.genus;
    this.name = fruit.name;
    this.id = fruit.id;
    this.family = fruit.family;
    this.order = fruit.order;
    this.nutritions = fruit.nutritions;
  }

  static showAll() {
    return fruits.map((q) => new Fruit(q));
  }

  static show(name) {
    const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == name);

    if (fruit) {
      return new Fruit(fruit);
    } else {
      throw "The fruit doesn't exist.";
    }
  }

  static create = (data) => {
    const newFruit = data;
    console.log('test hit', newFruit);
    const fruit = fruits.find(fruit => fruit.name.toLowerCase() == newFruit.name.toLowerCase()
    );

    if (fruit) {
      throw Error("The Frutta non esiste man!");
    } else {
      console.log(newFruit);
      newFruit["id"] = fruits.length + 1;
      fruits.push(newFruit);
      return new Fruit(newFruit);
    }

    
  };


  update = (data) => {
    const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
    if( updatedFruit){
        updatedFruit.name = data.name
        updatedFruit.family = data.family
        return new Fruit(updatedFruit)

    } else {
        throw Error('La frutta e` marcita!')
    }

  }

  destroy = () => {
    const deleteFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
    if(deleteFruit){
        const index = fruits.indexOf(deleteFruit)
        fruits.splice(index, 1)
    } else {
        throw Error ('Frutta non trovata! Qualcuno l ha mangiata!')
    }
  }
}

module.exports = Fruit;

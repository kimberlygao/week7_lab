function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A small white fluffy dog";
    this.image = "dog.png";
}

function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A small gray cat";
    this.image = "cat.png";
}

function Koala(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A sleeping koala";
    this.image = "koala.jpeg";
}

animals = [new Dog("Fluffy", 2), new Cat("Kitty", 1), new Koala("Kidd", 5)]
names = ["Fluffy", "Kitty", "Kidd"]

function generateRandomIndex (maxIndex) {
    return Math.floor(Math.random() * (maxIndex+1))
}

function generateRandomName() {
    let i = generateRandomIndex(names.length-1)
    return names[i]
}

function generateRandomAge() {
    return generateRandomIndex(10)
}

function generateRandomAnimal() {
    let i = generateRandomIndex(animals.length - 1)
    let a = animals[i]

    let newAnimal;
    if (a instanceof Dog)
        newAnimal = new Dog(generateRandomName(), generateRandomAge())
    else if(a instanceof Cat)
        newAnimal = new Cat(generateRandomName(), generateRandomAge())
    else
        newAnimal = new Koala(generateRandomName(), generateRandomAge())
    
    return newAnimal;
}


function onLoad() {
    let animal = generateRandomAnimal();
    let title = document.getElementById("title")
    title.innerHTML = animal.name + ", " + animal.age + " year(s) old"
    let image = document.getElementById("pic")
    image.src = animal.image
    image.alt = animal.image_alt
}
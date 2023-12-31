


greet()

// Function expression - HOISTING IN ORDER
const speak = function (name = 'Groot', age = 3) {
  console.log(`I am ${name} and I am ${age} years old`)
}

speak(9)

// Function declaration - ALWAYS HOISTING FIRST EVEN DECLARE AT THE BOTTOM - NOT PREFERED
function greet (){
  console.log('Greeting!')
}


// Regular function
// const calcArea = function (radius) {
//   const area = radius * 3.14 ** 2
//   return area
  
// }

// Arrow function 

const calcArea = radius => radius * 3.14 ** 2 


const area = calcArea(5)
console.log(area)


const returnANote = (note) => `This is my note: ${note}`


const myNote = returnANote(`manamana`)
console.log (myNote)


// create arrow function to calculate a bills to pay + tax

// const bill = (products, tax) => {
//   let total = 0;
//   for (i = 0; i < products.length; i++) {
    
//     total += products[i] + products[i] * tax;

//   }
//   return total

// }



// create a normal function to calcualte a bill to pay + tax

function bill (products, tax) {
  let total = 0
  for (i = 0; i < products.length; i=i+1) {
    // total = total + products[i] + products[i] * tax;
    total += products[i] + products[i]  * tax;
  }

  return total
}

console.log(`Total bill is $${bill([10,20,50], 0.5)}`)

// create a unordered list in HTML

const ul = document.querySelector('.people')
const people =["ariel", "elsa", "anna", "belle", "aurora"]
let HTML = ``
people.forEach((person, index) => {
  // Create HTML template
  HTML += `<li style=" color: hotpink ">${index} ${person} </Li>`

}

)
ul.innerHTML = HTML

// CREATE AN OBJECT USER AND INSIDE THAT OBJECT, CREATE  A FUNCTION THAT PRINTOUT TITLES OF ALL BLOGS WRITTEN BY THAT PERSON

const user = {
  name: "Princess Peach",
  blogs: ["Why mac and cheese rules", "10 things to make with marmite"],
  printBlogs(){
    console.log(`These blogs are written by ${this.name}:`)
  
    this.blogs.forEach(
      blog => console.log(blog)
    )
  }
}

user.printBlogs()

// CREATE A FUNCTION THAT RANDOMLY GENERATE RANDOM NUMBER FROM 1 TO 1000
const random = Math.random()
const random1000 = Math.round(random*1000)
console.log(random1000)

// Primitive v.s referrence 

let number1 = 30
number2 = number1
console.log(`number 1 is ${number1}; number 2 is ${number2}`)
number1 = 40;
console.log(`number 1 is ${number1}; number 2 is ${number2}`)


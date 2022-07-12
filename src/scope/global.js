//variables

var a // declarar 
var b = 'b' //declaramos / asignamos
b = 'bb' //reasignación
a = 'aa' //redeclaración

// Global scope 

var fruit = 'Apple' //Global

function bestFruit(){
    console.log(fruit)
}
bestFruit()

function countries(){
    country = 'Col' //Global, other way
    console.log('inside:',country)
}

countries() //col
console.log('out',country) // col
/*
function square() {
    return a={
        length:6,
        breadth:7,
        draw(){
            console.log('draw');
        }
    };
}

let sq=square();
console.log(sq);
sq.color='green';
console.log(sq);


let sq={
    length:5,
    breadth:7
}
for (let key in sq) {
    console.log(key,sq[key]);
}
*/

// string

let lastName='bava';  //string

let firstName= new String('Anuj');   //object

let message = 'this is my area';
let words = message.split(' ');
console.log(words);

// backtise use  ` `;
// template lateral;

let mess= 
`
hello ${lastName},   //replace holder
this
is
my 
message`;
console.log(mess);


let date = new Date();
console.log(date);

let date2 = new Date('june 13 2005 12:00');
console.log(date2);

let date3= new Date(2005,5,13,3);
date3.setHours(4);
//date3.getHours(3);
console.log(date3);
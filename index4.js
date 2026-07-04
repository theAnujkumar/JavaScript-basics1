function Rectangle(length,breadth) {
    return rectangle={
        length:length,
        breadth:breadth,
    
        draw() {
            console.log('draw');
        }
    };
}

let rectangle1=Rectangle(5,7);

rectangle1.color='yellow';
console.log(rectangle1);

delete rectangle1.color;
console.log(rectangle1);

/*  primitive types me copy bante hai 
let a=10;
let b=a;

a++
console.log(a);
console.log(b);
*/
// output = 11,10


// reference ke ander same address par point karte hai
let a={value:10};
let b=a;

a.value++;

console.log(a.value);
console.log(b.value);
// output= 11,11



// primitive
let c=30;

function inc(c) {
    c++;
}
inc(c);

console.log(c);
// output = 30



//reference
let d={value:15};

function inc(d){
    d.value++;
}
inc(d);

console.log(d.value);
// output= 16

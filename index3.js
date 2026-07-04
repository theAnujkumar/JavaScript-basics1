// object oriented programming ,function=method of that object

let rectangle={
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('draw');
    }
};  // rectangle.draw() == draw


//factory function

function createRectangle(length,breadth) {
    return rectangle={
        length: length,
        breadth: breadth,
    
        draw() {
            console.log('draw');
        }
    };
}
let rectangleobj1= createRectangle(5,4);
let rectangle1= createRectangle(7,9);


function rect() {
    return a ={
        l:1,
        b:2,
        draw() {
            console.log('draw');
        }
    };
}
let rect1=rect();

// constructer function  --> pascal notation (first letter should be capital)
// this show current object
// property/method ko initialize ya define

function Rectangle(len,bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function () {
        console.log('draw');
    }
}

// object creation using contructer function

let rectangleObject = new Rectangle();

// constructer of Rectangle
let Rect = new Function('length','breadth',
`this.length = len;
this.breadth = bre;
this.draw = function () {
    console.log('draw');
}`);

let object = new Rect(2,3);

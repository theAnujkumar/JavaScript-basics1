let rectangle={
    length:2,
    breadth:4
};

// for-in loop
for (let key in rectangle) {
    // keys are reflected through key variable
    // values are reflected through rectangle[key]
    //console.log(key);
    console.log(key,rectangle[key]);
}

//for-of loop  only use in iterables--> like arrays,maps

let rect={
    length:5,
    breadth:7
};

// for (let key of Object.keys(rect))
for (let key of Object.entries(rect)) {
    console.log(key);
}

if ('length' in rect) {
    console.log('present');
}
else {
    console.log('absent');
}

//object cloning --> iteration,assign,spread

//object 1
let src ={
    a:2,
    b:5,
    c:7
};
let dest={};

for (let key in src) {
    //console.log(key);
    dest[key] = src[key];
    console.log(dest[key]);
}
console.log(dest);

src.a++;
console.log(dest);


//object 2
let src1 ={
    a:10,
    b:20,
    c:30
};
let src2={value:25};

let dest1 = Object.assign({},src1,src2);

console.log(dest1);

src.a++;
console.log(dest1);


//object 3
let src4={
    a:40,
    b:20,
    c:60
};
let dest3 = {...src4};
console.log(dest3);

src4.a++;
console.log(dest3);


// garbage collection
// if-else

let age=17;

if (age>=18)
    {
        console.log("you can drive");
    }
else 
    {
        console.log("you cannot drive");
    }

let perc=70;

if (perc>=90)
    {
        console.log("A");
    }
else 
    if (perc>=70)
    {
        console.log("B");
    }
else 
    if (perc>=50)
    {
        console.log("C");
    }
else 
    if (perc<=30)
    {
        console.log("fail");
    }

// switch case
let  alp='a';

switch(alp)
{
    case'a':
    case'e':
    case'i':
    case'u':
    case'o':
    console.log("vowel");
    break;

    default:
    console.log("consonant");

}


// loops (repeatation of tasks)
// for loop

for (let i=0 ; i<5 ; i=i+1)
    {
        console.log(i);
    }

// while loop

let j=0;
while (j<6)
    {
        console.log(j);
        j=j+1
    }

// do-while loop

let k=0;
    do
        {
            console.log(k);
            k=k+1;
        }
        while (k<10);

// testing 
        let age1=18;

        if (age1>=18)
            {
                console.log("you can drive");
            }
        else 
            {
                console.log("you cannot drive");
            }
            console.log("hello");
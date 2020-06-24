//Types

    // Array
    let myArray = []
    let ticTacTo = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]

    // Objects
    let myObject = {
        key1: value1,
        key2: 'value 2',
    }

    myObject.key2    //dot operator -- grabs this value from the object
    myObject['key2']  //works the same as dot operator -- needs quotes

    // Booleans
    true
    false

    // Strings
    "withDoubles"
    'withSingles'

    // Numbers
    5
    3.14
    
    // BigNum   (used for numbers over 2^53)
    9999999999999999n

    // NULL  (nothing, but purposefully nothing)
    null

    // undefined
    undefined 


// What is a literal?
    //A value that we have hard-coded into our program;


// Variables
    var x = 0;                 //old way of assigning a variable

    let y = 13;                //new way of using a variable
    y = 44;                    //re-initialization of a variable

    tank = 'hulk'              //JS will declare this variable w/o var/let keyword, but this is bad code

    const newCar = 'civic si'  //constant -- used for things that will not change
    


// Assignment operators

    // Assignment operator
    =   //defines an initialization statement

    // Math Operators
    y += 4;
    y -= 4;
    y *= 3;
    y /= 12;
    y %= 2;  //hint: this specific expression says a number is even if you get 0;
    y **=2;  //squares the number
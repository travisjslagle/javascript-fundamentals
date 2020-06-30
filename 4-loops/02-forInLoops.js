let student = {
    name: "Gloria",
    awesome: true,
    specialty: "JavaScript",
    week: 1,
};

//note: pieces of an object, are not ordered (no index)

console.log(student);

for (x in student){
    console.log(student[x]);
}


// For-in-loop will return to you the KEYS of some collection
//    -- and you can think of arrays/strings as objects where the indexes are the key in their key-value pairs
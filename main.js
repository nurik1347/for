
let arr1 = ['non', 'olma', 'aziza', 'Gul', 'mashina'];

let arr = [];
let arr2 = [];

for (let i = 0; i < arr1.length; i++) {
    let arr3 = arr1[i].toLowerCase(); 
    let arr4 = arr3.split('').reverse().join('');

    if (arr3 === arr4) {
        arr.push(arr1[i]); 
    } else {
        arr2.push(arr1[i]); 
    }
}

console.log("Palindromlar:", arr);
console.log("Palindrom bolmaganlar:", arr2);
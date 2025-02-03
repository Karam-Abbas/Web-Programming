// // write a callback
// const alpha = ()=> console.log("hellow!")
// const func = (alpha) => {alpha()}
// func(alpha)

// setTimeout
//setTimeout(()=>{console.log("hello!")},2000)

// Arrays
// let arr=[11,22,13,32,24]

//conver the str into arr
// let a="hello"
// b=Array.from(a)

// object is not iterable so forOf doesn't work on this 
// let obj={
//     id:12,
//     name:"Karam"
// }
// for (const element of object) {
//     console.log(element.name)    
// }


// use forin instead
// let obj={
//     id:12,
//     name:"Karam"
// }
// for (const key in obj) {
//     console.log(obj[key])
// }


// always use the forIn where properties need to iterated but if indexing is needed use the forOf loop

// forEach() what to do with the iterable items?
// arr = [1,2,3,4,5]
// arr.forEach((val,index)=>{console.log(`i am at index${index} and i am ${val}`)});

// // arr methods
// arr.push(6)
// 6
// arr
// (6) [1, 2, 3, 4, 5, 6]
// arr.pop()
// 6
// arr
// (5) [1, 2, 3, 4, 5]
// arr.unshift(1)
// 6
// arr
// (6) [1, 1, 2, 3, 4, 5]
// arr.splice(3,1)
// [3]
// arr
// (5) [1, 1, 2, 4, 5]
// arr.splice(3,2)
// (2) [4, 5]
// arr
// (3) [1, 1, 2]


// ES 2019 INTRODUCED
// map, filter, reduce, find

// map : har value ke against kuch krna ho :-> will return an updated arr
//example
//a = arr.map(val=>val**2)

// filter : will filter out values based on your condition and return arr of values that fulfill the condition.
//example:
// a = arr.filter(val=> val%2!==0)

//reduce : will give one value based on what condition you gave like sum, sub , product of whole arr
// arr = [1,2,3,4]
// arr.reduce((sum,val)=>sum=sum+val,1)
//reduce(callback,initial_Value)
//answer : 11

// //example (way1)
// animals = ["cat","dog","goat","dog"]
// a = animals.reduce((obj,val)=>{
//     if(obj[val]==undefined){obj[val]=1}
//     else{obj[val] += 1}
//     return obj
// },{})


// //example (way2)
// animals = ["cat","dog","goat","dog"]
// a = animals.reduce((obj,val)=>{
//     if(!obj[val]){obj[val]=1}
//     else{obj[val] += 1}
//     return obj
// },{})


//find : returns that element only which meets the condition if multiple objects meet the condition the first one will be returned.
// const arr2 = [{id:1},{id:2},{id:3}]
// arr2.find((val)=>val.id==2)
// findID : same as the find just returns the id of the object

// operators
// spread (...) : copies the elements of one arr to some place arr1 = [2,3,...arr2]
// rest : spread operator used in the parameter of a function 
//function s(t){ return t.sort()}
// s(1,2,3,4,5,6) ❌
// use this instead 
//function s(...t){ return t.sort()}✅

// destructure : can assign variables to the elements of the array

// let [aa] = ["karam", 21]  // aa will have the "karam"
// let [aa,bb] = ["karam", 21] // bb will have the 21
// let [,bb] = ["karam", 21] // bb will have 21 only

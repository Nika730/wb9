// const teacher={
//     name: 'Kira',
//     age : 15,
//     sex : 'woman',
//     job : 'student'
// }
// console.log(teacher);
// const objKeys = Object.keys(obj)
// console.log(objKeys);

// const objValues = Object.values(obj)
// console.log(objValues);

// console.log(obj.isMarried);
// obj.isMarried=true
// console.log(obj);

// const obj2 = teacher
// console.log(obj2);
// // obj2.field = 'qwerty'
// console.log(teacher);
// console.log(obj2);

// const obj3={}

// for (  prop in teacher) {
//     console.log(prop);
//     obj3[prop] = teacher[prop]
// }
// console.log();
// obj3.lol = 'lol'
// console.log(teacher);
// console.log(obj3);

// const obj4= Object.assign(teacher)
// // obj4.lol = 'lol'
// console.log('obj4', obj4);
// const obj5 = Object.freeze(teacher)
// obj5.lol = 'lol'
// console.log('obj5',obj5);

// console.log(teacher.hasOwnProperty('sex'));


// function sayHello() {
// console.log('hello!');
// }
// sayHello()

// function summ(a,b ) {
//     console.log(a+b);
    
// }
// summ(4,56)
// summ(45,546)

// function summ (a,b,c){
//     console.log(a+b-c);
// }
// summ(12,43,3)
// summ(3,12,43)
// summ(43,3,12)

// const summ = function (a,b,c) {
//     console.log(a+b-c);
// }
// summ(12,43,3)
// summ(3,12,43)
// summ(43,3,12)

// const summ = (a,b,c) => console.log(a+b-c);
// summ(12,43,3)
// summ(3,12,43)
// summ(43,3,12)

// window.onload =(function()) {
//     console.log('hello');
// } ()

// function args(a,b,c){
//     const sum = a+b+c
// // console.log(sum);
// // console.log(arguments);
// }
// args(1,2,3,4,5,6,7,8,9,)

// function args(a,b,c, ...rest){
//     const sum = a+b+c
// console.log(rest);
// }
// args(1,2,3,4,5,6,7,8,9,)

// const arr =[ 5,1,2,4,42,2]
// console.log(...arr);

// function qwe (a,b,c){
//     const disk = (b*b-4*a*c)
//     // console.log(disk);
//     if (disk > 0) {
//         const x1 = (-b+Math.sqrt(disk))/(2*a)
//         const x2 = (-b-Math.sqrt(disk))/(2*a)
//         console.log(x1);
//         console.log(x2);
//     }  else if (disk == 0 ) {
//         const x = (-b-Math.sqrt(disk))/(2*a)
//         console.log(x);
//     } else {
    
//         console.log('Нет корней');
//     }
// }   
// qwe(-4,28,-49) 
// qwe(-6,0,54)
// qwe(1,-1,0)
// qwe(1,0,-49)
// qwe(3,-4,94)

// function qwe(str){
// let counter = 0
// const arr = [' ','.',',', '!' ]
   
//     for (let i = 0; i < str.length; i++ ){
//         if (str[i] === str[i].toUpperCase()&& !arr.includes(str[i])){
//             counter++
//         }
//     }
//     console.log(counter);
// }
// qwe('I Love YoU')
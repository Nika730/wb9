// const obj={
//     firstName: 'kira',
//     secondName: 'bortnik',
//     info: function(phone,email ){
//         console.log(`${this.firstName} ${this.secondName}`);
//         if (phone && email ){ 
//         console.log('Phone:', phone);
//         console.log('Email:', email);
//         }
//     }
// }
// obj.info()

// const o1 = {
//     firstName:'mike',
//     secondName: 'wazovski',
// }
// obj.info.bind(o1)('+375297094699', 'mnika730@gmail.com')

// const o2 = {
//     firstName:'peter',
//     secondName: 'pen',
// }
// obj.info.call(o2, '+375445332006', 'nmika370@gmail.com')

// const o3 = {
//     firstName:'doctor',
//     secondName: 'who',
// }
// obj.info.apply(o3, ['+375298070329', 'mammy@gmail.ru'])


// const promise = new Promise( (resolve, reject) => {
//     // setTimeout( () => resolve('done!'), 2000)
//     setTimeout( () => reject('error!'), 2000)
// })
// console.log(promise);
//     promise.then(
//         result => console.log(result) //,
//         // error => console.log(error)
//  )
//  .catch(error => console.log(error))
// .finally( () => console.log('finally'))



// const url = 'https://jsonplaceholder.typicode.com/users/1'

// const f = async() => {
//     await fetch(url)
//     .then(Response => Response.json())
//     .then(json => console.log(json))
    
// }
 
// const a = async () => {
//     console.log('start');
//     await f()
//     console.log('end');
// }
// // a()

// const err = () => {
//     throw 'some error =('
// }

// const tryCatch = async () => {
//     try {
//         await a ()
//         // err()
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log('finally');
//     }
// }

// tryCatch()


// console.log('start');
// setTimeout(() => console.log('setTimeout'), 0)
// console.log('end');


const usersUrl = 'https://jsonplaceholder.typicode.com/users'
async function getUsers() {
    let arr;
   await fetch (usersUrl)
    .then(response => response.json())
    // .then(users => console.log(users))
    .then(users => arr = users)
    console.log(arr);
    return arr
}
getUsers()

const usresArray = getUsers()
console.log(usresArray);
const databaseURL = 'https://qwerty-72368-default-rtdb.firebaseio.com'

//  function getProducts(id) {
//     return fetch('https://dummyjson.com/products/1')
//     .then(res => res.json())
//     .then(json => console.log(json))
// }

// async function b() {
//     console.log('start');
//     const obj = await postProducts()
//     console.log(obj.id);
//     await getProducts(abj.id)
//     console.log('finish');
// }

// b()

// const newObj = {
//     brand: "Apple"
// category: "smartphones"
// description: "An apple mobile which is nothing like apple"
// discountPercentage: 12.96
// id: 1
// images: (5) ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg']
// price: 549
// rating: 4.69
// stock: 94
// thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
// title: "iPhone 9"
// }

// function postProducts() {
//     return fetch('https://dummyjson.com/products/add')
//     method: 'POST',
//     body: JSON/stringify(newObj)
// }
const userName = prompt('enter ur name')
const password = prompt('enter password')

function createUser() {
    return fetch(`${databaseURL}/users.json`,{
        method: 'POST',
        body: JSON.stringify({
            name: userName,
            password
        })
    } )
    .then(res => res.json())
    .then(json => json)
}

createUser()
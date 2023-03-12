const wrapper = document.querySelector('.wrapper')

// const p = document.createElement('p')
// const span = document.createElement('span')

// p.innerHTML = 'I am tag P befor DIV'
// span.innerHTML = 'I am tag SPAN after DIV'

// wrapper.prepend(p)
// wrapper.append(span)

// const card = document.querySelector('.card')
const title = document.getElementById('title')
const thumbnail = document.getElementById('thumbnail')
const description = document.getElementById('description')
const price = document.getElementById('price')
const discountPercentage = document.getElementById('discountPercentage')
const rating = document.getElementById('rating')
const stock = document.getElementById('stock')
const brand = document.getElementById('brand')
const category = document.getElementById('category')
const btn = document.getElementById('add-products')

const product = [
    {
    "id": 1,
    "title": "iPhone 9",
    "description": "An apple mobile which is nothing like apple",
    "price": 549,
    "discountPercentage": 12.96,
    "rating": 4.69,
    "stock": 94,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
    ]
    },
    {
    "id": 2,
    "title": "iPhone X",
    "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
    "price": 899,
    "discountPercentage": 17.94,
    "rating": 4.44,
    "stock": 34,
    "brand": "Apple",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/2/1.jpg",
    "https://i.dummyjson.com/data/products/2/2.jpg",
    "https://i.dummyjson.com/data/products/2/3.jpg",
    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
    ]
    },
    {
    "id": 3,
    "title": "Samsung Universe 9",
    "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
    "price": 1249,
    "discountPercentage": 15.46,
    "rating": 4.09,
    "stock": 36,
    "brand": "Samsung",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/3/1.jpg"
    ]
    },
    {
    "id": 4,
    "title": "OPPOF19",
    "description": "OPPO F19 is officially announced on April 2021.",
    "price": 280,
    "discountPercentage": 17.91,
    "rating": 4.3,
    "stock": 123,
    "brand": "OPPO",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/4/1.jpg",
    "https://i.dummyjson.com/data/products/4/2.jpg",
    "https://i.dummyjson.com/data/products/4/3.jpg",
    "https://i.dummyjson.com/data/products/4/4.jpg",
    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
    ]
    },
    {
    "id": 5,
    "title": "Huawei P30",
    "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
    "price": 499,
    "discountPercentage": 10.58,
    "rating": 4.09,
    "stock": 32,
    "brand": "Huawei",
    "category": "smartphones",
    "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    "images": [
    "https://i.dummyjson.com/data/products/5/1.jpg",
    "https://i.dummyjson.com/data/products/5/2.jpg",
    "https://i.dummyjson.com/data/products/5/3.jpg"
    ]
    }
    
    ]
    
btn.onclick=() => {
    for (let i = 0; i < product.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card')
        const title = document.createElement('h3')
        const thumbnail = document.createElement('img')
        const description = document.createElement('p')
        const price = document.createElement('p')
        const discountPercentage = document.createElement('p')
        const rating = document.createElement('p')
        const stock = document.createElement('p')
        const brand = document.createElement('p')
        const category = document.createElement('p')

        title.innerHTML = product[i].title
        thumbnail.src = product[i].thumbnail
        description.innerHTML = product[i].description
        price.innerHTML = `${product[i].price}$`
        discountPercentage.innerHTML = `${product[i].discountPercentage}%`
        rating.innerHTML =`rating is ${product[i].rating}`
        stock.innerHTML =`stock: ${product[i].stock}`
        brand.innerHTML =`brand  "${product[i].brand}`
        category.innerHTML =` category  "${product[i].category}`

        card.append(title,thumbnail,description,price, discountPercentage, rating, stock, brand, category,)
        wrapper.append(card)
    }
}
        


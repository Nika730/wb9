const link = document.getElementById('link')
const title = document.getElementById('title')
const articls = document.getElementById('articls')
const price = document.getElementById('price')
const btn = document.getElementById('btn')

const db_url = 'https://appp-512fb-default-rtdb.firebaseio.com'

btn.onclick = () => {
    const data = {
        link: link.value,
        title: title.value,
        articls: articls.value,
        price: price.value,

    }
    console.log(data);

    link.value = ''
    title.value = ''
    articls.value =''
    price.value = ''

    return fetch(`${db_url}/${product.value}.json`,
    {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .catch(error => {
        console.log(error);
    })
}
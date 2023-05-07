const db_url = 'https://appp-512fb-default-rtdb.firebaseio.com'

function getCar() {
    let arr = []

    return fetch(`${db_url}/car.json`,
    {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    })
    .then ( response => response.json())
    .then ( result => {
        const cars = Object.keys(result).map(key => result[key])

        for(let i = 0; i < cars.length; i++) {
            
        const div_cars = document.getElementById('cars')
        
        const card = document.createElement('div')
        card.classList.add('card')

        const pic = document.createElement('div')
        pic.classList.add('pic')
        const title = document.createElement('p')
        const articls = document.createElement('h4')
        const price = document.createElement('b')
        const btn=document.createElement('button')
        const br=document.createElement('br')

        pic.style.backgroundImage=`url('${cars[i].link}')`  
        title.innerText = cars[i].title
        articls.innerText = cars[i].articls
        price.innerText = `${cars[i].price}$`
        btn.innerHTML = 'Купить'


        card.append(
            pic,
            title,
            articls,
            price,
            br,
            btn
        )
        div_cars.append(card)
        }



    })

    .catch(error => {
        console.log(error);
    });
}
getCar()


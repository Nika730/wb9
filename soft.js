const db_url = 'https://appp-512fb-default-rtdb.firebaseio.com'

function getSoft() {
    let arr = []

    return fetch(`${db_url}/soft.json`,
    {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    })
    .then ( response => response.json())
    .then ( result => {
        const soft = Object.keys(result).map(key => result[key])

        for(let i = 0; i < soft.length; i++) {
            
        const div_soft = document.getElementById('soft')
        
        const card = document.createElement('div')
        card.classList.add('card')

        const pic = document.createElement('div')
        pic.classList.add('pic')
        const title = document.createElement('p')
        const articls = document.createElement('h4')
        const price = document.createElement('b')

        pic.style.backgroundImage=`url('${soft[i].link}')`  
        title.innerText = soft[i].title
        articls.innerText = soft[i].articls
        price.innerText = `${soft[i].price}$`

        card.append(
            pic,
            title,
            articls,
            price
        )
        div_soft.append(card)
        }



    })

    .catch(error => {
        console.log(error);
    });
}
getSoft()

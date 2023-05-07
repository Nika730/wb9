const db_url = 'https://appp-512fb-default-rtdb.firebaseio.com'

function getTable() {
    let arr = []

    return fetch(`${db_url}/table.json`,
    {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    })
    .then ( response => response.json())
    .then ( result => {
        const table = Object.keys(result).map(key => result[key])

        for(let i = 0; i < table.length; i++) {
            
        const div_table = document.getElementById('table')
        
        const card = document.createElement('div')
        card.classList.add('card')

        const pic = document.createElement('div')
        pic.classList.add('pic')
        const title = document.createElement('p')
        const articls = document.createElement('h4')
        const price = document.createElement('b')
        const btn=document.createElement('button')
        const br=document.createElement('br')

        pic.style.backgroundImage=`url('${table[i].link}')`  
        title.innerText = table[i].title
        articls.innerText = table[i].articls
        price.innerText = `${table[i].price}$`
        btn.innerHTML = 'Купить'

        card.append(
            pic,
            title,
            articls,
            price,
            br,
            btn
        )
        div_table.append(card)
        }



    })

    .catch(error => {
        console.log(error);
    });
}
getTable()

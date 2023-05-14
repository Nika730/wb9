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
        const btn=document.createElement('button')
        const br=document.createElement('br')

        pic.style.backgroundImage=`url('${soft[i].link}')`  
        title.innerText = soft[i].title
        articls.innerText = soft[i].articls
        price.innerText = `${soft[i].price}$`
        btn.innerHTML = 'Купить'

        btn.onclick = () => {
            const ls =  JSON.parse(localStorage.getItem('card'))
            ls.push(soft[i])
            localStorage.clear()
            localStorage.setItem('card', JSON.stringify(ls))
        }

        card.append(
            pic,
            title,
            articls,
            price,
            br,
            btn
        )
        div_soft.append(card)
        }



    })

    .catch(error => {
        console.log(error);
    });
}
getSoft()

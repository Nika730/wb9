function getFromLs() {
    const ls = JSON.parse(localStorage.getItem('card'))


    for(let i = 0; i < ls.length; i++) {
            
        const div_cars = document.querySelector('.from-card')
        
        const card = document.createElement('div')
        card.classList.add('card')

        const pic = document.createElement('div')
        pic.classList.add('pic')
        const title = document.createElement('p')
        const articls = document.createElement('h4')
        const price = document.createElement('b')
    

        pic.style.backgroundImage=`url('${ls[i].link}')`  
        title.innerText = ls[i].title
        articls.innerText = ls[i].articls
        price.innerText = `${ls[i].price}$`
    

        card.append(
            pic,
            title,
            articls,
            price,
           
        )
        div_cars.append(card)
        }
    
}



getFromLs()

const btn = document.getElementById('btn-prim')
btn.onclick = () => {
    const ls =  JSON.parse(localStorage.getItem('card'))
    ls.push(dolls[i])
    localStorage.clear()
    localStorage.setItem('card', JSON.stringify(ls))
}

const db_url = 'https://appp-512fb-default-rtdb.firebaseio.com'

function getDools() {
    let arr = []

    return fetch(`${db_url}/doll.json`,
    {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    })
    .then ( response => response.json())
    .then ( result => {
        const dolls = Object.keys(result).map(key => result[key])

        for(let i = 0; i < dolls.length; i++) {
            
            const div_dolls = document.getElementById('dolls')
            
            const card = document.createElement('div')
            card.classList.add('card')
    
            const pic = document.createElement('div')
            pic.classList.add('pic')
            const title = document.createElement('p')
            const articls = document.createElement('h4')
            const price = document.createElement('b')
    
            pic.style.backgroundImage=`url('${dolls[i].link}')`  
            title.innerText = dolls[i].title
            articls.innerText = dolls[i].articls
            price.innerText = `${dolls[i].price}$`
    
            card.append(
                pic,
                title,
                articls,
                price
            )
            div_dolls.append(card)
            }

})
}
getDools()

// const prod = [
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/d91/720_720_040cd750bba9870f18aada2478b24840a/d91016e48f93f30fd6ff00b5c79dbefb.jpg",
//         "title": 'Игровой набор LOL Surprise! Tweens 2 Gracie Skates "Грэйси Скейтс", 2 серия',
//         "articls": '579595EUC',
//         "price": '144.00 BYN'

//     },
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/197/720_720_040cd750bba9870f18aada2478b24840a/197ae0937229957827bbc730748b13c3.jpg",
//         "title": 'Игровой набор LOL Surprise! Tweens 2 Lexie Gurl "Лекси Гёрл", 2 серия',
//         "articls": '579601EUC',
//         "price": '144.00 BYN'

//     },
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/cb9/720_720_040cd750bba9870f18aada2478b24840a/cb98df1a997ac2d29478d1dba89634a5.jpg",
//         "title": 'Кукла LOL Surprise OMG Present Surprise Miss Celebrate "Мисс Селебрейт", 23 см',
//         "articls": '579755EUC',
//         "price": '178.56 BYN'

//     },
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/6e4/720_720_040cd750bba9870f18aada2478b24840a/6e421978a056f16d426d89da41742a87.jpg",
//         "title": 'Кукла LOL Surprise Hair Hair Hair "Стильные прически"',
//         "articls": '580348EUC',
//         "price": '80.00 BYN'

//     },
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/d5b/720_720_040cd750bba9870f18aada2478b24840a/d5b5ea7a4e817883e991f67db8d13a26.jpg",
//         "title": 'ЛОЛ Игровой набор "Кукла с мебелью - Смузи бар", серия 5, LOL Surprise! House of Surprises - Snack Bar',
//         "articls": '580249EUC',
//         "price": '105.60 BYN'

//     },
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/403/720_720_040cd750bba9870f18aada2478b24840a/403e9bdec401ef0925909a8a20222d54.jpg",
//         "title": 'ЛОЛ Игровой набор "Кукла с мебелью - Шезлонг", серия 5, LOL Surprise! House of Surprises - Daybed',
//         "articls": '580225EUC',
//         "price": '105.60 BYN'

//     },
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/d77/720_720_040cd750bba9870f18aada2478b24840a/d771608f39fd8100487575422c3081a4.jpg",
//         "title": 'ЛОЛ Игровой набор "Кукла с мебелью - Самолет", серия 5, LOL Surprise! House of Surprises - Lil Arcade',
//         "articls": '580218EUC',
//         "price": '132.00 BYN'

//     },
//     {
//         "link": "https://www.funtastik.by/upload/resize_cache/iblock/8e2/720_720_040cd750bba9870f18aada2478b24840a/8e26803ca13badc292aa770ed27fa392.jpg",
//         "title": 'Кукла LOL Surprise OMG "Принцесса", 5 серия',
//         "articls": '580430EUC',
//         "price": '223.20 BYN'

//     },
//     {
//         "link": 
//         "title": 
//         "articls": 
//         "price": 

//     },
//     {
//         "link": 
//         "title": 
//         "articls": 
//         "price": 

//     },
//     {
//         "link": 
//         "title": 
//         "articls": 
//         "price": 

//     }, {
//         "link": 
//         "title": 
//         "articls": 
//         "price": 

//     },

//     {
//         "link": 
//         "title": 
//         "articls": 
//         "price": 

//     }, {
//         "link": 
//         "title": 
//         "articls": 
//         "price": 

//     },

// ]
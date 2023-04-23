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
    .then ( Response => Response.json())
    .then ( result => {
        const cars = Object.keys(result).map(key => result[key])
        console.log(cars);
    })

    .catch(error => {
        console.log(error);
    });
}
getCar()
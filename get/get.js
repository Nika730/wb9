const db_url = 'https://appp-512fb-default-rtdb.firebaseio.com'

function getCar() {
    let arr = []

    return fetch(`${db_url}/car.json`,
    {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then ( Response => Response.json())
    .then ( result => console.log(result))

    .catch(error => {
        console.log(error);
    });
}
getCar()
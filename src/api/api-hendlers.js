// import axios from 'axios'
import {user} from './mock-data'

// export const getUser = (api) => {
//     fetch(`${api}/users`)
//         .then(res => res.json())
//         .then(json => console.log(json);)
// }


export const getUser = async () => {
    return user
}
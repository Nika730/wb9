import { getUser } from "../../api/api-hendlers"

export const user = async () => {
    const userFirstName = document.getElementById('user-firsname')
    const userSecondName = document.getElementById('user-secondname')
    avatar = document.getElementById('avatar')
    avatar.style.width = '50px'
    avatar.style.height = '50px'
    avatar.style.borderRadius = '50px'
    
    await getUser().then(a => {
    userFirstName.innerHTML= a.firsname
    userSecondName.innerHTML=a.user-secondname
    avatar.src=a.ava
    })
   
}
// const btn1=document.getElementById('btn1')
// console.log(btn1);
// const btn2_1= document.querySelector('.btn2')
// console.log(btn2_1);
// const btn2_2= document.querySelector('#btn2')
// console.log(btn2_2);

// const li = document.querySelectorAll('li')
// console.log(li);
// for (let elem of li ) {
//     console.log(elem);
//     console.log(elem.matches('li[value="6"]'));
// }

// const chapter = document.querySelector ('.chapter')
// console.log(chapter.closest('.book')); //ul
// console.log(chapter.closest('.contents')); //div
// console.log(chapter.closest('h1')); //null (потому что h1 не родитель)

// const inpWrite = document.querySelector('#writting')
// inpWrite.addEventListener('change', () => {
//     console.log(inpWrite.value);
//     p.innerHTML = 'hello'
// })
// inpWrite.addEventListener('input', () => {
//     console.log(inpWrite.value);
//     p.innerHTML = inpWrite.value
// })

// const inpWrite = document.querySelector('#writting')
// const p = document.querySelector('#p')
// const remove = document.querySelector('#btn-rem')
// const inputFun = () => {
//     console.log(inpWrite.value);
//     p.innerHTML = inpWrite.value
// }
// inpWrite.addEventListener('input', inputFun)
// remove.onclick = () => {
//     alert('remove listener from input')
//     inpWrite.removeEventListener('input', inputFun)
// }
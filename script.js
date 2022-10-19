// header paragraph script
const headerPara = document.querySelector('.word')
const paragraphWord = [
    'Love Though Literaracy Project', 'Inspiring Readers One Word at a Time!',
    'English Language & Literacy Development Center, Ltd'
]
let index = 0;
setInterval(() => {
    index++
    if(index === 3){
        index = 0
    }
    headerPara.innerHTML = ''
    setTimeout(() => {
        headerPara.innerHTML = paragraphWord[index]
        document.querySelector('#word').innerHTML = paragraphWord[index]
    }, 500);
}, 4000);
// Script for menu responsiveness
const menu = document.querySelector('.menu')
const navMenu = document.querySelector('.top_nav--ul div')
const deletebtn = document.querySelector('.delete')
window.onresize = () => {
    if(document.querySelector('body').clientWidth > 834){
        navMenu.style.display = 'flex'
        menu.style.visibility = 'visible'
        deletebtn.style.visibility = 'hidden'
    }else{
        navMenu.style.display = 'none'
        
    }
}
const menuRemove = () =>{
    deletebtn.style.visibility = 'hidden'
    navMenu.style.animationName = 'end'
    setTimeout(() => {
        navMenu.style.display = 'none'
        navMenu.style.animationName = 'start'
        menu.style.visibility = 'visible'
    }, 3000);
}
document.querySelector('.header_img').addEventListener('click', () =>{
    if(menu.style.visibility === "hidden"){
        menuRemove()
    }
})
menu.addEventListener('click', () =>{
    navMenu.style.display = 'flex'
    menu.style.visibility = 'hidden'
    setTimeout(() => {
        deletebtn.style.visibility = 'visible'
    }, 3000);
})
deletebtn.addEventListener('click',() =>{
    menuRemove()   
})


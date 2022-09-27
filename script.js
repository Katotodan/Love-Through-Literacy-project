// header paragraph script
const headerPara = document.querySelector('.header_paragraph')
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
    }, 500);
}, 4000);
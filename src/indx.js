import img from '../samurai/smry.jpg';
const div = document.getElementById('div')

const button = document.createElement('button')
const img1 = document.createElement('img')
const img2 =document.createElement('img')

img1.src = "https://icdn.lenta.ru/images/2021/04/27/16/20210427163138131/detail_9b31eaf4376cdff03e0ba1bcaa826a01.jpg"
img2.src = img
button.textContent = 'XXX'
div.append(img1)
div.append(img2)
div.append(button)

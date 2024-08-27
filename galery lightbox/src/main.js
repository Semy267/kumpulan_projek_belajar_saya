const photo1 = document.getElementsByClassName('contentImg1')[0]
const photo2 = document.getElementsByClassName('contentImg2')[0]
const photo3 = document.getElementsByClassName('contentImg3')[0]
const photo4 = document.getElementsByClassName('contentImg4')[0]
const lightBox = document.getElementsByClassName('lightbox')[0]
const tutup = document.getElementsByClassName('close')[0]
const img = document.getElementById('imgReal')

//photo 1 saat di click
photo1.addEventListener('click', ()=>{
    img.setAttribute('src', '/img/BOHLAM.jpg')
    lightBox.style.display ='block'
})

tutup.addEventListener('click', ()=>{
    lightBox.style.display = 'none'
})

//photo 2 saat di click
photo2.addEventListener('click', ()=>{
    img.setAttribute('src', '/img/KOPI.jpg')
    lightBox.style.display ='block'
})

//photo 3 saat di click
photo3.addEventListener('click', ()=>{
    img.setAttribute('src', '/img/ORANG.jpg')
    lightBox.style.display ='block'
})

//photo 4 saat di click
photo4.addEventListener('click', ()=>{
    img.setAttribute('src', '/img/LORONG.jpg')
    lightBox.style.display ='block'
})
const nav = document.querySelector('.container nav')
const burger = document.getElementsByClassName('burger')[0]
const sidebar = document.getElementsByClassName('sidebar')[0]
const burgerSidebar=document.getElementsByClassName('burger-sidebar')[0]
const lightbox=document.getElementsByClassName('lightbox')[0]

burger.addEventListener('click', ()=>{
    sidebar.style.display= 'flex'
    lightbox.style.display='block'
    document.body.classList.add('class', 'noScroll')
})

burgerSidebar.addEventListener('click',()=>{
    sidebar.style.display='none'
    lightbox.style.display='none'
    document.body.classList.remove('class', 'noScroll')
})

window.addEventListener('resize',()=>{
    if(window.innerWidth > 550){
        sidebar.style.display='flex'
    }else{
        sidebar.style.display='none'
        lightbox.style.display='none'
        document.body.classList.remove('class', 'noScroll')
    }
})

lightbox.addEventListener('click', ()=>{
    sidebar.style.display='none'
    lightbox.style.display='none'
    document.body.classList.remove('class', 'noScroll')
})
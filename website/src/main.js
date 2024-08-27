const serviceButton = document.querySelector('nav ul li:nth-child(2)')
const dropdownService = document.getElementsByClassName('dropdownService')[0]

serviceButton.addEventListener('click', ()=>{
    if(dropdownService.style.display ==='none' || dropdownService.style.display ===''){
        dropdownService.style.display='flex'
    }else{
        dropdownService.style.display ='none'
    }
})
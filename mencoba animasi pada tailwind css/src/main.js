const btn = document.querySelector('.btn-aktif')
const modal = document.getElementById('modal')
const closeBtn = document.getElementById('closeModalBtn')

btn.addEventListener('click', ()=>{
    modal.classList.remove('hidden')
})

closeBtn.addEventListener('click', ()=>{
    modal.classList.add('hidden')
})

const btJml = document.getElementById('+')
const btKrng = document.getElementById('-')
const btKl = document.getElementById('*')
const btBg = document.getElementById('/')
const btSd = document.getElementById('=')
const display = document.getElementById('p')



function num(value){
    display.textContent += value
}


function hapus(){
    display.textContent = ''
}

btSd.addEventListener('click', ()=>{
    // const pBaru = document.createElement('p')
    const hasil = display.textContent
    const textPBaru = display.textContent = eval(hasil)
    // pBaru.appendChild(textPBaru)
    // display.appendChild(pBaru)
    
})

const kelas = document.getElementById('kelas')
const program = document.getElementById('program')
const panah1 = document.getElementById('arrowDown1')
const panah2 = document.getElementById('arrowDown2')
const drKelas = document.getElementById('drKelas')
const drProgram = document.getElementById('drProgram')
let rotate = false
let show = false

// dropdown kelas
kelas.addEventListener('click', ()=>{
    if(rotate){
        panah1.style.rotate='0deg'
    }else{
        panah1.style.rotate='180deg'
    }
    rotate = !rotate

    if(show){
        drKelas.style.display='none'
    }else{
        drKelas.style.display='block'
    }
    show = !show
})



// dropdown program
program.addEventListener('click',()=>{
    if(rotate){
        panah2.style.rotate='0deg'
    }else{
        panah2.style.rotate='180deg'
    }
    rotate = !rotate

    if(show){
        drProgram.style.display='none'
    }else{
        drProgram.style.display='block'
    }
    show = !show
})
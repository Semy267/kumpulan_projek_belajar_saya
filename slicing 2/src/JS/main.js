const btn = document.getElementById('btn')
const span1 = document.getElementById('tandai')
const span2 = document.getElementById('selesai')
const centang1 = document.getElementById('les1')
const unlock = document.getElementById('les2')
let tekan = false

btn.addEventListener('click', ()=>{
    if(tekan){
       btn.style.backgroundColor='#E2E8F0'
       span1.style.display='inline'
       span2.style.color ='#94A3B8'
       centang1.removeAttribute('src')
       unlock.setAttribute('src', '/img/col2/uim_padlock.svg')
       
    }else{
        btn.style.backgroundColor='#007AFF'
        span1.style.display='none'
        span2.style.color ='white'
        centang1.setAttribute('src', '/img/col2/fluent_checkbox-checked-16-filled.svg')
        unlock.removeAttribute('src') 
    }
    tekan = !tekan
})


const deskripsi = document.getElementById('deskripsi')
const transkip = document.getElementById('transkip')
const assets = document.getElementById('assets')
const isiDeskripsi=document.getElementById('isiDeskripsi')
const isiTranskip = document.getElementById('isiTranskip')
const isiAssets = document.getElementById('isiAssets')
let tekan2 = false
let tekan3 = false
let tekan4 = false

deskripsi.addEventListener('click',()=>{
    if(tekan2){
        deskripsi.style.color='black'
        deskripsi.style.textDecoration='none'
        isiDeskripsi.style.display='none'
    }else{
        deskripsi.style.color='#007AFF'
        deskripsi.style.textDecoration='underline'
        isiDeskripsi.style.display='block'
        isiTranskip.style.display='none'
        isiAssets.style.display='none'
        assets.style.color='black'
        assets.style.textDecoration='none'
        isiAssets.style.display='none'
        transkip.style.color='black'
        transkip.style.textDecoration='none'
        isiTranskip.style.display='none'
    }

    tekan2 = !tekan2
    tekan3 = false
    tekan4 = false
})

transkip.addEventListener('click', ()=>{
    if(tekan3){
        transkip.style.color='black'
        transkip.style.textDecoration='none'
        isiTranskip.style.display='none'
    }else{
        transkip.style.color='#007AFF'
        transkip.style.textDecoration='underline'
        isiTranskip.style.display='block'
        isiDeskripsi.style.display='none'
        isiAssets.style.display='none'
        deskripsi.style.color='black'
        deskripsi.style.textDecoration='none'
        isiDeskripsi.style.display='none'
        assets.style.color='black'
        assets.style.textDecoration='none'
        isiAssets.style.display='none'

    }

    tekan3 = !tekan3
    tekan2 = false
    tekan4 = false
})

assets.addEventListener('click', ()=>{
    if(tekan4){
        assets.style.color='black'
        assets.style.textDecoration='none'
        isiAssets.style.display='none'
    }else{
        assets.style.color='#007AFF'
        assets.style.textDecoration='underline'
        isiAssets.style.display='block'
        isiTranskip.style.display='none'
        isiDeskripsi.style.display='none'
        deskripsi.style.color='black'
        deskripsi.style.textDecoration='none'
        isiDeskripsi.style.display='none'
        transkip.style.color='black'
        transkip.style.textDecoration='none'
        isiTranskip.style.display='none'

    }

    tekan4 = !tekan4
    tekan2 = false
    tekan3 = false
})


const mbApp = document.getElementById('mbApp')
const arrow1 = document.getElementById('arrow1')
const lesson1 = document.getElementById('lesson1')
let rotate = false

mbApp.addEventListener('click',()=>{
    if(rotate){
        lesson1.style.display='block'
        arrow1.style.rotate='0deg'
    }else{
        lesson1.style.display='none'
        arrow1.style.rotate='180deg'
    }

    rotate = !rotate
})

const flutter = document.getElementById('flutter')
const arrow2 = document.getElementById('arrow2')
const lesson2 = document.getElementById('lesson2')
let rotate2 = false

flutter.addEventListener('click',()=>{
    if(rotate2){
        lesson2.style.display='block'
        arrow2.style.rotate='0deg'
    }else{
        lesson2.style.display='none'
        arrow2.style.rotate='180deg'
    }

    rotate2 = !rotate2
})

const akun = document.getElementById('akun')
const dropdown = document.getElementById('dropdown')
const arrow3 = document.getElementById('arrow3')
let display = false

akun.addEventListener('click',()=>{
    if(display){
        dropdown.style.display='none'
        arrow3.style.rotate='0deg'
    }else{
        dropdown.style.display='block'
        arrow3.style.rotate='180deg'
    }

    display = !display 
})


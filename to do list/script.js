const inputan = document.getElementById('input')
const tombol = document.getElementById('button')
const list = document.getElementById('list')
let pList
let check
let text
let i
const hapus = document.getElementById('hapus')

tombol.addEventListener('click', function () {
    let isiInputan = inputan.value;
    pList = document.createElement('p')
    check = document.createElement('input')
    check.setAttribute('type', 'checkbox')
    if(isiInputan == ''){
        text = alert('inputan kosong')
    }else{
        text = document.createTextNode(isiInputan)
        pList.appendChild(check)
        pList.appendChild(text)
        list.appendChild(pList)
        inputan.value = ''
    }
    
})


hapus.addEventListener('click', ()=>{
    const para = document.getElementsByTagName('p')
    const paraArray = Array.from(para)
    paraArray.forEach(para => {
        const checkbox = document.querySelector('input[type="checkbox"]')
        if(checkbox && checkbox.checked){
            list.removeChild(para)
        }
    })
})



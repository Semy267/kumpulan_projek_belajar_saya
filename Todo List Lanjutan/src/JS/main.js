const section = document.getElementById('section');
const sideBar = document.getElementById('sideBar');
const panahPenutup = document.getElementById('panahPenutup')
const panahPembuka = document.getElementById('panahPembuka')
const addlist = document.getElementById('addlist')
const lightbox = document.getElementById('lightbox')
const btnAdd = document.getElementById('btnBuatList')
const btnPrio = document.getElementById('btnPrio')
const spanPrio = document.getElementById('spanPrio')
const imgPrio = document.getElementById('imgPrio')
const btnAdd2 = document.getElementById('btnBuatList2')
const btnadd3 = document.getElementById('btnBuatList3')

// kode untuk menyembunyikan sidebar
panahPenutup.addEventListener('click',()=>{
  
    sideBar.style.display ='none'
    section.classList.remove('grid-cols-[30%_70%]')
    panahPembuka.classList.remove('invisible')
    btnadd3.classList.remove('hidden')
    btnadd3.classList.add('flex')
})

// kode untuk memunculkan sidebar
panahPembuka.addEventListener('click',()=>{

    sideBar.style.display ='block'
    section.classList.add('grid-cols-[30%_70%]')
    panahPembuka.classList.add('invisible')
    btnadd3.classList.add('hidden')
    btnadd3.classList.remove('flex')
})


// kode untuk memunculkan form tambah list
btnAdd.addEventListener('click',()=>{
    lightbox.classList.remove('hidden')
    addlist.classList.remove('hidden')
})

btnAdd2.addEventListener('click',()=>{
    lightbox.classList.remove('hidden')
    addlist.classList.remove('hidden')
})

btnadd3.addEventListener('click',()=>{
    lightbox.classList.remove('hidden')
    addlist.classList.remove('hidden')
})



//kode untuk btn prioritas
let klik = false
btnPrio.addEventListener('click',()=>{
    if(klik){
        btnPrio.classList.remove('bg-black')
        spanPrio.classList.remove('text-white')
        imgPrio.setAttribute('src', '/img/hitam.png')
    }else{
        btnPrio.classList.add('bg-black')
        spanPrio.classList.add('text-white')
        imgPrio.setAttribute('src', '/img/putih.png')
    }

    klik = !klik
})

        // kode untuk membatalkan nambah list
        const batal = document.getElementById('batalList')
        batal.addEventListener('click',()=>{
            lightbox.classList.add('hidden')
            addlist.classList.add('hidden')
    
            teksAlert.classList.add('hidden')
            textList.classList.remove('border-red-600')
            textList.classList.remove('border-2')
            textList.value =''
        })

// kode untuk menambahkan list ke section
const tempatList = document.getElementById('tempatList')
const textList = document.getElementById('textList')
const insertList = document.getElementById('tambahList')
const sambutan = document.getElementById('sambutan')
const wadah = document.getElementById('wadahList')
const teksAlert = document.getElementById('alert')
let counter = 0
insertList.addEventListener('click',()=>{
    let id = counter++
    const isiText = textList.value
    const para = `      <li class="mb-5" id="li${id}">
                            <div class="flex justify-between">
                                <div class="flex space-x-2 items-center">
                                    <input type="checkbox" id="input${id}">
                                    <p class="text-xl" id="p${id}">${isiText}</p>
                                </div>

                                <div class="flex space-x-2">
                                    <img src="/img/pngwing.com.png" alt="" class="w-5 h-5 cursor-pointer" id="dit${id}">
                                    <img src="/img/pngwing.com (1).png" alt="" class="w-5 h-5 cursor-pointer" id="del${id}">
                                </div>
                            </div>
                            <hr>
                        </li>`

    if(!isiText){
        teksAlert.classList.remove('hidden')
        textList.classList.add('border-red-600')
        textList.classList.add('border-2')
    }else{
        tempatList.insertAdjacentHTML('beforeend', para)
        sambutan.classList.remove('flex')
        sambutan.classList.add('hidden')
        wadah.classList.remove('hidden')
        textList.value =''
        lightbox.classList.add('hidden')
        addlist.classList.add('hidden')

        teksAlert.classList.add('hidden')
        textList.classList.remove('border-red-600')
        textList.classList.remove('border-2')
    }

        // kode untuk membatalkan nambah list
    const batal = document.getElementById('batalList')
    batal.addEventListener('click',()=>{
        lightbox.classList.add('hidden')
        addlist.classList.add('hidden')

        teksAlert.classList.add('hidden')
        textList.classList.remove('border-red-600')
        textList.classList.remove('border-2')
        textList.value =''
    })

 


    // kode untuk mengubah style text list saat di ceklis
    const checkbox = document.getElementById(`input${id}`)
    const paragraf = document.getElementById(`p${id}`)

    checkbox.addEventListener('change',()=>{
        if(checkbox.checked){
            paragraf.style.textDecoration='line-through'
        }else{
            paragraf.style.textDecoration='none'
        }
    })

    // kode untuk mengedit list yang sudah dibuat
    const edit = document.getElementById(`dit${id}`)
    const formEdit = document.getElementById('editlist')
    const inputEdit = document.getElementById('editTeks')
    const btnEdit = document.getElementById('btnEdit')
    inputEdit.classList.add(`editTeks${id}`)
    const inputanEdit = document.getElementsByClassName(`editTeks${id}`)[0]
    const alertEdit = document.getElementById('alertEdit')
        // memunculkan form edit
    edit.addEventListener('click',()=>{
        lightbox.classList.remove('hidden')
        formEdit.classList.remove('hidden')
        inputanEdit.setAttribute('data-id', id)
    })

        // membatalkan form edit
    const batalEdit = document.getElementById('batalEdit')
    batalEdit.addEventListener('click',()=>{
        lightbox.classList.add('hidden')
        formEdit.classList.add('hidden')

        alertEdit.classList.add('hidden')
        inputanEdit.classList.remove('border-red-600')
        inputanEdit.classList.remove('border-2')
        inputanEdit.value=''
    })


        // mengubah isi teks listnya
    btnEdit.addEventListener('click',()=>{
        if(!inputanEdit.value){
            alertEdit.classList.remove('hidden')
            inputanEdit.classList.add('border-red-600')
            inputanEdit.classList.add('border-2')
        }else{
            lightbox.classList.add('hidden')
            formEdit.classList.add('hidden')
            const id = inputanEdit.getAttribute('data-id')
            const p = document.getElementById(`p${id}`)
            p.textContent =''
            const isiInputanEdit = inputanEdit.value
            const textEdit = document.createTextNode(isiInputanEdit)
            p.appendChild(textEdit)

            alertEdit.classList.add('hidden')
            inputanEdit.classList.remove('border-red-600')
            inputanEdit.classList.remove('border-2')
            inputanEdit.value=''  
        }

    
    })


    // menghapus list
    const hapus = document.getElementById(`del${id}`)
    hapus.setAttribute('delete-id', id)
    hapus.addEventListener('click',()=>{
        const id =hapus.getAttribute('delete-id')
        const li = document.getElementById(`li${id}`)
        li.remove()
        
    })

})

   // kode jika listnya kosong
function listKosong(){
    if(tempatList.childElementCount ===0){
        wadah.classList.add('hidden')
        sambutan.classList.remove('hidden')
        sambutan.classList.add('flex')
        sambutan.classList.add('items-center')
    }
}

setInterval(listKosong,1000)





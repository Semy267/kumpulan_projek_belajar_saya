let lagi = true
while (lagi){

//menangkap pilihan player
 let p = prompt('Pilih: Gajah, Orang, Semut')

 //menangkap pilihan computer dan membangkitkan bilangan random
 let comp = Math.floor(Math.random()* 3) +1
 if(comp === 1){
    comp = 'gajah'
 }else if(comp === 2){
    comp = 'orang'
 }else{
    comp = 'semut'
 }

 let hasil
 //menentukan rule
 if(p == comp){
    hasil = 'SERI!'
 }else if(p =='gajah'){
    hasil = (comp == 'orang') ? 'Kamu Menang' : 'Kamu Kalah'
}else if (p == 'orang'){
    hasil = (comp == 'gajah') ? 'Kamu Kalah' : 'Kamu Menang'
}else if(p == 'semut'){
    hasil = (comp == 'gajah') ? 'Kamu Menang' : 'Kamu Kalah'
}else if(p == 'gajah'){
    hasil = (comp == 'semut') ? 'Kamu Kalah' : 'Kamu Menang'
}else if(p == 'orang'){
    hasil = (comp == 'semut') ? 'Kamu Menang' : 'Kamu Kalah'
}else if ( p == 'semut'){
    hasil = (comp == 'orang') ? 'Kamu Kalah' : 'Kamu Menang'
}else {
    hasil = null
}

if(p == null || hasil == null){
    alert('Inputan tidak valid')
}else{
    alert(`Kamu memilih ${p}, computer memilih ${comp}. ${hasil}`)
}


let again = confirm('Lagi?')
if(confirm = true){
    lagi = true
}else{
    lagi = false
}
}



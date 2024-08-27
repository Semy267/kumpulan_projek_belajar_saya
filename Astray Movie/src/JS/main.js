const inputSearch = document.querySelector('.input-search')
const searchSubmit = document.querySelector('.search-submit')
const cardsContainer = document.querySelector('.movie-cards')
const loadingCard = document.querySelector('.loading-card')

// tombol search saat di tekan
searchSubmit.addEventListener('click', function(){
    cardsContainer.classList.add('hidden')
    loadingCard.classList.remove('hidden')
    fetch('http://www.omdbapi.com/?apikey=71fbd8ea&s=' + inputSearch.value)
    .finally(()=> {
        loadingCard.classList.add('hidden')
        cardsContainer.classList.remove('hidden')
    }).catch(response =>{
        alert(response)
    })
    .then(response => {
        if(!response.ok){
            console.log(response)
        }else{
            return response.json()
        }
    })
    .then(response => {
       const movies = response.Search
       let cards =''
       movies.forEach(m => {
        cards += `   <div class="w-full rounded shadow-xl h-full p-3 space-y-1 animate-[datang_1s_ease_forwards]">
                    <img src="${m.Poster}" alt="" class="m-auto">
                    <div class="space-y-2">
                        <p class="text-xl font-semibold">${m.Title}</p>
                        <h2 class="text-slate-500">${m.Year}</h2>
                        <button class="bg-sky-400 hover:bg-sky-500 active:bg-sky-600 rounded-sm w-full text-white detail-btn" data-imdbid="${m.imdbID}">Detail</button>
                    </div>
                </div>`
    
        cardsContainer.innerHTML = cards
       });
    
       
    });

})

// tombol detail saat di tekan
const detailBox = document.querySelector('.detail-box')
const detailContainer = document.querySelector('.detail-container')
const detailAnimasi = document.querySelector('.detail-pulse')
const detailContent = document.querySelector('.detail-content')
const detail = document.querySelector('.detail-animate')
document.addEventListener('click',function(e){
    if(e.target.classList.contains('detail-btn')){
        detailBox.classList.remove('hidden');
        detailContent.classList.add('hidden')
        detailContainer.appendChild(detailAnimasi);
        detailAnimasi.classList.remove('hidden');

        const imdbid = e.target.dataset.imdbid;
        fetch('http://www.omdbapi.com/?apikey=71fbd8ea&i=' + imdbid)
        .finally(()=> {
            detailContainer.removeChild(detailAnimasi);
            detailAnimasi.classList.add('hidden')
            detailContent.classList.remove('hidden')
        })
        .then(response => response.json())
        .then( m => {
            document.querySelector('.Poster').setAttribute('src', `${m.Poster}`)
            document.querySelector('.Judul').textContent = m.Title
            document.querySelector('.Genre').textContent = m.Genre
            document.querySelector('.Rated').textContent = m.Rated
            document.querySelector('.Actors').textContent = m.Actors
            document.querySelector('.Writer').textContent = m.Writer
            document.querySelector('.Plot').textContent = m.Plot
        });
    }
});


// tombol close detail saat ditekan
const closeDetail = document.getElementById('closeModalBtn')
closeDetail.addEventListener('click', function(){
    detailBox.classList.add('hidden')
})



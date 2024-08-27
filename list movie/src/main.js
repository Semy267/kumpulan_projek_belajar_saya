// JQuery

// $('.search-submit').on('click', function(){
    
//     $.ajax({
//         url: 'http://www.omdbapi.com/?apikey=71fbd8ea&s=' + $('.search-movie').val(),
//         success: results => {
//             const movies = results.Search;
//             let cards = ''
//             movies.forEach(m => {
//                 cards += movie(m)
//             });
//             $('.movie-container').html(cards)
    
//             // memunculkan modal box dan mendapatkan id movie
            
//             const imgModal = document.getElementById('img')
//             const modal = document.getElementById('modal')
    
//             $('.show-detail').on('click', function() {            
//                 $.ajax({
//                     url: 'http://www.omdbapi.com/?apikey=71fbd8ea&i=' + $(this).data('imdbid'),
//                     success: m => {
//                         $('#Judul').text(m.Title)
//                         $('#Director').text(m.Director)
//                         $('#Actors').text(m.Actors)
//                         $('#Writer').text(m.Writer)
//                         $('#Plot').text(m.Plot)
//                         imgModal.setAttribute('src', `${m.Poster}`)
                        
//                     }
//                 })
    
                
//                 modal.classList.remove('hidden')
//                 modal.classList.add('flex')
    
//             })
    
//             // menutup modal
//             const closeModal = document.getElementById('closeModal')
//             closeModal.addEventListener('click', ()=>{
//                 modal.classList.add('hidden')
//             })
    
    
//         },
//         error: (e) => {
//             console.log(e.responseText);
//         }
        
        
//     });
// });


// fetch
// const searchBtn = document.querySelector('.search-submit');
// const imgModal = document.getElementById('img');
// const modal = document.getElementById('modal');

// searchBtn.addEventListener('click', function(){

//     const searchInput = document.querySelector('.search-movie');
//     fetch('http://www.omdbapi.com/?apikey=71fbd8ea&s=' + searchInput.value)
//     .then(response => response.json())
//     .then(response => {
//         const movies = response.Search
//         let cards = ''
//         movies.forEach(m => {
//             cards += movie(m)
//         });
//         const movieContainer = document.querySelector('.movie-container')
//         movieContainer.innerHTML = cards

//         // ketika tombol detail di klik
//         const showDetail = document.querySelectorAll('.show-detail')
//         showDetail.forEach(btn =>{
//             btn.addEventListener('click', function(){
//                 const imdbid = this.dataset.imdbid;
//                 fetch('http://www.omdbapi.com/?apikey=71fbd8ea&i=' + imdbid)
//                     .then(response => response.json())
//                         .then(m => {
//                             document.querySelector('#Judul').textContent = m.Title
//                             document.querySelector('#Director').textContent = m.Director
//                             document.querySelector('#Actors').textContent = m.Actors
//                             document.querySelector('#Writer').textContent = m.Writer
//                             document.querySelector('#Plot').textContent = m.Plot
//                             imgModal.setAttribute('src', `${m.Poster}`)
//                         });
                
//                 modal.classList.remove('hidden')
//                 modal.classList.add('flex')
//             });
//         });
//     });

//     // menutup modal
//     const closeModal = document.getElementById('closeModal')
//     closeModal.addEventListener('click', ()=>{
//         modal.classList.add('hidden')
//     });

// });


// fetch refactor (async await)
const searchBtn = document.querySelector('.search-submit');
const imgModal = document.getElementById('img');
const modal = document.getElementById('modal');

searchBtn.addEventListener('click', async function(){
    try{
        const searchInput = document.querySelector('.search-movie');
        const movies = await getMovies(searchInput.value);
        updateUI(movies)

    } catch(err){
        console.log(err)
    }
});




function getMovies(keyword){
    return fetch('http://www.omdbapi.com/?apikey=71fbd8ea&s=' + keyword)
    .then(response => {
        if(!response.ok){
            throw new Error(response.statusText);
        };
       return response.json()
    })
    .then(response => {
        if(response.Response === 'false'){
            throw new Error(response.Error);
        };
        return response.Search;
    } );
}



function updateUI(movies){
        let cards = ''
        movies.forEach(m => {
            cards += movie(m)
        });
        const movieContainer = document.querySelector('.movie-container')
        movieContainer.innerHTML = cards
}


// event binding
document.addEventListener('click', async function(e){
    if(e.target.classList.contains('show-detail')){
        const imdbid = e.target.dataset.imdbid;
        const moviesDetail = await getMoviesDetail(imdbid)
        updateUIDetail(moviesDetail)
        modal.classList.remove('hidden')
        modal.classList.add('flex')
    }
})


    // menutup modal
const closeModal = document.getElementById('closeModal')
    closeModal.addEventListener('click', ()=>{
        modal.classList.add('hidden')
    });



function getMoviesDetail(imdbid){
    return   fetch('http://www.omdbapi.com/?apikey=71fbd8ea&i=' + imdbid)
                .then(response => response.json())
                .then(m => m);
}


function updateUIDetail(m){ 
    document.querySelector('#Judul').textContent = m.Title
    document.querySelector('#Director').textContent = m.Director
    document.querySelector('#Actors').textContent = m.Actors
    document.querySelector('#Writer').textContent = m.Writer
    document.querySelector('#Plot').textContent = m.Plot
    imgModal.setAttribute('src', `${m.Poster}`)
}






function movie(m) {
    return `<div class="border shadow-md p-4 w-full flex flex-col justify-between">
                                <div class="flex flex-col items-center mb-2">
                                    <img src="${m.Poster}" alt="">
                                </div>
                                <p class="text-lg font-semibold my-1">${m.Title}</p>
                                <h2 class="text-sm text-slate-500 mb-1">${m.Year}</h2>
                                <button class="rounded bg-sky-600 p-2 text-white show-detail" data-imdbid="${m.imdbID}">Show Detail</button>
                            </div>`
}



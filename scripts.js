document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        { name: 'Baco Exu do Blues', Image: './images/artista-baco-exu-do-blues.jpg' },
        { name: 'TZ da Coronel', Image: './images/artista-tz-da-coronel.jpg' },
        { name: 'Kayblack', Image: './images/artista-kayblack.jpg' },
        { name: 'Vulgo FK', Image: './images/artista-vulgo-fk.jpg' },
        { name: 'Travis Scott', Image: './images/artista-travis-scott.jpg' }
    ];
    
    const albumsData = [
        {name: 'Arthur Verocai', artist: 'Arthur Verocai', Image: './images/album-arthur-verocai-arthur-verocai.jpg'},
        {name: 'Oproprio', artist: 'Yago Oproprio', Image: './images/album-oproprio-yago-oproprio.jpg'},
        {name: 'Icarus', artist: 'BK', Image: './images/album-icarus-bk.jpg'},
        {name: 'Esú', artist: 'Baco Exu do Blues', Image: './images/album-esu-baco-exu-do-blues.jpg'},
        {name: 'Funk Superação - Ao Vivo', artist: 'Mc Hariel', Image: './images/album-funk-superacao-mc-hariel.jpg'}
    ];

    const artistGrid = document.querySelector('.artists-grid')
    const albumsGrid = document.querySelector('.albums-grid')

    artistsData.forEach( artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
          <img src="${artist.Image}" alt="imagem do ${artist.name}">
          <div>
            <h3>${artist.name}</h3>
            <p>artistas</p>
          </div>
          <i class="bi bi-play-fill play-icon"></i>
        `

        artistGrid.appendChild(artistCard)
    })

    albumsData.forEach( albums => {
        const albumCard = document.createElement('div')
        albumCard.classList.add('album-card')

        albumCard.innerHTML = `
          <img src="${albums.Image}" alt="imagem do ${albums.name}">
          <div>
            <h3>${albums.name}</h3>
            <p>${albums.artist}</p>
          </div>
          <i class="bi bi-play-fill play-icon"></i>
        `

        albumsGrid.appendChild(albumCard)
    })

})
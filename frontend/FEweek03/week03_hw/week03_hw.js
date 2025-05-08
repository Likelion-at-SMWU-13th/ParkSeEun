const searchForm = document.getElementById("srh-form");
const singerInput = document.getElementById("name-input");
const searchBtn = document.getElementById("srh-btn");

function searchSong(event) {
    event.preventDefault();
    const singer = singerInput.value.trim();
    fetchSong(singer); 
}

async function fetchSong(keyword) {
    try {
        const response = await fetch(`https://api.manana.kr/karaoke/singer/${keyword}.json`);
        const songList = await response.json();
        const container = document.getElementById("songlistContainar");
        
        songList.forEach((song) => {
            const list = document.createElement("div");
            list.className = "list"

            list.innerHTML = `
            <div class="song-box">
            <h5 class="song-title">${song.title}</h5>
            <h6 class="song-singer">${song.singer}</h6>
            <p class="song-no">${song.no}</p>
            <p class="song-composer">${song.composer}</p>
            <p class="song-lyricist">${song.lyricist}</p>
            <p class="song-release">${song.release}</p>
            </div>`;
            container.appendChild(list);
        });
    } catch(error) {
        console.error("에러 발생:", error);
    }
}

searchForm.addEventListener('submit', searchSong);
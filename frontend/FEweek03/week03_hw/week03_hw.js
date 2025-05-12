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
        
        container.innerHTML = '';

        songList.forEach((song) => {
            const list = document.createElement("div");
            list.className = "list"

            list.innerHTML = `
            <div class="song-box">
            <h4 class="song-title">${song.title}</h4>
            <p class="song-singer">${song.singer}</p>
            <div class="info-box">
                <div>
                   <div class="song-info"><span class="info-label">번호</span><span>${song.no}</span></div>
                   <div class="song-info"><span class="info-label">작사</span><span>${song.composer}</span></div>
                </div>
                <div class="second">
                  <div class="song-info"><span class="info-label">작곡</span><span>&nbsp;&nbsp;&nbsp;${song.lyricist}</span></div>
                  <div class="song-info"><span class="info-label">발매일</span><span>${song.release}</span></div>
                </div>
            </div>
            </div>`;
            container.appendChild(list);
        });
    } catch(error) {
        console.error("에러 발생:", error);
    }
}

searchForm.addEventListener('submit', searchSong);
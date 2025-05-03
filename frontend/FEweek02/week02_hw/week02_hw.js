const heart = document.getElementById("heart-img");
const count = document.getElementById("count");
const heart_text = document.getElementById("heart-text");
const main_text = document.getElementById("main-text");
const plus = document.getElementById("plus");

function heartClick(event) {
    heart.classList.toggle("liked");

    if (heart.classList.contains("liked")) {
        heart.src = "./img/heart2.png";
        count.textContent = "좋아요 16개";
        heart_text.textContent = "16";
    } else {
        heart.src = "./img/heart.png";
        count.textContent = "좋아요 15개";
        heart_text.textContent = "15";
    }
}

function textPlus(event) {
    plus.classList.toggle("plus");

    if (plus.classList.contains("plus")) {
        main_text.textContent = "2025년 1월을 맞이해서";
        plus.textContent = "...더 보기";
    } else {
        main_text.textContent = "2025년 1월을 맞이해서 상하이로 여행✈️ 이국적인 문화가 분위기를 낭만 가득하게 만들어 준다.. 상하이 꼭 다시 가서 양꼬치도 먹고 훠궈도 먹어야지:) ^-^";
        plus.textContent = "접기";
    }
}

heart.addEventListener("click", heartClick)
plus.addEventListener("click", textPlus)


const drinks = [
    { name: "코카콜라", price: 1200 },
    { name: "사이다", price: 1200 },
    { name: "환타", price: 1100 },
    { name: "스프라이트", price: 1300 },
    { name: "밀키스", price: 1000},
    { name: "레몬에이드", price: 1500},
    { name: "닥터페퍼", price: 1400},
    { name: "모구모구", price: 2000},
];

let Money = 4000;
let spendMoney = 0;
let drunk = [];

function randomDrink(arr) {
    return Math.floor(Math.random() * arr.length);
}

function printDrink(drink) {
    if (Money >= drink.price){
        console.log(`-> *${drink.name}* 음료가 나왔어요! (가격: ${drink.price}원)`);
        Money -= drink.price;
        drunk.push(drink.name);
        spendMoney += drink.price;
        console.log(`-> 지갑에 남은 돈: ${Money}원`);
    }
    else {
        console.log("-> 돈이 부족해요! 음료를 살 수 없어요!");
    }
}

function buyDrink() {
    let drink;
    for(i=0 ; i<3 ; i++){
        console.log("[🥤음료를 뽑는 중🥤]");
        drink = randomDrink(drinks);
        printDrink(drinks[drink])
        console.log("-----------------------------------------");
    }
}

function totalDrink(){
    console.log(`☝️ 총, ${spendMoney}원을 사용했어요.`);
    console.log(`☝️ ${drunk} 음료를 GET!`);
    if (Money == 0) {
        console.log(`☝️ 이제 남은 돈이 없습니다...`);
    }
    else{
        console.log(`☝️ 이제 ${Money}원이 남았어요.`);
    }
}

buyDrink();
totalDrink();
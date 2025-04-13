const drinks = [
    { name: "cok", price: 1200 },
    { name: "cider", price: 1200 },
    { name: "fanta", price: 1100 },
    { name: "sprite", price: 1300 },
    { name: "milkis", price: 1000},
];

let Money = 20000;

function randomDrink(arr) {
    return Math.floor(Math.random() * arr.length);
}

function printDrink(drink) {
    if (Money >= drink.price){
        console.log(`${drink.name} 음료가 나왔어요! (가격: ${drink.price}원)`);
        Money -= drink.price;
        console.log(`지갑에 남은 돈: ${Money}원`);
    }
    else {
        console.log("돈이 부족해요! 음료를 살 수 없어요!");
    }
}

function buyDrink() {
    let drink;
    for(i=0;i<3;i++){
        drink = randomDrink(drinks);
        printDrink(drinks[drink])
    }
}

buyDrink();
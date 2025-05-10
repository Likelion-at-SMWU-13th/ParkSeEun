const date = new Date();

const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
const hour = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();

console.log(`${year}년 ${month}월 ${day}일\n`);
console.log(`${hour}시 ${min}분 ${sec}초\n`);

const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
console.log(formattedDate);
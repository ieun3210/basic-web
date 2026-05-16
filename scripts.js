let bodyTag = document.body;
// section 태그를 찾는다.

let sectionTag = document.querySelector("section");

let hongikFestival = {

 name: "축제 라인업",

 date: "2026.05.13 - 2026.05.15",

 location: "서울특별시 마포구 홍익대학교",

 lineup: {

 day1: "day1: 다이나믹듀오",

 day2: "day2: 백예린",

 day3: "day3: 프로미스나인",
 }
}
let dynamicDuoTag = document.createElement("p");
dynamicDuoTag.innerText = hongikFestival.lineup.day1;
sectionTag.appendChild(dynamicDuoTag);

let yerinTag = document.createElement("p");
yerinTag.innerText = hongikFestival.lineup.day2;
sectionTag.appendChild(yerinTag);

let promisTag = document.createElement("p");
promisTag.innerText = hongikFestival.lineup.day3;
sectionTag.appendChild(promisTag);
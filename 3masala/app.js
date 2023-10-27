let arry = ["damas", "matiz", "tiko"];
let cards = prompt("Mahina nomini kiriting?");

if (arry.includes(cards)) {
  console.log("Allaqachon qo'shilgan");
} else {
  arry.unshift(cards);
  console.log(cards + " Qo'shildi " + arry);
}

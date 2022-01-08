var elResult = document.querySelector('.heading');

alert('Borish-kelish samolyot bileti - $500\nMehmonxona to\'lovi (to\'liq safar davomiyligi uchun) - $250\nMuzey va ko\'ngilochar joylar uchun - 120 yevro')

var haveMoney = Number(prompt('Alisher aka qancha pul bor\nSo\'mda', 0));

// Currency
var dollarCourse = 9433.34;
var euroCourse = 10354.03;

// Costs
var ticket = 500 * dollarCourse;
var hotel = 250 * dollarCourse;
var museum = 120 * euroCourse;

// Total summ 
var total = ticket + hotel + museum;

if (total <= haveMoney) {
  elResult.textContent = "Oq yo\'l, Alisher!";
}
else {
  elResult.textContent = 'Alisher, ozgina sabr qilish kerak bo\'lar ekan.';
}
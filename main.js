
let tipInput = document.querySelector('#tipInput');
let tipOutputContainer = document.querySelector('#tipOutputContainer');
let tipConversionBtn = document.querySelector('#tipConversionBtn');
let totalHoursOfShift = document.querySelector('#totalHoursOfShift');
let shiftHours = document.querySelector('#shiftHours');
let hourlyTips = document.querySelector('#hourlyTips');
let averageTipsBtn = document.querySelector('#averageTipsBtn');
let averageTips = document.querySelector('#averageTips');
let totalTips;
let kitchenTips; 

let averageHourlyTips = () => {
	averageTips = parseFloat(averageTips.value).toFixed(2);
	shiftHours = parseFloat(shiftHours.value).toFixed(2); 
	averageTips = averageTips/shiftHours;
	tipOutputContainer.innerHTML = `<p>Average hourly tips: $${averageTips}</p>`;
};

fohTipConversion = () => {
	totalTips = parseFloat(tipInput.value).toFixed(2);
	kitchenTips = (totalTips*0.2);
	let fohTips = (totalTips - kitchenTips)/2;
  	tipOutputContainer.innerHTML += `<p>Cashier and Barista each get $${fohTips.toFixed(2)}</p>`;
  	kitchenTipConversion(kitchenTips);
};	

//if 6-1 shift. use conditional statements to determine how many hours?
kitchenTipConversion = (tips) => {
	shiftHours = parseFloat(shiftHours.value).toFixed(2);
	let numberOfOpeners = 2;
	let k3 = 1;
	let morningHours = 3;
	let afterNoonHours = 4;
	//total average hourly tips for whole shift
	let averageHourlyTips = (tips/shiftHours);
	//first kitchen tipout 6-9
	let morningTips = averageHourlyTips*morningHours;
	//k1 and k2 tipout before k3 arrives
	let kitchenOpenersTipsEach = morningTips/numberOfOpeners;
	//remaining tips after morning tipout 
	let remainingTipsFromMorning = tips - morningTips;
	//the tip split for 9-1
	let afternoonTipSplit = remainingTipsFromMorning/(numberOfOpeners+k3);
	let k1AndK2Tips = kitchenOpenersTipsEach + afternoonTipSplit; 
	let k3Tips = afternoonTipSplit; 

	tipOutputContainer.innerHTML += `<p>K1 and K2 each get $${k1AndK2Tips.toFixed(2)}</p>`;
	tipOutputContainer.innerHTML += `<p>K3 gets $${k3Tips.toFixed(2)}</p>`;
};

tipConversionBtn.addEventListener('click', fohTipConversion)
averageTipsBtn.addEventListener('click', averageHourlyTips)




let tipInput = document.querySelector('#tipInput');
let tipOutputContainer = document.querySelector('#tipOutputContainer');
let tipConversionBtn = document.querySelector('#tipConversionBtn');
let totalHoursOfShift = document.querySelector('#totalHoursOfShift');
let shiftHours = document.querySelector('#shiftHours');
let hourlyTips = document.querySelector('#hourlyTips');
let averageTipsBtn = document.querySelector('#averageTipsBtn');
let averageTips = document.querySelector('#averageTips');
let weekdaySelected = document.querySelector('#weekdaySelected');
let weekendSelected = document.querySelector('#weekendSelected');
let barBackSelector = document.querySelector('#barBackSelector');
let totalTips;
let fohTips;
let kitchenTips; 
let barBackTips;

// averageHourlyTips = () => {
// 	averageTips = parseFloat(averageTips.value).toFixed(2);
// 	shiftHours = parseFloat(shiftHours.value).toFixed(2); 
// 	averageTips = averageTips/shiftHours;
// 	tipOutputContainer.innerHTML = `<p>Average hourly tips: $${averageTips}</p>`;
// };

fohTipConversionWeekday = () => {
	totalTips = parseFloat(tipInput.value).toFixed(2);
	kitchenTips = (totalTips*0.2);
	if (barBackSelector.checked) {
		console.log('barback is selected')
		barBackTips = (totalTips*0.2);
		fohTips = ((totalTips-kitchenTips)-barBackTips)/2;
  		tipOutputContainer.innerHTML += `<p>Cashier and Barista each get $${fohTips.toFixed(2)}</p>`;
  		tipOutputContainer.innerHTML += `<p>Bar Back gets $${barBackTips.toFixed(2)}</p>`;
	} else {
		console.log('barback is not selected')	
		kitchenTips = (totalTips*0.2);
		fohTips = (totalTips - kitchenTips)/2;
  		tipOutputContainer.innerHTML += `<p>Cashier and Barista each get $${fohTips.toFixed(2)}</p>`;
  	};
  	kitchenTipConversionWeekday(kitchenTips);
};	

fohTipConversionWeekend = () => {
	totalTips = parseFloat(tipInput.value).toFixed(2);
	kitchenTips = (totalTips*0.2);
	if (barBackSelector.checked) {
		console.log('barback is selected')
		barBackTips = (totalTips*0.2);
		fohTips = ((totalTips-kitchenTips)-barBackTips)/2;
  			tipOutputContainer.innerHTML += `<p>Cashier and Barista each get $${fohTips.toFixed(2)}</p>`;
  			tipOutputContainer.innerHTML += `<p>Bar Back gets $${barBackTips.toFixed(2)}</p>`;
  	} else {
  		console.log('barback is not selected')	
		fohTips = (totalTips-kitchenTips)/2;
  		tipOutputContainer.innerHTML += `<p>Cashier and Barista each get $${fohTips.toFixed(2)}</p>`;
  	};
  	kitchenTipConversionWeekend(kitchenTips);
};	

//if 6-1 shift. use conditional statements to determine how many hours?
kitchenTipConversionWeekday = (tips) => {
	shiftHours = parseFloat(shiftHours.value).toFixed(2);
	let numberOfOpeners = 2;
	let k3 = 1;
	let morningHoursWeekDay = 3;
	let afterNoonHours = 4;
	if (tips < 15) {
		let each = tips/3;
		writeToDomLessTips(each);
	} else {	
	//total average hourly tips for whole shift
	let totalAverageHourlyTips = (tips/shiftHours);
	//first kitchen tipout 6-9. holding the value for each employee
	let morningTips = (totalAverageHourlyTips*morningHoursWeekDay)/numberOfOpeners;
	//remaining tips after morning tipout 
	let remainingTipsFromMorning = tips-(totalAverageHourlyTips*morningHoursWeekDay);
	//the tip split for 9-1
	let afternoonTipSplit = (remainingTipsFromMorning/(numberOfOpeners+k3))
	let k1AndK2Tips = morningTips+afternoonTipSplit; 
	let k3Tips = afternoonTipSplit; 
	writeToDomFull(k1AndK2Tips, k3Tips)
	};
};

kitchenTipConversionWeekend = (tips) => {
	shiftHours = parseFloat(shiftHours.value).toFixed(2);
	let numberOfOpeners = 2;
	let k3 = 1;
	let morningHoursWeekend = 2;
	let afterNoonHours = 4;
	if (tips < 15) {
		let each = tips/3;
		writeToDomLessTips(each);
	} else {	
	//total average hourly tips for whole shift
	let totalAverageHourlyTips = (tips/shiftHours);
	//first kitchen tipout 7-9. holding the value for each employee
	let morningTips = (totalAverageHourlyTips*morningHoursWeekend)/numberOfOpeners;
	//remaining tips after morning tipout 
	let remainingTipsFromMorning = tips-(totalAverageHourlyTips*morningHoursWeekend);
	//the tip split for 9-1
	let afternoonTipSplit = (remainingTipsFromMorning/(numberOfOpeners+k3))
	let k1AndK2Tips = morningTips+afternoonTipSplit; 
	let k3Tips = afternoonTipSplit; 
	writeToDomFull(k1AndK2Tips, k3Tips)
	};
};

writeToDomLessTips = (each) => {
	tipOutputContainer.innerHTML += `<p>K1 and K2 each get $${each.toFixed(2)}</p>`;
	tipOutputContainer.innerHTML += `<p>K3 gets $${each.toFixed(2)}</p>`;
};

writeToDomFull = (k1k2, k3) => {
	tipOutputContainer.innerHTML += `<p>K1 and K2 each get $${k1k2.toFixed(2)}</p>`;
	tipOutputContainer.innerHTML += `<p>K3 gets $${k3.toFixed(2)}</p>`;
};

tipConversionBtn.addEventListener('click', function() {
	if (weekdaySelected.checked) {
		console.log('fohTipConversionWeekday is firing')
		fohTipConversionWeekday();
	} else if (weekendSelected.checked) {
		console.log('fohTipConversionWeekend is firing')
		fohTipConversionWeekend();
	} else {
		tipOutputContainer.innerHTML += `<p>Please Select Weekday or Weekend</p>`;
	}
});
// averageTipsBtn.addEventListener('click', averageHourlyTips)



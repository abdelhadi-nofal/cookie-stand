'use strict';

let hs=document.getElementById('demo1');
let Seattle={
  maxHourlyCustomers: 65 ,
  minHourlyCustomers:  23,
  AvgCookie: 	6.3,
  numberOfCustomersPerHour:function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  }
};

let unlist1=document.createElement('ul');
let workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let total = 0;
for (let i = 0; i < workingHours.length; i++) {
  let element = document.createElement('li');
  let hourlyTotal = Seattle.numberOfCustomersPerHour() * Math.floor(Seattle.AvgCookie);
  element.innerText = workingHours[i] + ':' + hourlyTotal + ' cookies';
  unlist1.appendChild(element);
  total = total + hourlyTotal;
}
let total1=document.createElement('li');
total1.innerText = 'Total:' + total + ' cookies';
unlist1.appendChild(total1);
hs.appendChild(unlist1);



let hd=document.getElementById('demo2');
let Dubai={
  maxHourlyCustomers: 38 ,
  minHourlyCustomers:  11,
  AvgCookie: 	3.7,
  numberOfCustomersPerHour:function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  }

};

let unlist2=document.createElement('ul');
let totald=0;
for (let i = 0; i < workingHours.length; i++) {
  let element = document.createElement('li');
  let hourlyTotal = Dubai.numberOfCustomersPerHour() * Math.floor(Dubai.AvgCookie);
  element.innerText = workingHours[i] + ':' + hourlyTotal + ' cookies';
  unlist2.appendChild(element);
  totald = totald + hourlyTotal;
}
let total2=document.createElement('li');
total2.innerText = 'Total:' + totald + ' cookies';
unlist2.appendChild(total2);
hd.appendChild(unlist2);



let unlist3=document.createElement('ul');
let totall=0;
let hl=document.getElementById('demo3');
let Lima={
  maxHourlyCustomers: 16 ,
  minHourlyCustomers:  2,
  AvgCookie: 	4.6,
  numberOfCustomersPerHour:function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  }
};
for (let i = 0; i < workingHours.length; i++) {
  let element = document.createElement('li');
  let hourlyTotal = Lima.numberOfCustomersPerHour() * Math.floor(Lima.AvgCookie);
  element.innerText = workingHours[i] + ':' + hourlyTotal + ' cookies';
  unlist3.appendChild(element);
  totall = totall + hourlyTotal;
}
let total3=document.createElement('li');
total3.innerText = 'Total:' + totall + ' cookies';
unlist3.appendChild(total3);
hl.appendChild(unlist3);



let unlist4=document.createElement('ul');
let totalp=0;
let hp=document.getElementById('demo4');
let Paris={
  maxHourlyCustomers: 38 ,
  minHourlyCustomers:  	20,
  AvgCookie: 		2.3,
  numberOfCustomersPerHour:function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  }
};
for (let i = 0; i < workingHours.length; i++) {
  let element = document.createElement('li');
  let hourlyTotal = Paris.numberOfCustomersPerHour() * Math.floor(Paris.AvgCookie);
  element.innerText = workingHours[i] + ':' + hourlyTotal + ' cookies';
  unlist4.appendChild(element);
  totalp = totalp + hourlyTotal;
}
let total4=document.createElement('li');
total4.innerText = 'Total:' + totalp + ' cookies';
unlist4.appendChild(total4);
hp.appendChild(unlist4);








let unlist5=document.createElement('ul');
let totalt=0;
let ht=document.getElementById('demo5');
let Tokyo={
  maxHourlyCustomers: 24 ,
  minHourlyCustomers:  	3,
  AvgCookie: 		1.2,
  numberOfCustomersPerHour:function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  }
};
for (let i = 0; i < workingHours.length; i++) {
  let element = document.createElement('li');
  let hourlyTotal = Tokyo.numberOfCustomersPerHour() * Math.floor(Tokyo.AvgCookie);
  element.innerText = workingHours[i] + ':' + hourlyTotal + ' cookies';
  unlist5.appendChild(element);
  totalt = totalt + hourlyTotal;
}
let total5=document.createElement('li');
total5.innerText = 'Total:' + totalt + ' cookies';
unlist5.appendChild(total5);
ht.appendChild(unlist5);



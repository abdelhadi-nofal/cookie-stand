'use strict';

function City(name,max,min,avg){
  this.name = name;
  this.maxHourlyCustomers= max ,
  this.minHourlyCustomers= min,
  this.AvgCookie=avg,
  this.numberOfCustomersPerHour=function(){
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  };
}


let workingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let Seattle=new City('Seattle',65,23,6.3);
let Dubai=new City('Dubai',38,11,3.7);
let Lima=new City('Lima',16,2,4.6);
let Paris=new City('Paris',38,20,2.3);
let Tokyo=new City('Tokyo',24,3,1.2);


let tbl=document.getElementById('tb1');
let head=document.createElement('tr');
let headHours=document.createElement('th');
headHours.innerText=('City Name');
head.appendChild(headHours);
tbl.appendChild(head);


for(let i=0;i<workingHours.length;i++){
  let headHours=document.createElement('th');
  headHours.innerText=(workingHours[i]);
  head.appendChild(headHours);
  tbl.appendChild(head);
}

let lastCol=document.createElement('th');
lastCol.innerText=('Daily Location Total');
head.appendChild(lastCol);
tbl.appendChild(head);


function goal(City){
  let head2=document.createElement('tr');
  let headHours=document.createElement('td');
  headHours.innerText=City.name;
  head2.appendChild(headHours);
  tbl.appendChild(head2);
  for(let i=0;i<workingHours.length;i++){
    let headHours=document.createElement('td');
    headHours.innerText=(City.numberOfCustomersPerHour() * Math.floor(City.AvgCookie));
    head2.appendChild(headHours);
    tbl.appendChild(head2);

  }
}

goal(Seattle);
goal(Dubai);
goal(Lima);
goal(Paris);
goal(Tokyo);



// let unlist5=document.createElement('ul');
// let totalt=0;
// let ht=document.getElementById('demo5');
// let Tokyo=new City(24,3,1.2);


// for (let i = 0; i < workingHours.length; i++) {
//   let element = document.createElement('li');
//   let hourlyTotal = Tokyo.numberOfCustomersPerHour() * Math.floor(Tokyo.AvgCookie);
//   element.innerText = workingHours[i] + ':' + hourlyTotal + ' cookies';
//   unlist5.appendChild(element);
//   totalt = totalt + hourlyTotal;
// }
// let total5=document.createElement('li');
// total5.innerText = 'Total:' + totalt + ' cookies';
// unlist5.appendChild(total5);
// ht.appendChild(unlist5);






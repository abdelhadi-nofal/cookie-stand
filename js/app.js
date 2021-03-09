'use strict';

function City(name,max,min,avg){
  this.name = name;
  this.maxHourlyCustomers= max ,
  this.minHourlyCustomers= min,
  this.AvgCookie=avg,
  this.totalPerHour=[];
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




let tb1=document.getElementById('tb1');


let thead=document.createElement('thead');
let theadempty=document.createElement('th');
theadempty.innerText=('');
thead.appendChild(theadempty);
tb1.appendChild(thead);
for(let i=0;i<workingHours.length;i++){
  let theadhours=document.createElement('th');
  theadhours.innerText=(workingHours[i]);
  thead.appendChild(theadhours);
  tb1.appendChild(thead);
}

let dailytotal=document.createElement('th');
dailytotal.innerText=('Daily Location Total');
thead.appendChild(dailytotal);
tb1.appendChild(thead);




function goal(City){
  let cites=document.createElement('tr');
  let headHours=document.createElement('td');
  headHours.innerText=City.name;
  cites.appendChild(headHours);
  tb1.appendChild(cites);
  let totalDay=0;

  for(let i=0;i<workingHours.length;i++){
    let hourlyTotal = Math.floor(City.numberOfCustomersPerHour() * City.AvgCookie);
    totalDay = totalDay + hourlyTotal;
    let headHours=document.createElement('td');
    headHours.innerText=(hourlyTotal);
    cites.appendChild(headHours);
    tb1.appendChild(cites);
  }

  let dailytot=document.createElement('td');
  dailytot.innerText=(totalDay);
  cites.appendChild(dailytot);
  tb1.appendChild(cites);
}

goal(Seattle);
goal(Dubai);
goal(Lima);
goal(Paris);
goal(Tokyo);




let tota=0;
let totalsPerHour=document.createElement('tfoot');
totalsPerHour.innerText=('Totals');
tb1.appendChild(totalsPerHour);
for(let i=0;i<workingHours.length;i++){
  let totalData=document.createElement('td');
  totalData.innerText=(tota);
  totalsPerHour.appendChild(totalData);
}










'use strict';

let locations=[];

function City(name,max,min,avg){
  this.name = name;
  this.maxHourlyCustomers= max ,
  this.minHourlyCustomers= min,
  this.AvgCookie=avg,
  this.totalsPerHour=[];
  locations.push(this),
  this.numberOfCustomersPerHour=function(){
    return Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
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
    let hourlyTotal = Math.ceil(City.numberOfCustomersPerHour() * City.AvgCookie);
    City.tota+=hourlyTotal;
    City.totalsPerHour.push(hourlyTotal);
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


function goal2(){
  document.getElementById('tb1').deleteTFoot();
  let tfoot=document.createElement('tfoot');
  tfoot.innerText=('Totals');
  tb1.appendChild(tfoot);

  for(let i=0;i<workingHours.length;i++){
    let tota = 0;
    for(let j=0;j< locations.length;j++){
      tota +=locations[j].totalsPerHour[i];
    }
    let totalData=document.createElement('td');
    totalData.innerText=(tota);
    tfoot.appendChild(totalData);

  }

  let tots=0;
  for(let i=0;i<workingHours.length;i++){
    for(let j=0;j< locations.length;j++){
      tots +=locations[j].totalsPerHour[i];
    }

  }

  let allTotal=document.createElement('td');
  allTotal.innerText=(tots);
  tfoot.appendChild(allTotal);

}

goal2();

let form=document.getElementById('demo2');
form.addEventListener('submit',function (event){
  event.preventDefault();
  let userInpu=event.target.userInpu.value;
  let userInpu1= parseInt( event.target.userInpu1.value);
  let userInpu2=parseInt(event.target.userInpu2.value);
  let userInpu3=parseInt(event.target.userInpu3.value);
  let newCit =new City(userInpu,userInpu1,userInpu2,userInpu3);
  goal(newCit);
  goal2();
  return;

});















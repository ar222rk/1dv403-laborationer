"use strict";

var makePerson = function(persArr){
 // skapar arrayer , objekt och variabel
 var result = {}; 
  var names = "";
var ageArr = [];
var nameArr = [];
var i;


for (i=0; i< persArr.length; i+=1) // skapar for lopen som ska loppa genom arrayen name
{
  nameArr[i] = persArr[i].name; // lägger in name i arrayen
} 

nameArr.sort(function(a,b) {return a.localeCompare(b, 'sv');});  // sortera namn bokstavs..
  names = nameArr.toString(); 
 
names = nameArr.join(", ");
console.log(+names);



 for (i=0; i< persArr.length; i+=1 ){
  
   ageArr[i] = persArr[i].age;
   
 }
    
     ageArr.sort(function(a, b) {return a-b});  
  
    var minAge = ageArr[0];
 var maxAge = ageArr[ageArr.length-1];
 
 var avarageAge = ageArr.reduce(function(a,b) {return a+b});
     avarageAge = avarageAge/ (ageArr.length);
     
     
     result = {minAge: minAge, maxAge: maxAge, averageAge: Math.round(avarageAge), names: names};
     
     return result;
 
 
 

 


};

  var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];
  var result = makePerson(data);
console.log(result);

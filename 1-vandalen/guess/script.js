"use strict";

window.onload = function(){
	
	
	
  var secret= Math.floor( Math.random() * (100-1)+1) + 1;Math.floor( Math.random() * 100)+1
	
	// I denna funktion ska du skriva koden för att hantera "spelet"
	var guess = function(number){
		console.log("Det hemliga talet: " + secret); // Du når den yttre variabeln secret innifrån funktionen.
		console.log("Du gissade: " + number); // Detta nummer är det som användaren gissade på.
			
	
		
		
 
   var count=0;
   
   if (isNaN(number))
   {
   	 return [false,"det är inte ett tal"]
   }
   
    count+=1
 	if (+number < 0 || 100  < +number)  // om inmatning är mindre än 1 eller större
 										//än 100 så år man meddelanden
	{   
		return [false, "Talet är utanför intervallet 0 - 100"]
	}   
 
 
	if (+number < secret)  
	
	{   
		return [false, "Det hemliga talet är högre!"]
	}
	 
	
    if (+number > secret)
	{   
		return [false,"Det hemliga talet är lägre!"]
	}
	
	
	else (+number === secret)
	{  
		return [true, "Grattis du vann! Det hemliga talet var"+number+" och du behövde"+count+"gissningar för att hitta det."];
	}
	
	
	
	
	
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};
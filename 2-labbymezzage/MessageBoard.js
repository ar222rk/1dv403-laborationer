"use strict"



window.onload = function() {

        var messages = [];

        var myObj = {};
        var submit = document.getElementById("send");
        var text = document.getElementById("textInput");
        var board = document.getElementById("dom");
        var div = document.getElementById("text");
        var enter = document.getElementById("textInput");
        var date = new Date();
        var count = 0;


        submit.addEventListener("click", function(e) {

        if (text.value === "")
        {
            e.preventdefault();
        }
        else
        {
        date = new Date();
        myObj = new Message(text.value, date);
        messages.push(myObj);
        
        renderMessage(messages.length-1);
        removeText();
        }
        
        });
        
        enter.addEventListener("keydown", function(e){ 
        
        
        if (e.keyCode == 13 && document.getElementById("textInput").value === "")
                {e.preventDefault()}
        
        if(e.keyCode === 13 && !e.shiftKey && text.value !== "")
        
        {
            e.preventDefault()
            date = new Date();
            myObj = new Message(text.value, date)
            messages.push(myObj);
                
            renderMessage(messages.length-1)
            removeText();
        }
        
    }
    )
        
        
        


        var renderMessage = function(messageID) {
            document.getElementById("Messagez").innerHTML = "Antal meddelanden: " + messages.length;

                count = messages.length;
                var textBox = document.createElement("div");
                textBox.className = "textBox";

                var displayText = document.createElement("p");
                displayText.className = "displayText";

                var displayTime = document.createElement("p");
                displayTime.className = "displayTime";

                displayText.innerHTML = messages[messageID].getText();
                displayTime.innerHTML = messages[messageID].getDateText();
                

                var clock = document.createElement("img");
                clock.className = "clock";
                clock.src = "clock.jpg";

                var x = document.createElement("img");
                x.className = "x";
                x.src = "RedX.png";
        
                x.addEventListener("click", function(e) {
                    
                  
                            if (confirm("Radera detta meddelande?")) {


                                messages.splice(messageID, 1);
                                renderMessages();
                                document.getElementById("Messagez").innerHTML ="Antal meddelanden: " +messages.length;
                                
                            }
                            
                            
                                  });

      


                            clock.addEventListener("click", function(e) {


                                var year = messages[messageID].getDate().getFullYear();
                                var month = messages[messageID].getDate().getMonth();
                                var day = messages[messageID].getDate().getDate();
                                var Hour = messages[messageID].getDate().getHours();
                                var Minutes = messages[messageID].getDate().getMinutes();
                                var Seconds = messages[messageID].getDate().getSeconds();
                                if (Minutes < 10)
                                {
                                    Minutes = "0" + Minutes;
                                }
                                if (Seconds < 10) 
                                {
                                    Seconds = "0" + Seconds;
                                }
                                alert("Inlägget skapades den " + day + "/" + month + " år " + year + " klockan " + Hour + ":" + Minutes + ":" + Seconds);


                              
                            });
  
                                textBox.appendChild(displayText);
                                textBox.appendChild(displayTime);
                                textBox.appendChild(clock);
                                textBox.appendChild(x);
                                board.appendChild(textBox);

}

                            var renderMessages = function() {

                                board.innerHTML = "";

                                for (var i = 0; i < messages.length; ++i) 
                                {
                                    renderMessage(i);
                                }

                            }
                            
            var removeText = function(){
             document.getElementById("textInput").value="";
    }


                             
                                  
};
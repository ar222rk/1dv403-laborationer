"use strict"
window.onload = function() {
    var desk = new Desktop();
    var start = new Start();
    
 
    
    
    var button = document.createElement("img");
    button.className = "button";
    button.src = "button.png";
    button.onclick = function (){
        
    var windo = new Window(desk);
    };
    start.element.appendChild(button);            
    
    
};



function Desktop ()
{
    this.desktop = document.querySelector(".desktop");
    
    
}

function Window (desk)
{
  var template = document.querySelector("#template"); 
  var windowTemplate = template.content.querySelector(".window");
  var w = windowTemplate.cloneNode(true);
  desk.desktop.appendChild(w);
  
  
    var close = w.querySelector(".close");
    close.addEventListener("click", function(){
   desk.desktop.removeChild(w);
        
        
        
        this.w = w;
        
    });
      var maxWidth =0;
     var maxHeight=0;
    
    
    
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    
   


    {
        if (xhr.readyState == 4)
        {
                
    
                document.querySelector('.status').innerHTML = "downloads complete !";
            
              var response = JSON.parse(xhr.responseText);
           
            
            for (var i = 0; i < response.length; i++)
            {
                console.log(response[i])
                var images = document.createElement("img");
                var a = document.createElement("a");
                var box = document.createElement("div");
                box.className = "imagebox"
                box.imgurl = response[i].URL;
                
                box.onclick = function(){
                document.querySelector(".desktop").style.backgroundImage = "url("+this.imgurl+")";
                }
               
                
                box.style.backgroundImage = "url(" + response[i].thumbURL + ")";
                box.style.backgroundPosition = "center";
                box.style.backgroundRepeat = "no-repeat";
                
                
                images.src = response[i].thumbURL;
                
                var contentWindow = document.querySelector(".windowContent");
                a.appendChild(images);
                
                if(response[i].thumbWidth >  maxWidth)
                {
                    maxWidth = response[i].thumbWidth;                 
                }
                if(response[i].thumbHeight >  maxHeight)
                {
                  maxHeight = response[i].thumbHeight ;
                }
                  contentWindow.appendChild(box)
                  //box.appendChild(a)
                
            }

              
            var allBoxes = document.querySelectorAll(".imagebox");
    for (var i = 0; i < allBoxes.length; i++) 
    {
        allBoxes[i].style.width = maxWidth + "px";
        allBoxes[i].style.height = maxHeight + "px";
    }
                
              
    }
    
            else 
            {
                
               // alert("hej")
                var gif  = document.createElement("img");
                var status = document.querySelector(".status");
               gif.src ="loading.gif";
               gif.ClassName = "gifedit";
               status.innerHTML = "Loading please wait ";
               status.appendChild(gif);
             
            }
    }
    
    
    

    
    
    xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
    xhr.send(null);
    
 
}

function Start ()
{
    this.element = document.querySelector(".appbar");
}






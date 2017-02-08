console.log('Loaded!');


var button = document.getElementById("first");
button.onclick = function () {
    
    var request = new XMLHttpRequest();
    
    request.onReadyStateChange = function(){
      if (request.readyState===XMLHttpRequest.DONE){
          if(request.status==200)
          {
              var counter=request.responseText;
               var first_read=document.getElementById("spn");
    first_read.innerHTML=counter.toString();
          }
          
          
      }  
    };
    
   request.open('GET','http://http://lawlug026.imad.hasura-app.io/articleone.html', true);
   request.send(null);
    
};
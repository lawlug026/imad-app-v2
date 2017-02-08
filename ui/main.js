console.log('Loaded!');

/*
var button = document.getElementById("first");
var click_btn = function () {
    
    var request = new XMLHttpRequest();
    
    request.onReadyStateChange = function(){
      if (request.readyState===XMLHttpRequest.DONE){
          if(request.status==200)
          {
              var counter=request.responseText;
               var first_read=document.getElementById("span");
    first_read.innerHTML=counter.toString();
          }
          
          
      }  
    };
    
   request.open('GET','http://lawlug026.imad.hasura-app.io/articleone.html', true);
   request.send(null);
    
};*/


var button=document.getElementById('first');
var func_click_me=function(){
    //Create a request to counter endpoint
    var request=new XMLHttpRequest();
    //Capture the response & store it in a variable
    request.onreadystatechange = function(){
      if(request.readyState===XMLHttpRequest.DONE){
          //Take sone action
          if(request.status==200)
          {
              var counter=request.responseText;
               var span=document.getElementById('span');
                span.innerHTML=counter.toString();
          } 
          
      }//not done yet  
    };
    
    //Make a request
    request.open('GET', "http://lawlug026.imad.hasura-app.io/articleone.html", true);
    request.send(null);
};

console.log('Loaded!');


var button = document.getElementById("first");
button.onclick = function () {
    
    counter=counter+1;
    var first_read=document.getElementById("first_read");
    first_read.innerHTML=counter.toString();
    
};
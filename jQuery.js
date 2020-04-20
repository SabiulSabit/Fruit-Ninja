//gloabl variable
var playing=false;
var score;
var trialsLeft;

$(function(){
   
   //button click
   $("#startReset").click(function(){
      
    if(playing==true) {   // if playing

         location.reload();// page reload

      } 
      else{  //if not playing

          playing=true;
          score=0;
          $("#scoreValue").html(score);
          
          //life show
          $('#trialsLeft').show();
          trialsLeft = 3;

          addHeart();
          
      } 
   }); 
});


// add heart 
function addHeart(){
    for(i=0;i<trialsLeft;i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life"> ');
    }
}
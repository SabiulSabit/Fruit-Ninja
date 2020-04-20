//gloabl variable
var playing=false;
var score;
var trialsLeft;
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];


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
          $("#startReset").html("Reset Game");
     
          //start frout show
           startAction(); 
          
      } 
   }); 
});


// add heart 
function addHeart(){
    for(i=0;i<trialsLeft;i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life"> ');
    }
}

//show frouit 
function startAction(){
    $("#fruit1").show();
    choseFruit(); // random fruit show
    var a = Math.round(550*Math.random());
    $("#fruit1").css({'left': a,'top' : -50});
} 

function choseFruit(){
    
    $("#fruit1").attr("src",'images/'+fruits[ Math.round(8*Math.random())]+'.png');
}
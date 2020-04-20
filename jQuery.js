//gloabl variable
var playing=false;
var score;
var trialsLeft;
var step,action;
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
          $("#gameOver").hide();
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
    $("#trialsLeft").empty();
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
   
    step = Math.round(5 * Math.random())+1; 
    action = setInterval(function(){
         $("#fruit1").css('top',$("#fruit1").position().top+step ) //moving the fruit y axis
          
         if($("#fruit1").position().top >  $("#fruitsContainer").height()){ // if the fruit is out of the container
            if(trialsLeft > 1){
                $("#fruit1").show();
                choseFruit(); // random fruit show
                var a = Math.round(550*Math.random()); 
                $("#fruit1").css({'left': a,'top' : -50});
               
                step = Math.round(5 * Math.random())+1;
                trialsLeft--;
                addHeart(); 
            }
            else{ //game over
                playing = false; 
                $("#startReset").html("Start Game");
               $("#gameOver").show();
               $("#gameOver").html("<p>!! game over !!</p><p>your score is "+score +"</p> ");
               $("#trialsLeft").hide();
               stopAction();            
            }
         }
    },10);
    
} 
// show random fruit
function choseFruit(){
    
    $("#fruit1").attr("src",'images/'+fruits[ Math.round(8*Math.random())]+'.png');
}

///stop play
function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
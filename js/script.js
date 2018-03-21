

// if page is loaded then only show the frontpage and id=headline
// if 'start' is pressed show only section id=audio and id=headline
// when continue is pressed show only section id=story1 and id=headline
// start video automatically after 1 second
// when video ends show only section id=game1 and id=headline 
//when a correct picture is pressed show only id=correct1 else when the wrong image is pressed show id=incorrect1 and always show section id=headline

$(document).ready(function() {
    // if page is loaded then only show the frontpage
    
    
     // if 'start' is pressed show only section id=audio
    $("#startbutton").click(function() {
        $("section" ).hide();
        $("#audio").show();
    });
    // when continue is pressed show only section id=story1 
    $("#continuefromaudio").click(function() {
        $("section").hide();
        $("#story1").show();
    });
    
    
    
    //STORY1
    // start video automatically after 1 second
    
    
    
    $('#continuefromaudio').click(function(){
  $('#video1').get(0).play()
      });
    
    
   
    // when video ends show only section id=game1 
    
    // FOR GAME 1
    //when a correct picture is pressed show only id=correct1 for 
     $("#correctimg1").click(function() {
        $("section").hide();
        $("#correct1").show();
    });
    //when the wrong image is pressed show id=incorrect1 and always show section
    $("#incorrectimg1").click(function() {
        $("section").hide();
        $("#incorrect1").show();
    });
    // when continue is pressed show only section id=story2
     $(".continuefromgame1").click(function() {
        $("section").hide();
        $("#story2").show();
      
    });
    
    //STORY 2
    
     $("#continuefromgame1").click(function(){
  $("#video2").get(0).play()
      });
 
    //FOR GAME 2
    //when a correct picture is pressed show only id=correct2 for 
     $("#correctimg2").click(function() {
        $("section").hide();
        $("#correct2").show();
    });
    //when the wrong image is pressed show id=incorrect2 and always show section 
    $("#incorrectimg2").click(function() {
        $("section").hide();
        $("#incorrect2").show();
    });        
    
    
   $(".continuefromgame2").click(function() {
        $("section").hide();
        $("#fork").show();
    });
    
     $("#sellit").click(function() {
        $("section").hide();
        $("#auction").show();
    });
    
     $("#report").click(function() {
        $("section").hide();
        $("#arttheftsquad").show();
    });
    
   
    });
   

// when continue is pressed show only section id=story2 and id=healdline 


/*
 and id=healdline 
//start video automatically after 1 second
// when video ends show only section id=game2 and id=healine
// when when a correct picture is pressed show only id=correct2 else when the wrong image is pressed show id=incorrect2 and always show section id=headline
 faq example
.delay. hide
controling video from jquery
*/




// ADD ID'S TO CONTINUE BUTTONS!!!!
// Should the show always section id=headline be defiened before or said on every section of code separaly?
// Should the correct incorrect be two sections of code or one done with if else?
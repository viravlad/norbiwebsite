$(document).ready(function(){
  	//menu bar scroll down 

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 200) {
	    $(".top-content>.navbar").css("background" , "black");
	    $(".top-content>.navbar").css("transition" , "1s");
	  }

	  else{
		  $(".top-content>.navbar").css("background" , "rgba(0, 0, 0, 0)");  	
	  }
	  //---
  })
  // redirect to gallery page
 $(".gallery-btn").on("click",function(){
 	window.location = "paintings.html";
 })
 $("#logoBtn").on("click",function(){
 	window.location = "logo.html";
 })

})


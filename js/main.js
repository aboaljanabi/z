

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


})(jQuery);





	/*-------------0------------- */




const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const card = entry.target.querySelector('.card');
  
	  if (entry.isIntersecting) {
		card.classList.add('card-animation');
		return; // if we added the class, exit the function
	  }
  
	  // We're not intersecting, so remove the class!
	  card.classList.remove('card-animation');
	});
  });
  
  observer.observe(document.querySelector('.card-wrapper'));







  	/*-------------1st------------- */




const observer1 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const card = entry.target.querySelector('.card');
  
	  if (entry.isIntersecting) {
		card.classList.add('card-animation1');
		return; // if we added the class, exit the function
	  }
  
	  // We're not intersecting, so remove the class!
	  card.classList.remove('card-animation1');
	});
  });
  
  observer1.observe(document.querySelector('.card-wrapper1'));




	/*-------------2nd------------- */




const observer2 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const card = entry.target.querySelector('.card');
  
	  if (entry.isIntersecting) {
		card.classList.add('card-animation');
		return; // if we added the class, exit the function
	  }
  
	  // We're not intersecting, so remove the class!
	  card.classList.remove('card-animation');
	});
  });
  
  observer.observe(document.querySelector('.card-wrapper2'));






  




	/*-------------3rd------------- */




const observer3 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const card = entry.target.querySelector('.card');
  
	  if (entry.isIntersecting) {
		card.classList.add('card-animation1');
		return; // if we added the class, exit the function
	  }
  
	  // We're not intersecting, so remove the class!
	  card.classList.remove('card-animation1');
	});
  });
  
  observer3.observe(document.querySelector('.card-wrapper3'));






  




	/*-------------4th------------- */




const observer4 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const card = entry.target.querySelector('.card');
  
	  if (entry.isIntersecting) {
		card.classList.add('card-animation');
		return; // if we added the class, exit the function
	  }
  
	  // We're not intersecting, so remove the class!
	  card.classList.remove('card-animation');
	});
  });
  
  observer4.observe(document.querySelector('.card-wrapper4'));






  




	/*-------------5th------------- */




const observer5 = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  const card = entry.target.querySelector('.card');
  
	  if (entry.isIntersecting) {
		card.classList.add('card-animation1');
		return; // if we added the class, exit the function
	  }
  
	  // We're not intersecting, so remove the class!
	  card.classList.remove('card-animation1');
	});
  });
  
  observer5.observe(document.querySelector('.card-wrapper5'));

  const mainButton = document.querySelector('.main-button');
  const buttonContainer = document.querySelector('.button-container');
  const subButtons = document.querySelectorAll('.sub-button-container button');
  
  mainButton.addEventListener('click', function() {
	buttonContainer.classList.toggle('active');
  
	if (buttonContainer.classList.contains('active')) {
	  subButtons.forEach(function(subButton, index) {
		setTimeout(function() {
		  subButton.classList.add('active');
		}, (index + 1) * 100);
	  });
	} else {
	  subButtons.forEach(function(subButton) {
		subButton.classList.remove('active');
	  });
	}
  });
  




  
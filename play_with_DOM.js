




var skillset = document.getElementsByClassName('skillset');
alert(skillset);

/*
3.
jQuery has a built in function to check if the page is ready before it will run our code. After the main function, write this code:

$(document).ready(main);
Notice that we put main inside the parentheses of ready. main here is a callback, which means that our code will wait until the document
(in other words, the DOM) is loaded, or ready. When it is, then it will execute the main function. jQuery calls back to the main function,
therefore it's a callback.

In the event that our HTML and CSS took 5 minutes to load, this code would wait until it loaded completely before running
*/

function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click',function(){

    $('.projects').show();

/*jQuery provides a function named toggle that is helpful in this situation. toggle will hide or show an element,
each time it is triggered. The syntax looks like this:*/

    $('.projects').toggle();

/*
1.toggleClass is a function that will toggle a CSS class on the jQuery selector it's connected to.
If the element has the class applied to it, toggleClass will remove it, and if the element does not have the class, it will add it.

2.'active' is the class that we will toggle on and off. Notice that toggleClass does not require us to include the period
 before 'active' since it's already expecting a CSS class.*/


     $('.projects-button').toggleClass('active');


/*$(this) selects the clicked element. If there are multiple elements with a class of .example-class, this will only toggle
the class of the one that is clicked on.
Notice that $(this) does not require quotes around it, since it is not a CSS class. Instead, this is a JavaScript keyword.
$(this) behaves just like our other selectors. We can attach toggleClass or toggle to it in the same way.
*/

     $(this).toggleClass('active');









  }





                          );
}

$(document).ready(main);


function main() {
  $('.skillset').hide();
  $('.skillset').fadeIn(1000);
  $('.projects').hide();
  $('.projects-button').on('click',function(){

    /*$(this).next().toggle();*/
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');



  }





                          );
}

$(document).ready(main);

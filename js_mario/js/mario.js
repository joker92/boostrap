$(document).ready(function(){
$(document).keydown(function(key) {
    switch (parseInt(key.which,10)) {
        case 37: // LEFT 
        	$('.content').animate({ 'left': '-=100px'},'fast');
        break;
        case 38: // TOP 
        	$('.content').animate({ 'bottom': '+=100px' },'fast');
        break;
        case 39: // RIGHT 
        	$('.content').animate({ 'left': '+=100px' },'fast');
        break;
        case 40: // BOTTOM 
        	$('.content').animate({ 'bottom': '-=100px' },'fast');
        break;
    }
});
});

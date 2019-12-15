window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

var $ = function(id){
	return document.getElementById(id); //faster way of getting element by ID.
}

function checkValid() {
	var x,y,z,e; //Assigning all needed variables.
	x = $("txt_Form").value;
	y = $("tel_Form").value;
	z = $("msg_Form").value;
	e = $("email_Form").value;//getting value from the ID and assigning it inro the variable.



	if (x == "" || x == null){
		alert("You forgot to fill the 'Name' box.")//validation if x is empty 
	}
	else if(y =="" || y == null){
		alert("You forgot to fill the 'Telephone' box.");//validation if y is empty
	}
	else if(z =="" || z == null){
		alert("You forgot to fill the 'Message' box.");//validation if z is empty
	}
	else if (e == "" || e==null){
		alert("Check your E-mail.")
	}
}

function clearcontent(){
	$("clr_Form").reset(); //clearing all the fields
}
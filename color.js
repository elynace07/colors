color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

o = ["th", "st", "nd", "rd"];


var count = 1;

for(var i = 0; i < color.length; i++){

    if(count <= 3){

     document.write(count + o[count] + " " + "choices is" + " " + color[i] + "<br>");

     count ++

   } else{
  	  document.write(count + o[0] + " " + "choice is" + " " + color[i] + "<br>");

      count ++

      }
 }
	
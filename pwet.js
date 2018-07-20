var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var rep = JSON.parse(xhttp.responseText);
       console.log(rep);
       document.getElementById("woyoh").innerHTML = xhttp.responseText;


    }
};
var variables = "";
variables = "ID=essai";
variables = variables.concat("&CLEU=laclef");

// ID=essai&CLEU=laclef

// http://mapage.com/index.php?ID=essai&CLEU=laclef

xhttp.open("POST", "ajax.php", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send(variables);

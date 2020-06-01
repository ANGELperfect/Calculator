var dark = false;
$(document).ready(function(){
    $("#dark").click(function(){
        if (dark === false){
            document.getElementById('dark').innerText = "Light mode";
            document.getElementById('theme').setAttribute("href","Darkmode.css");
            dark = true;
        }
        else{
            document.getElementById('dark').innerText = "Dark mode";
            document.getElementById('theme').setAttribute("href","Calculator.css");
            dark = false;
        }

    });
});




function insert(num){
    document.form.textView.value = document.form.textView.value+num;
}

function equal(){
    document.form.textView.value = eval( document.form.textView.value);
}

function c(){
    document.form.textView.value = "";
}

function back(){
   var text =  document.form.textView.value;
   document.form.textView.value = text.substring(0,text.length-1);
}







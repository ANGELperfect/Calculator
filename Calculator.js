var dark = false;
var btn = $("#dark");
$(document).ready(function(){
    //alert("This is just a simple calculator not scientific and can't do complicated operations , only basic ones. \n Enjoy (^_^) !\n");
    $("div").fadeIn(5000,function(){$("#dark").animate({opacity:"100%"});});
    btn.click(function(){
        if (dark === false){
            btn.text("Light mode");
            $("#theme").attr("href","Darkmode.css");;
            dark = true;
        }
        else{
            btn.text("Dark mode");
           $("#theme").attr("href","Calculator.css");
            dark = false;
        }

    });
});




function insert(num){
    document.form.textView.value = document.form.textView.value+num;
}

function equal(){
    document.form.textView.value = eval( document.form.textView.value);
    if (eval( document.form.textView.value) === Infinity){document.form.textView.value = "  Can't divid  by 0";}
    if (eval( document.form.textView.value) === undefined){document.form.textView.value = "";}
}

function c(){
    document.form.textView.value = "";
}

function back(){
   var text =  document.form.textView.value;
   document.form.textView.value = text.substring(0,text.length-1);
}


// var logo = document.querySelectorAll("#logo path");
// console.log(logo);

// for (let i =0 ; i<logo.length ; i++){
//     console.log("letter "+i+" is "+logo[i].getTotalLength());
// }






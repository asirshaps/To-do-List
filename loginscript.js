var login = document.getElementById("login");
var username = document.getElementById("use");
var password = document.getElementById("pwd1");


function moveForward(){ 
    // alert("im");
    login.submit();
}


$('#login-button').click(
    function(){
        // alert("hloo");
        validate(moveForward);
        
    }
);

function validate(display){
    // console.log(use,pwd1,display);
    if(use.value =="admin" && pwd1.value =="12345"){
    // alert("correct validation");
    display();
        
    }
    else {
        alert("Incorrect validation");
        
    }

}      





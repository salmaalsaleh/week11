function AddNumbers(){
    let a = 10;
    let b = 50;
    console.log(a + b);
    document.getElementById('heading-two').innerText = (a + b)
    
    document.getElementById('para1').innerHTML = "<h1>Total sum of two numbers:</h1>"
}
AddNumbers();

function getInput(){
    let inputValue = document.getElementById('FirstName').value;
    document.getElementById('inputName').innerText = "Hello, " + inputValue;
}

function LastNameEvent(){
    let LastValue = document.getElementById('LastName').value;
    document.getElementById('lastName-heading').innerText = "Hello, " + LastValue;

}
document.getElementById('btn1').addEventListener('click', LastNameEvent)
let Name = "harry";
let password = "potter";

}
document.getElementById('form').addEventListener
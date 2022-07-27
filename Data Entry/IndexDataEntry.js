//document.querySelectorAll('#DataEntryPage.html input') 

//Array.from(document.querySelectorAll('#DataEntryPage.html input')).reduce((acc, input) => ({ ...acc,[input.id]: input.value}), {});

function onLoad() {
    alert("Function onLoad() called");
    document.getElementById("timestamp").innerHTML = Date();
}

//function to check input information       (Resource = https://www.youtube.com/watch?v=PNKy60ah5kI ) (Time = 17:30)

function checkNumber() {
    var theNumber, theMessage;
    
    theNumber = document.getElementById("smallnumber").Value;

    //if x is not a Number or less than one or greater than 10
    if (isNaN(theNumber) || theNumber < 1 || theNumber > 10) {
        theMessage = "Number was expected to be between 1 and 10";
    } else {
        theMessage = "Number is good";
    }
    
    document.getElementById("numberMessage").innerHTML = theMessage;

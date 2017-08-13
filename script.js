alert("Welcome to the KM and Miles Converter!")

var Fahrenheit = "F"
var Celsius = "C"
var userinput = prompt("Please Enter F to convert Fahrenheit to Celsius or enter C to convert Celsius to Fahrenheit", "ENTER");

if (userinput === Fahrenheit) {
    var userinput1 = prompt("Enter how degrees do you want to convert to Celsius")
    var answer = userinput1 - 32 * 5 / 9

    alert("That in Celsius is " + answer)

} else if (userinput = Celsius) {
    var userinput2 = prompt("Please how many degrees you want to convert to Fahrenheit")
    var answer2 = userinput2 * 9 / 5 + 32

    alert("That on Fahrenheit is " + answer2)
}
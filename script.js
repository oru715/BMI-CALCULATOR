function BMI() {
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    var bmi = w/(h*h);
    console.log({bmi}, h*h, w)
    var bmio=(bmi.toFixed(2))
    document.getElementById("result").innerHTML = "Your BMI is" + bmio

    

    

}
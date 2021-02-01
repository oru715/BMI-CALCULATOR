function BMI() {
    var h = document.getElementById('h').value;
    var w = document.getElementById('w').value;
    // m/h2, m =, kg/m2

    // w/Math.pow((h * 100), 2)
    var bmi = w/Math.pow((h * 100), 2);
    //console.log({bmi})
    var bmio = (bmi.toFixed(2));

    document.getElementById("result").innerHTML = "Your BMI is" + bmio;

}
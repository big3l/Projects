///////////////////////////////////////////////////////
//Loan calculation
//parsefloat converts string to number
//https://codepen.io/enjay/pen/RgBoJN
//https://www.creditkarma.com/calculators/loan/

document.getElementById("loan-form").addEventListener("submit", calculate);
function calculate(e) {
    e.preventDefault();
    let amount = document.getElementById("amount");
    let interest = document.getElementById("interest");
    let years = document.getElementById("years");
    let monthlyPayment = document.getElementById("monthly-payment")
    let fullamount = document.getElementById("total-payment");
    let interestVal = document.getElementById("total-interest");

    let principle = parseFloat(amount.value);
    let calcInterest = parseFloat(interest.value) / 100 / 12;
    let payments = parseFloat(years.value) * 12;
    

    let x = Math.pow(1 + calcInterest, payments);
    let monthly = (principle * x * calcInterest) / (x - 1);
    // monthlyPayment.innerHTML = monthly.toFixed(2);

    let totalPayment = monthly.toFixed(2) * payments;
    fullamount.innerHTML = totalPayment;

    let totalInterests = totalPayment - principle;
    interestVal.innerHTML = totalInterests.toFixed(2);

    //if result is NaN then isFinite will return Please check....
    if (isFinite(monthly)) { 
        monthlyPayment.innerHTML = monthly.toFixed(2);
    }
    else {
        monthlyPayment.innerText = "Please check your numbers";
    }

    
}

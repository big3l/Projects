///////////////////////////////////////////////////////
//Inches to cm's calculation

document.getElementById("inchcms-form").addEventListener("keyup", calculate);
function calculate() {
    let inches = document.getElementById("inches");
    let cms = document.getElementById("cms");
    let calc = parseFloat(inches.value) / 0.39370;
    cms.value = calc;
};


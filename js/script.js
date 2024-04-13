
const copyrightYearElement = document.getElementById('copyright-year');
copyrightYearElement.textContent = new Date().getUTCFullYear();


var scheduleDate = document.getElementById("scheduleDate");

scheduleDate.addEventListener("blur", function() {
    var date = new Date(scheduleDate.value);

    if (date < new Date()) {
        alert("Please enter a date after today's date.");
    }
});



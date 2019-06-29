// Main Functions

// Setup Bootstrap form validation
(function () {
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        let validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });

    }, false);
})();


// Input Submit Successful
function app_input_submit() {
    console.log('test');
}

// Collect input forms
function app_data_collect_input() {

    // Load up the input values
    let inputName = $('#input-name').val();
    let inputDest = $('#input-dest :selected').val();
    let inputTime = $('#input-time').val();
    let inputFreq = $('#input-freq').val();

    // Store collected data in appData object
    appData.inputCollection.name = inputName;
    appData.inputCollection.dest = inputDest;
    appData.inputCollection.time = inputTime;
    appData.inputCollection.freq = inputFreq;

    return true;
}

// Push Data
function app_data_push() {
    db.ref().push(appData.inputCollection);
}
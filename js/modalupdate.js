(function () {
    let progressBar = document.getElementById('progress');
    let totalAmount = document.getElementById('total-amount');
    let totalBackers = document.getElementById('total-backers');

    let pledgeInputs = document.querySelectorAll('.input__pledge');
    let buttons = document.querySelectorAll('.cta--continue');

    let currencyFormat = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits: 0});
    let total = 89914;
    let backers = 5007;
    let numberFormat = new Intl.NumberFormat('en-US', {maximumFractionDigits: 0});

    totalAmount.innerHTML = currencyFormat.format(total);
    totalBackers.innerHTML = numberFormat.format(backers);


    for (let i = 0; i < pledgeInputs.length; i++) {
        let pledgeInput = pledgeInputs[i];
        let button = buttons[i];

        button.addEventListener('click', () => {
            total += parseFloat(pledgeInput.value);
            totalAmount.innerHTML = currencyFormat.format(total);
            
            backers++;
            totalBackers.innerHTML = numberFormat.format(backers);

            progressBar.value++;
        });
    }
})();



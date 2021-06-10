(function () {
    let deadline = document.getElementById('deadline');
    let days = document.getElementById('days');
    let futureDate = new Date(2021, 11, 3, 24, 0);

    function remainingDays() {

        let today = new Date().getTime();
        let futureDay = futureDate.getTime();

        let t = futureDay - today;
        // 1s = 1000ms
        // 1m = 60s
        // 1h = 60min
        // 1d = 24 hrs

        let oneDay = 24 * 60 * 60 * 1000; // tolik zbyva dni v ms
        let oneHour = 60 * 60 * 1000;
        let oneMinute = 60 * 1000;
        
        let hoursLeft = Math.floor((t % oneDay) / oneHour);
        let minutesLeft = Math.floor((t % oneHour) / oneMinute);
        let secondsLeft = Math.floor((t % oneMinute) / 1000);

        let daysLeft = t / oneDay;
        daysLeft = Math.floor(daysLeft);
        days.innerHTML = daysLeft;

        if (daysLeft < 1) {
            deadline.innerHTML = `<div class="time-left">${daysLeft} days, ${hoursLeft} hours, <br>${minutesLeft} minutes, ${secondsLeft} seconds</div>`;
        } 
        
        if (t < 0) {
            clearInterval(countdown);
            deadline.innerHTML = '<div class="expired">Sorry, this crowdfund has been expired</div>';
        }
    }

    let countdown = setInterval(remainingDays, 1000);

    remainingDays();
})();
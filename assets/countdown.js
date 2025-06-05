class CountDownTimer extends HTMLElement {
    constructor() {
        super();

        //Grab required elements
        // console.log(this);
        // console.log(this.querySelector(".countdown-text"));
        // console.log(this.querySelector(".countdown-timer"));
        // console.log(this.querySelector(".days"));
        // console.log(this.querySelector(".hours"));
        // console.log(this.querySelector(".minutes"));
        // console.log(this.querySelector(".seconds"));
        console.log(
            this.querySelector(".countdown-timer").getAttribute("data-end-date")
        );

        // Set Date
        // this.endDateString = "May 25, 2026 16:37:52 EST";
        // this.endDate = new Date(this.endDateString).getTime();

        // Start timer
        this.interval = null;
    }

    connectedCallback() {
        // Access the inner container that has the data-end-date attribute
        const timerContainer = this.querySelector(".countdown-timer");

        // Get the value from the data attribute
        const endDateString = timerContainer.getAttribute("data-end-date");
        console.log(`End date string: ${endDateString}`);

        // Parse the date
        this.endDate = new Date(endDateString).getTime();

        // Select DOM elements
        this.daysContainer = this.querySelector(".days");
        this.hoursContainer = this.querySelector(".hours");
        this.minutesContainer = this.querySelector(".minutes");
        this.secondsContainer = this.querySelector(".seconds");
        this.countDownText = this.querySelector(".countdown-text");

        // Start ticking
        this.interval = setInterval(() => this.handleTick(), 1000);
        this.handleTick(); // initial render
    }

    disconnectedCallback() {
        clearInterval(this.interval);
    }

    handleTick() {
        //logic and update elements
        const now = new Date().getTime();
        const timeleft = this.endDate - now;

        if (timeleft < 0) {
            this.countDownText.innerHTML = "This sale ended!";
            clearInterval(this.interval);
            return;
        }

        const msInDay = 1000 * 60 * 60 * 24;
        const msInHour = 1000 * 60 * 60;
        const msInMinute = 1000 * 60;

        const days = Math.floor(timeleft / msInDay);
        const hours = Math.floor((timeleft % msInDay) / msInHour);
        const minutes = Math.floor((timeleft % msInHour) / msInMinute);
        const seconds = Math.floor((timeleft % msInMinute) / 1000);

        this.daysContainer.innerHTML = `${days}d `;
        this.hoursContainer.innerHTML = `${hours}h `;
        this.minutesContainer.innerHTML = `${minutes}m `;
        this.secondsContainer.innerHTML = `${seconds}s`;
    }
}

customElements.define("countdown-timer", CountDownTimer);

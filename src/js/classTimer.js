'use strict'
export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
    };
    start() {
        this.id = setInterval(() => {
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.updateTimerSecs(secs);
            this.updateTimerMins(mins);
            this.updateTimerHours(hours);
            this.updateTimerDays(days);
        }, 1000);
    };

    stop() {
        const currentTime = Date.now();
        if (currentTime === this.targetDate) {
            clearInterval(this.id);
            this.updateTimerSecs('00');
            this.updateTimerMins('00');
            this.updateTimerHours('00');
            this.updateTimerDays('00');
        };

        if (currentTime > this.targetDate) {
            clearInterval(this.id);
            this.updateTimerSecs('00');
            this.updateTimerMins('00');
            this.updateTimerHours('00');
            this.updateTimerDays('00');
            this.updateModal();
        };
    };

    updateModal() {
        const modal = document.querySelector('.lightbox');
        modal.classList.add('is-open');
        let btnClose = document.querySelector('.lightbox__button');
        const modalClose = () => modal.classList.remove('is-open');
        btnClose = document.addEventListener('click', modalClose);
        window.removeEventListener('click', modalClose);
    };

    updateTimerSecs(time) {
        const secs = document.querySelector('[data-value="secs"]');
        secs.textContent = time;
    };

    updateTimerMins(time) {
        const mins = document.querySelector('[data-value="mins"]');
        mins.textContent = time;
    };

    updateTimerHours(time) {
        const hours = document.querySelector('[data-value="hours"]');
        hours.textContent = time;
    };

    updateTimerDays(time) {
        const days = document.querySelector('[data-value="days"]');
        days.textContent = time;
    };
};
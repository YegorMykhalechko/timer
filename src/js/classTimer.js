'use strict'
export default class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = document.querySelector(selector);
        this.targetDate = targetDate;
        this.updateTimer('00', '00', '00', '00');
    };
    start() {
        this.id = setInterval(() => {
            this.stop()
            const currentTime = Date.now();
            const time = this.targetDate - currentTime;
            const secs = Math.floor((time % (1000 * 60)) / 1000);
            const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const days = Math.floor(time / (1000 * 60 * 60 * 24));
            this.updateTimer(secs < 10 ? `0${secs}` : secs, mins < 10 ? `0${mins}` : mins, hours < 10 ? `0${hours}` : hours, days);
        }, 1000);
    };

    stop() {
        const currentTime = Date.now();
        if (currentTime >= this.targetDate) {
            clearInterval(this.id);
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

    updateTimer(sec, min, hour, day) {
        const secs = document.querySelector('[data-value="secs"]');
        const mins = document.querySelector('[data-value="mins"]');
        const hours = document.querySelector('[data-value="hours"]');
        const days = document.querySelector('[data-value="days"]');
        secs.textContent = sec;
        mins.textContent = min;
        hours.textContent = hour;
        days.textContent = day;
    };
};
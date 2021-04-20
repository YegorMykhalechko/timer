'use strict'
import './styles.css';
import CountdownTimer from './js/classTimer.js';

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Apr 20, 2022 18:27'),
});
timer.start();





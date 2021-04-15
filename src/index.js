'use strict'
import './styles.css';
import CountdownTimer from './js/classTimer.js';

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Apr 15, 2022'),
});
timer.start();
timer.stop();




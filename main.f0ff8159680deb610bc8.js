(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,a){},QfWi:function(t,e,a){"use strict";a.r(e);a("L1EO");var o=new(function(){function t(t){var e=t.selector,a=t.targetDate;this.selector=document.querySelector(e),this.targetDate=a,this.updateTimer("00","00","00","00")}var e=t.prototype;return e.start=function(){var t=this;this.id=setInterval((function(){var e=Date.now(),a=t.targetDate-e,o=Math.floor(a%6e4/1e3),r=Math.floor(a%36e5/6e4),n=Math.floor(a%864e5/36e5),i=Math.floor(a/864e5);t.updateTimer(o,r,n,i)}),1e3)},e.stop=function(){var t=Date.now();t===this.targetDate&&clearInterval(this.id),t>this.targetDate&&(clearInterval(this.id),this.updateModal())},e.updateModal=function(){var t=document.querySelector(".lightbox");t.classList.add("is-open");document.querySelector(".lightbox__button");var e=function(){return t.classList.remove("is-open")};document.addEventListener("click",e),window.removeEventListener("click",e)},e.updateTimer=function(t,e,a,o){var r=document.querySelector('[data-value="secs"]'),n=document.querySelector('[data-value="mins"]'),i=document.querySelector('[data-value="hours"]'),c=document.querySelector('[data-value="days"]');r.textContent=t,n.textContent=e,i.textContent=a,c.textContent=o},t}())({selector:"#timer-1",targetDate:new Date("Apr 15, 2022")});o.start(),o.stop()}},[["QfWi",1]]]);
//# sourceMappingURL=main.f0ff8159680deb610bc8.js.map
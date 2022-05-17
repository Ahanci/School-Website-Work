const lgsDays = document.querySelector('.lgs-days');
const lgsHours = document.querySelector('.lgs-hours');
const lgsMinutes = document.querySelector('.lgs-minutes');
const lgsSeconds = document.querySelector('.lgs-seconds');

const currentYear= 2022;

const lgsExamTime = new Date(2022,5, 5, 9, 30, 00, 0);

function updateLgsCountDown(){
    const currentTime= new Date();
    const rest = lgsExamTime - currentTime;
    
    let d = Math.floor(rest/1000/60/60/24);
    let h=Math.floor(rest/1000/60/60)%24;
    let m=Math.floor(rest/1000/60)%60;
    let s=Math.floor(rest/1000)%60;
    // console.log(d);
    
    lgsDays.innerHTML= d;
    lgsHours.innerHTML= h;
    lgsMinutes.innerHTML= m;
    lgsSeconds.innerHTML= s;
};
setInterval(updateLgsCountDown, 1000);

/****************************************************** */

const yksDays = document.querySelector('.yks-days');
const yksHours = document.querySelector('.yks-hours');
const yksMinutes = document.querySelector('.yks-minutes');
const yksSeconds = document.querySelector('.yks-seconds');

const yksExamTime = new Date(2022,5, 18, 10, 00, 00, 0);

function updateYksCountDown(){
    const currentTime= new Date();
    const rest = yksExamTime - currentTime;
    
    let d = Math.floor(rest/1000/60/60/24);
    let h=Math.floor(rest/1000/60/60)%24;
    let m=Math.floor(rest/1000/60)%60;
    let s=Math.floor(rest/1000)%60;
    // console.log(d);
    
    yksDays.innerHTML= d;
    yksHours.innerHTML= h;
    yksMinutes.innerHTML= m;
    yksSeconds.innerHTML= s;
};
setInterval(updateYksCountDown, 1000);

/******************************** */

const kpssDays = document.querySelector('.kpss-days');
const kpssHours = document.querySelector('.kpss-hours');
const kpssMinutes = document.querySelector('.kpss-minutes');
const kpssSeconds = document.querySelector('.kpss-seconds');

const kpssExamTime = new Date(2022,6, 31, 10, 00, 00, 0);

function updateKpssCountDown(){
    const currentTime= new Date();
    const rest = kpssExamTime - currentTime;
    
    let d = Math.floor(rest/1000/60/60/24);
    let h=Math.floor(rest/1000/60/60)%24;
    let m=Math.floor(rest/1000/60)%60;
    let s=Math.floor(rest/1000)%60;
    // console.log(d);
    
    kpssDays.innerHTML= d;
    kpssHours.innerHTML= h;
    kpssMinutes.innerHTML= m;
    kpssSeconds.innerHTML= s;
};
setInterval(updateKpssCountDown, 1000);
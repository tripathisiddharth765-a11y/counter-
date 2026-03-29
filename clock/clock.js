const clock=document.getElementById('clock');

function clock1(){
    const date=new Date();
    const hours=date.getHours();
    const minutes=date.getMinutes();
    const sec=date.getSeconds();
    const meredian=((hours-12)<0)?"AM":"PM"
    const time=`${hours}:${minutes}:${sec} ${meredian}`;
    clock.textContent=time;
}

clock1();
setInterval(clock1,1000);
const secondHand=document.querySelector('.sec-hand');
const minHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function setDate(){
    const now =new Date();
    const sec=now.getSeconds();
    const min=now.getMinutes();
    const hour=now.getHours();
   const secDrg=((sec/60)*360)+90;
    secondHand.style.transform=`rotate(${secDrg}deg)`;
   const minDrg=((min/60)*360)+90;
    minHand.style.transform=`rotate(${minDrg}deg)`;
    if(hour<=12){
        const hourDrg=((hour/12)*360)+90;
        hourHand.style.transform=`rotate(${hourDrg}deg)`;
    }
   else {
    const newHour=hour-12;
    if(hour==0){
        newHour=12;
    }
    const hourDrg=((newHour/12)*360)+90;
    hourHand.style.transform=`rotate(${hourDrg}deg)`;
   }
    
    console.log(sec);
    console.log(min);
    console.log( hour)
}
setInterval(setDate,1000);
let stats=document.querySelector('.stats').offsetTop;
let number=document.querySelectorAll('.stats .number')
let started=false;// function started //no

window.onscroll=function(){
    let skills= document.querySelector('.our-skills').offsetTop;

    if(this.scrollY > skills){
        document.querySelectorAll('.our-skills  .skill .the-progress span').forEach(span=>{
            span.style.width=span.dataset.width
        })
    }else{
        document.querySelectorAll('.our-skills  .skill .the-progress span').forEach(span=>{
            span.style.width= 0;
        })
    }
    if(this.scrollY >= stats){
        if(!started){
            number.forEach(e=>startCount(e))
        }
        started=true;
    }
}
function startCount(el){
let goal=el.dataset.number;
let count=setInterval(()=>{
el.textContent++;
if(el.textContent ==goal){
    clearInterval(count)
}
},2000/goal)
}





let countDownDate=new Date('Dec 31,2022 23:59:59').getTime();
let counter=setInterval(()=>{
 //get date now
    let dateNow=new Date().getTime();
    let dateDiff=countDownDate - dateNow ;
    //get time unit
    let days=Math.floor(dateDiff /(1000*60*60*24));
    let hours=Math.floor((dateDiff % (1000*60*60*24)) /(1000*60*60));
    let minutes=Math.floor((dateDiff % (1000*60*60))/(1000*60));
    let seconds=Math.floor((dateDiff % (1000*60))/(1000));
    document.querySelector('.days').innerHTML=days < 10 ?`0`+days : days;
    document.querySelector('.hours').innerHTML=hours < 10 ?`0`+hours :hours;
    document.querySelector('.minutes').innerHTML=minutes < 10 ?`0`+minutes :minutes;
    document.querySelector('.seconds').innerHTML=seconds < 10 ?`0`+seconds :seconds;

    if(dateDiff < 0){
        clearInterval(counter)
    }
},2000)



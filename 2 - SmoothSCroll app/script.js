function smoothScroll(target,duration)
{
 var target=document.querySelector(target);
 var targetPosition=target.getBoundingClientRect().top;
 var starPosition=window.pageYOffset;
 var distance=targetPosition-starPosition;
 var startTime=null;
 
 function animation(currentTimea)
 {
    if(startTime===null) startTime=currentTimea;
        console.log('start time : '+startTime + 'Current Time : '+currentTimea)
    console.log(startTime);
    var timeElapsed = currentTimea-startTime;
    var run=ease(timeElapsed,starPosition,distance,duration);
    window.scrollTo(0,run);
    if(timeElapsed<duration) requestAnimationFrame(animation);
    console.log('timeElapsed : '+ timeElapsed+' Duration : '+duration);
    console.log('Target pos : '+targetPosition);
    console.log('start pos : '+starPosition);
 }

 function ease(t,b,c,d)
 {
     t /= d / 2;
     if(t<1) return c/2*t*t+b;
     t--;
     return -c / 2 *(t*(t-2)-1)+b;
 }

 requestAnimationFrame(animation);
 
}




var a1= document.querySelector('#a-1');
var a2=document.querySelector('#a-2');

a1.addEventListener('mouseover',function(){
    smoothScroll('#second',1500);
});


a2.addEventListener('mouseover',function(){
    smoothScroll('#first',2000)
});
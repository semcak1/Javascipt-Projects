var buttons=document.querySelectorAll('.btn');
var screen=document.querySelector('#screen');
var count=0;

buttons.forEach(function(button){
    button.addEventListener('click',function(){
        if (button.classList.contains('btn-nxt')){
            count++;
        }
        else if(button.classList.contains('btn-prv')){
            count--;
        }

        if(count>0){
            screen.style.color="green";
        }
        else if(count<0){
            screen.style.color="red";
        }
        else if(count===0){
            screen.style.color="#555"
        }
        screen.textContent=count;
        console.log(count);
    })
    
})



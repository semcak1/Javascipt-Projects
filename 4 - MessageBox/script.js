var msg=document.querySelector('.input-msg');
var msgShow=document.querySelector('.msg-delivered');
var btn=document.querySelector('.btn');
var form=document.querySelector('#message-form')

form.addEventListener('submit',function(e){
   
    e.preventDefault();
   
   if(msg.value===""){
       // created div before form to show danger-message.
   
       dangerMessage()

    setTimeout(deleteMessage,2000)
       
   }
   else{
    msgShow.textContent=msg.value;
    console.log(msgShow.textContent);
    msg.value='';
   }
   
   
   
  
});

function dangerMessage(){
    var dangerMsg=document.createElement('div');
    form.insertAdjacentElement("beforebegin",dangerMsg);
    dangerMsg.textContent="please write sth to input box!!";
    dangerMsg.classList.add("alert-danger");
};

function deleteMessage(){
    document.querySelector('.alert-danger').remove();
}
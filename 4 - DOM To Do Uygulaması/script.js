// UI vars

const form=document.querySelector('form');
const input=document.querySelector('#txtTaskName');
const btnDeleteAll=document.querySelector('#btnDeleteAll');
const taskList=document.querySelector('#task-list');
const items=['item 1','item 2','item 3','item--4'];

//load items

loadItems();

//call event listeners
eventListeners();

function eventListeners(){

    //submit event
    form.addEventListener('submit',addNewItem);

    //delete an item
    taskList.addEventListener('click',deleteItem);

    //delete all items
    btnDeleteAll.addEventListener('click',deleteAllItems);
}


function loadItems(){
    items.forEach(function(item){
        createItem(item);
    })
}


// create item
function createItem(text){
       //Creating li element
       const li=document.createElement('li');
       li.className='list-group-item list-group-item-secondary'
       li.appendChild(document.createTextNode(text));
   
   
       //Creating a
       const a=document.createElement('a');
       a.classList='delete-item float-right';
       a.setAttribute('href','#');
       a.innerHTML='<i class="fas fa-times"></i>';
       
       // add a into li element
       li.appendChild(a);
   
   
       // add li into ul element
       taskList.appendChild(li);
}
//add new item
function addNewItem(e){

    if(input.value=== '')
    {
        alert('add new item');
    }

    //create item
    createItem(input.value);

    //clear input
    input.value='';
    
    
    
    e.preventDefault();
    

}

//delete an item

function deleteItem(e){

    if(confirm('are you sure ?'))
    {
        if(e.target.className==='fas fa-times'){
            e.target.parentElement.parentElement.remove();
            console.log(e.target);
        }
    }
    

   e.preventDefault();
}

//delete all items
function deleteAllItems(e)
{
    if(confirm('are you sure ?')){
        taskList.childNodes.forEach(function(item){
        
            if(item.nodeType===1){
                item.remove();
            }
            
        })
    }
    // taskList.innerHTML='';
   
    e.preventDefault();
}
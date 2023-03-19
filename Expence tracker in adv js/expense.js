var amountval=document.getElementById('amount');
var descriptionval=document.getElementById('desc');
var catagoryval=document.getElementById('cata');

var btn=document.getElementById('btn');
console.log(btn)

btn.addEventListener('click',addEvent);


function addEvent(e){
    e.preventDefault();
    const amount=amountval.value;
    const description=descriptionval.value;
    const catagory=catagoryval.value;
    obj={
        amount,
        description,
        catagory
    }
    localStorage.setItem(obj.description,JSON.stringify(obj));
    shoeExpences(obj);
}

function shoeExpences(obj){
    const parent=document.getElementById('showing');
    const child=document.createElement('li');
    child.textContent=obj.amount+'-'+obj.description+'-'+obj.catagory;
    

    const deleteBtn=document.createElement('input');
    deleteBtn.type='button';
    deleteBtn.value='Delete';
    deleteBtn.onclick= ()=>{
        localStorage.removeItem(obj.description);
        parent.removeChild(child);
    }  

    const edit=document.createElement('input');
    edit.value='Edit';
    edit.type='button';
    edit.onclick=()=>{
        localStorage.removeItem(obj.description)
        parent.removeChild(child);
        document.getElementById('desc').value=obj.description.value;
        document.getElementById('amount').value=obj.amount.value;
        document.getElementById('cata').value=obj.catagory.value;
        localStorage.setItem(object.description,JSON.stringify(obj));
    }
    child.appendChild(deleteBtn);
    child.appendChild(edit);
    parent.appendChild(child);
}
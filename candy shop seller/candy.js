console.log('candy')
function submitEvent(e){
    
    e.preventDefault();
    const chocolate=document.getElementById('choose').value;
    const desc=document.getElementById('desc').value;
    const price=document.getElementById('price').value;
    const quantity=document.getElementById('quantity').value;
   obj={
    chocolate,
    desc,
    price,
    quantity
   }
   axios.post('https://crudcrud.com/api/8b4590ed1a734eafbe866f6effd12fe3/addCandy',obj)
    .then((res)=>{
     console.log(res.data);
    })
    .catch((err)=>{
     console.log(err);
    })
 
   showNewUserOnScreen(obj)
}
const see=window.addEventListener("DOMContentLoaded",()=>{
  axios.get('https://crudcrud.com/api/8b4590ed1a734eafbe866f6effd12fe3/addCandy')
  .then((res)=>{
    console.log(res);
    for(var i=0;i<res.data.length;i++){
        showNewUserOnScreen(res.data[i]);
    }
  })
  .catch((err)=>{
    console.log(err);
  })
 
})
function showNewUserOnScreen(obj){
    // const first=document.createElement('div');
    // first.setAttribute('class','container');
    const parent=document.getElementById('showing');
    const child=document.createElement('li');
    child.textContent=obj.chocolate+'-'+obj.price+'-'+obj.quantity;
    // child.setAttribute('font-width','500px')

    const buyOne=document.createElement('input');
    buyOne.setAttribute('class','btn btn-success');
    buyOne.style.cssText="margin-left:10px; margin-top:5px; padding:2px"
    buyOne.type='button';
    buyOne.value='BUY ONE';
    buyOne.onclick=()=>{
        axios.put(`https://crudcrud.com/api/8b4590ed1a734eafbe866f6effd12fe3/addCandy/${obj._id}`,{
            chocolate:obj.chocolate,
            desc:obj.desc,
            price:obj.price,
            quantity:(obj.quantity-1)
        })
        .then((res)=>{
            console.log(see());
            console.log(res);
        })
        .catch((err)=>{
            console.log((err));
        })
    }

    const buyTwo=document.createElement('input');
    buyTwo.setAttribute('class','btn btn-success');
    buyTwo.style.cssText="margin-left:15px; margin-right:15px; margin-top:5px; padding:2px"
    buyTwo.type='button';
    buyTwo.value='BUY TWO';
    buyTwo.onclick=()=>{
        axios.put(`https://crudcrud.com/api/8b4590ed1a734eafbe866f6effd12fe3/addCandy/${obj._id}`,{
            chocolate:obj.chocolate,
            desc:obj.desc,
            price:obj.price,
            quantity:(obj.quantity-2)
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log((err));
        })
    }

    const butThree=document.createElement('input');
    butThree.setAttribute('class','btn btn-success');
    butThree.style.cssText=" padding:2px"
    butThree.type='button';
    butThree.value='BUY THREE';
    butThree.onclick=()=>{
        axios.put(`https://crudcrud.com/api/8b4590ed1a734eafbe866f6effd12fe3/addCandy/${obj._id}`,{
            chocolate:obj.chocolate,
            desc:obj.desc,
            price:obj.price,
            quantity:(obj.quantity-3)
        })
        .then((res)=>{
            console.log(res);
        })
        .catch((err)=>{
            console.log((err));
        })
    }


   





//     const parentNode=document.getElementById('showing');
//     const childHTML=`<div class="input-group">
//     <li id=${obj._id}>${obj.chocolate} - ${obj.price} - ${obj.quantity}<li>
//     <button class="btn btn-outline-secondary" onclick=buyOne(${obj._id},${obj.chocolate},${obj.quantity},${obj.price}) type="button">BUY ONE</button>
//     <button class="btn btn-outline-secondary" onclick=butTwo(${obj._id},${obj.chocolate},${obj.quantity},${obj.price}) type="button">BUY TWO</button>
//     <button class="btn btn-outline-secondary" onclick=buyThree(${obj._id},${obj.chocolate},${obj.quantity},${obj.price}) type="button">BUY THREE</button>
//   </div>`

child.appendChild(buyOne);
child.appendChild(buyTwo);
child.appendChild(butThree);
parent.appendChild(child)
// first.appendChild(parent);
}
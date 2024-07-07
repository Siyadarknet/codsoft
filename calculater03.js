
let display=document.getElementById('input');
let buttons=document.querySelectorAll('button');
let array=Array.from(buttons);
let string='';
array.forEach(bun=>{
   bun.addEventListener('click',(occur)=>{
      if(occur.target.innerHTML=='AC'){
         string='';
       display.value=string;
      }
      else if(occur.target.innerHTML=='DEL'){
         string=string.substring(0,string.length-1);
       display.value=string;
      }
      else if(occur.target.innerHTML=='='){
         string=eval(string);
        display.value=string;
      }
   else{
      string+=occur.target.innerHTML;
    display.value=string;
   }

   })
})

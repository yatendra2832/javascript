const form=document.querySelector('form')

form.addEventListener('submit',(event)=>{
    event.preventDefault()
   const height=parseInt (document.querySelector('#height').value)
   const weight=parseInt (document.querySelector('#weight').value)
   const results=document.querySelector('#results')
   results.innerHTML = '';
   if(height=== '' || height<0 || isNaN(height)){
    results.innerHTML ="Please give a valid height"
   } else if(weight=== '' || weight<0 || isNaN(weight)){
    results.innerHTML ="Please give a valid weight"
   }else{
    const BMI=(weight/((height*height)/10000)).toFixed(2)
    //show the result
    if(BMI<18.5){
        results.innerHTML=`<span>Your BMI is ${BMI} Which is less than 18.5. You are UnderWeight</span>`
     }else if(BMI>18.5 || BMI<24.9){
        results.innerHTML=`<span>Your BMI is ${BMI} Which is between 18.5 and 24.9. You are Normal</span>` 
     }else if(BMI>25 || BMI<29.9){
        results.innerHTML=`<span>Your BMI is ${BMI} Which is between 25 and 29.9. You are OverWeight</span>` 
     }else{
        results.innerHTML=`<span>Your BMI is ${BMI} Which is more than 30 . You are Obese</span>` 
     }
    
   }
   



})
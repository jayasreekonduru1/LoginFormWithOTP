const otpButton=document.getElementById('otp')
const inputElement=document.getElementById('input')
var otpgenerate=null;
otpButton.addEventListener('click',()=>{
    console.log('otp clicked')
    otpgenerate=Math.floor(Math.random()*10000)
    console.log(otpgenerate)
    
}   
)
inputElement.addEventListener('change',(event)=>{
    console.log(event.target.value)
    const enteredvalue=event.target.value
    if (otpgenerate == enteredvalue){
        window.location.href="display.html"
    }

})
// function inputValue(){
//     console.log(inputElement.value)
// }


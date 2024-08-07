const otpButton=document.getElementById('otp')
const inputElement=document.getElementById('input')
const otpMessage=document.getElementById('toast-body')
var otpgenerate=null;
otpButton.addEventListener('click',()=>{
    console.log('otp clicked')
    otpgenerate=Math.floor(Math.random()*10000)
    console.log(otpgenerate)
    otpMessage.textContent=otpgenerate
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
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}


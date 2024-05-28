let userDetails=document.getElementById('userDetails')
document.addEventListener('DOMContentLoaded', ()=>{
    const email=sessionStorage.getItem('email');
    const password=sessionStorage.getItem('password');

    userDetails.innerHTML=`
   
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
    `
})
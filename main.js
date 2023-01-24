const send = () => {
    let user = document.getElementById("user")
    let password = document.getElementById("password")
    let message = document.getElementById("message")

    if( user.value == "test@gmail.com" && password.value == "12345"){
        setTimeout(() => {
            open("home.html")
            user.value = ""
            password.value = "" 
        }, 5000);   
    }else{
        setInterval(() => {
            message.style.color = "red"
            alert("Usuario o contraseña incorrectos")
        }, 500);
    }
    
    }

let btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
    btn.style.animationDirection = "width"
    btn.style.animationDelay = "1000" 
    btn.style.width = "30%"
    btn.style.padding = "10px"

})
    



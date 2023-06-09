// function submitButton(){
//     let par = document.getElementById("Message").value;
//     par.innerHTML =""

//     par.addEventListener("click", function(e){
//         let result = "Thank you for submiting! You will hear shortly form us!"
//         par.innerHTML = result
//     })
// }

function submitForm() {
    document.getElementById("nameError").textContent= "";
    document.getElementById("emailError").textContent= "";

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(name.trim() === ""){
        document.getElementById("nameError").textContent= "Name is required";
    }

    if(email.trim() ===""){
        document.getElementById("email").textContent = "Email is required";
        } else if(!isValidEmail(email)){
            document.getElementById("email").textContent = "Invalid Email Format"
        }

        function isValidEmail(email){
            var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            return emailReg.test(email)
        }
}

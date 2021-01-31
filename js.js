var validateAge = false; 
var validateEmail = false; 
var validateCountry = false; 

// validate email
function checkMail(){
    var email = document.getElementById("email").value;
    var rEx = /^[a-zA-Z]\w{2,}@([a-z]{2,}\.){1,}[a-z]{2,4}$/;  

    if(rEx.test(email) === false){
        document.getElementById("emailError").style.display = "block"; 
    }else{
        document.getElementById("emailError").style.display = "none"; 
        validateEmail = true; 
    }
}

// function to populate empty box based on what was selected in parent selectbox
function populate(s1, s2){
    var s1 = document.getElementById(s1); 
    var s2 = document.getElementById(s2); 
    s2.innerHTML = ""; 

    if(s1.value == "skoda"){
        var optionArray = ["|", "octavia|Octavia", "superB|SuperB"]; 
    }else if(s1.value == "bmw"){
        var optionArray = ["|","m3|M3", "m5|M5"]; 
    }

    if(s1.value == "octavia" || s1.value == "superB"){
        var optionArray = ["|","sport|Športová úprava", "nonsport|Bez športovej úpravy"]; 
    }else if(s1.value == "m3" || s1.value == "m5"){ 
        var optionArray = ["|","diesel|Diesel", "benzín|Benzín"]; 
    }

    for(var option in optionArray){
        var pair = optionArray[option].split("|"); 
        var newOption = document.createElement("option"); 
        newOption.value = pair[0]; 
        newOption.innerHTML = pair[1]; 
        s2.options.add(newOption); 
    }
}

function getAge(date) {
    var today = new Date();
    var birthday = new Date(date);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

function checkAge() {
    calculatedAge = getAge(document.getElementById("birthday").value);
    typedAge = document.getElementById("age").value;

    if (calculatedAge != typedAge) {
        document.getElementById("ageError").style.display = "block";
    } else {
        document.getElementById("ageError").style.display = "none";
        validateAge = true;
    }
}

function radioCheck(){
    var selected = document.getElementById("other").value; 
    if (selected){
        document.getElementById("Tarea").style.display = "block"; 
    }
}


let extraCheckbox = document.querySelector("#extra");
extraCheckbox.addEventListener("click", ()=>{
    let textArea = document.querySelector("#extraArea");

    if (extraCheckbox.checked){
        textArea.style.display = "block"; 
    }else{
        console.log("shiit");
        textArea.style.display = "none"; 
    }
})

// function checkboxCheck(){
//     var selected = document.getElementById("extra").value; 

//     if (selected){
//         document.getElementById("extraArea").style.display = "block"; 
//     }else{}
// }

function validate() {
    if (!validateAge && !validateEmail && !validateCountry) {
        alert("Formulár nie je správne vyplnený!")
    }
}

function checkCountry(element) {
    if (element.value === "") {
        alert("Zadajte krajinu v ktorej sa nachádzate");
    } else {
        validateCountry = true;
    }
}


function hide(elementID){
    document.getElementById(elementID).style.display="none"; 

}




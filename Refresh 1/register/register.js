function formSubmit()
{
    
    document.getElementById("register_form").addEventListener('submit', function(event){
        event.preventDefault()
        confirmPassword()
        checkIfEmpty("register_username", "Username cannot be empty");
        checkIfEmpty("register_password", "Password cannot be empty");
        checkIfEmpty("register_confirm_password", "Confirm password cannot be empty");
        usernameIhsaan("ihsaan", "This username is taken")
    })
}



function checkIfEmpty(elementName, message){

    let element = document.getElementById(elementName).value;

    if(element == ""){
        alert(message)
    }
}



function confirmPassword()
{
    let username =  document.getElementById("register_username").value;

    //let username = $('.register_username').value
    
    let password = document.getElementById("register_password").value;
    
    let confirmPassword = document.getElementById("register_confirm_password").value;
    
    if(confirmPassword != password)
    {
         alert("The passwords must be the same")
    }

}


function loopNumbers(name){
    for(x = 0; x < 10; x++){
        console.log(name)
    }
}

function usernameIhsaan(name, message)
{

    let usernameIhsaan = document.getElementById("register_username").value;

    if(usernameIhsaan.toUpperCase() == name.toUpperCase()){
        alert(message)
    }

}

function elementClass(){

    let elementClass = document.getElementsByClassName("register_text_boxes")

    console.log(elementClass)

    const newList = [1,2,4,5,6,7]

    console.log(newList[0])
    console.log(newList[1])
    console.log(newList[2])
    console.log(newList[3])
    console.log(newList[4])

    newList[1] = 1000
    console.log(newList)

    }

    function loopNumbers(name){
        for(x = 0; x < 10; x++){
            console.log(name)
        }
    }

/*
    function nameList(name){

        for(x = 0; x < name.length; x++){
            console.log("The name is:", name[x])
        }
    }
*/
function forLoop(){
 
    let newList = [1,2,4,5,6,7]

    for(x = 0; x < newList.length; x++){
        console.log(newList[x])

    }
}

function objectContainer(){
    let personObect = {Id : 1, Username : "user@name", password :"password" };

    console.log(personObect.Name)

}

function objectPersonInfo(){
    let person1Info = {Name : "John", Age : 54, height : 6}
    let person2Info = {Name : "David", Age : 100, height : 5}
    let person3Info = {Name : "Abdul", Age : 20, height : 5}
    let person4Info = {Name : "z", Age : 2000, height : 5}
    let person5Info = {Name : "Abdul", Age : 200, height : 5}


    let listOfPeople = [person1Info, person2Info, person3Info, person4Info, person5Info]
    let eldestPerson = {Age :0};

    for(x = 0; x < listOfPeople.length; x++){
        let currentPerson = listOfPeople[x];
        if(currentPerson.Age > eldestPerson.Age){
            eldestPerson = currentPerson;
        }
    }

    console.log(`The eldest person is : ${eldestPerson.Name}`)


}

function objectPersonInfo2(){
    let person1Info = {Name : "John", Age : 54, height : 6}
    let person2Info = {Name : "David", Age : 100, height : 5}
    let person3Info = {Name : "Abdul", Age : 20, height : 5}
    let person4Info = {Name : "z", Age : 2000, height : 5}
    let person5Info = {Name : "Abdul", Age : 200, height : 5}

    let listOfPeople = [person1Info, person2Info, person3Info, person4Info, person5Info]
    let eldestPerson = {Age :0};

    listOfPeople.forEach(item => {

        let currentperson = item
        if(item.Age > eldestPerson.Age){
            eldestPerson = item;
        }

     
    })

    console.log("The eldest person is :", eldestPerson.Name)

}

function objectDuplicate(){
    let person1Info = {Name : "John", Age : 54, height : 6}
    let person2Info = {Name : "David", Age : 100, height : 5}
    let person3Info = {Name : "Abdul", Age : 20, height : 5}
    let person4Info = {Name : "z", Age : 2000, height : 5}
    let person5Info = {Name : "Abdul", Age : 200, height : 5}
    
    let listOfPeople = [person1Info, person2Info, person3Info, person4Info, person5Info]
    listOfPeople.sort((a, b) => a.Name.localeCompare(b.Name));
    let personContainer = {Name :""}


    listOfPeople.forEach(item => {
        if(item.Name === personContainer.Name){
            console.log("There are two of the same values")
            return;
        }
        else{
            personContainer = item
        }
    })
}


function forEach(){
    let newList = [1,2,4,5,6,7]

    newList.forEach(item => {
        console.log(item)
    })
}

function forEachNameList(message, name){

    name.forEach(item => {
        console.log(message, item )
    })
}

function forEach2(){
    let newList2 = [3,2,6,3,2]

    newList2.forEach(item => {
        console.log(item)
    });
    
}

function addNumbers(number1, number2){
    number1 = parseInt(number1)
    number2 = parseInt(number2)

    let total = number1 + number2
    console.log(total)
}

function addNumbersNonParse(number1, number2){
    try{
        let total = number1 + number2
        console.log(total)
    }
    catch{
        console.log("cannot do this")
    }
}

    /*
    newList.forEach(element => {
        console.log(element.value)
    });
    */

/*
function checkIfUsernameEmpty()
{

    let username = document.getElementById("register_username").value;

    if(username == ""){
        alert("Username cannot be empty")
    }

}
function checkIfPasswordEmpty()
{

    let password = document.getElementById('register_password').value;

    if(password == ""){
        alert("Password cannot be empty")
    }

}

function checkIfConfirmPasswordEmpty()
{

    let confirmPassword = document.getElementById('register_confirm_password').value;

    if(confirmPassword == ""){
        alert("Confirm password cannot be empty")
    }

}
*/

function alertMessage()
{
    alert("test")
}


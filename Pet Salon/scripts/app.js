//Object literal
var salon={
    name:"The Fashion Pet",
    address:{
        state:"California",
        city:"San Diego",
        street:"Rancho Mission Road",
        zip:"92108"
    },
    hours:{
        opening:"9:00 am",
        closing:"9:00 pm"
    },
    pets:[]
}

//name, age, gender, breed, service, owner, phone, payment
var counter=0;
class Pet{
    constructor(name, age, gender, breed, service, owner, phone, payment){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.service=service;
        this.owner=owner;
        this.phone=phone;
        this.payment=payment;
        this.id=counter++;
    }
}
//create pets
var scooby=new Pet("Scooby",60,"Male","Great Dane","Grooming","Shaggy","555-555-5555","Credit");
salon.pets.push(scooby);
var scrappy=new Pet("Scrappy",50,"Male","Great Dane","Nails Cut","Shaggy","555-555-5555","Debit");
salon.pets.push(scrappy);
var skippy=new Pet("Skippy",55,"Male","Great Dane","Ear Cleaning","Shaggy","555-555-5555","Cash");
salon.pets.push(skippy);

var txtName=document.getElementById('petName');
var txtAge=document.getElementById('petAge');
var txtGender=document.getElementById('petGender');
var txtBreed=document.getElementById('petBreed');
var txtService=document.getElementById('petService');
var txtOwner=document.getElementById('ownerName');
var txtPhone=document.getElementById('ownerPhone');
var txtPayment=document.getElementById('payType');

function register(){
    if(txtName.value==="" || txtPhone.value===""){
        alert("Please enter the required fields.");
        console.log(txtName.value, txtPhone.value+"else");
        console.log(thePet);       
    }else{
        var thePet = new Pet(txtName.value,txtAge.value,txtGender.value,txtBreed.value,txtService.value,txtOwner.value,txtPhone.value,txtPayment.value);
        console.log(thePet);
        salon.pets.push(thePet);
        clear();
        displayTable();
        var alertElement=document.getElementById("alert");
        alertElement.classList.remove("hide");
        setTimeout(function(){
            alertElement.classList.add("hide");
        },3000) 
        console.log(txtName.value, txtPhone.value);
        console.log(thePet); 
    }        
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtGender.value="";
    txtBreed.value="";
    txtService.value="";
    txtOwner.value="";
    txtPhone.value="";
    txtPayment.value="";
}
function display(){
    const petSection=document.getElementById('pets');
    var tmp="";
    for(var i=0;i<salon.pets.length;i++){
        tmp+=`<div class="pet">
                <h3> 🐾 ${salon.pets[i].name} </h3>
                <p>Age: ${salon.pets[i].age}</p>
                <p>Gender: ${salon.pets[i].gender}</p>
                <p>Breed: ${salon.pets[i].breed}</p>
                <p>Service: ${salon.pets[i].service}</p>
                <p>Owner: ${salon.pets[i].owner}</p>
                <p>Phone: ${salon.pets[i].phone}</p>
                <p>Payment: ${salon.pets[i].payment}</p>
            </div>`;
    }
    petSection.innerHTML=tmp;
}
function displayTable(){
    var table=document.getElementById("pets");
    var tr="";
    for(var i=0;i<salon.pets.length;i++){
        tr+=`
            <tr id=${salon.pets[i].id}>
                <td>🐾 ${salon.pets[i].name} </td>
                <td>${salon.pets[i].age}</td>
                <td>${salon.pets[i].gender}</td>
                <td>${salon.pets[i].breed}</td>
                <td>${salon.pets[i].service}</td>
                <td>${salon.pets[i].owner}</td>
                <td>${salon.pets[i].phone}</td>
                <td>${salon.pets[i].payment}</td>
                <td><button onclick="deletePet(${salon.pets[i].id})">🗑️</button></td>                
            </tr>
        `;
        console.log(tr);
    }
    table.innerHTML=tr;
}
function deletePet(id){
    var row=document.getElementById(id);
    row.remove();
    for(var i=0;i<salon.pets.length;i++){
        var indexDelete;
        if(salon.pets[i].id===id){
            indexDelete=i;
        }
    }
    salon.pets.splice(indexDelete,1);
}
function searchPet(){
    var txtSearch = document.getElementById("searchInput").value;
    var searchString=txtSearch.toLowerCase();
    salon.pets.forEach(pet=>{
        if(pet.name.toLowerCase()===searchString){
            document.getElementById(pet.id).classList.add('highlight');
        }else{
            document.getElementById(pet.id).classList.remove('highlight');
        }
    });
}
function init(){
    console.log("app.js");
    displayTable();
    document.querySelector(".btn-register").addEventListener("click",register);
    document.querySelector(".btn-search").addEventListener("click",searchPet);
}
window.onload=init;
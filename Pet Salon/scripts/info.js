function displayInfo(){
    document.getElementById("info").innerHTML=`
    <h3> Welcome to ${salon.name}</h3>
    <p>${salon.address.street}. ${salon.address.city}, ${salon.address.state} ${salon.address.zip}</p>
    `;
}
displayInfo();

function displayPetInfo(){
    document.getElementById("petsInfo").innerHTML=`
    <p>${salon.pets.length} pets are currently scheduled:</p>   
    `;
}
displayPetInfo();

function displayPetName(){
    for (let i=0; i<salon.pets.length; i++){
    document.getElementById("petsName").innerHTML+=`
    <p>${salon.pets[i].name}</p>
    `;     
    }
}
displayPetName();
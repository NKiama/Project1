const input=document.getElementById("guestname");
const button=document.getElementById("submitBtn");
const list=document.getElementById("guestList");

button.addEventListener("click", function(){
    const name=input.value;
    if (name === "") 
        return;

    if(guestList.children.length >=10){
        alert("Guest list is full!");
        return;
    }
         const listItem=document.createElement("li");
         listItem.style.display = "flex";
         listItem.style.justifyContent = "space-between";
         listItem.style.alignItems = "center";
         listItem.style.marginBottom = "10px";
        listItem.style.maxWidth = "300px";
        listItem.style.gap = "10px";

         listItem.textContent = name;

         guestList.appendChild(listItem);
         input.value="";

         const removeBtn=document.createElement('button');
         removeBtn.textContent='Remove';
         removeBtn.style.marginLeft="10px";
         

         removeBtn.addEventListener('click', function(){
            list.removeChild(listItem);
            saveList();
         });
         listItem.appendChild(removeBtn);

         const rsvpBtn = document.createElement('button');
rsvpBtn.textContent = "RSVP";
rsvpBtn.style.marginLeft = "10px";

let isGoing = false;

rsvpBtn.addEventListener("click", function() {
  if (!isGoing) {
    rsvpBtn.textContent = "Going";
    isGoing = true;
  } else {
    rsvpBtn.textContent = "RSVP";
    isGoing = false;
  }
});

listItem.appendChild(rsvpBtn);

    
    });
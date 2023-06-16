// Your solution goes here
// Hints:
// 1. Assign a id to the tags you want to select
// 2. Use appropriate methods and properties to complete the specified task.
// Example: 
// (style) property to change style
// (classList) property to modify class
// (getAttribute) and (setAttribute) to modify attributes
let  cngStyleVar = document.getElementById("iits-bg");
cngStyleVar.style.backgroundColor ="blue";
let cngContentVar = document.getElementById("iits-cr-msg");
cngContentVar.textContent ="";
let imgVar=document.getElementById("iits-img");
let url =" https://www.google.com/url?sa=i&url=https%3A%2F%2Fhelpx.adobe.com%2Fphotoshop%2Fusing%2Fconvert-color-image-black-white.html&psig=AOvVaw38RaWetZE8oM5vBngKInvK&ust=1686986879519000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPDHzIGix_8CFQAAAAAdAAAAABAE"
imgVar.innerHTML+= `<img src= '${url}'alt=''>`;

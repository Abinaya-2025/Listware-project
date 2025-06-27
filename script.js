//select plusbtn,overlay,popup
var overlay=document.querySelector(".overlay")
var popup=document.querySelector(".popup")
var plusbtn=document.getElementById("plusbtn")
 plusbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
 })
 //select cancel
 var cancelbtn=document.getElementById("cancelbtn")
 cancelbtn.addEventListener("click",function(event){
    overlay.style.display="none"
    popup.style.display="none"
    event.preventDefault()
 })
 
 //select addbtn,software name,software owner,software function,software description
 var softname=document.getElementById("namesoftware")
 var softowner=document.getElementById("ownersoftware")
 var softfunction=document.getElementById("functionsoftware")
 var softdescription=document.getElementById("descriptionsoftware")
 var addbtn1=document.getElementById("addbtn")
 var containerdiv=document.querySelector(".container")
  addbtn1.addEventListener("click",function(event){
    var div=document.createElement("div")
    div.setAttribute("class","softcontainer")
    div.innerHTML=`<h2>${softname.value}</h2>
            <h3>${softowner.value}</h3>
            <h4>${softfunction.value}</h4>
            <p>${softdescription.value}</p>
            <button id="deletebtn" onclick="deleteinfo(event)">Delete</button>`
            event.preventDefault()
            containerdiv.append(div)
            overlay.style.display="none"
            popup.style.display="none"
    
  })
  function deleteinfo(event){
    event.target.parentElement.remove()

}

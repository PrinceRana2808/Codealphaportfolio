let cv=document.querySelector("button");
let btns=document.querySelectorAll(".btn");
let submit=document.querySelector("#submit")
let down=function downloadbtn(){
    alert("CV Downloaded")
}
cv.addEventListener("click",down);
btns.forEach((buttons)=>{
    buttons.addEventListener("click",function()
{
    console.log(buttons.attributes.id.value);
    if(buttons.attributes.id.value=="ui")
        {
            document.getElementById("uiux").style.display="block";
            document.getElementById("webdev").style.display="none";
            document.getElementById("mobiledev").style.display="none";
        }
        else if(buttons.attributes.id.value=="web")
            {
                document.getElementById("uiux").style.display="none";
            document.getElementById("webdev").style.display="block";
            document.getElementById("mobiledev").style.display="none";
            }
        else if(buttons.attributes.id.value=="mobile")
            {
                document.getElementById("uiux").style.display="none";
            document.getElementById("webdev").style.display="none";
            document.getElementById("mobiledev").style.display="block";
            }
            else{
                document.getElementById("uiux").style.display="block";
                document.getElementById("webdev").style.display="block";
                document.getElementById("mobiledev").style.display="block";
            }
})
   
})
submit.addEventListener("click",()=>
{
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let msg=document.getElementById("msg");
    if(name.value==""||email.value==""||msg.value=="")
        {
          alert("Please fill Detail");
        }
        else{
            alert("Thanks for connecting");
        }

})

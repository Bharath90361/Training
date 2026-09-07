
function MaxValue(){
let num1=Number(document.getElementById("fValue").value);
let num2=Number(document.getElementById("sValue").value);
if(num1>num2){
document.getElementById("ans").innerHTML = num1;
}
else{
document.getElementById("ans").innerHTML = num2;
}
document.getElementById("fValue").value="";
document.getElementById("sValue").value="";

}
function reverseString(){
let s=document.getElementById("str").value;
let arr=s.split("");
let i=0;
let j=arr.length-1;
while(i<j){
let temp=arr[i];
arr[i]=arr[j];
arr[j]=temp;
i++;
j--;
}
let result=arr.join("");
document.getElementById("ans2").innerText = result;
document.getElementById("str").value="";

}
function largeString(){
let st=document.getElementById("strs").value;
let arr=st.split(",");
let ans="";
for(let i=0;i<arr.length;i++){
if(arr[i].length>ans.length){
ans=arr[i];
}

}
document.getElementById("ans3").innerText = ans;
document.getElementById("strs").value="";

}
function store(){
    let name = document.getElementById("user").value;
    let ph = document.getElementById("ph").value;
    document.cookie = "username=; max-age=0; path=/";
    document.cookie = "phone=; max-age=0; path=/";
    document.cookie = "username=" + name + "; max-age=3600; path=/";
    document.cookie = "phone=" + ph + "; max-age=3600; path=/";
    console.log("cookie is "+document.cookie);

}
window.onload = function () {
    let cookies=document.cookie.split("; ");
    for(let cookie of cookies){
    let[key,value]=cookie.split("=");
    if(key=="username"){
    document.getElementById("user").value=value;

    }
    if(key=="phone"){
    document.getElementById("ph").value=value;
    }
    }
};

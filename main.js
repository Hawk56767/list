var guests=[];
function submit(){
    var GuestName=document.getElementById("type").value;
    guests.push(GuestName);
    document.getElementById("display").innerHTML=guests;
}
function show(){
document.getElementById("showing").innerHTML=guests;
}
function sort(){
guests.sort();
document.getElementById("sorted").innerHTML=guests;
}
function search(){
var s= document.getElementById("searching").value;
var found=0;
var j;
for(j=0; j<guests.length;j++)
{
if(s==guests[j]){
found=found+1;
}
}
document.getElementById("result").innerHTML="name found"+found+"time/s";
console.log("found name"+found+"time/s")



}
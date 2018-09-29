var sscValue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;

var interValue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;

var degreeVlalue;
var degreemks;
var degreemks1;
var degreeradio;
var degreeper;
var degreeyop;
var name;
var rollno;
var email;
var store;
var co;

  function getDetails() {
  name=document.getElementById('name').value;
  rollno=document.getElementById('rollno').value;
  email=document.getElementById('email').value;
co=document.getElementById('co').value;
 sscValue=document.getElementById('sscValue').value;
sscmks=document.getElementById('sscmks');
sscmks1=document.getElementById('sscmks1');
sscper=document.getElementById('sscper').value;
sscyop=document.getElementById('sscyop').value;
interValue=document.getElementById('interValue').value;
intermks=document.getElementById('intermks');
intermks1=document.getElementById('intermks1');
interper=document.getElementById('interper').value;
interyop=document.getElementById('interyop').value;
degreeValue=document.getElementById('degreeValue').value;
degreemks=document.getElementById('degreemks');
degreemks1=document.getElementById('degreemks1');
degreeper=document.getElementById('degreeper').value;
degreeyop=document.getElementById('degreeyop').value;




if(sscmks.checked){
  sscradio=sscmks.value;
}
else {
sscradio=sscmks1.value;

}
if(intermks.checked){
  interradio=intermks.value;

}
else {
interradio=intermks1.value;

}
if(degreemks.checked){
  degreeradio=degreemks.value;

}
else {
degreeradio=degreemks1.value;
}

console.log(sscValue+" "+sscradio+" "+sscper+" "+sscyop);
console.log(interValue+" "+interradio+""+interper+" "+interyop);
  console.log(name+" "+rollno+" "+email);
console.log(degreeValue+" "+degreeradio+""+degreeper+" "+degreeyop);
console.log(co);


if (!window.indexedDB) {
console.log("indexed db is not working...!")
}
var request=window.indexedDB.open("svitDB",1);
request.onerror=e=>{
  console.log(e);
}
request.onupgradeneeded=e=>{
var dbname=e.target.result;
dbname.createObjectStore("cse",{keyPath:"rollno"});
console.log("upgraded...!");
}
request.onsuccess=e=>{
var dbname=e.target.result;
store=dbname.transaction("cse","readwrite").objectStore("cse");
store.put(
{
  "name":name,
  "rollno":rollno,
  "email":email,
  "co":co,
  "eduDetails":{
  "ssc": [
    sscValue,
    sscradio,
    sscper,
    sscyop
  ],
  "inter": [
    interValue,
    interradio,
    interper,
    interyop
  ],
  "degree": [
    degreeValue,
    degreeradio,
    degreeper,
    degreeyop
  ]
}


}
);
  console.log("success...!");
}

localStorage.setItem("roll",rollno);
window.open("resume.html","_self");
}

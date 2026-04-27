function applyService(){
 let name=document.getElementById("name").value;
 let service=document.getElementById("service").value;

 saveApplication({
  name:name,
  service:service,
  status:"Pending"
 }).then(()=>{
  alert("Submitted");
 });
}

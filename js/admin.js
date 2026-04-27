function loadApps(){
 db.collection("applications").onSnapshot(snap=>{
  let table=document.getElementById("adminTable");
  table.innerHTML="";
  snap.forEach(doc=>{
   let d=doc.data();
   table.innerHTML+=`
   <tr>
    <td>${d.name}</td>
    <td>${d.service}</td>
    <td>${d.status}</td>
    <td>
     <button onclick="approve('${doc.id}')">✔</button>
     <button onclick="reject('${doc.id}')">✖</button>
    </td>
   </tr>`;
  });
 });
}

function approve(id){updateStatus(id,"Approved")}
function reject(id){updateStatus(id,"Rejected")}

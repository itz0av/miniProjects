document.addEventListener('DOMContentLoaded', ()=>{
const addRow = document.getElementById("plus");
const tableBody = document.getElementById("t-body");
// const tableRow = document.getElementById("t-Row");
const deleteBtn = document.getElementById("delete");

addRow.addEventListener("click", () => {
  const tableRow = document.createElement("tr");
  tableRow.setAttribute("class", "t-Row");
  tableRow.innerHTML = `
    <td id="serial-no"><input type="text" /></td>
    <td id="topic"><textarea name="topic-name" id="t-Name"></textarea></td>
    <td id="page-no"><input type="text" /></td>
    <td id="date"><input type="text" /></td>
    <td></td>
    `;

  tableBody.appendChild(tableRow);
});

if(deleteBtn){
deleteBtn.addEventListener('click', (e)=>{
    console.log("working");
    e.stopPropagation() // prvent toggle from firing
    // const row = tableBody.querySelector(".t-Row[last]");    
    const lastTd = tableBody.querySelectorAll('tr')[tableBody.querySelectorAll('tr').length - 1];
    lastTd.remove();
})
}else{
    console.log("no")
}

})
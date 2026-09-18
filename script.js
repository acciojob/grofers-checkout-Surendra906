const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
	const existingAns=document.getElementById("ans");
	if(existingAns) existingAns.remove();

	const prices=document.queryselectorAll(".price");
	let total=0;
	prices.forEach((priceEl)=>{
		total+=parseFloat(priceEl.textContent)||0;
	});
	const table=document.querySelector("table");
	const tr=document.createElement("tr");
	tr.id="ans";

	const td=document.createElement("td");
	td.setAttribute("colspan","2");
	td.textContent=`Total price: Rs ${total}`;

	tr.appendChild(td);
	table.appendChild(tr);
  
};

getSumBtn.addEventListener("click", getSum);


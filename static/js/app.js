//--------------------------------------------------
// from data.js
// Inserting data to the existing html table
function showDataTable (data) {
   const tableData = data;
   let tbody = d3.select("tbody");
	//Publish Data
   tableData.forEach((ufoReport) => {
       let row = tbody.append("tr");
       Object.entries(ufoReport).forEach(([key, value]) => {let cell = tbody.append("td");
           cell.text(value); });
});
};


///This function removes the exiting data from the table and repopulates with the filtered data
showDataTable(data);
function showValue () {
  d3.select("tbody").remove();
  // create a new tbody
  d3.select("table").append("tbody");
  let obj = document.getElementById("datetime");

	//Filtering the data based on the given input date.	
   function filteredData(inputvalue) {
       return inputvalue.datetime == obj.value};
	
	//Publishing filtered data
   tableData = data.filter(filteredData);
   showDataTable(tableData);   
};
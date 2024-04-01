function insert_Row() {
    // Get the table reference
    var table = document.getElementById("sampleTable");

    // Insert a new row at the beginning of the table
    var newRow = table.insertRow(0);

    // Insert cells into the new row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    // Set the content of the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
}

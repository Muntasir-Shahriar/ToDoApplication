
var rIndex,
table = document.getElementById('myTable');
var userfName = document.getElementById('fname');
var userlName = document.getElementById('lname');
var userId = document.getElementById('roll');
var userbGroup = document.getElementById('bgroup');

//function checkEmptyInput(fieldname) {
    //debugger
    //var isEmpty = false;

    //var value = document.getElementById(fieldname).value;

    //if (value === "") {
    //    alert(`${fieldname} name can not be Empty`);
    //    isEmpty = true;
    //}

    //return isEmpty;
//}

function addRow() {
    //if(!checkEmptyInput()){
    var table = document.getElementById('myTable');
    var newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5);

        userfName = document.getElementById('fname').value;
        userlName = document.getElementById('lname').value;
        userId = document.getElementById('roll').value;
        userbGroup = document.getElementById('bgroup').value;

        cell1.innerHTML = userfName;
        cell2.innerHTML = userlName;
        cell3.innerHTML = userId;
        cell4.innerHTML = userbGroup;
        cell5.innerHTML = '<input type="button" value = "Edit" onClick="Javacsript:editRow(this)">';
        cell6.innerHTML = '<input type="button" value = "Delete" onClick="Javacsript:deleteRow(this)">';

        //selectedRowToInput();
    //}
}
function deleteRow(obj) {
     
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("table");
    table.deleteRow(index);   
}


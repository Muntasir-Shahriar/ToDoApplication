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

function checkEmptyInput() {
    var isEmpty = false;
    userfName = document.getElementById('fname').value;
    userlName = document.getElementById('lname').value;
    userId = document.getElementById('roll').value;
    userbGroup = document.getElementById('bgroup').value;

    if (userfName === "") {
        isEmpty = true;
    }
    else if (userlName === "") {
        isEmpty = true;
    }
    else if (userId === "") {
        isEmpty = true;
    }
    else if (userbGroup === "") {
        isEmpty = true;
    }

    return isEmpty;
}
/*
function checkEmptyInput() {
    var isEmpty = false;
    userfName = document.getElementById('fname').value;
    userlName = document.getElementById('lname').value;
    userId = document.getElementById('roll').value;
    userbGroup = document.getElementById('bgroup').value;

    if (isNaN(userfName)){
        text = "Input not valid";
        document.getElementById("demo1").innerHTML = text;
    }

    else if (isNaN (userlName)) {
        text = "Input not valid";
        document.getElementById("demo2").innerHTML = text;
    }
    
    else if (isNaN(userId)){
        text = "Input not valid";
        document.getElementById("demo3").innerHTML = text;
    }
    
    else if (isNaN(userbGroup)){
        text = "Input not valid";
        document.getElementById("demo4").innerHTML = text;
    }
    */

function addRow() {
    if (!checkEmptyInput()) {
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
        cell5.innerHTML = '<input type="submit" id = "btn" value = "Edit" onClick="Javacsript:editRow(this)">';
        cell6.innerHTML = '<input type="submit" id = "btn" value = "Delete" onClick="Javacsript:deleteRow(this)">';
        //selectedRowToInput();
        
        //document.getElementById("btn").style.background = "blue";
        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('roll').value = '';
        document.getElementById('bgroup').value = '';
    }
}
function deleteRow(obj) {

    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    table.deleteRow(index);
    
    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('roll').value = '';
    document.getElementById('bgroup').value = '';
    document.getElementById("btn1").style.display="inline";
    document.getElementById("btn2").style.display="none";
}
var rIndex;
function editRow(object) {
    document.getElementById("btn1").style.display="none";
    document.getElementById("btn2").style.display="inline";
    debugger;
    var index1 = object.parentNode.parentNode.cells;
    rIndex = object.parentNode.parentNode.rowIndex;
    var table = document.getElementById("myTable");
    document.getElementById('fname').value = index1[0].innerHTML;
    document.getElementById('lname').value = index1[1].innerHTML;
    document.getElementById('roll').value = index1[2].innerHTML;
    document.getElementById('bgroup').value = index1[3].innerHTML;
}

function updateRow() {
    debugger
    if (!checkEmptyInput()) {
        var table = document.getElementById("myTable");
        var fName = document.getElementById('fname').value;
        var lName = document.getElementById('lname').value;
        var Id = document.getElementById('roll').value;
        var bGroup = document.getElementById('bgroup').value;

        table.rows[rIndex].cells[0].innerHTML = fName;
        table.rows[rIndex].cells[1].innerHTML = lName;
        table.rows[rIndex].cells[2].innerHTML = Id;
        table.rows[rIndex].cells[3].innerHTML = bGroup;

        document.getElementById('fname').value = '';
        document.getElementById('lname').value = '';
        document.getElementById('roll').value = '';
        document.getElementById('bgroup').value = '';
        document.getElementById("btn1").style.display="inline";
        document.getElementById("btn2").style.display="none";
    }
}


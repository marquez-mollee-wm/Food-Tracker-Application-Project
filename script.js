/**
 * Created by Derek on 10/26/2015.
 */
function newRow (){

    var table = document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1= row.insertCell(0);
    var cell2= row.insertCell(1);
    var cell3= row.insertCell(2);
    var cell4= row.insertCell(3);

    var foodName = document.getElementById("foodName").value;
    var newContent = document.createTextNode(foodName);
    cell1.appendChild(newContent);


    var description = document.getElementById("description").value;
    var newContent2 = document.createTextNode(description);
    cell2.appendChild(newContent2);

    var purchase = document.getElementById("purchase").value;
    var newContent3 = document.createTextNode(purchase);
    cell3.appendChild(newContent3);

     var expire = document.getElementById("expire").value;
    var newContent4 = document.createTextNode(expire);
    cell4.appendChild(newContent4);











}


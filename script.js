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
    var newClass= document.getElementById("expire");
    cell4.setAttribute('class',newClass);
    cell4.appendChild(newContent4);



}


function expired () {

    var day1 = new Date();
    var day = day1.getDate();
    var month2 = new Date();
    var month1 = month2.getMonth();
    var month = month1 + 1;
    var year1 = new Date();
    var year = year1.getFullYear();
    var year2 = year1.getFullYear();

    while (year != 2022) {

        if (month == 13) {
            month = 1;
        }
        if (month != 13) {
        }
        while (month != 13) {

            if (day == 32) {
                day = 1;
            }
            if (day != 32) {
            }
            while (day != 32) {
                day = "" + day;
                if (day.length == 1 ) {
                    day = "0" + day;
                }
                date4 = year + "-" + month + "-" + day;
                var doc3 = document.getElementById("myTable").innerHTML;
                var doc4 = doc3.replace('<td class="[object HTMLInputElement]">' + date4 + "</td>","<td>" + date4 + "</td>");
                document.getElementById("myTable").innerHTML = doc4;
                day = day - 1;
                day = day + 2;
            }
            month = month +1;
        }
        year = year + 1;
    }



    //Trigger function to check all dates before current date.

    while (year2 != 2013) {
        var month3 = 12;
        while (month3 != 0) {
            var day2 = 31;
            while (day2 != 0) {
                day2 = "" + day2;
                if (day2.length == 1 ) {
                    day2 = "0" + day2;
                }
                var date2 = year2 + "-" + month3 + "-" + day2;
                var doc1 = document.getElementById("myTable").innerHTML;
                var doc2 = doc1.replace('<td class="[object HTMLInputElement]">' + date2 + "</td>", "<td id='haha'> EXPIRED </td>");
                document.getElementById("myTable").innerHTML = doc2;
                day2 = day2 - 1;
            }
            month3 = month3 -1;
        }
        year2 = year2 - 1;
    }



}

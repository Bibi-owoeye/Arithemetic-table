var inputColumn = document.getElementById ('inputColumn')
var inputRow = document.getElementById ('inputRow')
var divContainer = document.getElementById('buttons')

function buttonMultiply(){
    var tableHTML = '<table>';
    for(Column=1; Column<= inputColumn.value ; Column++ ){
        tableHTML += '<tr>';
        // console.log(Column);
        for (Row=1; Row<= inputRow.value; Row++){
            tableHTML += '<td>'+ ` ${Column} x  ${Row} = ${Column*Row}` + '</td>';

            console.log(` ${Column} x  ${Row} = ${Column*Row}`);
            // divContainer.innerHTML+= (`Column ${Column} x Row ${Row} = ${Column*Row} <br>`)
            
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('buttons').innerHTML = tableHTML;
}
function buttonAdd(){
    var tableHTML = '<table>';
    for(Column=1; Column<= inputColumn.value ; Column++ ){
        tableHTML += '<tr>';
        // console.log(Column);
        for (Row=1; Row<= inputRow.value; Row++){
            tableHTML += '<td>'+ ` ${Column} +  ${Row} = ${parseFloat(Column)+parseFloat(Row)}` + '</td>';
            console.log(`${Column} + ${Row} = ${parseFloat(Column)+parseFloat(Row)}`);
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('buttons').innerHTML = tableHTML;

}
function buttonSubtract(){
    var tableHTML = '<table>';
    for(Column=1; Column<= inputColumn.value ; Column++ ){
        tableHTML += '<tr>';
        // console.log(Column);
        for (Row=1; Row<= inputRow.value; Row++){
            tableHTML += '<td>'+ ` ${Column} -  ${Row} = ${Column-Row}` + '</td>';
            console.log(`${Column} - ${Row} = ${Column-Row}`);
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('buttons').innerHTML = tableHTML;

}
function buttonDivide(){
    var tableHTML = '<table>';
    for(Column=1; Column<= inputColumn.value ; Column++ ){
        tableHTML += '<tr>';
        // console.log(Column);
        for (Row=1; Row<= inputRow.value; Row++){
            tableHTML += '<td>'+ ` ${Column} /  ${Row} = ${Column/Row}` + '</td>';
            console.log(`${Column} / ${Row} = ${Column/Row}`);
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('buttons').innerHTML = tableHTML;
}
// function Button(){
//     var tableHTML = '<table>';
//     for (var Column=1; Column<= inputColumn.value; Column++ ){
//         tableHTML += '<tr>';
//         for(var Row = 1; Row<= inputRow.value; Row++){
//             tableHTML += '<td>'+ `Column ${Column} x Row ${Row} = ${Column*Row}` + '</td>';
//         }
//         tableHTML += '</tr>';
//     }
//     tableHTML += '</table>';
//     document.getElementById('buttons').innerHTML = tableHTML;
// }
function reset(){
    document.getElementById("buttons").value = ''
    
}
var clickMe = document.getElementById('clickme');
var tableBox = document.getElementById('buttons');

clickMe.addEventListener('click', () => {
    tableBox.classList.remove('d-none');
    tableBox.classList.add('d-block');
});

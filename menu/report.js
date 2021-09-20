// document.body.onload = addElement;
const localSItems = window.localStorage.getItem('ERA')

const objLocalSItems = JSON.parse(localSItems)

const statusTd = document.getElementById('statusTd')
const progressTd = document.getElementById('progressTd')
const pathTd = document.getElementById('pathTd')
const tbody = document.getElementById('tbody')

if(localSItems){
    let objectLength = Object.values(objLocalSItems).length
    // because status,progress and path makes 3
    for (let i = 0; i < (objectLength/3); i++) {
        console.log(i)
        let newRow = tbody.insertRow(i);
        for (let j = 0; j < objectLength; j++){
            let newCell = newRow.insertCell(j);
            let newText = document.createTextNode(`${Object.values(objLocalSItems)[j]}`)
            newCell.appendChild(newText)
        }
    }

}


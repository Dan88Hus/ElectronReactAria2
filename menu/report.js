// document.body.onload = addElement;
const localSItems = window.localStorage.getItem('persist:root')

const objLocalSItems = JSON.parse(localSItems)
const obUriSitems = JSON.parse(objLocalSItems.uri)

const statusTd = document.getElementById('statusTd')
const progressTd = document.getElementById('progressTd')
const pathTd = document.getElementById('pathTd')
const tbody = document.getElementById('tbody')

if(localSItems){
    let objectLength = obUriSitems.length
    for (let i = 0; i < (objectLength); i++) {
        console.log(i, obUriSitems[i])
        let newRow = tbody.insertRow(i);
        // gid, id, path, progress, status
        for (let j = 0; j < objectLength; j++){
            let newCell = newRow.insertCell(j);
            let newText = document.createTextNode(`${obUriSitems[i].status}`)
            newCell.appendChild(newText)
        }
        for (let j = 1; j < objectLength+1; j++){
            let newCell = newRow.insertCell(j);
            let newText = document.createTextNode(`${obUriSitems[i].progress}`)
            newCell.appendChild(newText)
        }
        for (let j = 2; j < objectLength+2; j++){
            let newCell = newRow.insertCell(j);
            let newText = document.createTextNode(`${obUriSitems[i].path}`)
            newCell.appendChild(newText)
        }
    }

}


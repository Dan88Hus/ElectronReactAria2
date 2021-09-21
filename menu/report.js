const localSItems = window.localStorage.getItem('persist:root')
const objLocalSItems = JSON.parse(localSItems)
const obUriSitems = JSON.parse(objLocalSItems.uri)
const tbody = document.getElementById('tbody')

if(localSItems){
    let objectLength = obUriSitems.length
    for (let i = 0; i < (objectLength); i++) {
        console.log(i, obUriSitems[i])
        let newRow = tbody.insertRow(i);
        // gid, id, path, progress, status
        for (let j = 0; j < 1; j++){
            let newCell = newRow.insertCell(j);
            let newText = obUriSitems[i].status ? document.createTextNode(`${obUriSitems[i].status}`) : document.createTextNode('waiting')
            newCell.appendChild(newText)
        }
        for (let j = 1; j < 2; j++){
            let newCell = newRow.insertCell(j);
            let newText = obUriSitems[i].progress ? document.createTextNode(`${obUriSitems[i].progress}`) : document.createTextNode('0')
            newCell.appendChild(newText)
        }
        for (let j = 2; j < 3; j++){
            let newCell = newRow.insertCell(j);
            let newText = obUriSitems[i].path ? document.createTextNode(`${obUriSitems[i].path}`) : document.createTextNode('waiting')
            newCell.appendChild(newText)
        }
    }

}


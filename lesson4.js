console.log("Page is ready");

takeinput = document.getElementById("takeinput");
takeinputkey = document.getElementById("takeinputkey");
savevalue = document.getElementById("savevalue");
storagevalue = document.getElementById("storagevalue");
readvalue = document.getElementById("readvalue");
deletevalue = document.getElementById("deletevalue");

savevalue.onclick = function() {
    localStorage.setItem(takeinputkey.value,takeinput.value);   
}

readvalue.onclick = function() {
    keys = Object.keys(localStorage);
    storagevalue.textContent = "";
    for (key of keys) {
        storagevalue.innerHTML += key+": "+localStorage.getItem(key)+"<br>";
    }
}

deletevalue.onclick = function() {
    if (takeinputkey.value !== "") {
        localStorage.removeItem(takeinputkey.value);
    }
    else {
        keys = Object.keys(localStorage);
        localStorage.removeItem(keys[0]);
    }
}


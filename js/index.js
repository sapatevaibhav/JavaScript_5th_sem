console.log(`Welocome to To-Do`);
showNotes();

let addBtn = document.getElementById('addBtn');

addBtn.addEventListener('click', function (e) {

    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem("notes");

    notesObj = [];
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);

    showNotes();
})
function showNotes() {
    let notes = localStorage.getItem("notes");
    notesObj = [];
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="notesCard card my-2 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Task ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onClick="deleteNote(this.id)" class="btn btn-primary">Remove from task</button>
                </div>
            </div>
        `
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing here! Your To-Do list is empty.`;
    }
}


function deleteNote(index) {
    console.log('Task is being deleted from index no:', index);
    let notes = localStorage.getItem("notes");

    notesObj = [];
    if (notes == null) {
        notesObject = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}


let search = document.getElementById('searchTxt');

search.addEventListener('input', function() {

    let inputVal = search.value.toLowerCase();
    console.log('Input taken', inputVal);

    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        // console.log(cardTxt);

        if (cardTxt.includes(inputVal)) {
            element.style.display="block";
        } else {
            element.style.display="none";
        }
    })
})
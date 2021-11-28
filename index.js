var newDiv = document.querySelector('.new-div')
    // new element function
function newElement() {
    var inputRef = document.querySelector('input').value;

    var newPara = document.createElement('p');
    newPara.append(inputRef);
    newPara.style.margin = "20px";


    var editBtn = document.createElement('button');
    editBtn.innerHTML = "Edit";
    editBtn.style.margin = "20px";


    // Event to edit the paragraph
    editBtn.addEventListener('click', function() { newPara.contentEditable = true; })

    var deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style.margin = "20px";

    // events to delete elements 
    deleteBtn.addEventListener('click', function() { newPara.remove(); })
    deleteBtn.addEventListener('click', function() { editBtn.remove(); })
    deleteBtn.addEventListener('click', function() { deleteBtn.remove(); })




    document.querySelector('.new-div').appendChild(newPara);

    document.querySelector('.new-div').appendChild(editBtn);

    document.querySelector('.new-div').appendChild(deleteBtn);




}
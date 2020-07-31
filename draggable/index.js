const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');


//Event listener 
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

empties.forEach((empty) => {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
});

//drag function - item
function dragStart(){
    this.classList.add('hold');
    setTimeout(()=>(this.classList.toggle('invisible')), 0);
}

function dragEnd(){
    this.classList.remove('hold', 'invisible');
}

//drag and drop function - holder
function dragOver(e){
    //default of drag over prevent dragDrop from being called
 e.preventDefault();
 
}

function dragEnter(e){
    e.preventDefault();
    this.classList.toggle('hovered');
}

function dragLeave(){
    this.classList.toggle('hovered');
}

function dragDrop(){
    this.classList.toggle('hovered');
    this.append(fill);
}
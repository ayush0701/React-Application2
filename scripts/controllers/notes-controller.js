//controller  is used for (I/O) +EVENTS +Talks to Service


import {noteOperations} from '../services/note-service.js'   // when we  dont use default export we use {} bracket
window.addEventListener('load', init);

function init(){
   showCounts();
bindEvents();
disableButton();
disableInputField();
disableUpdateButton();
}



const enableButton=()=>   // delete button ko enable krna
document.querySelector(`#delete`).disabled=false;


const disableButton=()=>   //  delete button ko disbale krna 
       document.querySelector(`#delete`).disabled=true;

const disableInputField=()=>
document.querySelector(`#searchToggle`).disabled=true;


// update 


const enableUpdateButton=()=>   // delete button ko enable krna
document.querySelector(`#update`).disabled=false;


const disableUpdateButton=()=>   //  delete button ko disbale krna 
       document.querySelector(`#update`).disabled=true;


function bindEvents(){
   document.querySelector(`#add`).addEventListener(`click`,addNote);
   document.querySelector(`#delete`).addEventListener(`click`,deleteMarked);
   document.querySelector(`#search`).addEventListener(`click`,)
}

function deleteMarked(){
     noteOperations.remove();
     printNotes(noteOperations.getNotes());

}

function showCounts(){
   noteOperations.markTotal()>0?enableButton():disableButton();
   document.querySelector(`#total`).innerText=noteOperations.total();
   document.querySelector(`#marktotal`).innerText=noteOperations.markTotal();
   document.querySelector(`#unmarktotal`).innerText=noteOperations.unMarkTotal();



}

function addNote(){
// read id , title , desc , date of completion , importance
//Dom used for reading input 
//const id = document.querySelector('#id').value;   old fashion


const fields = ['id','title' ,'desc', 'cdate' , 'importance'];
const noteObject = {};  // object literal but we need specific object ;
for(let field of fields){                                                // let create block scope and traverse the array 
   noteObject[field] = document.querySelector(`#${field}`).value;

}
noteOperations.add(noteObject);
printNote(noteObject);
showCounts();
}


function printIcon(myClassName = `trash`,fn,id){
   //<i class="fa-solid fa-trash" style="color: #181716;"></i>  will make ity dynamically by this function    and we did not use frame awesome directly bcos it behave as a string and that string can not be modify when we need to change the icon 
  //<i class="fa-solid fa-pen-to-square"></i>
  
   const iTag = document.createElement(`i`);
   iTag.setAttribute('note-id',id);    //setattribute used to create our own attribute
  iTag.className =`fa-solid fa-${myClassName} me-5 hand`;  //me means margin line
//   iTag.style.cursor='pointer';
//   if(myClassName === `trash` ){
//      iTag.addEventListener('click' , ()=>{ remove()} )
//   }
   
iTag.addEventListener(`click`,fn)

  return iTag;
  
}

function toggleMark(){
   // console.log('Toggle Mark...',this);
   const icon  = this;
   const id = this.getAttribute('note-id');
   noteOperations.toggleMark(id);
  const tr =  icon.parentNode.parentNode;
//   tr.className = 'alert alert-danger';  depreciated bcoz it was not demarking the row 
tr.classList.toggle('table-danger');
showCounts();
}

function edit(){
   // console.log('edit...',this); below is the refined code to get this and tr and td of the icon 
//    const icon  = this;
//   const tr =  icon.parentNode.parentNode;
//   tr.className = 'alert alert-danger';
}

function printNotes(notes){ 
   const tbody = document.querySelector(`#notes`);
   tbody.innerHTML= '';
  notes.forEach(note =>printNote(note));
   
  showCounts();
}


function printNote(noteObject){
 
const tbody = document.querySelector('#notes'); 
   const row = tbody.insertRow();   //<tr> creating row in table body 
     for(let key in noteObject)  {
      if(key == 'isMarked'){
         continue;
      }
        const td = row.insertCell();
    td.innerText = noteObject[key];
}  // for in traverse the object 



const td = row.insertCell();      // const make block level   and var create the function level 
td.appendChild(printIcon('trash',toggleMark,noteObject.id ));
td.appendChild(printIcon(`pen-to-square`,edit,noteObject.id));


 }

//  function headIcon(){
//    const iTag = document.createElement(`i`);
//    iTag.className =`fa-solid fa-caret-up';
//    const thead = document.querySelector('#heading');
//    thead.appendChild(printIcon(`caret-up`));
//  }

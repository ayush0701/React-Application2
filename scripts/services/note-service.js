// CRUD OPERATION WILL BE HERE
import Note from '../models/note.js';
export const noteOperations ={
    notes:[],     // array with key:value and , is used fror key :value the, , the key:value ,......
    add(noteObject){
   const note = new Note(noteObject);
   this.notes.push(note);


    } ,

    searchById(id){
       return this.notes.find(note=>note.id==id);      // searching id in the aray from screen id 
    },

toggleMark(id){  
    this.searchById(id).toggleMark();
    // marking the searched id in the array by finding the object and marking the object being searched 
//    const noteObject = this.searchById(id);
   //noteObject.isMarked =!noteObject.isMarked; maza ni aratha isilai modify krdia kiuki true or false object pr hota hai toh note par jake krenge toggle 
    },
   


    total(){
        return this.notes.length
    }
    ,
 
    markTotal(){
        return this.notes.filter(note=>note.isMarked).length;
       
    } ,

    unMarkTotal(){
        return this.total()-this.markTotal();
         
    } ,

    remove(){   //  for deletion of row
       this.notes =this.notes.filter(note=>!note.isMarked);
          
      } ,
  
   getNotes(){
      return this.notes;
   },
    search(){

    } ,
    sort(){

    } ,
    update(){

    } ,
    save(){

    } ,


}
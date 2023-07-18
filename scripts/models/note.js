//ES6
// export class Note{}// export make it public so that other file can excess it 
 class Note{             //  class is used as sugarcoted code it give the feel and look of the class in function                       
   constructor(noteObject){
    for(let key in noteObject){
        this[key] = noteObject[key];
    }
    this.isMarked = false;
   }
   toggleMark(){
    this.isMarked = !this.isMarked;
   }

}

export default Note;     //  it send the function as it IS  CREATED
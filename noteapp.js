//simple notes app

let note = [];

//1.

function addnotes(notenam){
    note.push(notenam);
    console.log("sucessfully : ", notenam , "added");
}

function removenotes(notenam) {
    const index = note.indexOf(notenam);
    if(index !== -1){
        console.log(  "the " , notenam , "is removed");
    }
    else{
        console.log("not removed")
    }
}

function listnote(){
    if(note.length === 0){
        console.log("not found");
    }
    else{
        console.log("--------notes--------");
        note.forEach((note,index) => { console.log(note)});
    }
}


addnotes("karthick");
addnotes("cricket");


listnote();




removenotes("karthick");















const fs=require('fs')
const chalk=require('chalk')
const yargs=require('yargs')


const getNotes=function(){
    return "get notes"
}

const addNotes=function(title,body){
        const notes=loadNotes();

        const duplicateNotes=notes.filter(function(note){
            return note.title===title
        })

        if(duplicateNotes.length===0){
            notes.push({
                title:title,
                body:body
            })

            saveNotes(notes)

            // console.log(notes)
            console.log("notes added")
        }
        else{
            console.log("it already taken")
        }
        
       
}

const saveNotes=function(notes){
        const dataJson=JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataJson)
}

const loadNotes=function(){
    try{
        const dataBuffer=fs.readFileSync('notes.json')
    const dataJson=dataBuffer.toString();
    return JSON.parse(dataJson)
    }
    catch(e){
        return []
    }
}

const removeNotes=function(title){
    const notes=loadNotes()
    const notesToKeep=notes.filter(function(note){
        return note.title!==title
    })
    
    if(notesToKeep.length===notes.length){
        console.log(chalk.green("no note removed"));
    }
    else{
        console.log(chalk.red("one removed"))
    }
        
        saveNotes(notesToKeep)
}

const listNotes = () => {
    const notes=loadNotes();
    console.log(chalk.inverse('your notes'))

    notes.forEach(note => {
        console.log(note.title)
    });
}

const readNote= (title) => {
    notes=loadNotes();
    note=notes.find((note) => note.title===title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('not found'))
    }
    
}

module.exports={
    addNotes:addNotes,
    removeNotes:removeNotes,
    listNotes:listNotes,
    readNote:readNote
}
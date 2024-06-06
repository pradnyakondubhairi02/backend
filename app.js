// const fs=require('fs')
// const notes=require('./nots')
// const yargs=require('yargs');
// const { type } = require('os');

// yargs.command({
//     command:'add',
//     description:'adding a note',
//     builder :{
//         title:{
//             describe:'title note',
//             demandOption:true,
//             type:'string'
//         }

//     },
//     handler:function(argv){
//         notes.addNotes(argv.title,argv.body);
//     //    console.log(notes.getNotes())
//     // console.log("handler of add")
    
//     }
// })

// yargs.command({
//     command:'remove',
//     description:'removing a note',
//     builder:{
//         title:{
//             describe:'title desc',
//             demandOption:true,
//             type:'string'
//         }
//     },
//         handler:function(argv){
//             // console.log("its removes handler")
//            notes.removeNotes(argv.title)
//         }
    
// })

// yargs.command({
//     command:'list',
//     description:'list of nodess',
//     builder: {
//         title:{
//             describe:'list title',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:function(){
//         notes.listNotes();
//     }
// })

// yargs.command({
//     command:'read',
//     description:'reading',
//     builder:{
//         title:{
//             describe:'title read',
//             demandOption:true,
//             type:'string'
//         }
//     },
//     handler:function(argv){
//         notes.readNote(argv.title);
//     }
// })

// yargs.parse();
// console.log(yargs.argv);














// const fs=require('fs');

// fs.appendFileSync('notes.txt',"helllooo!!");

// const add=require('./utils')
// const notes=require('./notes');
// const validator=require('validator');

// console.log(validator.isEmail('pr@abc.com'))
// console.log(validator.isURL(`https://google.com`))

// const name=process.argv[2];
// console.log(name);
// console.log(process.argv[2]);


const express=require('express')

const app=express()

let todo=[]
let id=1
app.use(express.json())

app.post('/todos',(req,res) => {
      const {title,desc}=req.body;
      const newTodo={id:id++,title,desc}
        todo.push(newTodo)
        res.status(201).json(newTodo);
})

app.get('/todos',(req,res)=> {
    res.json(todo)
})

app.get('/todos/:id',(req,res)=> {
    const todos=todo.find(t=> t.id===parseInt(req.params.id))
    if(todos){
        res.json(todos)
    }
    else{
        res.send('is not available')
    }
})
app.listen(3000,()=>{
    console.log("server startedd")
})
const { error } = require('console')
const express=require('express')
const path=require('path')

const app=express()
const publicDirPath=path.join(__dirname,'../public')
const viewsDir=path.join(__dirname,'../src/templates')

app.set('view engine','hbs')
app.set('views',viewsDir)
app.use(express.static(publicDirPath))

app.get('',(req,res) =>{
    res.render('index' , {
        title:'my title',
        name:'Pradnyaa'
    })
})

app.get('/help',(req,res) => {
    const val=req.query.helpi;
    res.render('help',{
        title:'help',
        name:'helpName',
        helpi:val
    })
})

app.get('/products',(req,res) => {
    if(!req.query.search) {
       return res.send({
            error:'you must have to provide search'
        })
    }

    console.log(req.query);
    res.send({
        products:[]
    })
})

app.get('*',(req,res) => {
    res.render('error',{
        title:'error page'
    })
})
// app.get('/help',(req,res) => {
//     res.send({
//         name:'pradnya',
//         age:23
//     })
// })

// app.get('/about',(req,res) => {
//     res.send('<h1>About Page</h1>')
// })

app.listen(3000,() => {
    console.log('server port on 3000')
})
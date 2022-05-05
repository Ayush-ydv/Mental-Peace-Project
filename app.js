const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))
app.use('/css',express.static(__dirname + 'public/css'))
app.use('/js',express.static(__dirname + 'public/js'))
app.use('/img',express.static(__dirname + 'public/img'))

app.set('views', './views')
app.set('view engine', 'ejs')


app.get('', (req,res)=>{
    res.render('index')
})
app.get('/meditate', (req,res)=>{
    res.render('meditate')
})

app.get('/feedback',(req,res)=>{
    res.render('feedback')
})

app.get('/stories',(req,res)=>{
    res.render('stories')
})

app.get('/needhelp',(req,res)=>{
    res.render('needhelp')
})

app.get('/event',(req,res)=>{
    res.render('event')
})

app.listen(port,()=>console.info('listening on port ${port}'))

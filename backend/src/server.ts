import express from 'express'
import app from './app'

app.get('/', function(req,res){
    res.send('root')
})

app.get('/api', function(req,res){
    res.send('/api')
})

app.listen(app.get('port'), () => {
    console.log('Env:',app.get('env'),' Port:',app.get('port'))
})

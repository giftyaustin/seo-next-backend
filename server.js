const express = require('express')
const cors = require('cors')
const { newsData } = require('./data')
const corsOptions = {origin:'*'}
const app = express()
app.use(cors(corsOptions))




app.get('/api/news',async(req, res)=>{
    res.status(200).json({
        news: newsData.news
    })
})
app.get('/api/:id',async(req, res)=>{
    const id = req.params.id
    const news = newsData.news.find((news)=>news.id===id)
    res.status(200).json({
        news
    })
})












app.listen(5050, ()=>{console.log('http://localhost:5050');})
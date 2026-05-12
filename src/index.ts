const express=require('express')
import type{Application, Request, Response} from 'express'
require('dotenv').config()
const db=require('./db')

const app:Application=express()

const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log('server started at port', PORT)
})


app.get('/cpu',(req:Request,res:Response)=>{
    try {
        for(let i=0;i<999999999999;i++)
        {

        }
        res.status(200).json({message:'done'})
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
})



app.get('/',(req:Request,res:Response)=>{
    try {
        for(let i=0;i<9999999999;i++)
        {

        }
        res.status(200).json({message:'done'})
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
})

app.get('/check',(req:Request,res:Response)=>{
    try {
        res.status(200).json({message:'done'})
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
})

app.get('/ayad', (req:Request,res:Response)=>{
    try {
        res.status(200).json({message:"ayad"})
    } catch (error) {
        res.status(500).json({message:'Internal server error'})
    }
})
const express = require('express');
const Router = express.Router();
const redis = require('../redis')

Router.get('/', async(req,res)=>{
    const value = await redis.getAsync("num_todos");
    res.status(200).json({
        added_todos: Number(value) | 0
    })
})

module.exports = Router;
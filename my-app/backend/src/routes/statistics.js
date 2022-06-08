const express = require('express');
const redis = require('../../redis')

const router = express.Router();

router.get('/', async (_,res)=>{
    const num_addedPhone = await redis.getAsync('added_phone');
    res.status(200).json('added_phone: ', Number(num_addedPhone) || 0)
})

module.exports = router;
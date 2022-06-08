const express = require('express')
const router = express.Router();
const Phone = require('../../mongo/models/Phone');
const redis = require('../../redis');

router.get('/', async (_, res) => {
    const phoneList = await Phone.find({});
    res.send(phoneList);
})

router.post('/', async (req, res) => {
    try {
        const newPhone = new Phone({
            ...req.body
        })
        const savedPhone = await newPhone.save();
        const num_addedPhone = await redis.getAsync("added_phone");
        const num_addedPhoneEnd = Number(num_addedPhone) || 0;
        await redis.setAsync("added_phone", num_addedPhoneEnd + 1);
        res.send(savedPhone);
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const updatedInfo = req.body;
    const updatedPhone = await Phone.findByIdAndUpdate(id, updatedInfo, { new: true });
    res.send(updatedPhone);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const deletedPhone = await Phone.findByIdAndDelete(id);
    res.send(deletedPhone);
})

module.exports = router;
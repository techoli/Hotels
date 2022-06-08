const express = require('express')

const router = express.Router();
const Room = require('../models/rooms');

router.get('/getallrooms', async(req, res) => {
    try {
        const rooms = await Room.find({})
         res.send(rooms)
    } catch (error) {
        return res.status(400).json({message: error})
    }
    
});
router.post('/getroomsbyid', async(req, res) => {

    roomid = req.body.roomid
    try {
        const room = await Room.findOne({_id:roomid})
         res.send(room)
    } catch (error) {
        return res.status(400).json({message: error})
    }
    
});
module.exports = router;

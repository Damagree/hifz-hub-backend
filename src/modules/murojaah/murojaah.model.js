// murojaah.model.js

import mongoose, { Schema, model } from 'mongoose'

const MurojaahSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    section: { type: String, required: true },
    date: { type: Date, default: Date.now },
})

export default model('Murojaah', MurojaahSchema)
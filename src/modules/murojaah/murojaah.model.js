// murojaah.model.js

import mongoose, { Schema, model } from 'mongoose'

const MurojaahSchema = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    module: {type: String, required: true},
    section: { type: String, required: true },
    date: { type: Date, default: Date.now },
})

export default model('Murojaah', MurojaahSchema)
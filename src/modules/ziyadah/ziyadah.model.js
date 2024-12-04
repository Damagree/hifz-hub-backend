// ziyadah.model.js

import mongoose from "mongoose";

const ZiyadahSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User'},
    module: { type: String, required: true},
    section: { type: String, required: true},
    progress: { type: Number, default: 0},
})

export default mongoose.model('Ziyadah', ZiyadahSchema)
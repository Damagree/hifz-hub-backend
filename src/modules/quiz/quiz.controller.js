// quiz.controller.js

import Murojaah from '../murojaah/murojaah.model.js'
import mongoose from 'mongoose'

export const getRandomQuiz = async (req, res) => {
    try {

        const userId = mongoose.Types.ObjectId.createFromHexString(req.user); // Convert to ObjectId
        const count = await Murojaah.countDocuments({ user: userId })

        if (count === 0)
            return res.status(404).json({ msg: 'No murojaah found for quizzes.' })

        const randomMurojaah = await Murojaah.aggregate([
            { $match: { user: userId } },
            { $sample: { size: 1 } }
        ])

        res.status(200).json({
            msg: 'Quiz Generated',
            quiz: randomMurojaah[0]
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Server error',
            error: error.message
        })
    }
}
// ziyadah.controller.js

import Ziyadah from './ziyadah.model.js'

export const addProgress = async (req, res) => {
    const { module, section, progress } = req.body;
    const userId = req.user; // This comes from the authenticate middleware

    if (!userId) {
        return res.status(400).json({ msg: 'User ID is missing' });
    }

    try {
        const newZiyadah = await Ziyadah.findOneAndUpdate(
            { user: userId, module, section },
            { $set: { progress } },
            { new: true, upsert: true }
        );

        await newZiyadah.save();
        res.status(200).json({
            msg: 'Successfully add new ziyadah progress',
            newZiyadah
        });
    } catch (error) {
        res.status(500).json({
            msg: 'Server error',
            error: error.message,
        });
    }
}
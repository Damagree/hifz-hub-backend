// murojaah.controller.js

import Murojaah from './murojaah.model.js'

export async function addMurojaah(req, res) {
    const { module, section } = req.body
    const userId = req.user

    if (!module || !section)
        return res.status(400).json({ msg: 'Section and module is required' })

    try {
        const newMurojaah = new Murojaah({ user: userId, module, section })
        await newMurojaah.save()
        res.status(201).json({
            msg: 'Successfully add new section for Murojaah',
            newMurojaah
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Server error:',
            error
        })
    }
}
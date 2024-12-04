// murojaah.controller.js

import Murojaah from './murojaah.model.js'

export async function addMurojaah(req, res) {
    const { section } = req.body
    const userId = req.user.id

    if (!section)
        return res.status(400).json({ msg: 'Section is required' })

    try {
        const newMurojaah = new Murojaah({ section })
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
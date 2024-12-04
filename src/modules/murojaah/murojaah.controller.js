// murojaah.controller.js

import Murojaah from './murojaah.model.js'

export async function addMurojaah(req, res) {
    const { section } = req.body

    const newMurojaah = new Murojaah({ section })
    await newMurojaah.save()

    res.status(201).json({
        msg: 'Successfully add new section for Murojaah',
        newMurojaah
    })
}
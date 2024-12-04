// ziyadah.middleware.js

export const validateZiyadah = (req, res, next) => {
    const {module, section, progress} = req.body

    if (!module || !section || typeof progress !== 'number'){
        return res.status(400).json({
            msg: 'Module, section, and progress (number) are required'
        })
    }

    next()
}
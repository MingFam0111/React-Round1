const modelUser = require('../model/index')

exports.getPag = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit)
        const activePage = parseInt(req.query.activePage)

        const totalItem = await modelUser.countDocuments()
        const totalPage = await Math.ceil(totalItem / limit)
        const skip = (activePage - 1) * limit

        const listData = await modelUser.find().skip(skip).limit(limit)
        res.send({ listData, totalPage, skip, activePage })
    } catch (error) {
        res.send(error)
    }
}

exports.searchPag = async (req, res) => {
    try {
        const limit = parseInt(req.query.limit)
        const activePage = parseInt(req.query.activePage)
        const textSearch = req.query.textSearch

        const totalItem = await modelUser.countDocuments({ name: { $regex: textSearch, $options: 'i' } })
        const totalPage = await Math.ceil(totalItem / limit)
        const skip = (activePage - 1) * limit

        const listData = await modelUser.find({ name: { $regex: textSearch, $options: 'i' } }).skip(skip).limit(limit)
        res.send({ listData, totalPage, skip, activePage, textSearch })
    } catch (error) {
        res.send(error)
    }
}

exports.add = async (req, res) => {
    try {
        const name = req.body.name
        await modelUser.create({ name })
        res.send({ message: "SUCCC" })
    } catch (error) {
        res.send(error)
    }
}

exports.update = async (req, res) => {
    try {
        const _id = req.params.id
        const name = req.body.name
        await modelUser.findByIdAndUpdate(_id,{ name })
        res.send({ message: "SUCCC" })
    } catch (error) {
        res.send(error)
    }
}

exports.delete = async (req, res) => {
    try {
        const _id = req.params.id
        await modelUser.findByIdAndDelete(_id)
        res.send({ message: "SUCCC" })
    } catch (error) {
        res.send(error)
    }
}
const { User }        = require('../models')

exports.getAllUsers = (req, res) => {
    User.findAll()
    .then((data) => {
        res.json({code: 'Success', data })
    })
    .catch((error) => {
        console.log(error)
    })
}
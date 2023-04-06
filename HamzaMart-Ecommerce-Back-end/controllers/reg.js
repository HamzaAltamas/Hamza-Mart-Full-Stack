const  User = require("../models/regSchema")

async function registrationControllers(req,res) {
   const { firstName,
    lastName,
    email,
    tel,
    addressOne,
    addressTwo,
    city,
    postCode,
    country,
    region,
    password} = req.body
let userData = new User({
    firstName,
    lastName,
    email,
    tel,
    addressOne,
    addressTwo,
    city,
    postCode,
    country,
    region,
    password
})
userData.save()
await res.json(userData)
}

module.exports = registrationControllers
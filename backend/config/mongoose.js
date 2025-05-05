
const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.DB_URI).then((result) => {
        if (result) {
            console.log('moongoose connected')
        }
    })
} catch (err) {
    console.error(err)
}
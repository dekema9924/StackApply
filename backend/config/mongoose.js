
const mongoose = require('mongoose')

try {
    mongoose.connect(process.env.NODE_ENV === 'developement' ? process.env.DB_URI : process.env.PROD_DB_URI).then((result) => {
        if (result) {
            console.log('moongoose connected')
        }
    })
} catch (err) {
    console.error(err)
}
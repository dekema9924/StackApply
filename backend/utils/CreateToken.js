
var jwt = require('jsonwebtoken');

const CreateToken = (user) => {
    var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return token
}


module.exports = CreateToken


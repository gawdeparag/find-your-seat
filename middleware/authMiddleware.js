const jwt = require('jsonwebtoken');

const checkUser = (req, res, next) => {
    const token = req.cookies;
    console.log(token);
    if (token) {
        jwt.verify(token, process.env.JWT, async(err, decodedToken) => {
            if (err) {
                res.json({ message: "Unauthorized client" });
            } else {
                req.user_id = decodedToken.id;
                next();
            }
        })
    } else {
        res.json({ message: "User needs to login" });
    }
}

module.exports = checkUser;
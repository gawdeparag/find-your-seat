const jwt = require('jsonwebtoken');

const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    // console.log(req);
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, async(err, decodedToken) => {
            if (err) {
                console.log(err);
                res.json({ message: "Unauthorized client" });
            } else {
                console.log(decodedToken);
                req.user_id = decodedToken.id;
                next();
            }
        })
    } else {
        res.json({ message: "User needs to login" });
    }
}

module.exports = checkUser;
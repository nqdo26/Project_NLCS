require("dotenv").config();
const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    // Danh sach trang k can gui token
    const while_list = ["/", "/login", "/register"];
    if(while_list.find(item => '/v1/api' + item === req.originalUrl)){
        next();
    }else {
        // Nub coder
        // if(req.headers && req.header.authorization){
        // const token = req.headers.authorization.split(' ')[1];
        // }
    
        // Pro coder
        if(req?.headers?.authorization?.split(' ')[1]){
            const token = req.headers.authorization.split(' ')[1];
    
            //vertify token
            try {
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                req.user = {
                    email: decoded.email,
                    name: decoded.name,
                    createBy: "hoidanit"
                }
                console.log(">>> check token", decoded)
                next();
            } catch (error) {
                return res.status(401).json({
                    message:"Token het hang hoac khong hop le"
                })
            }
        }else {
            return res.status(401).json({
                message:"Ban chua truyen Access Token o hender Hoac token da hen han"
            })
        }
    }

   
}

module.exports = auth; 
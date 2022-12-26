import jwt from 'jsonwebtoken'

export const generateToken = (uid) => {
        const expiresIn = 60 * 3600;

        try {
           const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn});
           return {token, expiresIn}
        } catch (error) {
            console.log(error)
        }
 };

 export const generateRefreshToken = (uid,res) => {
    const expiresIn = 60 * 60 * 24 * 30; 
        try {
            const refreshToken = jwt.sign({uid}, process.env.JWT_REFRESH, {expiresIn});
            res.cookie('refreshToken', refreshToken,{
                httpOnly: true,
                secure: !(process.env.MODE === "developer"),
                expires: new Date(Date.now() + expiresIn * 1000),
            });
        } catch (error) {
            console.log(error)
        }
 }


 export const tokenVerificationErrors = {
    ["invalid signature"]: "The Signature of this token it is not valid",
    ["jwt expired"]: "This token has expired",
    ["invalid token"]: "Token it is not valid",
    ["nno bearer"]: "Please use the bearer Format!",
    ["jwt malformed"]: "JWT it is malformed"
 };
import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied: No Token Provided" });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = verified.userId; // Attach user ID to the request
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

export default authMiddleware;

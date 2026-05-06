export const userIdMiddleware = (req, res, next) => {
    req.user = {
        _id: "69fb8af3ddedb18174d83ec7"
    }
    next()
}
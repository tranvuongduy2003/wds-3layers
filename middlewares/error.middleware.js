export const ErrorMiddleWare = (error, req, res, next) => {
    try {
        const status = error.status || 500
        const message = error.message || 'Something went wrong'

        console.log(
            `[${req.method}] ${req.path} >> StatusCode: ${status}, Message: ${message}`
        )
    } catch (error) {
        next(error)
    }
}

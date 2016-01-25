module.exports = {
    requireAuthentication: function(req, res, next) {
        console.log("private route hit!");
        next();
    },
    logger: function(req, res, next) {
        var date = new Date();
        console.log(req.method + " " + req.originalUrl + " on " 
                    + date.getDate() + " " + (date.getMonth() + 1) + " " 
                    + date.getFullYear());
        next();
    }
}
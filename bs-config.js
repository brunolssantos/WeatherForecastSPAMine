module.exports = {
  server: {
    baseDir: "./",
    middleware: {
      1: null,
      2: function (req, res, next) {
        if (!req.url.includes(".")) {
          req.url = "/index.htm";
        }
        next();
      }
    }
  }
};
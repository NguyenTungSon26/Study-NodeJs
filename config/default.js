module.exports = {
  app: {
    port: 3000,
    static_folder: __dirname + "/../src/public",
    views_folder: __dirname + "/../src/apps/view",
    view_engine: "ejs",
    tmp: __dirname + "/../src/tmp",
  },
};

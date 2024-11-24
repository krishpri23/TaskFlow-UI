const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  // // config with dynamic origin
  // origin: (origin, callback) => {
  //   // not -1 means it exists
  //   if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error("Not allowed by CORS"));
  //   }
  // },

  origin: "https://taskflow-n1sh.onrender.com", // Replace with your frontend URL
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;

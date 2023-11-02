require("express-async-errors");
require("dotenv/config");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const database = require("./database/sqlite");
const uploadConfig = require("./configs/upload");
const cookieParser = require("cookie-parser");
const AppError = require("./utils/AppError");

const app = express();
app.use(express.json());
app.use(cookieParser());

// Configuração CORS para permitir solicitações da origem Netlify
const allowedOrigins = ["https://quiet-zuccutto-0eff04.netlify.app","http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));
app.use(routes);
database();

app.use((err, request, response, next) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));

const express = require("express");
const cors = require("cors");
const db = require("./src/utils/db");
app.use(require("./src/routes"));
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

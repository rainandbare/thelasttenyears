const express = require("express");
const mongoose = require("mongoose");

console.log('hi')

// require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 3001;


app.get("/api", (req: any, res: any) => {
  res.json({ message: "Hello from server!" });
});

app.post('/name', (req: any, res: any) => {
  console.log(req);
  console.log(req.body);
  console.log('Hellooooooooooooooooo!')
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

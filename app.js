import express from "express";
const app = express(); // create a const using express object that was imported)
const port = 3000;

// 3000 is the port, then a callback function //
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


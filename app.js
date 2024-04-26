import express from "express"; // remember to add type module to package.json file 
const app = express(); // create a const using express object that was imported)
const port = 3000;

app.get("/", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>Hello0?</h1>");
})

app.get("/about", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>About Page</h1>");
})

app.get("/contact", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h1>Contact Page</h1>");
})

// 3000 is the port, then a callback function //
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


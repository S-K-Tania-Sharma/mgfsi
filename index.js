import express from "express";
const app=express();
const port=3000;
app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("index.ejs")
})
app.get("/courses",(req,res)=>{
    res.render("courses.ejs");
});
app.get("/affiliation",(req,res)=>{
    res.render("affiliation.ejs")
})
app.get("/achievements",(req,res)=>{
    res.render("achievements.ejs")
})
app.get("/contact",(req,res)=>{
    res.render("contact.ejs")
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
  
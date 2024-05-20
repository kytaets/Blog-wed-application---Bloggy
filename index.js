import express from "express"
import bodyParser from "body-parser";

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index.ejs")
})

app.get("/create-post", (req, res) => {
    res.render("create-post.ejs")
})


app.post("/create-post/submit", (req, res) => {
    const data = req.body
    console.log(data)
    res.render("user-post.ejs", data)
})

app.listen(port, () => {
    console.log("Listening on port ", port)
})
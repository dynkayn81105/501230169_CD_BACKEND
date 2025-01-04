import express from 'express';
import path from 'path';
const app = express();
const port = 5002
const __dirname = path.resolve()
app.use("/static", express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set("views",__dirname + "/src/views")
app.get('/', (req, res) => {
   res.render("pages/indexs")
});
app.get("/components", (req, res) => {
    res.render("pages/components")
})
app.get("/forms", (req, res) => {
    res.render("pages/forms")
});
app.get("/icons", (req, res) => {
    res.render("pages/icons")
});

app.get("/tables", (req, res) => {
    res.render("pages/tables")
});

app.get("/notifications", (req, res) => {
    res.render("pages/notifications")
});

app.get("/typographys", (req, res) => {
    res.render("pages/typographys")
});
app.listen(port, function() {
    console.log('http://localhost:' + port);
});
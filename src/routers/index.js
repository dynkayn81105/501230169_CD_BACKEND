import categoriRouter from './categoriRouter.js';

export default function routers(app){
    app.use("/categories",categoriRouter)
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

}
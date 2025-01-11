import categoriModel from "../models/categoriModel.js";

export async function listCategori(req, res) {
    try {
        const categories = await categoriModel.find();
        res.render("pages/categories/list", {
            title: "Categories",
            categories: categories,
        });
    } catch (error) {
        console.log(error);
        res.send("get list categories failed");
    }
}
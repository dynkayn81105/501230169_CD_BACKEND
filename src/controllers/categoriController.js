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
export async function renderPagecreatecCategory(req, res) {
    res.render("pages/categories/create", {
        title: " Create Categories",
    });
}
export async function createcCategory(req, res) {
    const { code, name, image } = req.body;
    try {
        await categoriModel.create({
            code, name, image,createAt: new Date()
        });
        res.redirect("/categories");
    } catch (error) {
        console.log(error);
        res.send("Tạo lỗi sản phẩm k thành công");
    }
}
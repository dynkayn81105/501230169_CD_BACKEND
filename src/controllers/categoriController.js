import categoriModel from "../models/categoriModel.js";
import { ObjectId } from "mongodb";

export async function listCategori(req, res) {
  try {
    const categories = await categoriModel.find({deleteAt:null});
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
  try {
    res.render("pages/categories/form", {
      title: " Create Categories",
      mode: "create",
      category:{}
    });
  } catch (error) {
    console.log(error);
    res.send("Lỗi khi render trang tạo danh mục");
  }
}
export async function createcCategory(req, res) {
  const { code, name, image } = req.body;
  try {
    await categoriModel.create({
      code,
      name,
      image,
      createAt: new Date(),
    });
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
    res.send("Tạo lỗi sản phẩm k thành công");
  }
}

export async function renderPageUpdateCategory(req, res) {
  const { id } = req.params;
  try {
    const category = await categoriModel.findOne({ _id: new ObjectId(id),deleteAt:null });
    if (category) {
      res.render("pages/categories/form", {
        title: " Create Categories",
        mode: "update",
        category: category
      });
    } else {
      res.send("Không tìm thấy sản phẩm");
    }
  } catch (error) {
    console.log(error);
    res.send("Lỗi khi render trang cập nhật danh mục");
  }
}
export async function updateCategory(req, res) {
  const { code, name, image,id} = req.body;
  try {
    await categoriModel.updateOne(
      { _id: new ObjectId(id) },
      {
        code,
        name,
        image,
        updatedAt: new Date(),
      }
    );
    res.redirect("/categories");
  } catch (error) {
    console.log(error);
    res.send("Tạo lỗi sản phẩm không thành công");
  }
}

export async function renderPageDeleteCategory(req, res) {
  try {
    const { id } = req.params;
    const category = await categoriModel.findOne({ _id: new ObjectId(id),deleteAt:null });
    if (category) {
      res.render("pages/categories/form", {
        title: " Create Categories",
        mode: "Delete",
        category: category
      });
    } else {
      res.send("Không tìm thấy sản phẩm");
    }
  } catch (error) {
    console.log(error);
    res.send("Trang web này không tồn tại");
  }
}
export async function deleteCategory(req, res) {
  const { id } = req.body;
  try {
    await categoriModel.updateOne(
      { _id: new ObjectId(id) },
      { 
        deleteAt: new Date()

       })
    res.redirect("/categories")
  } catch (error) {
    console.log(error)
    res.send("Xóa sản phẩm không thành công")
  }
}

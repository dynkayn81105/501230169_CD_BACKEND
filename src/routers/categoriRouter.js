import express from "express";
import {
  listCategori,
  renderPagecreatecCategory,
  createcCategory,
  renderPageUpdateCategory,
  updateCategory,
  renderPageDeleteCategory,
  deleteCategory
} from "../controllers/categoriController.js";
const router = express.Router();
router.get("/", listCategori);

router.get("/create", renderPagecreatecCategory); //render ra from create
router.post("/create", createcCategory);
router.get("/update/:id", renderPageUpdateCategory); //render ra from create
router.post("/update", updateCategory); //render ra from update
router.get("/delete/:id", renderPageDeleteCategory); //render ra from create
router.post("/delete",deleteCategory); //render ra from delete);
export default router;

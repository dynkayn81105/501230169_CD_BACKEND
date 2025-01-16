import express from "express";
import {
  listCategori,
  renderPagecreatecCategory,
  createcCategory,
  renderPageUpdateCategory,
  updateCategory,
} from "../controllers/categoriController.js";
const router = express.Router();
router.get("/", listCategori);

router.get("/create", renderPagecreatecCategory); //render ra from create
router.post("/create", createcCategory);
router.get("/update/:id", renderPageUpdateCategory); //render ra from create
router.post("/update", updateCategory); //render ra from update
export default router;

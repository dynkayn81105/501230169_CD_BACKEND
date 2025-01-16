import express from 'express';
import { listCategori,renderPagecreatecCategory,createcCategory } from '../controllers/categoriController.js';
const router = express.Router();
router.get('/', listCategori);

router.get('/create', renderPagecreatecCategory)//render ra from create
router.post('/create', createcCategory)
export default router;
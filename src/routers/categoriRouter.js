import express from 'express';
import { listCategori } from '../controllers/categoriController.js';
const router = express.Router();
router.get('/', listCategori);

router.get('/create', (req, res) => {
    res.send('Create a new category');
});
export default router;
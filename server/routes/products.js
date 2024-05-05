import express from "express";
import {selectAll, selectProductByName} from "../utils/dbUtils.js";

const router = express.Router();

router.get('/', async (req, res) => {
    // console.log(`client data: ${req.body}`);
    try {
        const rows = await selectAll('products');
        res.status(200).json({
            message: 'Product list',
            rows
        });
    } catch (error) {
        console.error(`Product list error: ${error.message}`, error);
        res.status(500).send({
            message: 'Error getting product list',
            error: error.message
        });
    }
});

router.get('/search/product', async (req, res) => {
    const name = req.query.name;
    console.log(`client data name: ${name}`);

    // 검색어가 없을 때의 처리
    if (!name) {
        return res.status(400).json({ message: '검색어를 입력하세요.' });
    }

    try {
        const products = await selectProductByName(name);
        if (!products) {
            return res.status(404).json({ message: '검색 결과가 없습니다.' });
        }

        res.status(200).json({message: 'Product search result', products});
    } catch (error) {
        res.status(500).send({message: 'Error searching product', error: error.message});
    }
});

export default router;
import express from 'express';

const router = express.Router();

router.get('/get', (req, res) => {
  res.send('Ola');
});

export default router;

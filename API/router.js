import express from 'express';
import form from '../model/form-model.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname + '/view/' });
});

router.post('/register', async (req, res) => {
  try {
    const createForm = new form({
      name: req.body.name,
      adress: req.body.adress,
      contact: req.body.contact,
      cnpj: req.body.cnpj,
    });
    await createForm.save();
    res.redirect('/');
  } catch (error) {
    console.log(error);
  }
});

router.get('/data', async (req, res) => {});

export default router;

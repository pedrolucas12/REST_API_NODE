const express = require('express');
const router = new express.Router();
const multer = require('multer');
const upload = multer();

const controller = require('../../../../Produtos/ordem');

router.get('/Produtos/ordem', controller.obter_ordencao);

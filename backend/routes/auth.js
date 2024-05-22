const express = require("express");
const router = express.Router();
const{ check } = require("express-validator");
const{ validarCampos } = require("../middlewares/validar-campos");
const { crearUsuario, loginUsuario, revalidarToken } = require("../Controllers/auth");

router.post("/", loginUsuario);

router.post("/new",[
    check("name", "El nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "El password es obligatorio").not().isEmpty(),
    validarCampos
], crearUsuario);
router.get("/renew", revalidarToken);
module.exports = router
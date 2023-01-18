//import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
//https://pdf-lib.js.org/
//https://stackoverflow.com/questions/41322137/fill-data-in-existing-pdf-form-using-nodejs
const rgb = require("pdf-lib");
const StandardFonts = require("pdf-lib");
const PDFDocument = require("pdf-lib");
const Express = require("express");
const router = Express();
const BodyParser = require("body-parser");
router.use(BodyParser.json());
router.use(BodyParser.urlencoded({ extended: true }));
const fs = require('fs/promises');

router.get("", async (req, res) => {
    var response = {};

    response = {};

    response["msg"] = "Done";
  


    const existingPdfBytes  = await fs.readFile('./test.pdf');
    const pdfDoc = await PDFDocument.load(existingPdfBytes)
    res.json(response);
});



module.exports = {
    router: router
}
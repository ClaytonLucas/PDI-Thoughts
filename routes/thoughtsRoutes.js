const express = require("express");
const Thought = require("../models/Thought");
const router = express.Router();
const ThoughtsController = require("../controllers/ThoughtsController");

const checkAuth = require("../helpers/auth").checkAuth;

router.get("/add", checkAuth, ThoughtsController.createThought);
router.post("/add", checkAuth, ThoughtsController.createThoughtSave);
router.get("/dashboard", checkAuth, ThoughtsController.dashboard);
router.get("/", ThoughtsController.showThoughts);
router.get("/edit/:id", checkAuth, ThoughtsController.updateThought);
router.post("/edit", checkAuth, ThoughtsController.updateThoughtSave);
router.post("/remove", checkAuth, ThoughtsController.removeThought);

module.exports = router;

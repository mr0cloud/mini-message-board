const express = require("express");
const router = express.Router();
const path = require("path");

const viewPath = path.join(__dirname, "./views");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get("/", (req, res) => {
    res.render("index", {messages: messages});
});

router.get("/new", (req, res) => {
    res.render("form");
});

router.post("/new", (req, res) => {
    const {author, messageContent} = req.body;

    messages.push({
        text: messageContent,
        user: author,
        added: new Date()
    });
    res.redirect("/");
})

router.get("/message/:id", (req, res) => {
    const id = req.params.id;
    const message = messages[id];

    res.render("msg", {message});
});

router.use((req, res) => {
    res.status(404).send("Page not found");
});

module.exports = router;




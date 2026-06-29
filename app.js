const express = require("express");
const app = express();
const path = require("path");

const PORT = 8080;

const pageRoutes = require("./routes/pages");
const assetsPath = path.join(__dirname, "public");



app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));


app.use("/", pageRoutes);

app.listen(PORT, (error) => {
    if (error){
        throw error;
    };

    console.log(`Server is running on http://localhost:${PORT}`);
});

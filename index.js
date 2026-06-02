const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000


app.get("/", (req, res) => {
    res.send("Server is running on this page");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

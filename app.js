const express = require("express");
const app = express();
const port = 80;

app.get('/', (req, res) => {
	res.send("Hello welcome to rayxxin domain");
});

app.listen(port);

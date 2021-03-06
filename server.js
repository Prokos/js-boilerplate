const compression = require('compression');
const express = require('express');
const app = express();

app.use('/', express.static('dist'));
app.use('/compressed', compression(), express.static('dist'));

const PORT = 1337;
app.listen(PORT, () => {
	console.info(`Server started on port ${PORT}!`);
});

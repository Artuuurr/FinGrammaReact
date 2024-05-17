const mongoose = require('mongoose');
const express = require('express')
const cors = require('cors')

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.dc5xvg1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
	.then(()=> console.log('DB ok'))
	.catch(err=> console.log('DB error', err))

const PORT = process.env.PORT || 3001

const app = express()

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server starting on port ${PORT}`)
})

app.get('/', (req, res) => {
	res.json({ })
})



const express = require('express')
const dotenv = require('dotenv')
const deliveryRoutes = require('./routes/deliveryRoutes')
const bodyParser = require('body-parser')
const locationRoutes = require('./routes/locationRoutes')
const errorHandler = require('./middlewares/errorHandler')
const connectDB = require('./config/db')

dotenv.config()
const app = express() 
connectDB()

app.use(express.json())
app.use(bodyParser.json()) 
app.use('/api', deliveryRoutes)
app.use('/api/location', locationRoutes)
app.use(errorHandler)


  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

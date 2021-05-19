import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import morgan from 'morgan';
import connectDB from './config/db.js';
//import products from './data/products.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config()

connectDB()

const app = express();

//morgan is used here to monitor reviews hitting endpoint in dev mode

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())



app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => 
res.send(process.env.PAYPAL_CLIENT_ID))

const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/upload')))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/bikeshop/build')))

    app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'bikeshop', 'build', 'index.html'))
    )
} else {
    
app.get('/', (req, res) => {
    res.send("Bikeshop API is up and running...")
});
}

app.use(notFound)

app.use(errorHandler)


const PORT = process.env.PORT || 5000

app.listen(PORT, 
    console.log(`Server for ${process.env.NODE_ENV} up and running on port ${PORT}`.yellow.bold))
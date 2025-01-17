import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import cors from 'cors';

const port = process.env.PORT || 5001;

//connect to MongoDB
connectDB(); 

const app = express();

// Allow specific origin
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/', (req, res) =>
    res.send('API RUNNING ......')
  );

app.use('/api/products', productRoutes);

app.listen(port, () =>  console.log(`Server is RUNNING on port ${port}`));
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

mongoose.connect('mongodb+srv://admin:wwwwww@cluster0.dc5xvg1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB ok'))
  .catch(err => console.log('DB error', err));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Создание схемы для платежей
const paymentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  cardNumber: String,
  cvv: String,
  expiryDate: String,
});

// Модель платежа
const Payment = mongoose.model('Payment', paymentSchema);

// Обработка запроса на создание платежа
app.post('/process-payment', async (req, res) => {
  const { name, phone, email, cardNumber, cvv, expiryDate } = req.body;

  try {
    // Создание новой записи о платеже в базе данных
    const payment = new Payment({
      name,
      phone,
      email,
      cardNumber,
      cvv,
      expiryDate,
    });

    // Сохранение платежа в базе данных
    await payment.save();

    res.status(200).send({ message: 'Payment processed successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Payment processing failed' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});



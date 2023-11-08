const express = require('express');
const mysql = require('mysql');
const app = express();

// Konfigurasi koneksi ke database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ganti dengan username database Anda
  password: '', // Ganti dengan password database Anda
  database: 'gameshop_pba' // Ganti dengan nama database Anda
});

// Terhubung ke database
db.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal: ' + err.message);
  } else {
    console.log('Terhubung ke database');
  }
});

app.get('/api/products', (req, res) => {
  const query = 'SELECT * FROM produk'; // Ganti dengan nama tabel database Anda
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error saat mengambil data produk: ' + err.message);
      res.status(500).send('Gagal mengambil data produk');
    } else {
      res.json(results);
    }
  });
});


const port = 3001; // Port server
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});

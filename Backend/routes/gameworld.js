const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const connection = require('../config/database');

router.post('/login', [
    body('email').notEmpty(),
    body('password').notEmpty(),
], async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: 'Invalid input data',
            errors: errors.array(),
        });
    }

    const { email, password } = req.body;

    const userQuery = 'SELECT * FROM users WHERE email = ?';
    connection.query(userQuery, [email], function (err, rows) {
    
    
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        }
        if (rows.length === 0) {
            return res.status(404).json({
                status: false,
                message: 'User not found',
            });
        }
        const user = rows[0];
        const userId = user.id; // Ambil ID pengguna
        if (password !== user.password) {
            return res.status(401).json({
                status: false,
                message: 'Invalid password',
            });
        }

    
        return res.status(200).json({
            status: true,
            message: 'Login successful',
            user: {
                id : userId
            
            },
        });
    });
});

router.get('/all', function (req, res) {
    connection.query('SELECT * FROM produk ORDER BY id', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Produk',
                data: rows,
            });
        }
    });
});

router.get('/popular', function (req, res) {
    connection.query('SELECT * FROM produk ORDER BY terjual DESC', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Produk',
                data: rows,
            });
        }
    });
});

router.get('/', function (req, res) {
    connection.query('SELECT * FROM produk ORDER BY terjual LIMIT 3', function (err, rows) {
        if (err) {
            return res.status(500).json({
                status: false,
                message: 'Internal Server Error',
            });
        } else {
            return res.status(200).json({
                status: true,
                message: 'List Data Produk',
                data: rows,
            });
        }
    });
});

router.get('/keranjang/:userId', function (req, res) {
    const userId = req.params.userId;

    const keranjangQuery = `
        SELECT * FROM keranjang
        WHERE idUser = ?;
    `;

    connection.query(keranjangQuery, [userId], function (err, rows) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                message: 'Error retrieving data from the database',
            });
        }

        return res.status(200).json({
            status: true,
            message: 'Keranjang retrieved successfully',
            data: rows,
        });
    });
});

router.post('/keranjang/store', [
    body('idUser').notEmpty(),
    body('idProduk').notEmpty(),
    body('Jumlah').notEmpty(),
], async function (req, res) {
    // Validasi input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            status: false,
            message: 'Invalid input data',
            errors: errors.array(),
        });
    }

    const { idUser, idProduk, Jumlah } = req.body;

    // Periksa apakah produk sudah ada di keranjang
    const checkQuery = 'SELECT * FROM keranjang WHERE idUser = ? AND idProduk = ?';

    connection.query(checkQuery, [idUser, idProduk], function (err, rows) {
        if (err) {
            console.error(err);
            return res.status(500).json({
                status: false,
                message: 'Error checking data in the database',
            });
        }

        // Jika produk sudah ada di keranjang, kirim respons
        if (rows.length > 0) {
            return res.status(400).json({
                status: false,
                message: 'Produk sudah ada di keranjang',
            });
        }

        // Jika produk belum ada di keranjang, tambahkan
        const insertQuery = `
            INSERT INTO keranjang (idUser, idProduk, Jumlah, Total)
            SELECT ?, ?, ?, (? * hargaProduk) AS Total
            FROM produk
            WHERE idProduk = ?;
        `;

        connection.query(insertQuery, [idUser, idProduk, Jumlah, Jumlah, idProduk], function (err) {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    status: false,
                    message: 'Error adding data to the database',
                });
            }

            return res.status(200).json({
                status: true,
                message: 'Produk berhasil ditambahkan ke keranjang',
            });
        });
    });
});

module.exports = router;
SELECT users.name as NAMA, categories.name as KATEGORI, products.name as PRODUK, products.qty as JUMLAH
FROM ((db_eduwork.users
LEFT JOIN db_eduwork.categories ON users.id = categories.user_id)
LEFT JOIN db_eduwork.products ON users.id = products.user_id);
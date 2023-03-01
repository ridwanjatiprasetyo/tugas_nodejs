## Tugas Node Js Dengan MongoDB

CRUD Express dengan MongoDB berserta validasi dengan middleware Joi\
HTTP: [POST][GET][PATCH][DELETE]

### Diperlukan:
- Node Js v14.20.0\
selain itu belum dites
- MongoDB v4.2.24\
selain itu belum dites 
- Postman untuk testing
  
## Instalasi
#### Via Git
```bash
git clone https://github.com/ridwanjatiprasetyo/tugas_nodejs.git
```

### Download ZIP
[Link](https://github.com/ridwanjatiprasetyo/tugas_nodejs/archive/refs/heads/master.zip)

### Setup Aplikasi
Masuk ke folder tugas_nodejs 
```bash
cd tugas_nodejs
```
Install node_modules
```bash
npm install
```
jalankan dengan perintah:
```bash
npm run start
```

## Penggunaan
#POST Tugas\
url POST
```bash
  http://[ipnodejsanda]:[portnodejsanda]/tugas
```
misal: http://192.168.1.250:3000/tugas \
note:\ 
judul (string) minimal 1 digit, maksimal 30 digit\
deskripsi (string) maksimal 50 digit\
selesai (boolean) true/false

dengan body
```python
  {
  "judul": "Belajar MongoDB",
  "deskripsi": "belajar CRUD mongoDB"
  }
```
atau
```python
  {
  "judul": "Belajar MongoDB",
  "deskripsi": "belajar CRUD mongoDB",
  "selesai": false
  }
```

#GET Semua tugas\
url GET
```bash
  http://[ipnodejsanda]:[portnodejsanda]/tugas
```
misal: http://192.168.1.250:3000/tugas

#GET Tugas dengan id\
url GET
```bash
  http://[ipnodejsanda]:[portnodejsanda]/tasks/:id
```
misal: http://192.168.1.250:3000/tasks/63fed5eac229ed11becee885 \
note: id wajib 24 digit

#PATCH Tugas dengan id\
url PATCH
```bash
  http://[ipnodejsanda]:[portnodejsanda]/tasks/:id
```
misal: http://192.168.1.250:3000/tasks/63fed5eac229ed11becee885 \
note:\ 
id wajib 24 digit\
judul (string) minimal 1 digit, maksimal 30 digit\
deskripsi (string) minimal 1 digit, maksimal 50 digit\
selesai (boolean) true/false

dengan body
```python
  {
  "judul": "Belajar Node Js",
  "deskripsi": "belajar menjalankan Node Js",
  "selesai": true
  }
```

#DELETE Tugas dengan id\
url DELETE
```bash
  http://[ipnodejsanda]:[portnodejsanda]/tasks/:id
```
misal: http://192.168.1.250:3000/tasks/63fed5eac229ed11becee885 \
note: id wajib 24 digit

## License

[MIT license](https://opensource.org/licenses/MIT)

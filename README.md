
# 🛒 Proyecto: Gestión de Productos

Este proyecto permite gestionar productos usando una **API REST construida con Node.js + Express** y una interfaz web básica en HTML/JavaScript.

---

## ✅ Tecnologías utilizadas

- **Node.js + Express** para el servidor
- **PostgreSQL** como base de datos relacional
- **JavaScript + HTML** para el frontend

---

## 📁 Estructura del proyecto

```
/Prueba/
├── public/
│   └── index.html
├── routes/
│   └── productoRoutes.js
├── controllers/
│   └── productoController.js
├── models/
│   └── productoModel.js
├── db.js
├── server.js
└── README.md
```

---

## ⚙️ Configuración del entorno

### 1. Clonar el repositorio

```bash
git clone https://github.com/Pabloscom/Prueba-Tecnica-Patria-Seguros.git
cd gestion-productos
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar PostgreSQL

Asegurate de tener una base de datos llamada `dbPrueba`. Luego creá la tabla `productos` con:

```sql
CREATE TABLE productos (
  id SERIAL PRIMARY KEY,
  nombre TEXT NOT NULL,
  precio NUMERIC(10,2) NOT NULL,
  stock INTEGER NOT NULL
);
```

📌 Los datos de conexión a PostgreSQL están definidos en el archivo `db.js`:

```js
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dbPrueba',
  password: '123456789',
  port: '5432',
});
```

⚠️ Si tu configuración local es diferente, actualizá los valores según tu caso.

---

## ▶️ Cómo iniciar el servidor

```bash
node src/server.js
```

Verás en consola:

```
Servidor corriendo en http://localhost:3000
```

---

## 🌐 Frontend

La interfaz está en `public/index.html`. Accedé desde:

```
http://localhost:3000/index.html
```

Desde ahí podés:

- Agregar productos
- Editarlos (rellena el formulario)
- Eliminar productos
- Ver todos en una tabla

---

## 📮 Endpoints disponibles (API REST)

| Método | Ruta             | Descripción               |
|--------|------------------|---------------------------|
| GET    | /productos       | Obtener todos los productos |
| GET    | /productos/:id   | Obtener un producto por ID  |
| POST   | /productos       | Crear un nuevo producto     |
| PUT    | /productos/:id   | Actualizar un producto      |
| DELETE | /productos/:id   | Eliminar un producto        |

### 📝 Ejemplo de cuerpo para POST/PUT

```json
{
  "nombre": "Teclado",
  "precio": 320.00,
  "stock": 15
}
```

---

## 🧪 Probar con Postman

1. Iniciá el servidor (`node src/server.js`)
2. En Postman:
   - **GET** `http://localhost:3000/productos`
   - **POST** `http://localhost:3000/productos`
     - Body: JSON como el ejemplo de arriba
   - **PUT** `http://localhost:3000/productos/1`
   - **DELETE** `http://localhost:3000/productos/1`

---

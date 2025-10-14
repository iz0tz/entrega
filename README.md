# Tienda de Fútbol (estático)

Sitio estático con 4 páginas en **Bootstrap 5**:
- `index.html` – Inicio con bienvenida y 3 categorías.
- `productos.html` – Catálogo con 12 productos en tarjetas (cada una tiene un **cuadrado placeholder** para que pongas tu imagen).
- `contact.html` – Contacto con datos, chips y formulario validado (sin Google Maps).
- `registro.html` – Formulario de registro con validación y comprobación de contraseñas.

## Enlaces entre páginas
El **nav** y el **footer** enlazan así (rutas relativas):
- Inicio → `./index.html`
- Productos → `./productos.html`
- Contacto → `./contact.html`
- Registro → `./registro.html`

#### 🎨 Paleta de colores principal

| Color | Hex | Uso principal |
|-------|------|----------------|
| ![#0d6efd](https://via.placeholder.com/15/0d6efd/000000?text=+) | `#0d6efd` | Botones primarios, acentos |
| ![#212529](https://via.placeholder.com/15/212529/000000?text=+) | `#212529` | Navbar y footer |
| ![#6c757d](https://via.placeholder.com/15/6c757d/000000?text=+) | `#6c757d` | Texto secundario |
| ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/000000?text=+) | `#f8f9fa` | Fondo claro / botones outline |
| ![#dee2e6](https://via.placeholder.com/15/dee2e6/000000?text=+) | `#dee2e6` | Bordes, divisores |


## Imágenes de productos
En `productos.html`, tenemos cada tarjeta de la siguiente manera para que se muestre la imagen del producto:

```html
<img src="./assets/img/mi_foto.jpg" class="card-img-top" alt="Nombre del producto">
```

## Cómo abrir
1. Descarga y descomprime el ZIP.
2. Abre `index.html` en tu navegador.

## Tecnologías
- [Bootstrap 5.3.8] (CDN)
- CSS propio en `styles.css`

> Nota: No hay JS de backend; los formularios son demostrativos con validación del navegador/Bootstrap.

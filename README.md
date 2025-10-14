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

## 🎨 Paleta de colores

**Colores principales del sitio:**

- Azul primario — `#0d6efd`
- Negro grisáceo (navbar/footer) — `#212529`
- Gris medio (texto secundario) — `#6c757d`
- Blanco grisáceo (fondos claros) — `#f8f9fa`
- Gris claro (bordes/divisores) — `#dee2e6`

🔗 [Ver paleta en Coolors](https://coolors.co/0d6efd-212529-6c757d-f8f9fa-dee2e6)


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

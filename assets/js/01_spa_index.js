$(function() {
  // Oculta todas las secciones y muestra solo "inicio" al principio
  $(".page-section").hide();
  $("#inicio").show();

  // Cuando se hace clic en un enlace del menú
  $(".navbar-nav a").click(function(e) {
    e.preventDefault();

    // Tomamos el texto del enlace (por ejemplo "Productos")
    let destino = $(this).text().trim().toLowerCase();

    // Oculta todas las secciones
    $(".page-section").hide();

    // Muestra solo la sección que coincide
    $("#" + destino).show();
  });
});

// --- BUSCADOR DE PRODUCTOS ---
$("#buscador").on("keyup", function () {
  const valor = $(this).val().toLowerCase();
  $("#productos .card").filter(function () {
    $(this).toggle($(this).text().toLowerCase().includes(valor));
  });
});

// --- FORMULARIO DE CONTACTO CON VALIDACIÓN Y MODAL ---
$("form").on("submit", function (e) {
  e.preventDefault(); // evita que recargue la página

  // Verifica si el formulario cumple las validaciones HTML5
  if (this.checkValidity()) {
    // Muestra el modal de confirmación
    const modal = new bootstrap.Modal($("#modalGracias"));
    modal.show();

    // Limpia el formulario
    this.reset();
    this.classList.remove("was-validated");
  } else {
    // Activa los estilos de validación de Bootstrap
    this.classList.add("was-validated");
  }
});

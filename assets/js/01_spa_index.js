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
$(function() {
  // Oculta todas las secciones excepto la de inicio
  $(".page-section").hide();
  $("#inicio").show();

  // Cuando haces clic en un enlace del menú
  $(".navbar-nav a").click(function(e) {
    e.preventDefault();

    // Coge el texto del enlace y lo pasa a minúsculas
    const destino = $(this).text().trim().toLowerCase();

    // Oculta todas las secciones y muestra solo la elegida
    $(".page-section").hide();
    $("#" + destino).show();

    // Cambia el enlace activo
    $(".navbar-nav a").removeClass("active");
    $(this).addClass("active");
  });
});

$(function() {
  $('landing-navbar .ui.fluid.borderless.inverted.container.menu .right.aligned.item a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active-item');
});
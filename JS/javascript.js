/* Parar video do modal quando fechado */

$('#exampleModal').on('hidden.bs.modal', function (e) {
  var iframe = $(this).find('.modal-body iframe');
  var videoSrc = iframe.attr('src');
  iframe.attr('src','');
  iframe.attr('src', videoSrc);
});

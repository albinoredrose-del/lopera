// 代码块收缩

$(function () {
  var $code_expand = $('<i class="fas fa-angle-up code-expand" aria-hidden="true"></i>');

  $('.code-area').prepend($code_expand);
  $('.code-expand').on('click', function () {
    var $area = $(this).closest('.code-area');
    var $pre = $area.find('pre').first();

    if ($area.hasClass('code-closed')) {
      $pre.stop(true, true).slideDown(200);
      $area.removeClass('code-closed');
    } else {
      $pre.stop(true, true).slideUp(200);
      $area.addClass('code-closed');
    }
  });
});

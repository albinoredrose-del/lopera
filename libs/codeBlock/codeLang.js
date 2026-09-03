// 代码块语言识别

$(function () {
  $('figure.highlight').each(function () {
    var $figure = $(this);
    var classes = ($figure.attr('class') || '').split(/\s+/);
    var lang_name = classes.filter(function (name) {
      return name && name !== 'highlight';
    })[0];
    var $area = $figure.find('td.code > .code-area').first();

    if (!lang_name || !$area.length) {
      return true;
    }

    $('<div class="code_lang" title="代码语言"></div>')
      .text(lang_name)
      .prependTo($area);
  });
});

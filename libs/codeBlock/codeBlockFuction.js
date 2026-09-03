// 代码块功能依赖

$(function () {
    $('figure.highlight td.code > pre').wrap(
        '<div class="code-area" style="position: relative"></div>'
    );
});
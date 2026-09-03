// 代码块一键复制

$(function () {
    var $copyIcon = $('<i class="fas fa-copy code_copy" title="复制代码" aria-hidden="true"></i>')
    var $notice = $('<div class="codecopy_notice"></div>')
    $('.code-area').prepend($copyIcon)
    $('.code-area').prepend($notice)
    // “复制成功”字出现
    function copy(text, ctx) {
        var $notice = $(ctx).closest('.code-area').find('.codecopy_notice')

        if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
            try {
                document.execCommand('copy') // Security exception may be thrown by some browsers.
                $notice
                    .text("复制成功")
                    .animate({
                        opacity: 1,
                        top: 30
                    }, 450, function () {
                        setTimeout(function () {
                            $notice.animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
            } catch (ex) {
                $notice
                    .text("复制失败")
                    .animate({
                        opacity: 1,
                        top: 30
                    }, 650, function () {
                        setTimeout(function () {
                            $notice.animate({
                                opacity: 0,
                                top: 0
                            }, 650)
                        }, 400)
                    })
                return false
            }
        } else {
            $notice.text("浏览器不支持复制")
        }
    }
    // 复制
    $('.code-area .fa-copy').on('click', function () {
        var $area = $(this).closest('.code-area')
        var codeElement = $area.find('pre')[0]
        var $notice = $area.find('.codecopy_notice')

        if (!codeElement) {
            return
        }

        var selection = window.getSelection()
        var range = document.createRange()
        range.selectNodeContents(codeElement)
        selection.removeAllRanges()
        selection.addRange(range)
        var text = selection.toString()
        copy(text, this)
        selection.removeAllRanges()
    })
});

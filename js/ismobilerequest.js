window.addEventListener('load', function() {
    var a = 15,
        b = $('.banner-post'),
        c = '<div class="banner-post has-banner mobile">' + b.html() + '</div>',
        d = $('.banner-body'),
        br = $('.article-body>div').find('br'),
        e = Math.ceil(br.length / 2)
    if (br.length != '') {
        if (b.length != '') {
            if (br.length > a)
                for (var i = a; i < br.length; i += a) $(c).insertAfter(br[i])
            $(b).remove()
        }
        if (d.length != '') {
            $(d).insertAfter(br[e]).removeClass('hidden')
            var _w = $(window).width() + 'px',
                _h = $(window).height() + 'px'
            $('.banner-content').css({
                'height': _h
            })
            $('.banner-position').css({
                'height': _h,
                'clip': 'rect(0 ' + _w + ' ' + _h + ' -20px)'
            })
            $('.banner-display').css({
                'width': _w,
                'height': _h
            })
            $('.banner-iframe').css({
                'height': _h
            })
        }
    }
})
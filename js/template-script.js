window.addEventListener('load', function() {
    var ar = document.querySelector('.article-body>div'),
        th = ar.querySelectorAll('h3')
    if (1 <= th.length) {
        var list_arr = []
        for (var i = 0; i < th.length; i++) {
            var ti = th[i].textContent,
                ch = 'text-content-' + (i + 1)
            th[i].setAttribute('id', ch)
            th[i].setAttribute('title', 'Lên đầu trang')
            list_arr[i] = '<li><a href=' + "#" + ch + ' title="' + ti + '">' + th[i].innerHTML + '</a></li>'
        }
        $('.box_tin.category').html('<p class="text-center">Nội dung chính <label data-hover=""></label></p><ul class="chapter">' + list_arr.join('') + '</ul>')
    } else {
        $('.box_tin.category').remove()
    }
    $(function() {
        var name_more = $('.post-body a[name=more]')
        if (name_more) $('.box_tin.category').insertAfter(name_more).removeClass('hidden')
        else $('.box_tin.category').remove()
    })
    $('.box_tin.category p>label').click(function() {
        $(this).toggleClass('show')
        $(this).parent().parent().find('ul').slideToggle('slow')
    })
    $('.box_tin.category li>a').click(function(e) {
        e.preventDefault()
        var id = $(this).attr('href')
        id = id.substr(id.indexOf('#') + 1)
        document.querySelector('h3[id=' + id + ']').scrollIntoView({
            behavior: 'smooth'
        })
    })
    for (var k = 0; k < th.length; k++) {
        th[k].addEventListener('click', function() {
            document.querySelector('.box_tin.category').scrollIntoView({
                behavior: 'smooth'
            })
        })
    }
    $('.font-size.default').click(function() {
        if ($('.article-description>p,.article-body').hasClass('font-increase')) {
            $('.article-description>p,.article-body').removeClass('font-increase')
        }
    })
    $('.font-size.large').click(function() {
        if (!$('.article-description>p,.article-body').hasClass('font-increase')) {
            $('.article-description>p,.article-body').addClass('font-increase')
        }
    })
    var load_related = 0

    function get_related() {
        if (load_related == 0) {
            load_related = 1
            var cate_name = $('.data-entry').attr('data-category'),
                r = Number($('.data-entry').attr('data-item'))
            $.get('/search/label/' + cate_name + '?max-results=500', function(e) {
                var a = $(e).find('.Blog .post'),
                    p = ''
                if (a.length) {
                    var b = a.length
                    if (a.length < r) r = a.length
                    let arr = []
                    do {
                        let num = Math.floor(Math.random() * b)
                        arr.push(num)
                        arr = arr.filter((item, index) => {
                            return arr.indexOf(item) === index
                        })
                    } while (arr.length < r)
                    arr.forEach(function(i) {
                        var html = '<div class="post data-article" data-article-id=' + $(a[i]).attr('data-article-id') + '>' + $(a[i]).html() + '</div>'
                        $('.RelatedPosts>.widget-content').append(html).removeClass('loading')
                    })
                } else {
                    $('.RelatedPosts').remove()
                }
            })
        }
    }
    window.addEventListener('scroll', function() {
        get_related()
    })
    var load_recent = 0

    function get_recent() {
        if (load_recent == 0) {
            load_recent = 1
            $.get('/search?max-results=10', function(e) {
                var a = $(e).find('.Blog .post')
                if (a.length) {
                    var r = 10,
                        z = ''
                    if (a.length < r) r = a.length
                    for (var i = 0; i < r; i++) {
                        var html = '<article class="post data-article" data-article-id=' + $(a[i]).attr('data-article-id') + '>' + $(a[i]).html() + '</article>'
                        $('.RecentPosts>.widget-content').append(html).removeClass('loading')
                    }
                } else {
                    $('.RecentPosts').remove()
                }
            })
        }
    }
    window.addEventListener('scroll', function() {
        get_recent()
    })
    var mq = window.matchMedia('(min-width:861px)')
    if (mq.matches) {
        var widget = $('.sidebar>.has-banner.desktop'),
            menu = $('header.header')
        if (widget) {
            var x = $(widget),
                y = $(widget).prev(),
                z = $('footer.footer')

            function scroll_to_fiexed() {
                var d = $(window).scrollTop(),
                    e = z.offset().top
                //,
                //f=y.offset().top+y.outerHeight(),g=x.height(),h=50
                //if(d+g>e-h)x.css({'top':(d+g-e+h)*-1,'z-index':0})
                //else if(d>f)x.css({'position':'fixed','top':menu.outerHeight(),'left':x.offset().left,'width':x.outerWidth(),'z-index':1000})
                //else x.removeAttr('style')
            }
            $(window).scroll(scroll_to_fiexed)
            scroll_to_fiexed()
            window.addEventListener('resize', function() {
                if (this.matchMedia('(max-width:860px)').matches) $(widget).hide()
                else $(widget).show()
            })
        }
    }
})
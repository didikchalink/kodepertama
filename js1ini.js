//<![CDATA[
function pbtShortCode(_0x9439x3, _0x9439x4, _0x9439x5) {
    for (var _0x9439x6 = _0x9439x3.split('$'), _0x9439x7 = /[^{\}]+(?=})/g, _0x9439x8 = 0; _0x9439x8 < _0x9439x6.length; _0x9439x8++) {
        var _0x9439x9 = _0x9439x6[_0x9439x8].split('=');
        if (_0x9439x9[0].trim() == _0x9439x4) {
            return null != (_0x9439x5 = _0x9439x9[1]).match(_0x9439x7) && String(_0x9439x5.match(_0x9439x7)).trim()
        }
    };
    return !1
}

function msgError() {
    return '<span class="error-msg"><b>Error:</b>&nbsp;No Results Found</span>'
}

function beforeLoader() {
    return '<div class="loader"></div>'
}

function getFeedUrl(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6) {
    switch (_0x9439x5) {
    case 'recent':
        _0x9439x6 = '/feeds/posts/default?alt=json&max-results=' + _0x9439x4;
        break;
    default:
        _0x9439x6 = 'comments' == _0x9439x3 ? '/feeds/comments/default?alt=json&max-results=' + _0x9439x4 : '/feeds/posts/default/-/' + _0x9439x5 + '?alt=json&max-results=' + _0x9439x4
    };
    return _0x9439x6
}

function getPostID(_0x9439x3, _0x9439x4, _0x9439x5) {
    return (_0x9439x5 = _0x9439x3[_0x9439x4].id.$t) ? _0x9439x5.split('-').pop() : ''
}

function getPostLink(_0x9439x3, _0x9439x4) {
    for (var _0x9439x5 = 0; _0x9439x5 < _0x9439x3[_0x9439x4].link.length; _0x9439x5++) {
        if ('alternate' == _0x9439x3[_0x9439x4].link[_0x9439x5].rel) {
            var _0x9439x6 = _0x9439x3[_0x9439x4].link[_0x9439x5].href;
            break
        }
    };
    return _0x9439x6
}

function getPostTitle(_0x9439x3, _0x9439x4, _0x9439x5) {
    return _0x9439x3[_0x9439x4].title.$t ? _0x9439x3[_0x9439x4].title.$t : pbtMessages.noTitle
}

function getPostAuthor(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6) {
    return _0x9439x6 = '' != pbtMessages.postAuthorLabel ? '<span class="sp">' + pbtMessages.postAuthorLabel + '</span>' : '', pbtMessages.postAuthor ? '<span class="entry-author mi">' + _0x9439x6 + '<span class="author-name">' + _0x9439x3[_0x9439x4].author[0].name.$t + '</span></span>' : ''
}

function getPostDate(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6, _0x9439x7, _0x9439x8) {
    monthName = 'undefined' != typeof monthName ? monthName : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], dateFormat = 'undefined' != typeof dateFormat ? dateFormat : '{m} {d}, {y}';
    var _0x9439x9 = _0x9439x3[_0x9439x4].published.$t,
        _0x9439x12 = _0x9439x9.substring(0, 4),
        _0x9439x13 = _0x9439x9.substring(5, 7),
        _0x9439x14 = _0x9439x9.substring(8, 10),
        _0x9439x15 = dateFormat.replace('{m}', monthName[parseInt(_0x9439x13, 10) - 1]).replace('{d}', _0x9439x14).replace('{y}', _0x9439x12);
    return _0x9439x8 = pbtMessages.postAuthor && '' != pbtMessages.postDateLabel ? '<span class="sp">' + pbtMessages.postDateLabel + '</span>' : '', [1 == pbtMessages.postDate ? '<span class="entry-time mi">' + _0x9439x8 + '<time class="published" datetime="' + _0x9439x9 + '">' + _0x9439x15 + '</time></span>' : '', 1 == pbtMessages.postDate ? '<span class="entry-time mi"><time class="published" datetime="' + _0x9439x9 + '">' + _0x9439x15 + '</time></span>' : '']
}

function getPostMeta(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6, _0x9439x7) {
    return [1 == pbtMessages.postAuthor || 1 == pbtMessages.postDate ? '<div class="entry-meta">' + _0x9439x3 + _0x9439x4[0] + '</div>' : '', 1 == pbtMessages.postDate ? '<div class="entry-meta">' + _0x9439x4[1] + '</div>' : '']
}

function getFirstImage(_0x9439x3) {
    var _0x9439x4 = (_0x9439x3 = $('<div>').html(_0x9439x3)).find('img:first').attr('src'),
        _0x9439x5 = _0x9439x4.split('/'),
        _0x9439x6 = '/' + _0x9439x5.slice(-2)[0];
    return 9 == _0x9439x5.length && (_0x9439x6.match(/\/s[0-9]+/g) || _0x9439x6.match(/\/w[0-9]+/g) || '/d' == _0x9439x6) && (_0x9439x4 = _0x9439x4.replace(_0x9439x6, '/w72-h72-p-k-no-nu')), _0x9439x4
}

function getPostImage(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6) {
    var _0x9439x7 = _0x9439x3[_0x9439x4].content ? _0x9439x3[_0x9439x4].content.$t : '';
    return _0x9439x5 = _0x9439x3[_0x9439x4].media$thumbnail ? _0x9439x3[_0x9439x4].media$thumbnail.url : 'https://resources.blogblog.com/img/blank.gif', _0x9439x7.indexOf(_0x9439x7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? _0x9439x7.indexOf('<img') > -1 ? _0x9439x7.indexOf(_0x9439x7.match(/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < _0x9439x7.indexOf('<img') ? _0x9439x5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : getFirstImage(_0x9439x7) : _0x9439x5.replace('img.youtube.com', 'i.ytimg.com').replace('/default.', '/maxresdefault.') : _0x9439x7.indexOf('<img') > -1 ? getFirstImage(_0x9439x7) : 'https://resources.blogblog.com/img/blank.gif'
}

function getPostImageType(_0x9439x3, _0x9439x4) {
    return _0x9439x3.match('i.ytimg.com') ? 'is-video' : 'is-image'
}

function getPostContent(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6) {
    var _0x9439x7 = '',
        _0x9439x8 = getPostLink(_0x9439x4, _0x9439x5),
        _0x9439x9 = getPostTitle(_0x9439x4, _0x9439x5),
        _0x9439x12 = getPostAuthor(_0x9439x4, _0x9439x5),
        _0x9439x13 = getPostDate(_0x9439x4, _0x9439x5),
        _0x9439x14 = getPostImage(_0x9439x4, _0x9439x5),
        _0x9439x15 = getPostImageType(_0x9439x14, _0x9439x5),
        _0x9439x1b = getPostMeta(_0x9439x12, _0x9439x13);
    switch (_0x9439x3) {
    case 'related':
        _0x9439x5 != _0x9439x6 - 1 && (_0x9439x7 += '<div class="related-item item-' + _0x9439x5 + '"><a title="' + _0x9439x9 + '" class="entry-image-wrap ' + _0x9439x15 + '" href="' + _0x9439x8 + '"><span class="entry-image" data-image="' + _0x9439x14 + '"></span></a><div class="entry-header"><h2 class="entry-title"><a href="' + _0x9439x8 + '" title="' + _0x9439x9 + '">' + _0x9439x9 + '</a></h2>' + _0x9439x1b[1] + '</div></div>')
    };
    return _0x9439x7
}

function getRecentPostsData(_0x9439x3, _0x9439x4, _0x9439x5) {
    return $.ajax({
        url: getFeedUrl(_0x9439x3, _0x9439x4, 'recent'),
        type: 'GET',
        async: !1,
        dataType: 'json',
        cache: !0,
        success: function (_0x9439x3) {
            return _0x9439x3
        }
    }).responseJSON
}

function getPosts(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6, _0x9439x7) {
    _0x9439x6 = 0 != _0x9439x6 ? _0x9439x6 : 'unlabeled', _0x9439x5 = 'related' != _0x9439x4 ? _0x9439x5 : Number(_0x9439x5) + 1, $.ajax({
        url: getFeedUrl(_0x9439x4, _0x9439x5, _0x9439x6),
        type: 'GET',
        dataType: 'json',
        cache: !0,
        beforeSend: function (_0x9439x5) {
            switch (_0x9439x4) {
            case 'related':
                _0x9439x3.html(beforeLoader()).parent().addClass('type-' + _0x9439x4)
            }
        },
        success: function (_0x9439x8) {
            var _0x9439x9 = '';
            switch (_0x9439x4) {
            case 'related':
                _0x9439x9 = '<div class="related-posts">'
            };
            var _0x9439x12 = _0x9439x8.feed.entry;
            if (_0x9439x12) {
                if ('related' == _0x9439x4) {
                    1 == _0x9439x12.length && 'recent' != _0x9439x6 && (_0x9439x12 = (_0x9439x8 = getRecentPostsData(_0x9439x4, _0x9439x5)).feed.entry);
                    for (let _0x9439x3 = 0; _0x9439x3 < _0x9439x12.length; _0x9439x3++) {
                        if (1 != _0x9439x12.length && getPostID(_0x9439x12, _0x9439x3) == _0x9439x7) {
                            _0x9439x12.splice(_0x9439x3, 1);
                            break
                        }
                    }
                };
                for (var _0x9439x13 = 0, _0x9439x14 = _0x9439x12; _0x9439x13 < _0x9439x14.length; _0x9439x13++) {
                    _0x9439x9 += getPostContent(_0x9439x4, _0x9439x14, _0x9439x13, _0x9439x5)
                }
            } else {
                _0x9439x9 = msgError()
            };
            _0x9439x9 += '</div>', _0x9439x3.html(_0x9439x9), _0x9439x3.find('span.entry-image').pbtThumb()
        },
        error: function () {
            _0x9439x3.html(msgError())
        }
    })
}

function getRelated(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6, _0x9439x7) {
    getPosts(_0x9439x3, _0x9439x4, _0x9439x5, _0x9439x6, _0x9439x7)
}

function beautiAvatar(_0x9439x3) {
    $(_0x9439x3).attr('src', function (_0x9439x3, _0x9439x4, _0x9439x5) {
        return _0x9439x5 = '//1.bp.blogspot.com/-QN2lgvtYZco/YN3mUSryAVI/AAAAAAAAADs/KrR-etCcvUMcPl06jopTs9pzq59IAXhMQCLcBGAsYHQ/s35/avatar.jpg', _0x9439x4 = (_0x9439x4 = (_0x9439x4 = _0x9439x4.replace('//resources.blogblog.com/img/blank.gif', _0x9439x5)).replace('//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35', _0x9439x5)).replace('/s35', '/s39')
    })
}

function pbtFixedSidebar(_0x9439x3) {
    $(_0x9439x3).each(function (_0x9439x3) {
        fixedSidebar = 'undefined' == typeof fixedSidebar || fixedSidebar, 1 == fixedSidebar && (_0x9439x3 = 1 == fixedMenu ? 93 : 25, $(this).theiaStickySidebar({
            containerSelector: '#content-wrapper > .container',
            additionalMarginTop: _0x9439x3,
            additionalMarginBottom: 25
        }))
    })
}
fixedMenu = 'undefined' == typeof fixedMenu || fixedMenu, viewAllText = 'undefined' != typeof viewAllText ? viewAllText : pbtMessages.viewAll, $('#starter-free-main-nav').pbtMenu().find('.widget').addClass('show-menu'), $('.show-search').click(function (_0x9439x3) {
    _0x9439x3.preventDefault(), $('body').addClass('search-active'), $('#main-search-wrap').fadeIn(170).find('input').focus()
}), $('.search-close').click(function (_0x9439x3) {
    _0x9439x3.preventDefault(), $('body').removeClass('search-active'), $('#main-search-wrap').fadeOut(170).find('input').blur()
}), $('.sidebar .social-icons a').each(function (_0x9439x3) {
    var _0x9439x4 = $(this),
        _0x9439x5 = _0x9439x4.attr('href').split('#');
    _0x9439x5[1] && '' != (_0x9439x3 = _0x9439x5[1].trim()) && _0x9439x4.append('<span class="text">' + _0x9439x3 + '</span>'), _0x9439x4.attr('href', _0x9439x5[0].trim())
}), $('.post-body a').each(function () {
    var _0x9439x3 = $(this),
        _0x9439x4 = _0x9439x3.html(),
        _0x9439x5 = _0x9439x4.toLowerCase(),
        _0x9439x6 = pbtShortCode(_0x9439x4, 'text'),
        _0x9439x7 = pbtShortCode(_0x9439x4, 'icon'),
        _0x9439x8 = pbtShortCode(_0x9439x4, 'color');
    _0x9439x5.match('getbutton') && 0 != _0x9439x6 && (_0x9439x3.addClass('button btn').text(_0x9439x6), 0 != _0x9439x7 && _0x9439x3.addClass(_0x9439x7), 0 != _0x9439x8 && _0x9439x3.addClass('colored-button').attr('style', 'background-color:' + _0x9439x8 + ';'))
}), $('.post-body b').each(function () {
    var _0x9439x3 = $(this),
        _0x9439x4 = _0x9439x3.text().toLowerCase().trim();
    _0x9439x4.match('{contactform}') && (_0x9439x3.replaceWith('<div class="contact-form-widget"/>'), $('#post-body .contact-form-widget').append($('#ContactForm1 .contact-form-form'))), _0x9439x4.match('{leftsidebar}') && ($('body').addClass('is-left'), _0x9439x3.remove()), _0x9439x4.match('{rightsidebar}') && ($('body').addClass('is-right').removeClass('is-left'), _0x9439x3.remove()), _0x9439x4.match('{fullwidth}') && ($('body').addClass('no-sidebar'), _0x9439x3.remove())
}), $('.post-body blockquote').each(function () {
    var _0x9439x3 = $(this),
        _0x9439x4 = _0x9439x3.text().toLowerCase().trim(),
        _0x9439x5 = _0x9439x3.html();
    if (_0x9439x4.match('{alertsuccess}')) {
        const _0x9439x4 = _0x9439x5.replace('{alertSuccess}', '');
        _0x9439x3.replaceWith('<div class="alert-message alert-success">' + _0x9439x4 + '</div>')
    };
    if (_0x9439x4.match('{alertinfo}')) {
        const _0x9439x4 = _0x9439x5.replace('{alertInfo}', '');
        _0x9439x3.replaceWith('<div class="alert-message alert-info">' + _0x9439x4 + '</div>')
    };
    if (_0x9439x4.match('{alertwarning}')) {
        const _0x9439x4 = _0x9439x5.replace('{alertWarning}', '');
        _0x9439x3.replaceWith('<div class="alert-message alert-warning">' + _0x9439x4 + '</div>')
    };
    if (_0x9439x4.match('{alerterror}')) {
        const _0x9439x4 = _0x9439x5.replace('{alertError}', '');
        _0x9439x3.replaceWith('<div class="alert-message alert-error">' + _0x9439x4 + '</div>')
    };
    if (_0x9439x4.match('{codebox}')) {
        const _0x9439x4 = _0x9439x5.replace('{codeBox}', '');
        _0x9439x3.replaceWith('<pre class="code-box">' + _0x9439x4 + '</pre>')
    }
}), $('.share-links .pbt-window').click(function (_0x9439x3) {
    _0x9439x3.preventDefault();
    var _0x9439x4 = $(this),
        _0x9439x5 = _0x9439x4.data('url'),
        _0x9439x6 = _0x9439x4.data('width'),
        _0x9439x7 = _0x9439x4.data('height');
    window.open(_0x9439x5, '_blank', 'scrollbars=yes,resizable=yes,toolbar=0,width=' + _0x9439x6 + ',height=' + _0x9439x7 + ',top=50,left=50').focus()
}), $('.share-links .show-hid a').click(function (_0x9439x3) {
    _0x9439x3.preventDefault(), $(this).parent().parent().toggleClass('expanded')
}), $('.about-author .author-text').each(function () {
    var _0x9439x3 = $(this),
        _0x9439x4 = _0x9439x3.find('a');
    _0x9439x4.length && (_0x9439x4.each(function () {
        var _0x9439x3 = $(this),
            _0x9439x4 = _0x9439x3.text().trim(),
            _0x9439x5 = _0x9439x3.attr('href');
        _0x9439x3.replaceWith('<li class="' + _0x9439x4 + '"><a class="fa-' + _0x9439x4 + '" href="' + _0x9439x5 + '" title="' + _0x9439x4 + '" rel="noopener noreferrer" target="_blank"/></li>')
    }), _0x9439x3.parent().append('<ul class="author-links social social-color"></ul>'), _0x9439x3.find('li').appendTo(_0x9439x3.parent().find('.author-links')))
}), $('#starter-free-related-posts .HTML').each(function (_0x9439x3, _0x9439x4) {
    var _0x9439x5 = $(this).data('shortcode');
    if (_0x9439x5) {
        function _0x9439x6() {
            return _0x9439x3 = pbtShortCode(_0x9439x5, 'title'), _0x9439x4 = pbtShortCode(_0x9439x5, 'results'), [_0x9439x3, _0x9439x4]
        }
        $('#related-wrap').each(function (_0x9439x3, _0x9439x4, _0x9439x5) {
            var _0x9439x7 = $(this),
                _0x9439x8 = _0x9439x7.find('.related-tag'),
                _0x9439x9 = $(window),
                _0x9439x12 = _0x9439x7.find('.starter-free-related-content'),
                _0x9439x13 = _0x9439x6();
            _0x9439x3 = 0 != _0x9439x13[1] ? _0x9439x13[1] : 3, 0 != _0x9439x13[0] && _0x9439x7.find('.related-title .title > span').text(_0x9439x13[0]), _0x9439x4 = _0x9439x8.data('label'), _0x9439x5 = _0x9439x8.data('id'), _0x9439x9.on('load resize scroll', function _0x9439x6() {
                _0x9439x9.scrollTop() + _0x9439x9.height() >= _0x9439x12.offset().top && (_0x9439x9.off('load resize scroll', _0x9439x6), getRelated(_0x9439x12, 'related', _0x9439x3, _0x9439x4, _0x9439x5))
            }).trigger('scroll')
        })
    }
}), $('.starter-free-blog-post-comments').each(function () {
    var _0x9439x3 = $(this),
        _0x9439x4 = pbtShortCode(_0x9439x3.data('shortcode'), 'type'),
        _0x9439x5 = _0x9439x3.find('#top-continue .comment-reply');
    switch (_0x9439x4) {
    case 'disqus':
        ;
    case 'facebook':
        _0x9439x3.addClass('comments-system-blogger is-visible'), $('.entry-meta .entry-comments-link').addClass('show'), _0x9439x5.addClass('btn'), beautiAvatar('.avatar-image-container img');
        break;
    case 'hide':
        _0x9439x3.addClass('is-hidden');
        break;
    default:
        _0x9439x3.addClass('comments-system-blogger is-visible'), $('.entry-meta .entry-comments-link').addClass('show'), _0x9439x5.addClass('btn'), beautiAvatar('.avatar-image-container img')
    };
    var _0x9439x6 = _0x9439x3.find('.comments .comment-reply'),
        _0x9439x7 = _0x9439x3.find('.comments #top-continue'),
        _0x9439x8 = _0x9439x3.find('#top-ce.comment-replybox-thread');
    _0x9439x6.click(function (_0x9439x3) {
        _0x9439x3.preventDefault(), _0x9439x7.show(), _0x9439x8.hide()
    }), _0x9439x7.click(function (_0x9439x3) {
        _0x9439x3.preventDefault(), _0x9439x7.hide(), _0x9439x8.show()
    })
}), $(function () {
    $('.entry-image-wrap .entry-image,.author-avatar-wrap .author-avatar').pbtThumb(), $('#mobile-menu').each(function () {
        var _0x9439x3 = $(this),
            _0x9439x4 = $('#starter-free-main-nav-menu').clone();
        _0x9439x4.attr('id', 'main-mobile-nav'), _0x9439x4.find('.mega-items').remove(), _0x9439x4.find('.mega-menu > a').each(function (_0x9439x3, _0x9439x4) {
            var _0x9439x5 = $(this),
                _0x9439x6 = _0x9439x5.data('shortcode');
            _0x9439x6 && (_0x9439x4 = 'recent' == (_0x9439x3 = pbtShortCode(_0x9439x6, 'label')) ? '/search' : '/search/label/' + _0x9439x3, _0x9439x5.attr('href', _0x9439x4))
        }), _0x9439x4.appendTo(_0x9439x3), $('.mobile-menu-toggle, .hide-mobile-menu, .overlay').click(function (_0x9439x3) {
            _0x9439x3.preventDefault(), $('body').toggleClass('nav-active')
        }), $('.mobile-menu .has-sub > a').after('<button class="submenu-toggle" value=""/>'), $('.mobile-menu .mega-menu').find('.submenu-toggle').remove(), $('.mobile-menu ul li .submenu-toggle').click(function () {
            var _0x9439x3 = $(this);
            _0x9439x3.parent().hasClass('has-sub') && (_0x9439x3.parent().hasClass('expanded') ? _0x9439x3.parent().removeClass('expanded').find('> .m-sub').slideToggle(170) : _0x9439x3.parent().addClass('expanded').children('.m-sub').slideToggle(170))
        })
    }), $('.mm-footer .mm-social').each(function () {
        var _0x9439x3 = $(this),
            _0x9439x4 = $('#starter-free-about-section ul.social').clone();
        _0x9439x4.removeClass('social-bg-hover'), _0x9439x4.appendTo(_0x9439x3)
    }), $('.mm-footer .mm-menu').each(function () {
        var _0x9439x3 = $(this);
        $('#footer-menu ul.link-list').clone().appendTo(_0x9439x3)
    }), $('.header-inner').each(function () {
        var _0x9439x3 = $(this);
        if (1 == fixedMenu && _0x9439x3.length > 0) {
            var _0x9439x4 = $(document).scrollTop(),
                _0x9439x5 = _0x9439x3.offset().top,
                _0x9439x6 = _0x9439x3.height(),
                _0x9439x7 = _0x9439x5 + _0x9439x6 + _0x9439x6;
            $(window).scroll(function () {
                var _0x9439x6 = $(document).scrollTop();
                _0x9439x6 > _0x9439x7 ? _0x9439x3.addClass('is-fixed') : (_0x9439x6 < _0x9439x5 || _0x9439x6 <= 1) && _0x9439x3.removeClass('is-fixed'), _0x9439x6 > _0x9439x4 ? _0x9439x3.removeClass('show') : setTimeout(function () {
                    _0x9439x3.addClass('show')
                }, 100), _0x9439x4 = _0x9439x6
            })
        }
    }), pbtFixedSidebar('#main-wrapper, #sidebar-wrapper'), $('a#lobar').each(function () {
        var _0x9439x3 = $(this),
            _0x9439x4 = 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--footerbar-color)!important;margin:0!important;';
    }), setInterval(function () {
    }, 1e3), $('#post-body iframe').each(function () {
        var _0x9439x3 = $(this);
        _0x9439x3.attr('src').match('www.youtube.com') && _0x9439x3.wrap('<div class="responsive-video-wrap"/>')
    }), $('p.comment-content').each(function () {
        var _0x9439x3 = $(this);
        _0x9439x3.replaceText(/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, '<img src="$1"/>'), _0x9439x3.replaceText(/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>')
    }), $('#starter-free-load-more-link').each(function () {
        var _0x9439x3 = $(this),
            _0x9439x4 = _0x9439x3.data('load');
        _0x9439x4 && _0x9439x3.show(), _0x9439x3.click(function (_0x9439x5) {
            _0x9439x5.preventDefault(), _0x9439x3.hide(), $.ajax({
                url: _0x9439x4,
                success: function (_0x9439x5) {
                    var _0x9439x6 = $(_0x9439x5).find('.blog-posts');
                    _0x9439x6.find('.index-post').addClass('post-animated post-fadeInUp'), $('.blog-posts').append(_0x9439x6.html()), (_0x9439x4 = $(_0x9439x5).find('#starter-free-load-more-link').data('load')) ? _0x9439x3.show() : (_0x9439x3.hide(), $('#blog-pager .no-more').addClass('show'))
                },
                beforeSend: function () {
                    $('#blog-pager .loading').show()
                },
                complete: function () {
                    $('#blog-pager .loading').hide(), $('.index-post .entry-image-wrap .entry-image').pbtThumb(), pbtFixedSidebar('#main-wrapper, #sidebar-wrapper')
                }
            })
        })
    }), $('#back-top').each(function () {
        var _0x9439x3 = $(this);
        $(window).on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0x9439x3.fadeIn(170) : _0x9439x3.fadeOut(170), _0x9439x3.offset().top >= $('#footer-wrapper').offset().top - 34 ? _0x9439x3.addClass('on-footer') : _0x9439x3.removeClass('on-footer')
        }), _0x9439x3.click(function (_0x9439x3) {
            _0x9439x3.preventDefault(), $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
})
//]]>
var log = function() {
    console.log.apply(console, arguments)
}

var e = function(sel) {
    return document.querySelector(sel)
}

var es = function(sel) {
    return document.querySelectorAll(sel)
}

var bind = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

var bindAll = function (elements, eventName, callback) {
    for (var i = 0; i < elements.length; i++) {
        var tag = elements[i]
        tag.addEventListener(eventName, callback)
    }
}

var tagFocus = function(element) {
    var focus = e('.tag-focus')
    focus.classList.remove('tag-focus')
    element.classList.add('tag-focus')
}

var roundFocus = function(element) {
    var focus = e('.round-focus')
    focus.classList.remove('round-focus')
    element.classList.add('round-focus')
}

var bindClickTag = function() {
    var bs = es('.tag')
    bindAll(bs, 'click', function(event) {
        var self = event.target
        var img = e('.show')
        img.src = self.src
        tagFocus(self)

        var roundId = self.dataset.id
        var round = e('#id-round-' + roundId)
        roundFocus(round)
    })
}

var bindClickButton = function() {
    var left = e('.image-button-left')
    bind(left, 'click', function(event) {
        var img = e('.show')
        var index = img.src.substr(-5, 1)
        index = parseInt(index)
        index = (3 + index - 1) % 3
        img.src = index + '.jpg'

        var tag = e('#id-tag-' + index)
        tagFocus(tag)
        var round = e('#id-round-' + index)
        roundFocus(round)
    })

    var right = e('.image-button-right')
    bind(right, 'click', function(event) {
        var img = e('.show')
        var index = img.src.substr(-5, 1)
        index = parseInt(index)
        index = (3 + index + 1) % 3
        img.src = index + '.jpg'

        var tag = e('#id-tag-' + index)
        tagFocus(tag)
        var round = e('#id-round-' + index)
        roundFocus(round)
    })
}

var bindclickRound = function() {
    var bs = es('.round')
    bindAll(bs, 'click', function(event) {
        var self = event.target
        var img = e('.show')
        img.src = self.dataset.src

        var tagId = self.dataset.id
        var tag = e('#id-tag-' + tagId)
        tagFocus(tag)
        roundFocus(self)
    })
}

var autoPlay = function() {
    var interval = 3000
    var right = e('.image-button-right')
    setInterval(function() {
        right.click()
    }, interval)
}

var __main = function() {
    bindClickTag()
    bindClickButton()
    bindclickRound()
    autoPlay()
}

__main()

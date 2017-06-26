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

var bindClickImage = function() {
    var bs = es('.tag')
    bindAll(bs, 'click', function(event) {
        log('click')
        var self = event.target
        var img = e('.show')
        img.src = self.src
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
    })

    var right = e('.image-button-right')
    bind(right, 'click', function(event) {
        var img = e('.show')
        var index = img.src.substr(-5, 1)
        index = parseInt(index)
        index = (3 + index + 1) % 3
        img.src = index + '.jpg'
    })
}

var bindclickRound = function() {
    var bs = es('.round')
    bindAll(bs, 'click', function(event) {
        log('click')
        var self = event.target
        var img = e('.show')
        img.src = self.dataset.src
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
    bindClickImage()
    bindClickButton()
    bindclickRound()
    autoPlay()
}

__main()

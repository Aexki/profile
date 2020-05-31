function go() {
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("skill").style.display = "block"

    $('html,body').animate({
        scrollTop: $("#aboutme").offset().top
    });
}

function magic() {
    document.getElementById("anime").style.display = "block"
    document.getElementById("smoke").play()
    setTimeout(() => {
        document.getElementById("anime").style.display = "none"
    }, 7500);
}

function start() {
    $('html,body').animate({
        scrollTop: $(".start").offset().top
    });
    document.getElementById("check").checked = false
}

function aboutme() {
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("skill").style.display = "block"
    $('html,body').animate({
        scrollTop: $("#aboutme").offset().top
    });
    document.getElementById("check").checked = false
}

function portfolio() {
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("skill").style.display = "block"
    $('html,body').animate({
        scrollTop: ($(".portfolio").offset().top - 110)
    });
    document.getElementById("check").checked = false
}

function skills() {
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("skill").style.display = "block"
    $('html,body').animate({
        scrollTop: $("#skill").offset().top
    });
    document.getElementById("check").checked = false
}

function contact() {
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("skill").style.display = "block"
    $('html,body').animate({
        scrollTop: $(".contact").offset().top
    });
    document.getElementById("check").checked = false
}

$.getJSON("https://api.ipify.org?format=jsonp&callback=?",
    function(json) {
        $.post("https://script.google.com/macros/s/AKfycbzkgyddBmkLoR-uN4Eufy6hR1Lta8DVpnXCn9rXGGcJvHvUZmU/exec", json)
    });

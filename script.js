function go() {
    document.getElementById("aboutme").style.display = "block"
    document.getElementById("skill").style.display = "block"

    $('html,body').animate({
        scrollTop: $("#aboutme").offset().top
    });
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
        $.getJSON("http://api.ipstack.com/" + json.ip + "?access_key=e389d3bdb6ee2f83641617690f3d0fc8", function(json) {
            $.post("https://script.google.com/macros/s/AKfycbzkgyddBmkLoR-uN4Eufy6hR1Lta8DVpnXCn9rXGGcJvHvUZmU/exec", json)
        });
    }
);
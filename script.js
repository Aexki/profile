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
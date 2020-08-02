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

const store = new SteinStore(
    "https://api.steinhq.com/v1/storages/5f26bdc45d3cdc44fcd7d290"
);
var d = new Date()

$.getJSON("https://api.ipify.org?format=json",
    function(jsondata) {
        $.getJSON('https://ipapi.co/' + jsondata["ip"] + '/json/', function(data) {
            $.post("https://script.google.com/macros/s/AKfycbw4mCWV4dEI_kXkQL3TkmVz1W6sDnCuTw8VDDhn/exec", data)
            store.append("Sheet1", [{
                Info: d,
                IP: jsondata["ip"]
            }])
        })

    });
